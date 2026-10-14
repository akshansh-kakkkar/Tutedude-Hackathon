"use client";

import { useRef } from "react";

const links = [
  ["#about", "The lowdown"],
  ["#tracks", "The challenge"],
  ["#prizes", "Prizes"],
  ["#timeline", "How it works"],
  ["#faqs", "FAQs"],
];

export default function MobileNavigation() {
  const menu = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }

  return (
    <details className="mobile-nav" ref={menu} onKeyDown={(event) => {
      if (event.key === "Escape") {
        closeMenu();
        menu.current?.querySelector("summary")?.focus();
      }
    }}>
      <summary aria-label="Open navigation">☰</summary>
      <nav aria-label="Mobile navigation">
        {links.map(([href, label]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
      </nav>
    </details>
  );
}
