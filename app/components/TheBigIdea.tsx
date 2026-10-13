const details = [
  { label: "Where", value: "Anywhere online" },
  { label: "Who", value: "Curious students" },
  { label: "What", value: "Idea → prototype" },
];

export default function TheBigIdea() {
  return (
    <section className="border-b-[9px] border-[var(--surface-yellow)] bg-[var(--background)] px-[72px] py-[80px] max-[720px]:px-6 max-[720px]:py-14">
      <div className="mx-auto grid max-w-[1296px] grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-24 max-[960px]:gap-14 max-[720px]:grid-cols-1 max-[720px]:gap-10">
        <div>
          <p className="text-xs leading-none font-bold tracking-[-0.15px] text-[var(--brand-purple)] uppercase">
            01 / The big idea
          </p>
          <h2 className="mt-6 max-w-[500px] font-serif text-[52px] leading-[1.02] font-semibold tracking-[-2.2px] text-[var(--text-primary)] max-[960px]:text-[44px] max-[720px]:text-[clamp(38px,11vw,48px)]">
            Not another lecture.
            <br />A launchpad.
          </h2>
          <p className="mt-9 font-[family-name:var(--font-caveat)] -rotate-4 text-[27px] leading-[1.3] font-mediu text-[var(--brand-purple)] max-[720px]:mt-7 max-[720px]:text-[24px]">
            Come curious. Leave with something you made.
          </p>
        </div>

        <div className="pt-0.5">
          <p className="max-w-[620px] text-[18px] leading-[1.6] text-[var(--text-primary)] max-[720px]:text-[17px]">
            The Tutedude Buildathon is an online space to experiment, collaborate and
            take a problem you care about into a working prototype. No perfect pitch
            required. Just a willingness to start.
          </p>

          <dl className="mt-7 grid grid-cols-3 gap-6 border-t border-[var(--border-subtle)] pt-7 max-[520px]:grid-cols-1 max-[520px]:gap-5">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-[11px] leading-none font-bold tracking-[0.25px] text-[var(--brand-purple)] uppercase">
                  {detail.label}
                </dt>
                <dd className="mt-2 text-sm leading-[1.35] font-semibold text-[var(--text-primary)]">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
