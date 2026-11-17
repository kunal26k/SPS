"use client";

import { useEffect } from "react";

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * Motion for the Home "Programs" section: reveal-on-view, header-square scroll parallax and
 * pointer-attracted ("magnetic") squares on each program card. Markup and styling live in
 * src/site/home/content.html and page.css; this only sets classes and CSS variables.
 */
export function ProgramsMotion() {
  useEffect(() => {
    const root = document.getElementById("academics");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // Reveal on view (once).
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-pg-reveal]"));
    if (reduce || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("pg-in"));
    } else {
      root.classList.add("pg-armed");
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("pg-in");
              io.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -60px 0px" },
      );
      targets.forEach((el) => io.observe(el));
      cleanups.push(() => {
        io.disconnect();
        root.classList.remove("pg-armed");
      });
    }

    if (!reduce) {
      let raf = 0;
      const schedule = () => {
        if (!raf) raf = requestAnimationFrame(tick);
      };

      // Parallax squares.
      const squares = Array.from(root.querySelectorAll<HTMLElement>(".pg-sq"));
      const sqCur = squares.map(() => 0);
      let progress = 0;
      const readProgress = () => {
        const rect = root.getBoundingClientRect();
        const vh = window.innerHeight;
        progress = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
        schedule();
      };

      // Magnetic squares.
      type Mag = { el: HTMLElement; cx: number; cy: number; card: Card };
      type Card = { px: number; py: number };
      const mags: Mag[] = [];
      root.querySelectorAll<HTMLElement>(".pg-card").forEach((card) => {
        const state: Card = { px: 0.5, py: 0.5 };
        card.querySelectorAll<HTMLElement>(".pg-mag").forEach((el) => mags.push({ el, cx: 0, cy: 0, card: state }));
        const move = (e: PointerEvent) => {
          if (e.pointerType === "touch") return;
          const r = card.getBoundingClientRect();
          state.px = clamp((e.clientX - r.left) / r.width, 0, 1);
          state.py = clamp((e.clientY - r.top) / r.height, 0, 1);
          schedule();
        };
        const leave = () => {
          state.px = 0.5;
          state.py = 0.5;
          schedule();
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        });
      });

      function tick() {
        raf = 0;
        let busy = false;
        squares.forEach((el, i) => {
          const target = -(80 + i * 30) * progress;
          const d = target - sqCur[i];
          if (Math.abs(d) > 0.1) {
            sqCur[i] += d * 0.12;
            busy = true;
          } else sqCur[i] = target;
          el.style.setProperty("--py", `${sqCur[i].toFixed(2)}px`);
        });
        for (const m of mags) {
          const tx = (m.card.px - 0.5) * 40;
          const ty = (m.card.py - 0.5) * 40;
          const dx = tx - m.cx;
          const dy = ty - m.cy;
          if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
            m.cx += dx * 0.12;
            m.cy += dy * 0.12;
            busy = true;
          } else {
            m.cx = tx;
            m.cy = ty;
          }
          m.el.style.setProperty("--mx", `${m.cx.toFixed(2)}px`);
          m.el.style.setProperty("--my", `${m.cy.toFixed(2)}px`);
        }
        if (busy) raf = requestAnimationFrame(tick);
      }

      window.addEventListener("scroll", readProgress, { passive: true });
      window.addEventListener("resize", readProgress);
      readProgress();
      cleanups.push(() => {
        window.removeEventListener("scroll", readProgress);
        window.removeEventListener("resize", readProgress);
        if (raf) cancelAnimationFrame(raf);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
