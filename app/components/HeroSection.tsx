import Image from "next/image";
import Link from "next/link";

function ArrowUpRight() {
  return (
    <svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M6 18 18 6M9 6h9v9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <>
      <section
        id="the-buildathon"
        className="bg-[var(--surface-lavender)] px-[72px] py-16 max-[720px]:px-6 max-[720px]:py-12"
      >
        <div className="mx-auto grid max-w-[1296px] grid-cols-[minmax(0,520px)_minmax(0,1fr)] items-center gap-24 max-[960px]:gap-12 max-[720px]:grid-cols-1 max-[720px]:gap-10">
          <div>
            <p className="mb-7 flex items-center gap-2.5 text-xs leading-none font-bold tracking-[-0.15px] text-[var(--brand-purple)] uppercase">
              <span className="size-[7px] rounded-full bg-[var(--brand-purple)]" />
              An online hackathon for student builders
            </p>

            <h1 className="font-serif text-[84px] leading-[0.91] font-semibold tracking-[-5px] text-[var(--text-primary)] max-[960px]:text-[clamp(62px,8vw,84px)] max-[720px]:text-[clamp(57px,16vw,76px)]">
              Tutedude
              <span className="relative mt-2 block w-fit pr-2 italic text-[var(--brand-purple)]">
                Buildathon
                <svg
                  className="absolute -right-1 -bottom-5 h-4 w-[calc(100%+12px)] overflow-visible"
                  aria-hidden="true"
                  viewBox="0 0 360 20"
                  fill="none"
                >
                  <path d="M1 7c99-10 196-6 358 0M12 16c116-5 223-3 329 3" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              </span>
            </h1>

            <h2 className="mt-12 font-serif text-[28px] leading-[1.25] font-semibold tracking-[-0.8px] text-[var(--text-primary)] max-[720px]:mt-10 max-[720px]:text-[25px]">
              Less “someday”. More “let’s make it”.
            </h2>
            <p className="mt-5 max-w-[500px] text-[16px] leading-[1.65] text-[var(--text-secondary)]">
              Turn your curious little idea into something real. Meet fellow students,
              learn by doing, and build from wherever you are.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Link
                className="inline-flex min-h-[50px] items-center gap-6 rounded-lg bg-[var(--brand-purple)] px-5 text-sm font-bold text-white no-underline transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-[var(--deep-purple)] focus-visible:outline-3 focus-visible:outline-[var(--text-primary)] focus-visible:outline-offset-4 motion-reduce:transition-none"
                href="/form"
              >
                Register your interest <ArrowUpRight />
              </Link>
              <Link
                className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-purple)] underline decoration-1 underline-offset-4 hover:text-[var(--deep-purple)] focus-visible:outline-3 focus-visible:outline-[var(--text-primary)] focus-visible:outline-offset-4"
                href="#tracks"
              >
                Explore the buildathon <span aria-hidden="true">↓</span>
              </Link>
            </div>

            <p className="mt-6 text-xs leading-none text-[var(--text-secondary)]">
              Fully online <span className="px-1.5">·</span> Beginner-friendly
              <span className="px-1.5">·</span> Dates to be announced
            </p>
          </div>

          <div className="relative w-full max-w-[600px] justify-self-end max-[720px]:max-w-none max-[720px]:justify-self-auto">
            <Image
              className="h-auto w-full"
              src="/hero-image.png"
              alt="A collage of a coding laptop, rocket, sketches, and student maker tools"
              width={600}
              height={510}
              priority
            />
            <p className="absolute right-[5%] bottom-[3%] w-[200px] rotate-[-8deg] bg-[var(--surface-yellow)] px-5 py-7 font-[family-name:var(--font-caveat)] text-[25px] leading-[1.3] font-bold text-[var(--text-primary)] shadow-none max-[960px]:w-[175px] max-[960px]:px-4 max-[960px]:py-5 max-[960px]:text-[22px] max-[720px]:right-[3%]">
              Your ideas belong here.
            </p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-[var(--brand-purple)] px-[72px] text-[var(--surface-yellow)] max-[720px]:px-6">
        <div className="mx-auto flex h-[59px] max-w-[1296px] items-center justify-between gap-8 whitespace-nowrap text-xs font-bold uppercase max-[720px]:justify-start max-[720px]:gap-7 max-[720px]:overflow-x-auto">
          <span>A little curiosity</span>
          <span aria-hidden="true">✱</span>
          <span>A lot of making</span>
          <span aria-hidden="true">✱</span>
          <span>Your next big idea</span>
          <span aria-hidden="true">✱</span>
          <span>Built together</span>
          <span aria-hidden="true">✱</span>
        </div>
      </div>
    </>
  );
}
