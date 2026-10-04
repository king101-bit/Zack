import { EMAIL, NAV, NAV_IDS } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Header() {
  const active = useActiveSection(NAV_IDS);
  return (
    <header id="top" className="sticky top-0 z-20 px-5 pt-3">
      <div className="mx-auto flex h-[54px] max-w-[760px] items-center justify-between gap-2.5 rounded-full border border-line bg-card/80 pl-2 pr-[7px] shadow-[0_8px_30px_-14px_rgba(0,0,0,.25)] backdrop-blur-md">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[15px] font-extrabold"
        >
          <span className="grid size-[38px] place-items-center rounded-full bg-gradient-to-br from-coral to-lavender text-[15px] text-[#111]">
            Z
          </span>
          Zack Agba
        </a>
        <nav className="hidden gap-0.5 min-[700px]:flex" aria-label="Sections">
          {NAV.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-[15px] py-2 text-sm font-medium transition-colors hover:bg-line hover:text-fg ${
                active === id ? "bg-line text-fg" : "text-mut"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${EMAIL}?subject=Let's work together`}
          className="btn btn-sm"
        >
          Say hi ↗
        </a>
      </div>
    </header>
  );
}
