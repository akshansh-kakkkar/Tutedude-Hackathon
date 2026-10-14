"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export default function AnimatedFaq({ question, children }: { question: string; children: ReactNode }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const expandedRef = useRef(false);

  function toggle(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    const details = detailsRef.current;
    const summary = details?.querySelector("summary");
    if (!details || !summary) return;

    const startHeight = details.getBoundingClientRect().height;
    animationRef.current?.cancel();
    const expanded = !expandedRef.current;
    expandedRef.current = expanded;
    details.dataset.expanded = String(expanded);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      details.open = expanded;
      details.style.height = "";
      details.style.overflow = "";
      return;
    }

    // Keep content mounted until the closing animation finishes.
    details.open = true;
    details.style.height = "";
    const styles = getComputedStyle(details);
    const borders = parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);
    const endHeight = expanded
      ? details.getBoundingClientRect().height
      : summary.getBoundingClientRect().height + borders;
    details.style.overflow = "hidden";
    const animation = details.animate(
      { height: [`${startHeight}px`, `${endHeight}px`] },
      { duration: 300, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
    animationRef.current = animation;
    animation.onfinish = () => {
      if (animationRef.current !== animation) return;
      details.open = expanded;
      details.style.height = "";
      details.style.overflow = "";
      animationRef.current = null;
    };
  }

  return (
    <details className="animated-faq" ref={detailsRef} data-expanded="false">
      <summary onClick={toggle}>{question}<span aria-hidden="true">+</span></summary>
      <div className="faq-answer"><p>{children}</p></div>
    </details>
  );
}
