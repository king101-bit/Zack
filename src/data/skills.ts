export type SkillState = "solid" | "learning" | "next";
export type Skill = { name: string; state: SkillState; used: string[] | "all" };

export const FRONTEND: Skill[] = [
  { name: "HTML / CSS", state: "solid", used: "all" },
  { name: "JavaScript", state: "solid", used: ["luna"] },
  { name: "TypeScript", state: "solid", used: [] },
  { name: "React", state: "solid", used: ["phoenix", "year-counter"] },
  { name: "Next.js", state: "solid", used: ["makye", "rezon"] },
  { name: "Tailwind", state: "solid", used: "all" },
  { name: "Framer Motion", state: "solid", used: ["rezon"] },
];
export const BACKEND: Skill[] = [
  { name: "REST APIs", state: "solid", used: ["luna"] },
  { name: "Supabase", state: "solid", used: ["phoenix"] },
  { name: "Firebase", state: "solid", used: ["year-counter"] },
  { name: "Paystack", state: "solid", used: ["makye"] },
  { name: "Node.js", state: "learning", used: [] },
  { name: "Express", state: "learning", used: [] },
  { name: "PostgreSQL", state: "next", used: [] },
  { name: "Auth & sessions", state: "next", used: [] },
];
