import type { CSSProperties, ReactNode } from "react";

const Donut = () => (
  <svg viewBox="0 0 24 24" className="size-[72%]">
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 6.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
    />
    <g fill="#111">
      <rect
        x="5"
        y="9"
        width="3"
        height="1.4"
        rx=".7"
        transform="rotate(-30 6.5 9.7)"
      />
      <rect
        x="15.5"
        y="6"
        width="3"
        height="1.4"
        rx=".7"
        transform="rotate(35 17 6.7)"
      />
      <rect
        x="16"
        y="15"
        width="3"
        height="1.4"
        rx=".7"
        transform="rotate(-20 17.5 15.7)"
      />
      <rect
        x="8"
        y="17"
        width="3"
        height="1.4"
        rx=".7"
        transform="rotate(40 9.5 17.7)"
      />
    </g>
  </svg>
);

const Rose = () => (
  <svg viewBox="0 0 24 24" fill="none" className="size-[72%]">
    <circle cx="12" cy="9" r="6.5" fill="#fff" />
    <path
      d="M12 5.5c2 0 3.2 1.4 3 3-.2 1.7-1.8 2.6-3.4 2.3-1.5-.3-2.2-1.6-1.7-2.8"
      stroke="#111"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M12 15.5V22"
      stroke="#111"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path d="M12 19c2.5-.2 4-1.4 4.5-3-2.4 0-4 1-4.5 3z" fill="#111" />
  </svg>
);

type Sticker = {
  x: number; // left %
  y: number; // top %
  size: number; // fraction of board width
  rot: number; // degrees
  shape: "circle" | "square" | "tag";
  bg: string; // tailwind background classes
  label?: string;
  content: ReactNode;
};

const glyph = (t: string) => (
  <b className="font-extrabold leading-none" style={{ fontSize: "34cqw" }}>
    {t}
  </b>
);

const STICKERS: Sticker[] = [
  {
    x: 8,
    y: 18,
    size: 0.34,
    rot: -8,
    shape: "circle",
    bg: "bg-gradient-to-br from-coral to-lavender",
    label: "me",
    content: (
      <img
        src="https://avatars.githubusercontent.com/u/69579338?v=4"
        alt=""
        className="size-full object-cover"
      />
    ),
  },
  {
    x: 62,
    y: 5,
    size: 0.27,
    rot: 12,
    shape: "circle",
    bg: "bg-coral",
    label: "Aero B737!",
    content: (
      <img src="/stickers/2.jpg" alt="" className="size-full object-cover" />
    ),
  },
  {
    x: 36,
    y: 33,
    size: 0.3,
    rot: -5,
    shape: "circle",
    bg: "bg-lavender",
    label: "Some flowers I like",
    content: <Rose />,
  },
  {
    x: 70,
    y: 40,
    size: 0.24,
    rot: 9,
    shape: "square",
    bg: "bg-[#111] text-lime",
    label: "My wonderful Dog!",
    content: (
      <b className="font-extrabold leading-none" style={{ fontSize: "30cqw" }}>
        {"</>"}
      </b>
    ),
  },
  {
    x: 4,
    y: 72,
    size: 0.5,
    rot: -7,
    shape: "tag",
    bg: "bg-white",
    content: (
      <b className="px-4 py-3 text-[calc(var(--board)*.052)] font-extrabold tracking-tight">
        hello, world
      </b>
    ),
  },
];

const SHAPE = {
  circle: "rounded-full aspect-square",
  square: "rounded-[26%] aspect-square",
  tag: "rounded-[20px]",
};

export default function StickerBoard() {
  return (
    <div
      role="img"
      aria-label="A sticker board of things I love"
      className="relative m-auto [--board:min(84vw,400px)] h-[calc(var(--board)*1.02)] w-[var(--board)]"
    >
      {STICKERS.map((s, i) => (
        <div
          key={i}
          style={
            {
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `calc(var(--board) * ${s.size})`,
              "--r": `${s.rot}deg`,
            } as CSSProperties
          }
          className="group absolute [transform:rotate(var(--r))] transition-transform duration-300 [transition-timing-function:cubic-bezier(.3,1.6,.5,1)] hover:z-10 hover:[transform:rotate(calc(var(--r)*-.5))_scale(1.1)] motion-reduce:transition-none"
        >
          <div
            style={{ containerType: "inline-size" }}
            className={`relative grid place-items-center overflow-hidden border-[5px] border-white text-[#111] shadow-[0_14px_26px_-10px_rgba(0,0,0,.4)] ${SHAPE[s.shape]} ${s.bg}`}
          >
            {s.content}
            <img
              src={`/stickers/${i + 1}.jpg`}
              alt=""
              className="absolute inset-0 size-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
          {s.label && (
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#111] px-2.5 py-0.5 text-[11px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
