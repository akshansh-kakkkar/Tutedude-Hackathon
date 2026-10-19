import Link from "next/link";
import { ArrowDown, ArrowUpRight, Code2, Globe2 } from "lucide-react";
import TutedudeLogo from "./components/TutedudeLogo";
import PortalPreview from "./components/PortalPreview";
import HeroPatch from "./components/HeroPatch";
import SiteMotion from "./components/SiteMotion";
import SiteNavbar from "./components/SiteNavbar";
import AnimatedFaq from "./components/AnimatedFaq";
import { prizePoolLabel } from "./config/event";

const tracks = [
  { number: "01", title: "Find the next step.", label: "DESIGN & NAVIGATION", text: "Give a crowded homepage a clear structure. Help someone find the service they came for.", color: "lavender" },
  { number: "02", title: "Open it to everyone.", label: "ACCESSIBILITY", text: "Make a journey work with a keyboard, readable text, and labels that make sense.", color: "lime" },
  { number: "03", title: "Fix the form.", label: "CITIZEN EXPERIENCE", text: "Explain what each field needs, catch mistakes early, and make the next step clear.", color: "pink" },
  { number: "04", title: "Make it fit a phone.", label: "MOBILE EXPERIENCE", text: "Rework a desktop-only service so people can use it on the screen they have.", color: "peach" },
];

const steps = [
  ["01", "Register your interest", "Leave your details. We’ll share the dates, rules, and submission requirements when they’re ready."],
  ["02", "Find a problem", "Choose an Indian government website. Walk through one task and note where it gets difficult."],
  ["03", "Build your version", "Create your own redesign or prototype. Focus on the changes that make that task easier."],
  ["04", "Show what changed", "Walk us through the before and after. Explain your decisions and demo your work."],
];

const faqs = [
  ["What’s the challenge?", "Choose an Indian government website and build your own redesign or prototype. You can improve its design, navigation, accessibility, or a specific citizen journey. The final submission format will be announced."],
  ["How much is the prize pool?", `The announced prize pool is ${prizePoolLabel}. The prize breakdown and final competition terms will be shared with the event details.`],
  ["Do I need to be a Tutedude student?", "No. The buildathon is open to both Tutedude students and non-Tutedude participants."],
  ["Can I join as a beginner?", "Yes. You can start with one service or a small part of a website and build a prototype around it. Prior hackathon experience is not required."],
  ["Where does it take place?", "The buildathon is fully online. You can participate from wherever you have an internet connection."],
  ["What are the dates, fees, and team rules?", "The dates, any participation fee, team sizes, and final rules will be announced. Register your interest to receive the details."],
  ["What do I need to submit?", "Show the problems you found and your redesigned experience. The final brief, judging criteria, and submission requirements will be shared with the event details."],
];

export default function Home() {
  return (
    <div className="build-site">
      <SiteMotion />
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="announcement">
        SYSTEM / TUTEDUDE BUILDATHON <span aria-hidden="true">{"//"}</span> STATUS: OPEN
      </div>
      <SiteNavbar />
      <main id="main">
        <section className="hero-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> ONLINE BUILDATHON / OPEN TO EVERYONE</p>
            <h1 id="hero-title">
              <span className="hero-line"><span className="hero-word">BREAK THE</span></span>
              <span className="hero-line"><span className="hero-word outline-type">BAD FLOW.</span></span>
              <span className="hero-line"><span className="hero-word">REBUILD IT<span className="headline-period">.</span></span></span>
            </h1>
            <p className="hero-description">Audit an Indian government website. Find the friction. Rebuild the journey so it works for the people using it.</p>
            <div className="hero-actions">
              <Link href="/form" className="button">Enter the build <ArrowUpRight size={19} aria-hidden="true" /></Link>
              <a href="#about" className="text-link">Open the brief <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
            <p className="hero-note">No prior hackathon required. Just bring a sharp eye and a better idea.</p>
            <div className="hero-prize-line"><strong>{prizePoolLabel}</strong><span>total prize pool</span></div>
          </div>
          <HeroPatch />
          <div className="hero-foot">
            <span><Globe2 size={14} aria-hidden="true" /> FULLY ONLINE</span>
            <span><Code2 size={14} aria-hidden="true" /> ALL EXPERIENCE LEVELS</span>
            <span>DATES TO BE ANNOUNCED</span>
            <a href="#about" aria-label="Read the buildathon brief"><ArrowDown size={18} /></a>
          </div>
        </section>

        <div className="brief-strip">
          <span className="eyebrow">MISSION / 001</span>
          <p>Find one broken citizen journey. Make it work.</p>
          <a href="#tracks">Choose your target <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>

        <section id="about" className="section about-section">
          <div>
            <p className="eyebrow">01 / THE BRIEF</p>
            <h2>A public service<br />should be<br /><span className="purple-text">easy to use.</span></h2>
          </div>
          <div className="about-copy">
            <p>Applying for a certificate. Finding a government scheme. Checking an application. Everyday tasks can get buried under confusing menus and unclear forms.</p>
            <p>Your challenge: choose an Indian government website and rebuild the experience in your own project. Show how a clearer layout, a better form, or a more accessible interface could help someone finish their task.</p>
            <div className="open-note">
              <span className="note-mark" aria-hidden="true">[ ]</span>
              <div><strong>Start with one task.</strong><span>A thoughtful fix to one journey is a useful place to begin.</span></div>
            </div>
          </div>
        </section>

        <PortalPreview />

        <section id="prizes" className="prize-section">
          <div>
            <p className="eyebrow">03 / THE PRIZE POOL</p>
            <h2>Useful work.<br /><span>Worth rewarding.</span></h2>
            <p>Build your redesign, explain your decisions, and put it forward for the competition.</p>
          </div>
          <div className="prize-total">
            <span>TOTAL PRIZE POOL / INR</span>
            <strong>{prizePoolLabel}</strong>
            <p>Prize breakdown and final terms coming soon.</p>
          </div>
          <div className="prize-extras">
            <span>A PROJECT YOU CAN SHOW</span>
            <p>Leave with a working prototype and a case study of the problem you solved.</p>
            <Link href="/form" className="text-link">Register interest <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </section>

        <section id="tracks" className="section tracks-section">
          <div className="section-heading">
            <div><p className="eyebrow">04 / STARTING POINTS</p><h2>Find something<br /><span className="purple-text">worth fixing.</span></h2></div>
            <p>Choose your website, then choose your focus.<br />Here are four places to start.</p>
          </div>
          <div className="track-grid">
            {tracks.map((track) => (
              <Link href="/form" className={`track-card ${track.color}`} key={track.number}>
                <div className="track-top"><span className="track-index">/{track.number}</span><ArrowUpRight size={22} aria-hidden="true" /></div>
                <p className="eyebrow">{track.label}</p>
                <h3>{track.title}</h3>
                <p>{track.text}</p>
              </Link>
            ))}
          </div>
          <p className="tracks-note">These are starting points. Your redesign can address more than one.</p>
        </section>

        <section id="timeline" className="section timeline-section">
          <div className="section-heading">
            <div><p className="eyebrow">05 / HOW IT WORKS</p><h2>From a broken journey<br />to <span>a working demo.</span></h2></div>
            <span className="timeline-tag">SCHEDULE / TO BE ANNOUNCED</span>
          </div>
          <ol className="steps">
            {steps.map(([number, title, description]) => (
              <li key={number}><span>{number}<span aria-hidden="true">/</span></span><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ol>
        </section>

        <section id="faqs" className="section faq-section">
          <div>
            <p className="eyebrow">06 / FAQ</p>
            <h2>Before<br /><span className="purple-text">you start.</span></h2>
            <p className="faq-aside">The essentials about taking part.<br />We’ll share more as the event details are confirmed.</p>
          </div>
          <div className="faq-list">{faqs.map(([question, answer]) => <AnimatedFaq key={question} question={question}>{answer}</AnimatedFaq>)}</div>
        </section>

        <section id="register" className="register-section">
          <p className="eyebrow">TUTEDUDE BUILDATHON</p>
          <h2>Found a better way?<br /><span>Build it here.</span></h2>
          <Link href="/form" className="button button-dark">Register your interest <ArrowUpRight size={20} aria-hidden="true" /></Link>
          <div className="cta-details"><span>Fully online</span><span>Open to everyone</span><span>Dates coming soon</span></div>
        </section>
      </main>
      <footer className="new-footer">
        <div><Link href="/" className="wordmark" aria-label="Tutedude home"><TutedudeLogo /></Link><p>A buildathon for better public websites.</p></div>
        <nav aria-label="Footer navigation"><a href="#about">The brief</a><a href="#prizes">Prizes</a><a href="#faqs">FAQs</a><Link href="/form">Register interest ↗</Link></nav>
        <div className="footer-bottom"><span>© Tutedude. All rights reserved.</span><span>DESIGN / BUILD / DEMO</span></div>
      </footer>
    </div>
  );
}
