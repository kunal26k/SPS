"use client";

import { useEffect } from "react";

const chevron =
  '<svg class="acc-chev" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/** Heading text for the bar; a <br> in the heading becomes a space ("Unlike<br>Any Other"). */
export const headingText = (h: Element) => {
  const copy = h.cloneNode(true) as Element;
  copy.querySelectorAll("br").forEach((br) => br.replaceWith(" "));
  return copy.textContent?.replace(/\s+/g, " ").trim() ?? "";
};

const escapeHtml = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

/** Opens the section that holds the element a #hash points to, so in-page links land on open content. */
export function openSectionForHash(hash: string) {
  if (!hash || hash === "#") return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  const section = target?.closest<HTMLElement>("section[data-acc-ready]");
  if (section && !section.classList.contains("acc-open")) {
    section.classList.add("acc-open");
    section.querySelector(".acc-toggle")?.setAttribute("aria-expanded", "true");
  }
}

type Props = {
  /** The data-site-page wrapper whose top-level sections become accordions. */
  page: string;
  /** Comma-separated section ids that stay expanded (e.g. Home's hero). */
  skip?: string;
};

// Mobile/tablet accordion for the design-markup pages (Home, Academics, Admissions),
// ported from the script in design/*.html. The markup is rendered as HTML, not by
// React, so moving section children into the accordion body is safe.
export function SiteAccordion({ page, skip = "" }: Props) {
  useEffect(() => {
    const root = document.querySelector(`[data-site-page="${page}"]`);
    if (!root) return;
    const skipIds = skip.split(",").filter(Boolean);
    let first = true;
    root.querySelectorAll<HTMLElement>(":scope > section[id]").forEach((sec) => {
      if (sec.dataset.accReady || skipIds.includes(sec.id)) return;
      sec.dataset.accReady = "1";
      const heading = sec.querySelector("h1,h2,h3");
      // Sections without an h1–h3 (Home's principal message) use their small section label.
      const eyebrow = sec.querySelector(".section-label, .sec-eyebrow");
      const label = (heading && headingText(heading)) || (eyebrow && headingText(eyebrow)) || sec.id;
      heading?.classList.add("acc-src-heading");
      const desc = sec.querySelector("p")?.textContent?.trim().replace(/\s+/g, " ").slice(0, 140) ?? "";
      const thumb = sec.querySelector("img")?.getAttribute("src");

      const body = document.createElement("div");
      body.className = "acc-body";
      body.id = `${sec.id}-panel`;
      while (sec.firstChild) body.appendChild(sec.firstChild);

      const bar = document.createElement("button");
      bar.type = "button";
      bar.className = "acc-toggle";
      bar.setAttribute("aria-controls", body.id);
      bar.innerHTML =
        (thumb ? `<img class="acc-thumb" src="${escapeHtml(thumb)}" alt="" />` : "") +
        `<span class="acc-text"><span class="acc-label">${escapeHtml(label)}</span>` +
        (desc ? `<span class="acc-desc">${escapeHtml(desc)}</span>` : "") +
        `</span>${chevron}`;
      bar.addEventListener("click", () => {
        const open = sec.classList.toggle("acc-open");
        bar.setAttribute("aria-expanded", String(open));
      });

      sec.appendChild(body);
      sec.insertBefore(bar, body);
      if (first) sec.classList.add("acc-open");
      bar.setAttribute("aria-expanded", String(first));
      first = false;
    });

    openSectionForHash(location.hash);
    const onHash = () => openSectionForHash(location.hash);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (a && a.pathname === location.pathname) openSectionForHash(a.hash);
    };
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onClick);
    };
  }, [page, skip]);

  return null;
}
