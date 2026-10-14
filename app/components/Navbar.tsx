import Link from "next/link";
import TutedudeLogo from "./TutedudeLogo";

const navigation = [
  { label: "The buildathon", href: "#the-buildathon" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQs", href: "#faqs" },
];

function ArrowUpRight() {
  return (
    <svg className="block size-full" aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M6 18 18 6M9 6h9v9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="border-b-2 border-[var(--text-primary)] bg-[var(--surface-lavender)]">
      <nav
        className="mx-auto grid min-h-18 w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-[72px] max-[720px]:min-h-[76px] max-[720px]:grid-cols-[1fr_auto_auto] max-[720px]:gap-4 max-[720px]:px-6"
        aria-label="Primary navigation"
      >
        <Link
          className="w-fit text-2xl leading-none font-normal tracking-[-1.15px] text-[var(--brand-purple)] no-underline max-[720px]:text-[22px] focus-visible:outline-3 focus-visible:outline-[var(--text-primary)] focus-visible:outline-offset-4"
          href="/"
          aria-label="Tutedude home"
        >
         <TutedudeLogo />
        </Link>

        <div className="flex items-center gap-9 max-[720px]:hidden">
          {navigation.map((item) => (
            <Link
              className="text-sm leading-[1.2] font-medium text-[var(--text-primary)] no-underline hover:text-[var(--brand-purple)] focus-visible:outline-3 focus-visible:outline-[var(--text-primary)] focus-visible:outline-offset-4"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          className="col-start-3 inline-flex min-h-[50px] justify-self-end items-center gap-6 rounded-lg border-2 border-[var(--text-primary)] bg-[var(--brand-purple)] px-[22px] text-sm leading-none font-bold text-[var(--white)] no-underline shadow-[3px_3px_0_var(--text-primary)] transition-[background-color,transform,box-shadow] duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--deep-purple)] hover:shadow-none focus-visible:outline-3 focus-visible:outline-[var(--text-primary)] focus-visible:outline-offset-4 motion-reduce:transition-none max-[720px]:col-auto max-[720px]:min-h-11 max-[720px]:gap-2.5 max-[720px]:px-3.5 max-[720px]:text-[13px]"
          href="/form"
        >
          <span>Count me in</span>
          <span className="size-[18px] max-[720px]:size-4">
            <ArrowUpRight />
          </span>
        </Link>

        <details className="relative hidden max-[720px]:block">
          <summary
            className="grid w-[26px] cursor-pointer list-none gap-[5px] py-2.5 pr-0 pl-1.5 [&::-webkit-details-marker]:hidden focus-visible:outline-3 focus-visible:outline-[var(--text-primary)] focus-visible:outline-offset-4"
            aria-label="Open navigation menu"
          >
            <span className="block h-[1.5px] w-5 bg-[var(--text-primary)]" />
            <span className="block h-[1.5px] w-5 bg-[var(--text-primary)]" />
          </summary>
          <div className="absolute top-[calc(100%+14px)] right-[-8px] z-10 grid w-[190px] rounded-lg border border-[var(--border-subtle)] bg-[var(--background)] p-2 shadow-[0_12px_24px_rgb(50_18_63_/_12%)]">
            {navigation.map((item) => (
              <Link
                className="p-3 text-sm leading-[1.2] font-medium text-[var(--text-primary)] no-underline hover:text-[var(--brand-purple)] focus-visible:outline-3 focus-visible:outline-[var(--text-primary)] focus-visible:outline-offset-[-2px]"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
