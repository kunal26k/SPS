"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { headingText } from "./site-accordion";

type Props = {
  id: string;
  className: string;
  /** Expanded on first load on mobile/tablet (the design opens the first section). */
  defaultOpen?: boolean;
  children: ReactNode;
};

// React version of the design's mobile/tablet section accordion (see site-accordion.tsx),
// for the About page, whose sections React renders. Title, two-line description and
// thumbnail come from the section's own first heading, paragraph and image.
export function AccordionSection({ id, className, defaultOpen = false, children }: Props) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(defaultOpen);
  const [bar, setBar] = useState<{ label: string; desc: string; thumb: string | null }>({ label: "", desc: "", thumb: null });

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const heading = body.querySelector("h1,h2,h3");
    heading?.classList.add("acc-src-heading");
    setBar({
      label: (heading && headingText(heading)) || id,
      desc: body.querySelector("p")?.textContent?.trim().replace(/\s+/g, " ").slice(0, 140) ?? "",
      thumb: body.querySelector("img")?.getAttribute("src") ?? null,
    });
  }, [id]);

  // In-page links (#contact, #admissions …) open the section they point to.
  useEffect(() => {
    const sync = () => {
      const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      if (target && bodyRef.current?.parentElement?.contains(target)) setOpen(true);
    };
    sync();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!a || a.pathname !== location.pathname || !a.hash) return;
      const target = document.getElementById(decodeURIComponent(a.hash.slice(1)));
      if (target && bodyRef.current?.parentElement?.contains(target)) setOpen(true);
    };
    window.addEventListener("hashchange", sync);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", sync);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const classes = [className, open ? "acc-open" : ""].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes} data-acc-ready="1">
      <button
        type="button"
        className="acc-toggle"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((o) => !o)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {bar.thumb && <img className="acc-thumb" src={bar.thumb} alt="" />}
        <span className="acc-text">
          <span className="acc-label">{bar.label}</span>
          {bar.desc && <span className="acc-desc">{bar.desc}</span>}
        </span>
        <svg className="acc-chev" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="acc-body" id={`${id}-panel`} ref={bodyRef}>
        {children}
      </div>
    </section>
  );
}
