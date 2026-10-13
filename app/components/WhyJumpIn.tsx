const benefits = [
  {
    number: "01",
    title: "Make learning stick.",
    description:
      "Take the things you’ve watched, read and wondered about — and put them to work on a real problem.",
    note: "Try it. Break it. Get it.",
  },
  {
    number: "02",
    title: "Find your kind of people.",
    description:
      "Swap ideas with students who are as excited about making things as you are. Build together, not in a bubble.",
    note: "Good ideas love company.",
  },
  {
    number: "03",
    title: "Have something to show.",
    description:
      "Shape a prototype, tell its story and give your portfolio a project that feels genuinely yours.",
    note: "From “what if” to “I made this”.",
  },
];

export default function WhyJumpIn() {
  return (
    <section className="bg-[var(--surface-yellow)] px-[72px] py-[74px] max-[720px]:px-6 max-[720px]:py-14">
      <div className="mx-auto max-w-[1296px]">
        <div className="grid grid-cols-[minmax(0,1fr)_220px] items-start gap-12 max-[720px]:grid-cols-1 max-[720px]:gap-6">
          <div>
            <p className="text-xs leading-none font-bold tracking-[-0.15px] text-[var(--brand-purple)] uppercase">
              02 / Why jump in?
            </p>
            <h2 className="mt-6 max-w-[720px] font-serif text-[52px] leading-[1.03] font-semibold tracking-[-2.2px] text-[var(--text-primary)] max-[960px]:text-[46px] max-[720px]:text-[clamp(38px,11vw,48px)]">
              The best way to learn? Make a
              <br className="max-[720px]:hidden" /> little mess.
            </h2>
          </div>
          <p className="pt-9 font-[family-name:var(--font-caveat)] text-[27px] leading-[1.17] font-bold text-[var(--brand-purple)] max-[720px]:pt-0 max-[720px]:text-[25px]">
            Progress over
            <br /> perfection.
            <br /> Always.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-3 gap-10 max-[850px]:gap-6 max-[720px]:grid-cols-1 max-[720px]:gap-9">
          {benefits.map((benefit) => (
            <article
              className="border-t border-[color:rgb(50_18_63_/_48%)] pt-6"
              key={benefit.number}
            >
              <p className="font-serif text-[32px] leading-none font-medium italic tracking-[-1px] text-[var(--brand-purple)]">
                {benefit.number}
              </p>
              <h3 className="mt-5 font-serif text-[26px] leading-[1.18] font-semibold tracking-[-0.8px] text-[var(--text-primary)]">
                {benefit.title}
              </h3>
              <p className="mt-4 max-w-[340px] text-[15px] leading-[1.52] text-[var(--text-primary)]">
                {benefit.description}
              </p>
              <p className="mt-5 font-[family-name:var(--font-caveat)] text-[21px] leading-[1.22] font-bold text-[var(--brand-purple)]">
                {benefit.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
