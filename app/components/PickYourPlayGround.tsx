import {ArrowUpRight} from "lucide-react";

const tracks = [
  {
    number: "01",
    title: "Campus, reimagined",
    description: "Make everyday student life a little better.",
    prompt: "Think: study buddies, campus access, shared resources",
  },
  {
    number: "02",
    title: "Tech for good",
    description: "Build for a community or cause you care about.",
    prompt: "Think: accessibility, sustainability, local connection",
  },
  {
    number: "03",
    title: "Everyday, simplified",
    description: "Find a small friction. Create a thoughtful fix.",
    prompt: "Think: personal tools, better habits, useful automations",
  },
  {
    number: "04",
    title: "The wild card",
    description: "Your wonderfully unexpected idea goes here.",
    prompt: "Think: playful experiments, creative tools, new possibilities",
  },
];

export default function PickYourPlayGround() {
  return (
    <section id="tracks" className="bg-[var(--background)] px-[72px] py-[80px] max-[720px]:px-6 max-[720px]:py-14">
      <div className="mx-auto grid max-w-[1296px] grid-cols-[minmax(0,386px)_minmax(0,1fr)] gap-24 max-[960px]:gap-14 max-[720px]:grid-cols-1 max-[720px]:gap-10">
        <div>
          <p className="text-xs leading-none font-bold tracking-[-0.15px] text-[var(--brand-purple)] uppercase">
            03 / Pick your playground
          </p>
          <h2 className="mt-6 max-w-[340px] font-serif text-[52px] leading-[1] font-semibold tracking-[-2.2px] text-[var(--text-primary)] max-[960px]:text-[46px] max-[720px]:text-[clamp(38px,11vw,48px)]">
            Big problems.
            <br /> Small beginnings.
          </h2>
          <p className="mt-8 max-w-[390px] text-[16px] leading-[1.55] text-[var(--text-secondary)]">
            Choose a direction that sparks something. These starting points leave
            plenty of room for your own take.
          </p>

          <aside className="mt-11 w-[300px] rotate-[-4deg] bg-[var(--surface-lavender)] px-7 py-7 max-[720px]:mt-9 max-[520px]:w-full">
            <p className="font-[family-name:var(--font-caveat)] text-[27px] leading-[1.2] font-light text-[var(--brand-purple)]">
              A question worth asking:
            </p>
            <p className="mt-4 font-serif text-[25px] leading-[1.3] font-medium italic tracking-[-0.5px] text-[var(--text-primary)]">
              “What do I wish existed?”
            </p>
            <svg className="mt-6 size-5 text-[var(--brand-purple)]" aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M5 5c7-2 13 3 14 12-5 3-10 1-12-3-1-4-1-7-2-9Z" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </aside>
        </div>

        <div className="border-t border-[var(--border-subtle)]">
          {tracks.map((track) => (
            <a
              className="group grid grid-cols-[42px_minmax(0,1fr)_22px] gap-4 border-b border-[var(--border-subtle)] py-5 no-underline last:border-b-0 focus-visible:outline-3 focus-visible:outline-[var(--brand-purple)] focus-visible:outline-offset-4 max-[520px]:grid-cols-[34px_minmax(0,1fr)]"
              href="#register"
              key={track.number}
            >
              <span className="pt-1 font-serif text-[25px] leading-none font-medium italic text-[var(--brand-purple)]">
                {track.number}
              </span>
              <span>
                <span className="block font-serif text-[29px] leading-[1.15] font-semibold tracking-[-0.8px] text-[var(--text-primary)] max-[520px]:text-[25px]">
                  {track.title}
                </span>
                <span className="mt-1.5 block text-[15px] leading-[1.4] text-[var(--text-primary)]">
                  {track.description}
                </span>
                <span className="mt-2 block text-[13px] leading-[1.4] text-[var(--text-secondary)]">
                  {track.prompt}
                </span>
              </span>
              <span className="pt-1 text-[22px] leading-none text-[var(--brand-purple)] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 max-[520px]:hidden motion-reduce:transition-none" aria-hidden="true">
               <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
