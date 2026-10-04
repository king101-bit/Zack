import { useEffect, useState } from "react";
import { TIMELINE, type Step } from "../data/timeline";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";

function Year({ year, run }: { year: number; run: boolean }) {
  const [v, setV] = useState(year - 6);
  useEffect(() => {
    if (!run) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(year);
      return;
    }
    let c = year - 6;
    const iv = setInterval(() => {
      c++;
      setV(c);
      if (c >= year) clearInterval(iv);
    }, 90);
    return () => clearInterval(iv);
  }, [run, year]);
  return (
    <div className="min-h-[1em] text-[13px] font-semibold text-coral">{v}</div>
  );
}

const NODE: Record<Step["kind"], string> = {
  done: "left-0 top-0.5 size-6 border-ink bg-ink text-inkfg",
  now: "left-0 top-0.5 size-6 border-lavender bg-lavender now-ring",
  next: "left-0 top-0.5 size-6 border-dashed border-mut bg-card text-mut",
  gap: "left-1.5 top-[7px] size-3 border-dotted border-mut bg-card",
};
const ICON: Record<Step["kind"], string> = {
  done: "✓",
  now: "",
  next: "○",
  gap: "",
};

function Item({ step, last }: { step: Step; last: boolean }) {
  const [ref, seen] = useInView<HTMLLIElement>({
    rootMargin: "0px 0px -22% 0px",
    threshold: 0.2,
  });
  const isGap = step.kind === "gap";
  return (
    <li
      ref={ref}
      className={`relative pl-11 transition duration-500 ${isGap ? "pb-6" : "pb-9"} ${seen ? "translate-y-0 opacity-100" : "translate-y-3.5 opacity-25"}`}
    >
      {!last && (
        <>
          <span className="absolute bottom-0 left-[11px] top-7 w-0.5 bg-line" />
          <span
            className={`absolute bottom-0 left-[11px] top-7 w-0.5 origin-top bg-coral transition-transform duration-700 ${seen ? "scale-y-100" : "scale-y-0"}`}
          />
        </>
      )}
      <span
        className={`absolute grid place-items-center rounded-full border-2 text-xs transition-transform duration-500 [transition-timing-function:cubic-bezier(.3,1.6,.5,1)] ${seen ? "scale-100" : "scale-0"} ${NODE[step.kind]}`}
      >
        {ICON[step.kind]}
      </span>
      {step.year && <Year year={step.year} run={seen} />}
      {step.title && (
        <h3 className="mb-1 mt-0.5 text-[clamp(22px,2.6vw,28px)] leading-[1.1] tracking-[-.04em]">
          {step.title}
        </h3>
      )}
      <p
        className={
          isGap
            ? "max-w-[380px] text-[15px] italic text-mut"
            : "text-base text-mut"
        }
      >
        {step.text}
      </p>
    </li>
  );
}

export default function Path() {
  return (
    <section aria-label="My path in tech">
      <SectionHeading id="path" title="My path in tech" note="So far" />
      <div className="grid gap-9 rounded-tile bg-card p-[clamp(26px,4vw,48px)] lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="self-start lg:sticky lg:top-28">
          <p className="mb-[18px] text-[clamp(22px,2.6vw,30px)] font-medium leading-[1.4] tracking-[-.025em]">
            It started with my dad's laptop and a question I couldn't shake: how
            does this actually work? Hardware first, then Linux, then code. Each
            step answered one question and raised the next. School got hectic
            and I took breaks, but I always came back.
          </p>
          <p className="text-[clamp(18px,2vw,22px)] leading-[1.4]">
            Now I'm learning how to make things hold together on a server,
            closing the gap between a frontend developer and a fullstack one.
          </p>
        </div>
        <ol>
          {TIMELINE.map((s, i) => (
            <Item key={i} step={s} last={i === TIMELINE.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
