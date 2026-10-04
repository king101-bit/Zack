import { useState } from "react";
import { EMAIL } from "../data/site";

export default function Contact() {
  const [label, setLabel] = useState("Copy email");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setLabel("Copied ✓");
    } catch {
      setLabel(EMAIL);
    }
    setTimeout(() => setLabel("Copy email"), 2500);
  };
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="mt-[90px] rounded-[34px] bg-ink p-[clamp(30px,6vw,70px)] text-inkfg"
    >
      <h2 className="mb-7 text-[clamp(46px,9vw,132px)] leading-[.9] tracking-[-.06em]">
        Let's build <em className="not-italic text-coral">something.</em>
      </h2>
      <p className="-mt-2 mb-7 text-[clamp(16px,2vw,20px)] opacity-70">
        Internships, junior roles, freelance, or a fun small project. I'm in.
        Remote, replies by email.
      </p>
      <div className="flex flex-wrap gap-2.5">
        <a
          className="btn border-lime bg-lime text-[clamp(16px,2.4vw,22px)] text-[#111] [overflow-wrap:anywhere]"
          href={`mailto:${EMAIL}?subject=Project inquiry`}
        >
          {EMAIL}
        </a>
        <button
          type="button"
          onClick={copy}
          className="btn border-inkfg/50 bg-transparent text-inkfg"
        >
          {label}
        </button>
      </div>
    </section>
  );
}
