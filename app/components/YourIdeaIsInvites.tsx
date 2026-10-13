import Link from "next/link";

function ArrowUpRight() {
  return (
    <svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M6 18 18 6M9 6h9v9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function YourIdeaIsInvites() {
  return (
    <section id="register" className="bg-[var(--brand-purple)] px-[72px] py-[76px] text-[var(--white)] max-[720px]:px-6 max-[720px]:py-14">
      <div className="mx-auto grid max-w-[1296px] grid-cols-[minmax(0,1fr)_310px] items-center gap-20 max-[720px]:grid-cols-1 max-[720px]:gap-9">
        <div>
          <p className="text-xs leading-none font-bold tracking-[-0.15px] text-[var(--surface-yellow)] uppercase">
            09 / Your idea is invited
          </p>
          <h2 className="mt-6 max-w-[690px] font-serif text-[62px] leading-[1.02] font-semibold tracking-[-2.5px] text-[var(--white)] max-[960px]:text-[54px] max-[720px]:text-[clamp(42px,12vw,58px)]">
            That idea in your notes?
            <br /> Let’s give it a life.
          </h2>
          <p className="mt-6 max-w-[580px] text-[16px] leading-[1.58] text-[#f1dff7]">
            You don’t need it all figured out. Take the first step — we’ll share the
            details as the buildathon takes shape.
          </p>
        </div>

        <div className="relative pt-12 max-[720px]:pt-9">
          <svg className="absolute top-0 left-7 h-14 w-[190px] text-[var(--surface-yellow)] max-[720px]:left-0" aria-hidden="true" viewBox="0 0 190 56" fill="none">
            <path d="M3 6c19 25 58 17 91 9 28-8 58-11 77 2 15 11 5 24-20 28M153 34l-10 13 16 5M139 6l3 10M157 1l4 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link
            className="inline-flex min-h-[51px] w-full items-center justify-between rounded-lg bg-[var(--surface-yellow)] px-6 text-[14px] leading-none font-bold text-[var(--text-primary)] no-underline transition-transform duration-150 hover:-translate-y-px focus-visible:outline-3 focus-visible:outline-[var(--white)] focus-visible:outline-offset-4 motion-reduce:transition-none"
            href="/form"
          >
            Register your interest <ArrowUpRight />
          </Link>
          <p className="mt-5 pl-1 text-[12px] leading-[1.4] text-[#f1dff7]">
            Online. Student-friendly. Uniquely you.
          </p>
        </div>
      </div>
    </section>
  );
}
