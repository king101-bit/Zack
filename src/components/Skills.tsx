import { useState } from "react";
import { PROJECTS } from "../data/projects";
import { FRONTEND, BACKEND, type Skill } from "../data/skills";
import SectionHeading from "./SectionHeading";

const CHIP = {
  solid: "bg-ink text-inkfg",
  learning: "border-[1.5px] border-dashed border-mut",
  next: "border-[1.5px] border-line text-mut",
};

function Group({
  title,
  sub,
  skills,
  filter,
}: {
  title: string;
  sub: string;
  skills: Skill[];
  filter: string;
}) {
  return (
    <div className="rounded-tile bg-card p-[30px]">
      <h3 className="mb-1 text-[26px]">{title}</h3>
      <p className="mb-[18px] text-sm text-mut">{sub}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => {
          const on =
            filter === "all" || s.used === "all" || s.used.includes(filter);
          return (
            <span
              key={s.name}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition duration-200 ${CHIP[s.state]} ${on ? "" : "opacity-[.16]"} ${on && filter !== "all" ? "-translate-y-[3px]" : ""}`}
            >
              {s.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

const step =
  "flex items-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold";

export default function Skills() {
  const [filter, setFilter] = useState("all");
  const pills = [
    { id: "all", name: "All" },
    ...PROJECTS.map((p) => ({ id: p.id, name: p.name })),
  ];
  return (
    <section aria-label="Skills">
      <SectionHeading
        id="skills"
        title="Skills"
        note="Tap a project to see what it used"
      />
      <div
        className="mb-3.5 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter skills by project"
      >
        {pills.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-pressed={filter === p.id}
            onClick={() => setFilter(p.id)}
            className={`cursor-pointer rounded-full border-[1.5px] px-[18px] py-[9px] text-sm font-semibold transition hover:border-fg ${
              filter === p.id
                ? "border-ink bg-ink text-inkfg"
                : "border-line bg-card"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="grid gap-3.5 lg:grid-cols-2">
        <Group
          title="Frontend"
          sub="The part I'm great at"
          skills={FRONTEND}
          filter={filter}
        />
        <Group
          title="Backend"
          sub="Where I'm headed"
          skills={BACKEND}
          filter={filter}
        />
      </div>
      <div className="mt-3.5 flex flex-wrap items-center gap-2">
        <div className={`${step} bg-ink text-inkfg`}>
          ✓ Frontend <small className="font-medium opacity-65">solid</small>
        </div>
        <i className="hidden h-0.5 min-w-2.5 flex-1 bg-ink sm:block" />
        <div
          className={`${step} border-[1.5px] border-dashed border-lavender bg-lav-tint text-deep`}
        >
          ◐ Backend <small className="font-medium opacity-65">learning</small>
        </div>
        <i className="hidden h-0.5 min-w-2.5 flex-1 bg-line sm:block" />
        <div className={`${step} border-[1.5px] border-line text-mut`}>
          ○ Fullstack <small className="font-medium opacity-65">up next</small>
        </div>
      </div>
    </section>
  );
}
