const schedule = [
  {
    phase: "Get ready",
    title: "Registration & team formation",
    description: "Meet the community, find your people and bring an idea.",
  },
  {
    phase: "Kick off",
    title: "Opening & challenge briefing",
    description: "Get the brief, ask your questions and map your first move.",
  },
  {
    phase: "Make it",
    title: "Build time & check-ins",
    description: "Prototype, test and get a fresh perspective along the way.",
  },
  {
    phase: "Share it",
    title: "Submission & demos",
    description: "Package your project and show how it works.",
  },
  {
    phase: "Celebrate",
    title: "Review & recognition",
    description: "Discover the projects and celebrate the work behind them.",
  },
];

export default function SaveSomeSpaceForMaking() {
  return (
    <section className="border-t-[3px] border-[var(--deep-purple)] bg-[var(--surface-lavender)] px-[72px] py-[78px] max-[720px]:px-6 max-[720px]:py-14">
      <div className="mx-auto grid max-w-[1296px] grid-cols-[minmax(0,386px)_minmax(0,1fr)] gap-24 max-[960px]:gap-14 max-[720px]:grid-cols-1 max-[720px]:gap-10">
        <div>
          <p className="text-xs leading-none font-bold tracking-[-0.15px] text-[var(--brand-purple)] uppercase">
            05 / Save some space for making
          </p>
          <h2 className="mt-6 font-serif text-[52px] leading-[1.03] font-semibold tracking-[-2.2px] text-[var(--text-primary)] max-[960px]:text-[46px] max-[720px]:text-[clamp(38px,11vw,48px)]">
            The plan,
            <br /> at a glance.
          </h2>
          <p className="mt-7 max-w-[365px] text-[16px] leading-[1.6] text-[var(--text-secondary)]">
            Here’s the journey ahead. The full schedule, session links and submission
            window will be shared before kickoff.
          </p>
          <p className="mt-6 inline-flex rounded-[4px] bg-[var(--surface-yellow)] px-4 py-3 text-[13px] leading-none font-bold text-[var(--text-primary)]">
            Event dates: To be announced
          </p>
          <p className="mt-10 -rotate-6 font-[family-name:var(--font-caveat)] text-[27px] leading-[1.2] font-light text-[var(--brand-purple)]">
            Same internet. Shared adventure.
          </p>
        </div>

        <ol className="border-t border-[var(--border-subtle)]">
          {schedule.map((item) => (
            <li className="grid grid-cols-[86px_minmax(0,1fr)] gap-6 border-b border-[var(--border-subtle)] py-5 last:border-b-0 max-[520px]:grid-cols-1 max-[520px]:gap-2" key={item.phase}>
              <p className="pt-0.5 font-[family-name:var(--font-caveat)] text-[24px] leading-none font-bold text-[var(--brand-purple)]">
                {item.phase}
              </p>
              <div>
                <h3 className="text-[17px] leading-[1.3] font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.45] text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
