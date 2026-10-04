export type Step = {
  kind: "done" | "now" | "next" | "gap";
  title?: string;
  text: string;
  year?: number;
};

export const TIMELINE: Step[] = [
  {
    kind: "done",
    year: 2014,
    title: "The spark",
    text: "Took apart my dad's laptop and wondered: how does this actually work? Can I make mine?",
  },
  {
    kind: "done",
    title: "Electronics and tinkering",
    text: "Soldering iron, plane and car models, a few automation builds. I wanted to be an electrician.",
  },
  {
    kind: "gap",
    text: "School got busy. I paused for a while, but I always came back.",
  },
  {
    kind: "done",
    year: 2018,
    title: "First desktop, then Linux",
    text: "Windows 8 and Encarta, then the discovery that Windows wasn't the only OS. Zorin, then Ubuntu.",
  },
  { kind: "gap", text: "More school, more pauses. The curiosity never left." },
  {
    kind: "done",
    title: "Learned to code",
    text: "HTML first, Scratch for logic, then JavaScript, React and Next.js.",
  },
  {
    kind: "done",
    title: "Shipped real products",
    text: "Makye, Phoenix, Rezon, Luna and Year Counter, live, with Paystack, Supabase and Firebase behind them.",
  },
  {
    kind: "now",
    title: "Learning the backend",
    text: "Node.js and Express today, PostgreSQL and auth next.",
  },
  {
    kind: "next",
    title: "Fullstack, on my own",
    text: "From idea to live URL without waiting on anyone.",
  },
  {
    kind: "next",
    title: "University",
    text: "Hoping to study software engineering, and keep building on the side.",
  },
];
