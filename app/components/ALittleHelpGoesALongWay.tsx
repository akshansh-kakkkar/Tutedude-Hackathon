import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const support = [
  {
    title: "Mentor guidance",
    description: "A fresh perspective on your idea, approach and prototype.",
  },
  {
    title: "Peer connection",
    description: "A place to exchange ideas, share progress and ask for help.",
  },
  {
    title: "Clear next steps",
    description: "Event guidance to help you get from the brief to your demo.",
  },
];

export default function ALittileHelpGoesALongWay() {
  return (
    <section className="border-t-[6px] border-[var(--surface-lavender)] bg-[var(--background)] px-[72px] py-[80px] max-[720px]:px-6 max-[720px]:py-14">
      <div className="mx-auto grid max-w-[1296px] grid-cols-[minmax(0,450px)_minmax(0,1fr)] items-center gap-[86px] max-[960px]:gap-14 max-[720px]:grid-cols-1 max-[720px]:gap-11">
        <div className="relative">
          <Image
            className="h-auto w-full"
            src="/a-little-help-goes.png"
            alt="Three student builders learning together through notes, wireframes, and code"
            width={500}
            height={500}
          />
          <p className="absolute right-[7%] bottom-[3%] w-[225px] rotate-[-6deg] bg-[var(--surface-yellow)] px-5 py-3.5 text-center font-[family-name:var(--font-caveat)] text-[26px] leading-none font-bold text-[var(--text-primary)] max-[520px]:right-[3%] max-[520px]:w-[190px] max-[520px]:text-[23px]">
            Nobody builds alone.
          </p>
        </div>

        <div>
          <p className="text-xs leading-none font-bold tracking-[-0.15px] text-[var(--brand-purple)] uppercase">
            06 / A little help goes a long way
          </p>
          <h2 className="mt-6 max-w-[640px] font-serif text-[52px] leading-[1.01] font-semibold tracking-[-2.2px] text-[var(--text-primary)] max-[960px]:text-[46px] max-[720px]:text-[clamp(38px,11vw,48px)]">
            Stuck is a stage.
            <br /> Not a stopping point.
          </h2>
          <p className="mt-7 max-w-[635px] text-[16px] leading-[1.55] text-[var(--text-secondary)]">
            Bring your questions, your half-working code and your “is this even
            possible?” moments. Learning together is part of the build.
          </p>

          <ul className="mt-6 space-y-4">
            {support.map((item) => (
              <li className="grid grid-cols-[18px_minmax(0,1fr)] gap-4" key={item.title}>
                <span className="pt-0.5 text-[21px] leading-none text-[var(--brand-purple)]" aria-hidden="true">
                 <ArrowUpRight />
                </span>
                <div>
                  <h3 className="text-[16px] leading-[1.3] font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.45] text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-7 text-[13px] leading-[1.4] text-[var(--brand-purple)]">
            Mentor lineup and support sessions: To be announced
          </p>
        </div>
      </div>
    </section>
  );
}
