"use client";

// Shared website nav. Plain <a> links: each page is a full load with its own page CSS.
import { useEffect, useState } from "react";
import { siteLinks } from "@/site/links";

type Props = {
  active: string;
  /** Transparent over a full-bleed hero until the page scrolls (Home). */
  overHero?: boolean;
};

export function SiteNav({ active, overHero = false }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const className = ["site-nav", overHero && "over-hero", scrolled && "scrolled", open && "menu-open"]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={className} aria-label="Main">
      <a href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/uploads/SPS-crest.png" alt="Sharda Public School" />
        <div className="nav-brand">
          <span className="name">Sharda Public School</span>
          <span className="motto">Learn • Excel • Perform</span>
        </div>
      </a>
      <div className={open ? "nav-center open" : "nav-center"}>
        <ul className="nav-links">
          {siteLinks.map((l) => (
            <li key={l.href} className={l.href === active ? "active" : undefined}>
              <a href={l.href} aria-current={l.href === active ? "page" : undefined} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a href="/admissions#enquire" className="nav-apply">
        Apply Now
      </a>
      <button
        type="button"
        className="nav-burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
