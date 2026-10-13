import Link from "next/link";

const links = [
  { label: "About the event", href: "#the-buildathon" },
  { label: "Challenge tracks", href: "#tracks" },
  { label: "FAQs", href: "#faqs" },
  { label: "Register interest ↗", href: "#register" },
];

export default function Footer() {
  return (
    <footer className="border-t-[5px] border-[var(--brand-purple)] bg-[var(--background)] px-[72px] py-12 max-[720px]:px-6 max-[720px]:py-10">
      <div className="mx-auto max-w-[1296px]">
        <div className="flex items-start justify-between gap-10 max-[720px]:flex-col max-[720px]:gap-8">
          <div>
            <Link
              className="text-[24px] leading-none font-normal tracking-[-1.15px] text-[var(--brand-purple)] no-underline"
              href="/"
              aria-label="Tutedude home"
            >
            <img src="https://www.tutedude.com/assets/avif/TutedudeLogo.avif" alt="tutedude" />
            </Link>
            <p className="mt-3 text-xs leading-[1.4] text-[var(--text-secondary)]">
              An online buildathon for curious student minds.
            </p>
          </div>

          <nav className="flex flex-wrap justify-end gap-x-8 gap-y-3 max-[720px]:justify-start max-[720px]:gap-x-6" aria-label="Footer navigation">
            {links.map((link) => (
              <Link
                className="text-xs leading-none font-medium text-[var(--brand-purple)] no-underline hover:text-[var(--deep-purple)] focus-visible:outline-3 focus-visible:outline-[var(--text-primary)] focus-visible:outline-offset-4"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex items-end justify-between gap-8 border-t border-[var(--border-subtle)] pt-10 max-[720px]:mt-7 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-7 max-[720px]:pt-8">
          <p className="text-xs leading-none text-[var(--text-secondary)]">
            © Tutedude. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-caveat)] text-[25px] leading-none font-light text-[var(--brand-purple)]">
            Made of curiosity. Built by you.
          </p>
        </div>
      </div>
    </footer>
  );
}
