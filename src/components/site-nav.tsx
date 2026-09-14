"use client";

// Plain <a> links: every other screen is a full page with its own global CSS.
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/about", label: "About" },
];

export function SiteNav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <a href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/SPS-crest.png" alt="Sharda Public School" />
        <div className="nav-brand">
          <span className="name">Sharda Public School</span>
          <span className="motto">Learn • Excel • Perform</span>
        </div>
      </a>
      <div className={open ? "nav-center open" : "nav-center"}>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href} className={l.href === active ? "active" : undefined}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a href="/about#admissions" className="nav-apply">
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
