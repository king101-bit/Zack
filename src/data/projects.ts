import { GITHUB } from "./site";

export type Project = {
  id: string;
  name: string;
  stack: string[];
  problem: string;
  built: string;
  live: string;
  repo: string;
};

export const PROJECTS: Project[] = [
  {
    id: "makye",
    name: "Makye",
    stack: ["Next.js", "Paystack"],
    problem:
      "Local shoppers need a store that takes local payments. Started for a friend who never came back. Finished anyway.",
    built: "Catalog, cart and a real Paystack checkout.",
    live: "https://makye.vercel.app/",
    repo: `${GITHUB}/MAKYE`,
  },
  {
    id: "phoenix",
    name: "Phoenix",
    stack: ["React", "Supabase"],
    problem: "Property hunting is scattered across too many tabs.",
    built: "Search, compare and tour booking on Supabase.",
    live: "https://phoenix-omega-five.vercel.app/",
    repo: GITHUB,
  },
  {
    id: "rezon",
    name: "Rezon",
    stack: ["Next.js", "Framer Motion"],
    problem: "Browsing films feels static.",
    built: "An animated discovery UI with smooth transitions.",
    live: "https://rezon.vercel.app/",
    repo: GITHUB,
  },
  {
    id: "luna",
    name: "Luna",
    stack: ["JavaScript", "APIs"],
    problem: "Learners need a clear path through courses.",
    built: "An API-driven course platform, fully responsive.",
    live: "https://luna-chi-black.vercel.app/",
    repo: GITHUB,
  },
  {
    id: "year-counter",
    name: "Year Counter",
    stack: ["React", "Firebase"],
    problem: "Wanted a countdown that loads instantly.",
    built: "A small, fast app backed by Firebase.",
    live: "https://new-year-counter-sigma.vercel.app/",
    repo: GITHUB,
  },
];
