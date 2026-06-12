"use client";

import { useEffect } from "react";

/**
 * Adds the `in` class to every `.reveal` element when it scrolls into view,
 * triggering the fade+rise animation. Provides a no-IO fallback that simply
 * shows everything.
 *
 * Also drives `.countup` numbers and `.bar-fill` language bars, mirroring the
 * design prototype's IntersectionObserver behavior.
 */
export function useReveal() {
  useEffect(() => {
    const supportsIO = "IntersectionObserver" in window;

    const countUp = (el: Element) => {
      const target = parseFloat(el.getAttribute("data-count") || "0") || 0;
      const dur = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const prog = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - prog, 3);
        el.textContent = Math.round(target * eased).toString();
        if (prog < 1) requestAnimationFrame(step);
        else el.textContent = target.toString();
      };
      requestAnimationFrame(step);
    };

    if (!supportsIO) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      document
        .querySelectorAll<HTMLElement>(".bar-fill")
        .forEach((el) => (el.style.width = (el.getAttribute("data-level") || 0) + "%"));
      document.querySelectorAll(".countup").forEach((el) => countUp(el));
      return;
    }

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));

    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target);
            countIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll(".countup").forEach((el) => countIO.observe(el));

    const barIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.width = (el.getAttribute("data-level") || 0) + "%";
            barIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll(".bar-fill").forEach((el) => barIO.observe(el));

    return () => {
      revealIO.disconnect();
      countIO.disconnect();
      barIO.disconnect();
    };
  }, []);
}
