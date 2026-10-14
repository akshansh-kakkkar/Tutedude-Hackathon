import Link from "next/link";
import TutedudeLogo from "./components/TutedudeLogo";
import PortalPreview from "./components/PortalPreview";
import SiteMotion from "./components/SiteMotion";
import SiteNavbar from "./components/SiteNavbar";
import AnimatedFaq from "./components/AnimatedFaq";
import { event, prizePoolLabel } from "./config/event";
import { ArrowDown, ArrowUpRight, Code2, Globe2, Lightbulb, Sparkles, Terminal, Trophy, Zap } from "lucide-react";

const tracks = [
  { icon: Code2, title: "Give it a glow-up.", label: "01 / DESIGN & NAVIGATION", text: "Reimagine cluttered layouts. Make the next click feel obvious.", color: "lavender" },
  { icon: Globe2, title: "Build for everyone.", label: "02 / ACCESSIBILITY", text: "Readable text, keyboard access, clearer language. Put more citizens first.", color: "lime" },
  { icon: Zap, title: "Cut the friction.", label: "03 / CITIZEN EXPERIENCE", text: "Rethink a confusing form or service journey. Make getting things done simpler.", color: "pink" },
  { icon: Lightbulb, title: "Make mobile matter.", label: "04 / MOBILE EXPERIENCE", text: "Turn a desktop maze into a responsive experience that works on a phone.", color: "peach" },
];
const faqs = [
  ["What’s the challenge?", "Pick an Indian government website and reimagine its design, navigation, accessibility or citizen experience. Build your own redesign or prototype that shows how it could work better. The final submission format will be announced."],
  ["How much is the prize pool?", `The current announced prize pool is ${prizePoolLabel}. The prize breakdown and final competition terms will be shared with the event details.`],
  ["Wait, do I have to be a Tutedude student?", "Nope. Tutedude students and non-Tutedude participants are both welcome. Bring your curiosity and a fresh take on an Indian government website."],
  ["First hackathon. Am I in the right place?", "Absolutely. Start small, learn as you go, and build a prototype. You don’t need a perfect résumé or a polished idea to get started."],
  ["Where’s this happening?", "Fully online. Your desk, your campus, your favourite corner — join from wherever you can get online and build."],
  ["What are the dates, fees and team rules?", "The event dates, any participation fee, team sizes and final rules will be announced. Register your interest through the form to hear the next steps."],
  ["What do I need to submit?", "Show how you would improve an Indian government website, including the original problems and your redesigned experience. The final brief, judging criteria and submission requirements will be shared with the event details."],
];

export default function Home() {
  return (
    <div className="build-site">
      <SiteMotion />
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="announcement">FIX INDIAN GOVERNMENT WEBSITES. WIN PRIZES. <span aria-hidden="true">↗</span> <span className="announcement-extra">TUTEDUDE BUILDATHON</span></div>
      <SiteNavbar />
      <main id="main">
        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> ONLINE. OPEN TO EVERYONE. ALL YOU.</p>
            <h1 aria-label="Govt sites. Your remix. Big wins."><span className="hero-line" aria-hidden="true"><span className="hero-word">GOVT SITES.</span></span><span className="hero-line" aria-hidden="true"><span className="hero-word outline-type">YOUR REMIX.</span></span><span className="hero-line" aria-hidden="true"><span className="hero-word hero-last">BIG WINS.<Sparkles /></span></span></h1>
            <div className="event-name"><span>TUTEDUDE</span> BUILDATHON <span aria-hidden="true">↗</span></div>
            <p className="hero-description">Fix Indian government websites. Win prizes.<br />Pick a portal. Rethink the experience. Build a better version.</p>
            <div className="hero-actions"><Link href="/form" className="button">Take the challenge <ArrowUpRight size={21} /></Link><a href="#tracks" className="text-link">Explore the challenge <ArrowDown size={16} /></a></div>
            <p className="hero-note">Tutedude fam or new around here — you belong here.</p><div className="hero-prize-line"><Trophy size={18} /><strong>{prizePoolLabel}</strong><span>prize pool. A whole lot of possibility.</span></div>
          </div>
          <div className="hero-art" role="img" aria-label="Coding illustration for a government website redesign, with a prize pool badge">
            <span className="orbit orbit-one" /><span className="orbit orbit-two" />
            <span className="art-star" aria-hidden="true">✳</span>
            <div className="sticker sticker-top">PUBLIC WEBSITES. FRESH THINKING.</div>
            <div className="code-window"><div className="window-bar"><span /><span /><span /><b>citizen-experience.tsx</b><Terminal size={16} /></div><div className="code-content"><p><span className="line-number">01</span><span className="code-pink">const</span> betterGovSite = {'{'}</p><p><span className="line-number">02</span>  design: <span className="code-lime">&quot;citizen-first&quot;</span>,</p><p><span className="line-number">03</span>  usability: <span className="code-lime">100</span>,</p><p><span className="line-number">04</span>  builder: <span className="code-lime">&quot;you&quot;</span></p><p><span className="line-number">05</span>{'}'};</p><div className="terminal-output"><span>➜</span> npm run better-for-bharat<br /><strong>✓ A better experience is ready.</strong><span className="cursor">▌</span></div></div></div>
            <div className="build-sticker"><Sparkles size={30} /><span className="prize-caption">TOTAL PRIZE POOL</span><strong className="prize-amount">{prizePoolLabel}</strong><span>build better. win big.</span></div>
            <span className="sticker sticker-bottom">100% online. 0% boring.</span>
            <span className="art-spark" aria-hidden="true">✦</span>
          </div>
          <div className="hero-foot"><span><Globe2 size={15} /> BUILD FROM ANYWHERE</span><span><Sparkles size={15} /> BEGINNER ENERGY WELCOME</span><span><Code2 size={15} /> REDESIGN. REBUILD. REIMAGINE.</span><a href="#about" aria-label="Discover the buildathon"><ArrowDown size={20} /></a></div>
        </section>
        <div className="marquee" aria-label="Think it. Build it. Ship it."><div>{[0, 1, 2, 3].map(n => <span key={n} aria-hidden={n > 0}>THINK IT. <i>✳</i> BUILD IT. <i>✳</i> SHIP IT. <i>✳</i> REPEAT. <i>✳</i> </span>)}</div></div>
        <section id="about" className="section about-section"><div><p className="eyebrow">01 / THE LOWDOWN</p><h2>Less “where do I<br />click?” More<br /><span className="purple-text">“done already.”</span></h2></div><div className="about-copy"><span className="mini-tag">A BETTER DIGITAL EXPERIENCE FOR BHARAT.</span><p>The challenge is simple: take an Indian government website and build a better version. Rethink the layout, simplify the journey, and make public services feel easier to use.</p><p>Choose a confusing experience and show us your fix. A clearer form, better navigation, an accessible interface — small changes can make a big difference for citizens.</p><div className="open-note"><Sparkles size={24} /><div><strong>Not a Tutedude student? Still your thing.</strong><span>This playground is open to Tutedude and non-Tutedude participants alike.</span></div></div></div></section>
        <PortalPreview />
        <section id="prizes" className="prize-section"><div><p className="eyebrow">BUILD WITH PURPOSE. COMPETE FOR PRIZES.</p><h2>A better web.<br /><span>A big reward.</span></h2><p>Reimagine a government website and bring your best work to the competition.</p></div><div className="prize-total"><div className="prize-orbit" aria-hidden="true">✦</div><Trophy size={44} aria-hidden="true" /><span>TOTAL PRIZE POOL</span><strong><span className="prize-counter" data-amount={event.prizePool} aria-hidden="true">{prizePoolLabel}</span><span className="sr-only">{prizePoolLabel}</span></strong><p>Prize breakdown and final terms coming soon.</p></div><div className="prize-extras"><span>REAL PROBLEM. REAL PROJECT.</span><p>Go beyond another tutorial. Leave with a redesign you can explain, demo, and make your own.</p><Link href="/form" className="text-link">Bring your best build <ArrowUpRight size={16} /></Link></div></section>
        <section id="tracks" className="section tracks-section"><div className="section-heading"><div><p className="eyebrow">02 / WHAT WILL YOU FIX?</p><h2>One challenge.<br />Many ways to <span className="purple-text">fix it.</span></h2></div><p>Choose an Indian government website.<br />These are starting points for your redesign.</p></div><div className="track-grid">{tracks.map(({ icon: Icon, ...track }) => <Link href="/form" className={`track-card ${track.color}`} key={track.label}><div className="track-top"><Icon size={30} strokeWidth={1.6} /><ArrowUpRight size={26} /></div><p className="eyebrow">{track.label}</p><h3>{track.title}</h3><p>{track.text}</p></Link>)}</div><p className="tracks-note">No perfect idea required. Your brief: make it easier for the next person. <span aria-hidden="true">↗</span></p></section>
        <section id="timeline" className="section timeline-section"><div className="section-heading"><div><p className="eyebrow">03 / THE GAME PLAN</p><h2>From “hear me out”<br />to <span>“check this out.”</span></h2></div><span className="timeline-tag">DATES DROPPING SOON</span></div><div className="timeline-progress" aria-hidden="true"><span /></div><ol className="steps">{[["01", "Make it official.", "Register your interest. Get the event details and next steps when they’re ready."], ["02", "Pick your portal.", "Choose an Indian government website. Find the friction and sketch a better citizen journey."], ["03", "Get your build on.", "Redesign the experience in your own project. Make your improvements clear, useful and easy to explore."], ["04", "Show the world.", "Show the before and after. Explain what you fixed and why it makes life easier for citizens."]].map(([n, title, text]) => <li key={n}><span>{n}<ArrowUpRight size={24} /></span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
        <section id="faqs" className="section faq-section"><div><p className="eyebrow">04 / CLEARING THE TABS</p><h2>Good questions.<br /><span className="purple-text">Straight answers.</span></h2><p className="faq-aside">Because the only thing you should be<br />overthinking is your next idea.</p><span className="faq-doodle" aria-hidden="true">?</span></div><div className="faq-list">{faqs.map(([question, answer]) => <AnimatedFaq key={question} question={question}>{answer}</AnimatedFaq>)}</div></section>
        <section id="register" className="register-section"><p className="eyebrow">BETTER WEBSITES. HAPPIER CITIZENS. YOUR MOVE.</p><h2>India’s portals.<br /><span>Your glow-up.</span><span className="cta-star" aria-hidden="true">✳</span></h2><Link href="/form" className="button mb-2 button-dark">Count me in <ArrowUpRight size={22} /></Link><p>Tutedude or non-Tutedude. All builders welcome.</p><div className="cta-details"><span>100% online</span><span>Beginner-friendly</span><span>Dates coming soon</span></div></section>
      </main>
      <footer className="new-footer"><div><Link href="/" className="wordmark"><TutedudeLogo /></Link><p>Build a better digital experience for Bharat.</p></div><nav aria-label="Footer navigation"><a href="#tracks">The challenge</a><a href="#prizes">Prizes</a><a href="#faqs">FAQs</a><Link href="/form">Register interest ↗</Link></nav><div className="footer-bottom"><span>© Tutedude. All rights reserved.</span><span>MADE OF CURIOSITY. BUILT BY YOU. ✳</span></div></footer>
    </div>
  );
}
