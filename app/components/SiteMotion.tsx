"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function SiteMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector(".build-site");
    if (!root) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hero-copy, .hero-workbench", {
        y: 12,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });
    }, root);

    return () => media.revert();
  }, []);

  return null;
}
