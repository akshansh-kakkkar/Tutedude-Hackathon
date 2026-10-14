import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { prizePoolLabel } from "../config/event";
import RegistrationForm from "../components/RegistrationFor";

export default function RegistrationPage() {
  return (
    <main className="build-site min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold">
          <ArrowLeft size={16} /> Back to the buildathon
        </Link>
        <div className="registration-heading">
          <div>
            <p className="eyebrow mt-10 text-[var(--accent)]">TUTEDUDE BUILDATHON</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Your government website glow-up starts here.
            </h1>
            <p className="mt-4 mb-8 text-sm leading-7 text-[#666168]">
              Tutedude student or joining us for the first time? You’re welcome here.
              Reimagine an Indian government website and compete for a {prizePoolLabel} prize pool.
              Register your interest below.
            </p>
          </div>
          <div className="registration-prize mb-8">
            <span>BUILD BETTER. WIN BIG.</span>
            <strong>{prizePoolLabel}</strong>
            <span>TOTAL PRIZE POOL</span>
          </div>
        </div>
        <div className="registration-form-shell overflow-hidden rounded-xl border border-[#dcdadd] bg-white">
          <RegistrationForm />
        </div>
        <p className="mt-6 text-sm text-[#666168]">
          Form not loading?{" "}
          <a href="https://forms.fillout.com/t/h3shPLWaBVus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] underline">
            Open the registration form <ArrowUpRight size={15} />
          </a>
        </p>
      </div>
    </main>
  );
}
