import { useState } from "react";
import { FACTS, VALUES, RIGHT_NOW } from "../data/about";
import SectionHeading from "./SectionHeading";

const label = "mb-3 block text-xs font-extrabold uppercase tracking-[.1em]";
const tile = "col-span-12 rounded-tile p-[clamp(24px,3.4vw,40px)] text-[#111]";

export default function About() {
  const songs = [
    {
      title: "A Horse with No Name",
      artist: "America, George Martin",
    },
    {
      title: "Les",
      artist: "Childish Gambino",
      album: "Camp",
      cover: "/music/camp.jpg",
    },
    {
      title: "Bluff (Slowed)",
      artist: "DJ Javi266",
    },
    {
      title: "Black Dog",
      artist: "NBSPLV",
    },
    {
      title: "No Ordinary Love",
      artist: "Sade",
    },
    {
      title: "La Violencia",
      artist: "Ihateinvain",
    },
    {
      title: "Even Flow",
      artist: "Pearl Jam",
    },
    {
      title: "Love Song wa Utaenai",
    },
    {
      title: "Tokyo",
      artist: "Niko Rubio",
    },
    {
      title: "Redbone",
      artist: "Childish Gambino",
    },
  ];

  const [currentlyListening] = useState(
    () => songs[Math.floor(Math.random() * songs.length)],
  );
  return (
    <section aria-label="About">
      <SectionHeading id="about" title="About" note="The short version" />
      <div className="grid grid-cols-12 gap-3.5">
        <div
          className={`${tile} flex min-h-[260px] flex-col justify-between gap-6 border border-line bg-[#111] !text-white lg:col-span-7`}
        >
          <blockquote className="text-[clamp(26px,3.5vw,44px)] font-extrabold leading-[1.06] tracking-[-.04em]">
            <span className="mb-1.5 block text-[1.8em] leading-[.7] text-coral">
              “
            </span>
            Tech is an art, and art means something different to everyone who
            sees it.
          </blockquote>
          <cite className="text-[15px] not-italic opacity-55">Zack</cite>
        </div>

        <div className={`${tile} bg-lav-tint lg:col-span-5`}>
          <small className={`${label} text-rust`}>Hello</small>
          <p className="text-[clamp(20px,2.2vw,26px)] font-medium leading-[1.22] tracking-[-.02em]">
            I'm Zack, 18, an aspiring software engineer. Some people find their
            craft in a kitchen. I found mine in a laptop.
          </p>
        </div>

        {FACTS.map((f) => (
          <div
            key={f.label}
            className={`${tile} ${f.bg} transition duration-300 hover:-translate-y-1 hover:-rotate-[.7deg] sm:col-span-6 lg:col-span-3`}
          >
            <small
              className={`${label} ${f.bg === "bg-card !text-fg" ? "text-coral" : "text-rust"}`}
            >
              {f.label}
            </small>
            <p className="text-[17px] leading-[1.4]">{f.text}</p>
          </div>
        ))}

        <div className={`${tile} bg-card !text-fg lg:col-span-7`}>
          <small className={`${label} text-coral`}>What I value</small>
          <ul>
            {VALUES.map((v, i) => (
              <li
                key={v}
                className="text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1.08] tracking-[-.045em]"
              >
                <b className="mr-3.5 align-middle text-sm tracking-normal text-coral">
                  0{i + 1}
                </b>
                {v}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${tile} bg-gradient-to-br from-lav-tint to-lavender !text-deep lg:col-span-5`}
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <small className={`${label} text-rust`}>
                Currently listening
              </small>

              <div
                className="mb-4 mt-1 flex h-[46px] items-end gap-[5px]"
                aria-hidden="true"
              >
                {[0, -0.3, -0.6, -0.15, -0.75].map((d) => (
                  <i
                    key={d}
                    className="eq-bar h-full w-[9px] rounded-[5px] bg-deep"
                    style={{ animationDelay: `${d}s` }}
                  />
                ))}
              </div>

              <p className="mb-1.5 text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.12] tracking-[-.03em]">
                {currentlyListening.title}
              </p>

              <span className="text-base opacity-70">
                {currentlyListening.artist || "Unknown artist"}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`${tile} border-[1.5px] border-dashed border-mut bg-transparent !text-fg`}
        >
          <small className={`${label} text-coral`}>Right now</small>
          <ul className="grid gap-x-6 gap-y-3 [grid-template-columns:repeat(auto-fit,minmax(210px,1fr))]">
            {RIGHT_NOW.map((r) => (
              <li
                key={r}
                className="text-[clamp(17px,1.8vw,21px)] font-semibold tracking-[-.02em]"
              >
                <i className="mr-3 inline-block size-[9px] rounded-full bg-coral" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
