import { EMAIL, GITHUB, LEARNING, SHIPPING, STATS, X_URL } from "../data/site";
import { GitHubIcon, MailIcon, XIcon } from "./icons";
import StickerBoard from "./StickerBoard";

const roundBtn =
  "grid size-[50px] place-items-center rounded-full  text-sm font-extrabold transition hover:-translate-y-0.5 hover:bg-ink hover:text-inkfg";

export default function Hero() {
  return (
    <section aria-label="Intro" className="grid grid-cols-12 gap-3.5 pt-[22px]">
      {/* 1. Intro */}
      <div className="tile col-span-12 lg:col-span-7">
        <p className="mb-[18px] flex items-center gap-2.5 text-[15px] font-medium text-mut">
          <i className="size-[9px] rounded-full bg-coral" />
          Open to internships, junior roles &amp; freelance · Remote
        </p>
        <h1 className="mb-5 text-[clamp(38px,5.6vw,76px)] leading-[.92]">
          Hi, I'm Zack, a frontend developer
          <sup className="relative top-[.8em] ml-1.5 align-top text-[.22em] font-semibold tracking-normal">
            ©26
          </sup>
        </h1>
        <p className="mb-7 max-w-[430px] text-mut">
          I build fast, accessible interfaces, and I'm learning the backend so I
          can ship whole products on my own.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            className="btn"
            href={`mailto:${EMAIL}?subject=Let's work together`}
          >
            Hire me
          </a>
          <a className="btn btn-outline" href="#work">
            See my work
          </a>
        </div>
      </div>

      {/* 2. Sticker board */}
      <div className="tile relative col-span-12 grid min-h-[340px] place-items-center overflow-hidden bg-peach lg:col-span-5">
        <StickerBoard />
        <span className="absolute bottom-[18px] left-5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#111]">
          My sticker board
        </span>
      </div>

      {/* 3. Shipping with */}
      <div className="tile col-span-12 bg-gradient-to-br from-lav-tint to-lavender text-deep lg:col-span-5">
        <h3 className="mb-3.5 text-sm font-semibold uppercase tracking-[.06em] opacity-70">
          Shipping with
        </h3>
        <div className="flex flex-wrap gap-2">
          {SHIPPING.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/70 px-3.5 py-1.5 text-sm font-semibold"
            >
              {t}
            </span>
          ))}
          {LEARNING.map((t) => (
            <span
              key={t}
              className="rounded-full border-[1.5px] border-dashed border-deep/50 px-3.5 py-1.5 text-sm font-semibold"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Stats */}
      <div className="tile col-span-12 flex items-center justify-around gap-5 text-center md:col-span-7 lg:col-span-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <b className="block text-5xl leading-none tracking-[-.04em]">
              {s.n}
            </b>
            <span className="text-[13px] text-mut">{s.label}</span>
          </div>
        ))}
      </div>

      {/* 5. Find me */}
      <div className="tile col-span-12 flex flex-col justify-center md:col-span-5 lg:col-span-3">
        <h3 className="mb-3.5 text-sm font-semibold uppercase tracking-[.06em] opacity-70">
          Find me
        </h3>
        <div className="flex gap-2.5">
          <a
            className={roundBtn}
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            className={roundBtn}
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <XIcon />
          </a>
          <a className={roundBtn} href={`mailto:${EMAIL}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
