const steps = [
  {
    number: "01",
    title: "Raise your hand",
    description: "Register your interest. We’ll share the event details and next steps when they’re ready.",
  },
  {
    number: "02",
    title: "Find your idea",
    description: "Choose a problem, connect with teammates and sketch a solution worth trying.",
  },
  {
    number: "03",
    title: "Build & experiment",
    description: "Make the smallest useful version. Test it, ask questions and keep improving.",
  },
  {
    number: "04",
    title: "Show what you made",
    description: "Submit your prototype and a short demo. Tell us what it does and what you learned.",
  },
];

function StepArrow() {
  return (
    <svg className="absolute top-3 right-[-9%] h-7 w-[92px] text-[#ead7f1] max-[960px]:hidden" aria-hidden="true" viewBox="0 0 100 28" fill="none">
      <path d="M1 16c25-11 49-11 78-3M74 2l13 11-11 10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function FromHelloToHelloWorld() {
  return (
    <section id="timeline" className="bg-[var(--deep-purple)] px-[72px] py-[74px] text-[var(--white)] max-[720px]:px-6 max-[720px]:py-14">
      <div className="mx-auto max-w-[1296px]">
        <p className="text-xs leading-none font-bold tracking-[-0.15px] text-[var(--surface-yellow)] uppercase">
          04 / From hello to hello world
        </p>
        <h2 className="mt-6 font-serif text-[52px] leading-[1.03] font-semibold tracking-[-2.2px] text-[var(--white)] max-[720px]:text-[clamp(38px,11vw,48px)]">
          One idea. A few brave steps.
        </h2>

        <ol className="mt-12 grid grid-cols-4 gap-9 max-[960px]:grid-cols-2 max-[960px]:gap-x-12 max-[960px]:gap-y-11 max-[520px]:grid-cols-1">
          {steps.map((step, index) => (
            <li className="relative list-none" key={step.number}>
              <p className="font-serif text-[38px] leading-none font-medium italic tracking-[-1.5px] text-[var(--surface-yellow)]">
                {step.number}
              </p>
              {index < steps.length - 1 && <StepArrow />}
              <h3 className="mt-6 font-serif text-[25px] leading-[1.16] font-semibold tracking-[-0.7px] text-[var(--white)]">
                {step.title}
              </h3>
              <p className="mt-4 max-w-[255px] text-[15px] leading-[1.52] text-[#ead7f1]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
