"use client";

import Link from "next/link";
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
      <Link href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/SPS-crest.png" alt="Sharda Public School" />
        <div className="nav-brand">
          <span className="name">Sharda Public School</span>
          <span className="motto">Learn • Excel • Perform</span>
        </div>
      </Link>
      <div className={open ? "nav-center open" : "nav-center"}>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href} className={l.href === active ? "active" : undefined}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/about#admissions" className="nav-apply">
        Apply Now
      </Link>
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
