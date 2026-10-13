const qualities = [
  {
    title: "Original thinking",
    description: "A fresh perspective, a thoughtful idea or an unexpected approach.",
  },
  {
    title: "Real-world usefulness",
    description: "A clear problem and a solution that considers the people using it.",
  },
  {
    title: "Thoughtful execution",
    description: "A working core experience, intentional choices and room to grow.",
  },
  {
    title: "A clear story",
    description: "Show what you built, why it matters and what you learned along the way.",
  },
];

export default function MoreThanFinishLine() {
  return (
    <section className="bg-[var(--surface-lavender)] px-[72px] py-[78px] max-[720px]:px-6 max-[720px]:py-14">
      <div className="mx-auto grid max-w-[1296px] grid-cols-[minmax(0,1.25fr)_minmax(280px,0.65fr)] items-center gap-20 max-[960px]:gap-12 max-[720px]:grid-cols-1 max-[720px]:gap-10">
        <div>
          <p className="text-xs leading-none font-bold tracking-[-0.15px] text-[var(--brand-purple)] uppercase">
            07 / More than a finish line
          </p>
          <h2 className="mt-6 font-serif text-[52px] leading-[1.03] font-semibold tracking-[-2.2px] text-[var(--text-primary)] max-[960px]:text-[46px] max-[720px]:text-[clamp(38px,11vw,48px)]">
            Good ideas deserve a good look.
          </h2>
          <p className="mt-10 text-[16px] leading-[1.55] text-[var(--text-secondary)] max-[720px]:mt-7">
            Make something meaningful, not just something flashy. These are the qualities
            to build towards.
          </p>

          <dl className="mt-4 border-b border-[var(--border-subtle)]">
            {qualities.map((quality) => (
              <div className="grid grid-cols-[205px_minmax(0,1fr)] gap-6 border-t border-[var(--border-subtle)] py-5 max-[520px]:grid-cols-1 max-[520px]:gap-2" key={quality.title}>
                <dt className="font-serif text-[23px] leading-[1.15] font-semibold tracking-[-0.6px] text-[var(--text-primary)]">
                  {quality.title}
                </dt>
                <dd className="pt-0.5 text-[13px] leading-[1.45] text-[var(--text-secondary)]">
                  {quality.description}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-1 text-[12px] leading-[1.4] text-[var(--brand-purple)]">
            Full judging rubric and jury: To be announced
          </p>
        </div>

        <aside className="justify-self-end w-full max-w-[360px] rotate-[3deg] bg-[var(--surface-yellow)] px-9 py-10 text-[var(--text-primary)] max-[720px]:justify-self-start max-[520px]:px-7 max-[520px]:py-8">
          <svg className="size-10 text-[var(--brand-purple)]" aria-hidden="true" viewBox="0 0 48 48" fill="none">
            <path d="M10 9h28v9a11 11 0 0 1-11 11h-6a11 11 0 0 1-11-11V9ZM27 29v8m-10 2h20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38 13h4v5a8 8 0 0 1-7 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          <h3 className="mt-10 font-serif text-[32px] leading-[1.08] font-semibold tracking-[-1.1px]">
            Your work is worth celebrating.
          </h3>
          <p className="mt-6 text-[15px] leading-[1.48]">
            A good demo. A new skill. An idea brought to life. There’s more than one way
            to leave proud of your build.
          </p>
          <p className="mt-7 text-[13px] leading-[1.4] font-bold text-[var(--brand-purple)]">
            Awards &amp; recognition details:
            <br /> To be announced
          </p>
        </aside>
      </div>
    </section>
  );
}
