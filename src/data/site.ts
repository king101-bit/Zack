export const EMAIL = "kingbit101@proton.me";
export const GITHUB = "https://github.com/king101-bit";
export const X_URL = "https://twitter.com/krxzydev";

export const NAV = [
  ["about", "About"],
  ["work", "Work"],
  ["approach", "Approach"],
  ["skills", "Skills"],
  ["contact", "Contact"],
] as const;

export const NAV_IDS = NAV.map(([id]) => id);

export const SHIPPING = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "Paystack",
];
export const LEARNING = ["Node.js", "PostgreSQL"];

export const STATS = [
  { n: "5", label: "Live projects" },
  { n: "3", label: "Backends used" },
  { n: "1", label: "Payment flow" },
];
