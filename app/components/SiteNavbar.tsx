"use client";

import Link from "next/link";
import TutedudeLogo from "./TutedudeLogo";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";

const links = [
  ["#about", "The brief"],
  ["#tracks", "The challenge"],
  ["#prizes", "Prizes"],
  ["#timeline", "How it works"],
  ["#faqs", "FAQs"],
];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const panel = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tween = gsap.to(panel.current, {
      autoAlpha: open ? 1 : 0,
      y: open ? 0 : -10,
      duration: preference.matches ? 0 : open ? 0.28 : 0.18,
      ease: "power2.out",
      overwrite: true,
    });
    const finishOnReducedMotion = () => { if (preference.matches) tween.progress(1); };
    preference.addEventListener("change", finishOnReducedMotion);
    return () => {
      tween.kill();
      preference.removeEventListener("change", finishOnReducedMotion);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    }
    const desktop = window.matchMedia("(min-width: 1001px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="main-header" ref={header} onBlur={(event) => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }}>
      <div className="main-nav-container">
        <Link href="/" className="wordmark" aria-label="Tutedude home" onClick={() => setOpen(false)}>
          <TutedudeLogo />
        </Link>
        <nav className="main-nav-links" aria-label="Main navigation">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="main-nav-actions">
          <Link href="/form" className="button button-small" onClick={() => setOpen(false)}>
            Register interest <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button className="main-menu-toggle" type="button" ref={toggle}
            aria-expanded={open} aria-controls="main-mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      <nav className="main-mobile-panel" id="main-mobile-menu" aria-label="Mobile navigation" aria-hidden={!open} inert={!open} ref={panel}>
        {links.map(([href, label], index) => (
          <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight size={17} aria-hidden="true" /></a>
        ))}
        <p>FULLY ONLINE / OPEN TO EVERYONE</p>
      </nav>
    </header>
  );
}
