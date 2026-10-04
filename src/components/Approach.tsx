import { APPROACH } from "../data/approach";
import SectionHeading from "./SectionHeading";

export default function Approach() {
  return (
    <section aria-label="How I work">
      <SectionHeading id="approach" title="How I work" note="Three rules" />
      <div className="grid gap-3.5 lg:grid-cols-3">
        {APPROACH.map((a) => (
          <div
            key={a.n}
            className={`rounded-tile p-[30px] text-[#111] ${a.bg}`}
          >
            <b className="text-sm opacity-55">{a.n}</b>
            <h3 className="mb-2 mt-[30px] text-[30px] leading-[1.05]">
              {a.title}
            </h3>
            <p className="mb-[18px] opacity-75">{a.line}</p>
            <ul className="grid gap-2 text-[15px] font-medium">
              {a.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#111] text-[11px] text-white">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
