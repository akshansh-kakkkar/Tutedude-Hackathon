"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SiteMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector(".build-site");
    if (!root) return;
    const media = gsap.matchMedia();
    media.add({ motion: "(prefers-reduced-motion: no-preference)", small: "(max-width: 1050px)" }, (context) => {
      if (!context.conditions?.motion) return;
      let active = true;
      const cleanups: (() => void)[] = [];
      const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
      hero.from(".hero-copy > .eyebrow", { y: 14, autoAlpha: 0, duration: 0.45 })
        .from(".hero-word", { yPercent: 115, rotation: 3, duration: 1, stagger: 0.14, ease: "expo.out", clearProps: "transform" }, 0.12)
        .from(".hero-copy > :not(h1):not(.eyebrow)", { y: 20, autoAlpha: 0, duration: 0.65, stagger: 0.08, clearProps: "transform,opacity,visibility" }, 0.55)
        .from(".code-window", { x: 35, scale: 0.86, rotation: -12, autoAlpha: 0, duration: 1.1 }, 0.2)
        .from(".build-sticker", { scale: 0.25, rotation: -18, autoAlpha: 0, duration: 0.85, ease: "back.out(1.6)" }, 0.75)
        .from(".hero-art .sticker, .art-star, .art-spark", { scale: 0.5, autoAlpha: 0, duration: 0.6, stagger: 0.09 }, 0.7);

      gsap.to(".build-sticker", { y: -12, rotation: 6, duration: 2.3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.8 });
      gsap.to(".art-star", { rotation: 180, duration: 32, repeat: -1, ease: "none" });
      gsap.to(".art-spark", { rotation: -360, duration: 23, repeat: -1, ease: "none" });
      gsap.to(".orbit-one", { rotation: "+=35", duration: 13, repeat: -1, yoyo: true, ease: "sine.inOut" });

      gsap.to(".scroll-progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.2 } });
      const marquee = gsap.to(".marquee > div", { xPercent: -50, duration: 26, repeat: -1, ease: "none" });
      const marqueeElement = root.querySelector(".marquee");
      const pause = () => marquee.pause();
      const play = () => marquee.play();
      marqueeElement?.addEventListener("pointerenter", pause);
      marqueeElement?.addEventListener("pointerleave", play);
      cleanups.push(() => {
        marqueeElement?.removeEventListener("pointerenter", pause);
        marqueeElement?.removeEventListener("pointerleave", play);
      });

      const reveal = (selector: string) => {
        gsap.utils.toArray<HTMLElement>(selector, root).forEach((element) => {
          gsap.fromTo(element, { y: 35, autoAlpha: 0 }, {
            y: 0, autoAlpha: 1, duration: 0.85, ease: "power3.out", immediateRender: false,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
          });
        });
      };
      reveal(".about-section > div, .preview-copy, .preview-stage, .prize-section > div:not(.prize-total), .section-heading, .faq-section > div");

      const cards = gsap.utils.toArray<HTMLElement>(".track-card", root);
      const cardGroups = context.conditions.small ? cards.map((card) => [card]) : [cards];
      cardGroups.forEach((group) => {
        gsap.fromTo(group, { y: 65, rotation: 3, autoAlpha: 0 }, {
          y: 0, rotation: 0, autoAlpha: 1, duration: 0.8, stagger: 0.13, ease: "back.out(1.15)",
          immediateRender: false, clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: context.conditions?.small ? group[0] : ".track-grid", start: "top 85%", once: true },
        });
      });
      gsap.fromTo(".prize-total", { scale: 0.86, rotation: -4, autoAlpha: 0 }, {
        scale: 1, rotation: 0, autoAlpha: 1, duration: 1.1, ease: "back.out(1.4)",
        immediateRender: false, clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: ".prize-total", start: "top 85%", once: true },
      });
      gsap.fromTo(".prize-total > svg", { rotation: -20, scale: 0.4 }, {
        rotation: 0, scale: 1, duration: 0.9, ease: "elastic.out(1,0.5)", immediateRender: false,
        scrollTrigger: { trigger: ".prize-total", start: "top 80%", once: true },
      });
      gsap.utils.toArray<HTMLElement>(".prize-counter", root).forEach((element) => {
        const original = element.textContent;
        const count = { value: 0 };
        const amount = Number(element.dataset.amount);
        gsap.to(count, {
          value: amount, duration: 1.8, ease: "power2.out", snap: { value: 1 },
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
          onUpdate: () => { element.textContent = `₹${Math.round(count.value).toLocaleString("en-IN")}`; },
          onComplete: () => { element.textContent = original; },
        });
        cleanups.push(() => { element.textContent = original; });
      });
      gsap.fromTo(".steps li", { y: 45, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 0.75, stagger: 0.17, ease: "power3.out", immediateRender: false,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: ".steps", start: "top 88%", once: true },
      });
      gsap.fromTo(".timeline-progress > span", { scaleX: 0 }, {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: ".timeline-section", start: "top 65%", end: "bottom 65%", scrub: 0.6 },
      });
      gsap.fromTo(".register-section h2", { y: 65, scale: 0.92, autoAlpha: 0 }, {
        y: 0, scale: 1, autoAlpha: 1, duration: 1, ease: "expo.out", immediateRender: false,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: ".register-section", start: "top 80%", once: true },
      });
      gsap.to(".cta-star", { rotation: 180, ease: "none", scrollTrigger: { trigger: ".register-section", start: "top bottom", end: "bottom top", scrub: 1 } });

      document.fonts.ready.then(() => { if (active) ScrollTrigger.refresh(); });
      return () => {
        active = false;
        cleanups.forEach((cleanup) => cleanup());
      };
    }, root);

    media.add("(min-width: 1001px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", (context) => {
      const cleanups: (() => void)[] = [];
      gsap.to(".hero-art", { y: -45, ease: "none", scrollTrigger: { trigger: ".hero-grid", start: "top top", end: "bottom top", scrub: 1 } });

      gsap.utils.toArray<HTMLElement>(".track-card", root).forEach((card, index) => {
        const content = card.querySelector(".track-top");
        const x = gsap.quickTo(content, "x", { duration: 0.4, ease: "power3.out" });
        const y = gsap.quickTo(content, "y", { duration: 0.4, ease: "power3.out" });
        const move = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          x(((event.clientX - bounds.left) / bounds.width - 0.5) * 18);
          y(((event.clientY - bounds.top) / bounds.height - 0.5) * 12);
        };
        context.add(`enterCard${index}`, () => gsap.to(card, { "--card-rotation": index % 2 ? "1.5deg" : "-1.5deg", "--card-lift": "-9px", duration: 0.35, ease: "power2.out", overwrite: "auto" }));
        context.add(`leaveCard${index}`, () => {
          x(0); y(0);
          gsap.to(card, { "--card-rotation": "0deg", "--card-lift": "0px", duration: 0.5, ease: "elastic.out(1,0.6)", overwrite: "auto" });
        });
        const enter = () => context[`enterCard${index}`]();
        const leave = () => context[`leaveCard${index}`]();
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerenter", enter);
        card.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerenter", enter);
          card.removeEventListener("pointerleave", leave);
        });
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    }, root);
    return () => media.revert();
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
