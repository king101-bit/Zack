import { GITHUB, X_URL } from "../data/site";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-3.5 pb-10 pt-9 text-sm text-mut">
      <span className="flex gap-[18px]">
        <a
          className="hover:text-fg"
          href={GITHUB}
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        <a
          className="hover:text-fg"
          href={X_URL}
          target="_blank"
          rel="noopener"
        >
          X
        </a>
      </span>
      <span>© {new Date().getFullYear()} Zack Agba</span>
    </footer>
  );
}
