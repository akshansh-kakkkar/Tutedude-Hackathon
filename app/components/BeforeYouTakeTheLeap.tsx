const faqs = [
  {
    question: "Is this for beginners?",
    answer:
      "Yes — bring your curiosity, not a perfect résumé. Start with a small idea and use the buildathon as a reason to learn something new.",
  },
  {
    question: "What should I build or submit?",
    answer:
      "Aim for a prototype that shows your idea in action, plus a short demo of how it works. The final submission format will be announced with the brief.",
  },
  {
    question: "Do I need to travel anywhere?",
    answer:
      "No. The buildathon is fully online. Join from wherever you’re comfortable building, with a laptop and an internet connection.",
  },
  {
    question: "When is it, and is there a fee?",
    answer:
      "Dates and registration details, including any fee or eligibility requirements, are to be announced. Register your interest to hear the next steps.",
  },
  {
    question: "Can I join without a team?",
    answer:
      "You can express your interest on your own. Team formation guidance, team sizes and participation rules will be shared before the event.",
  },
  {
    question: "Do I need to use a particular technology?",
    answer:
      "Start with tools you’re comfortable with, or something you want to learn. Any track-specific requirements will be included in the final event rules.",
  },
];

export default function BeforeYouTakeTheLeap() {
  return (
    <section id="faqs" className="border-y-[3px] border-[var(--brand-purple)] bg-[var(--background)] px-[72px] py-[80px] max-[720px]:px-6 max-[720px]:py-14">
      <div className="mx-auto max-w-[1296px]">
        <div className="grid grid-cols-[minmax(0,1fr)_260px] items-end gap-10 max-[720px]:grid-cols-1 max-[720px]:gap-5">
          <div>
            <p className="text-xs leading-none font-bold tracking-[-0.15px] text-[var(--brand-purple)] uppercase">
              08 / Before you take the leap
            </p>
            <h2 className="mt-6 max-w-[650px] font-serif text-[52px] leading-[1.03] font-semibold tracking-[-2.2px] text-[var(--text-primary)] max-[960px]:text-[46px] max-[720px]:text-[clamp(38px,11vw,48px)]">
              A few things you might be wondering.
            </h2>
          </div>
          <p className="pb-1 font-[family-name:var(--font-caveat)] text-[25px] leading-[1.2] font-bold text-[var(--brand-purple)] max-[720px]:pb-0">
            Good questions welcome.
          </p>
        </div>

        <div className="mt-11 grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-16 max-[960px]:gap-x-10 max-[720px]:mt-9 max-[720px]:grid-flow-row max-[720px]:grid-cols-1 max-[720px]:grid-rows-none">
          {faqs.map((faq) => (
            <article className="border-t border-[var(--border-subtle)] py-6" key={faq.question}>
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-[16px] leading-[1.35] font-bold text-[var(--text-primary)]">
                  {faq.question}
                </h3>
                <span className="shrink-0 pt-0.5 text-[22px] leading-none font-light text-[var(--brand-purple)]" aria-hidden="true">
                  −
                </span>
              </div>
              <p className="mt-4 max-w-[555px] text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
