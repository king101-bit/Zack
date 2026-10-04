import { useEffect, useRef, useState } from "react";

/** True once the element has scrolled into view (instantly true for reduced-motion users). */
export function useInView<T extends Element>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}
