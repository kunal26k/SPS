"use client";

// Events & Gallery: month-by-month albums, an album overlay and a lightbox. There are no filters and nothing
// is stored on the visitor's device. Anything that depends on "today" or the URL hash is applied after mount,
// so the server HTML (every album) matches the first render.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent, TouchEvent as ReactTouchEvent } from "react";

export type Photo = { src: string; thumb: string; alt: string; w: number; h: number };
export type Album = {
  id: string;
  title: string;
  cat: string;
  date: string; // YYYY-MM-DD
  desc: string;
  photos: Photo[];
};

const CATS: Record<string, string> = {
  Academic: "#c9dceb",
  Sports: "#cfe3d4",
  Cultural: "#efd9c2",
  Community: "#e3d8cf",
  "Campus Life": "#dde4d6",
};
const FALLBACK_COLOUR = "#cfd9d2";
// Academic-year order (Apr → Mar), as in the design.
const MFULL = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];
const CAL_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const UPCOMING: [string, string][] = [
  ["2026-11-08", "Diwali"],
  ["2026-11-14", "Children's Day"],
  ["2026-12-25", "Christmas"],
  ["2027-01-26", "Republic Day"],
];
const SESSION = "2026–27";
const PAGE = 48;
const NEW_WITHIN_DAYS = 14;

type Ymd = { y: number; m: number; d: number }; // m is 1-12

function parseDate(s: string): Ymd {
  const [y, m, d] = s.split("-").map(Number);
  return { y, m, d };
}
/** Academic month index: 0 = April … 11 = March. */
const acadMonth = (m: number) => (m - 4 + 12) % 12;
const dayNumber = ({ y, m, d }: Ymd) => Date.UTC(y, m - 1, d) / 86400000;
const fmtDate = (s: string) => {
  const { y, m, d } = parseDate(s);
  return `${d} ${CAL_MONTHS[m - 1]} ${y}`;
};
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

const tint = (cat: string) => ({ "--c": CATS[cat] ?? FALLBACK_COLOUR }) as CSSProperties;

const FOCUSABLE = 'a[href], button:not([disabled]), select, input, [tabindex]:not([tabindex="-1"])';
/** Keeps Tab inside a modal dialog. */
function trapTab(e: KeyboardEvent, root: HTMLElement | null) {
  if (e.key !== "Tab" || !root) return;
  const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.getClientRects().length > 0);
  if (!items.length) {
    e.preventDefault();
    root.focus();
    return;
  }
  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement;
  if (!root.contains(active) || (e.shiftKey && (active === first || active === root))) {
    e.preventDefault();
    (e.shiftKey ? last : first).focus();
  } else if (!e.shiftKey && active === last) {
    e.preventDefault();
    first.focus();
  }
}

export function EventsGallery({ albums }: { albums: Album[] }) {
  const [today, setToday] = useState<Ymd | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [shown, setShown] = useState(PAGE);
  const [lb, setLb] = useState(-1);
  const [toast, setToast] = useState<string | null>(null);

  const albumRef = useRef<HTMLDivElement>(null);
  const lbRef = useRef<HTMLDivElement>(null);
  const lbCloseRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const touchX = useRef(0);

  const album = useMemo(() => albums.find((a) => a.id === openId) ?? null, [albums, openId]);
  const lbOpen = lb >= 0 && album !== null;

  const showToast = useCallback((text: string) => {
    setToast(text);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  }, []);

  // After mount: today's date and a deep link (#album-id).
  useEffect(() => {
    const now = new Date();
    setToday({ y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() });
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) {
      if (albums.some((a) => a.id === id)) {
        triggerRef.current = null;
        setOpenId(id);
      } else {
        showToast("That album could not be found.");
      }
    }
    return () => clearTimeout(toastTimer.current);
  }, [albums, showToast]);

  const totalPhotos = useMemo(() => albums.reduce((n, a) => n + a.photos.length, 0), [albums]);

  // Month sections, newest first; albums newest first within a month.
  const byMonth = useMemo(() => {
    const map = new Map<number, Album[]>();
    for (const a of albums) {
      const m = acadMonth(parseDate(a.date).m);
      map.set(m, [...(map.get(m) ?? []), a]);
    }
    for (const arr of map.values()) arr.sort((x, y) => (x.date < y.date ? 1 : x.date > y.date ? -1 : 0));
    return map;
  }, [albums]);
  const monthOrder = useMemo(() => Array.from(byMonth.keys()).sort((a, b) => b - a), [byMonth]);

  const upcoming = useMemo(() => {
    if (!today) return [];
    const iso = `${today.y}-${String(today.m).padStart(2, "0")}-${String(today.d).padStart(2, "0")}`;
    return UPCOMING.filter(([date]) => date >= iso);
  }, [today]);

  const isNew = (a: Album) => {
    if (!today) return false;
    const diff = dayNumber(today) - dayNumber(parseDate(a.date));
    return diff >= 0 && diff <= NEW_WITHIN_DAYS;
  };

  // ---- album overlay ----
  const openAlbum = (id: string, trigger: HTMLElement | null) => {
    triggerRef.current = trigger;
    setShown(PAGE);
    setLb(-1);
    setOpenId(id);
    try {
      window.history.replaceState(null, "", `#${id}`);
    } catch {
      /* ignore */
    }
  };
  const closeAlbum = useCallback(() => {
    setLb(-1);
    setOpenId(null);
    try {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    } catch {
      /* ignore */
    }
    const trigger = triggerRef.current;
    requestAnimationFrame(() => {
      if (trigger && trigger.isConnected) trigger.focus();
    });
  }, []);

  // Body scroll is locked while an album (or the lightbox on top of it) is open.
  useEffect(() => {
    if (!openId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openId]);

  // Focus moves into the dialogs when they open.
  useEffect(() => {
    if (album) albumRef.current?.focus();
  }, [album]);
  useEffect(() => {
    if (lbOpen) lbCloseRef.current?.focus();
  }, [lbOpen]);

  // ---- lightbox ----
  const photos = album?.photos ?? [];
  const openLb = (i: number) => setLb(i);
  const closeLb = useCallback(() => {
    const i = lb;
    setLb(-1);
    requestAnimationFrame(() => albumRef.current?.querySelector<HTMLElement>(`[data-p="${i}"]`)?.focus());
  }, [lb]);
  const step = useCallback(
    (d: number) => {
      const n = photos.length;
      if (!n) return;
      const next = (lb + d + n) % n;
      setLb(next);
      setShown((s) => Math.max(s, next + 1));
    },
    [lb, photos.length],
  );

  // Preload the neighbours of the photo on screen.
  useEffect(() => {
    if (!lbOpen) return;
    for (const d of [1, -1]) {
      const p = photos[(lb + d + photos.length) % photos.length];
      if (p) new Image().src = p.src;
    }
  }, [lbOpen, lb, photos]);

  // Keyboard: arrows and Esc in the lightbox, Esc in the album, Tab trapped in whichever is on top.
  useEffect(() => {
    if (!album) return;
    const onKey = (e: KeyboardEvent) => {
      if (lbOpen) {
        if (e.key === "ArrowLeft") step(-1);
        else if (e.key === "ArrowRight") step(1);
        else if (e.key === "Escape") closeLb();
        else trapTab(e, lbRef.current);
      } else if (e.key === "Escape") closeAlbum();
      else trapTab(e, albumRef.current);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [album, lbOpen, step, closeLb, closeAlbum]);

  const onTouchStart = (e: ReactTouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: ReactTouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
  };

  const jumpToMonth = (m: number) => {
    const el = document.getElementById(`eg-m-${m}`);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 104, behavior: "smooth" });
  };

  const onAlbumKey = (e: ReactKeyboardEvent) => {
    // Keep the page behind the dialog from scrolling with the space bar.
    if (e.key === " " && e.target === e.currentTarget) e.preventDefault();
  };

  const leftToShow = photos.length - shown;
  const current = lbOpen ? photos[lb] : null;

  return (
    <>
      <header className="eg-hero" data-screen-label="Events & Gallery">
        <div className="eg-hero-in">
          <div>
            <div className="eyebrow">Events &amp; Gallery</div>
            <h1>
              A year of <em>moments</em> at SPS
            </h1>
            <p>
              Assemblies, matches, lab sessions and everyday school life, organised by month.
            </p>
          </div>
          <div className="eg-stats">
            <div>
              <b>{albums.length.toLocaleString("en-IN")}</b>
              <span>Albums · {SESSION}</span>
            </div>
            <div>
              <b>{totalPhotos.toLocaleString("en-IN")}</b>
              <span>Photos</span>
            </div>
          </div>
        </div>
      </header>

      {upcoming.length > 0 && (
        <div className="upcoming">
          <div className="upcoming-in">
            <div className="up-label">Coming up</div>
            {upcoming.map(([date, name]) => {
              const { d, m } = parseDate(date);
              return (
                <div className="up-item" key={date}>
                  <div className="up-date">
                    <b>{d}</b>
                    <small>{CAL_MONTHS[m - 1]}</small>
                  </div>
                  <span>{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="main">
        <aside className="rail" aria-label="Months">
          <h6>{SESSION}</h6>
          {[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((m) => {
            const n = byMonth.get(m)?.length ?? 0;
            return (
              <button type="button" key={m} disabled={!n} onClick={() => jumpToMonth(m)}>
                {MFULL[m]}
                <small>{n || ""}</small>
              </button>
            );
          })}
        </aside>
        <div>
          {monthOrder.map((m) => {
              const items = byMonth.get(m) ?? [];
              const photoCount = items.reduce((n, a) => n + a.photos.length, 0);
              const year = parseDate(items[0].date).y;
              return (
                <section className="month" id={`eg-m-${m}`} key={m}>
                  <div className="month-hd">
                    <h2>
                      {MFULL[m]} {year}
                    </h2>
                    <span>
                      {plural(items.length, "album")} · {photoCount.toLocaleString("en-IN")} photos
                    </span>
                  </div>
                  <div className="grid">
                    {items.map((a) => (
                      <button type="button" className="card" key={a.id} onClick={(e) => openAlbum(a.id, e.currentTarget)}>
                        <div className="cover">
                          {[0, 1, 2].map((i) => (
                            <div className="ph" style={tint(a.cat)} key={i}>
                              {a.photos[i] && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={a.photos[i].thumb} alt="" loading="lazy" decoding="async" />
                              )}
                            </div>
                          ))}
                          <span className="badge">{a.cat}</span>
                          <span className="count">{plural(a.photos.length, "photo")}</span>
                        </div>
                        <div className="card-bd">
                          <span className="card-date">
                            {fmtDate(a.date)}
                            {isNew(a) && <span className="new">NEW</span>}
                          </span>
                          <h3>{a.title}</h3>
                          <div className="card-meta">
                            <span>{a.cat}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              );
            })}
        </div>
      </div>

      {album && (
        <div className="album open" ref={albumRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Event album" onKeyDown={onAlbumKey}>
          <div className="album-hd">
            <div className="album-hd-in">
              <button type="button" className="back" onClick={closeAlbum}>
                ← All events
              </button>
              <div className="album-title">
                <h2>{album.title}</h2>
                <p>
                  {fmtDate(album.date)} · {album.cat} · {plural(album.photos.length, "photo")}
                </p>
              </div>
            </div>
          </div>
          <div className="album-bd">
            <div className="album-intro">
              <p>{album.desc}</p>
            </div>
            <div className="pgrid">
              {photos.slice(0, shown).map((p, i) => (
                <button type="button" className="ph" style={tint(album.cat)} key={p.src} data-p={i} aria-label={`Photo ${i + 1}, ${p.alt}`} onClick={() => openLb(i)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.thumb} alt={p.alt} loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
            <div className="more" style={{ marginTop: 24 }}>
              {leftToShow > 0 && (
                <button type="button" className="btn ghost" onClick={() => setShown((s) => s + PAGE)}>
                  Show {Math.min(leftToShow, PAGE)} more photos ({leftToShow} left)
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {album && lbOpen && current && (
        <div className="lb open" ref={lbRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Photo viewer">
          <div className="lb-top">
            <span>
              {album.title} · {lb + 1} / {photos.length}
            </span>
            <div>
              <a className="lb-btn" href={current.src} download={`sps-${album.id}-${String(lb + 1).padStart(2, "0")}.jpg`}>
                Download
              </a>
              <button type="button" className="lb-btn" ref={lbCloseRef} aria-label="Close" onClick={closeLb}>
                ✕
              </button>
            </div>
          </div>
          <div
            className="lb-stage"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLb();
            }}
          >
            <button type="button" className="lb-btn lb-nav prev" aria-label="Previous" onClick={() => step(-1)}>
              ‹
            </button>
            <div className="lb-figure" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="lb-img" src={current.src} alt={current.alt} decoding="async" />
            </div>
            <button type="button" className="lb-btn lb-nav next" aria-label="Next" onClick={() => step(1)}>
              ›
            </button>
          </div>
        </div>
      )}

      <div className={toast ? "toast show" : "toast"} role="status">
        {toast}
      </div>
    </>
  );
}
