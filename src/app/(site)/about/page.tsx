import type { Metadata } from "next";
import { AccordionSection } from "@/components/accordion-section";
import { FeedbackForm } from "@/components/feedback-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
// About-only tokens and base styles; the shared nav and footer come from src/site/shell.css.
import "./site-shell.css";
import "./about.css";
import { school } from "@/site/school";

export const metadata: Metadata = {
  title: "About — Sharda Public School",
};

const keyFacts = [
  { k: "Session", v: "2025–26" },
  { k: "Classes open", v: "Nursery – XI" },
  { k: "Office hours", v: "Mon–Sat · 8:30–2:30" },
  { k: "Where", v: "Senior Branch" },
];

// school-data.json → admissions.process; the full guide lives on /admissions.
const steps = [
  { num: "01", meta: "Step One", title: "Enquiry & school visit.", body: "Visit our campus or connect with us to understand our programs and environment." },
  { num: "02", meta: "Step Two", title: "Registration.", body: "Collect the admission form and submit it with the required documents." },
  { num: "03", meta: "Step Three", title: "Interaction / assessment.", body: "A brief, age-appropriate interaction or assessment to understand class readiness." },
  { num: "04", meta: "Step Four", title: "Verification & confirmation.", body: "Admission is finalised after document verification and fee submission." },
];

const helpLines = [
  { icon: "A", name: "Admissions", sub: "Enquiries, visits, forms · also on WhatsApp", num: school.phones.admissions.label, tel: school.phones.admissions.tel },
  { icon: "O", name: "School Office", sub: "General enquiries", num: school.phones.office[0].label, tel: school.phones.office[0].tel },
  { icon: "O", name: "School Office", sub: "Alternate line", num: school.phones.office[1].label, tel: school.phones.office[1].tel },
  { icon: "O", name: "School Office", sub: "Alternate line", num: school.phones.office[2].label, tel: school.phones.office[2].tel },
];

const testimonials: { stars: string; quote: string; initials: string; tone?: "amber" | "navy"; name: string; role: string }[] = [
  {
    stars: "★ ★ ★ ★ ★",
    quote:
      "What sets Sharda apart isn't the mountains — it's how the teachers know every child. Our daughter went from anxious about Maths to leading her class quiz team in two years.",
    initials: "RK",
    name: "Reema & Karan Bisht",
    role: "Parents · Class VII & Class III",
  },
  {
    stars: "★ ★ ★ ★ ★",
    quote:
      "The Himalayan Education programme isn't a gimmick. Six days at base camp taught me more about leadership and patience than any classroom ever did. I miss the school every day at college.",
    initials: "AT",
    tone: "amber",
    name: "Aarav Tiwari",
    role: "Alumnus · Class of 2024 · IIT Roorkee",
  },
  {
    stars: "★ ★ ★ ★ ★",
    quote:
      "Admissions was the most respectful process I've been through as a parent. No hidden fees, no donations, just a quiet conversation about what's right for my son. That alone told me a lot about the school.",
    initials: "MS",
    tone: "navy",
    name: "Meera Shah",
    role: "Parent · Class XI (new admit)",
  },
  {
    stars: "★ ★ ★ ★ ☆",
    quote:
      "Teaching here for nine years has been the steadiest, most dignified work of my career. The school protects classroom time fiercely, and that lets us actually teach.",
    initials: "PJ",
    name: "Prof. Padmini Joshi",
    role: "Faculty · Department of Literature",
  },
  {
    stars: "★ ★ ★ ★ ★",
    quote:
      "I came for the boarding and stayed for the choir. Every house sings on Founder's Day and I still cry when I hear our school song. Sharda is a place that holds you, gently.",
    initials: "SN",
    tone: "amber",
    name: "Saachi Negi",
    role: "Class XII · Boarder since Class VI",
  },
  {
    stars: "★ ★ ★ ★ ★",
    quote:
      "We compared four schools across Uttarakhand. Sharda was the only one where the Principal sat down with us herself, asked about our son's hobbies, and remembered his name when we visited again three months later.",
    initials: "VR",
    tone: "navy",
    name: "Vikram Rawat",
    role: "Parent · Class IV",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav active="/about" />

      <main className="about">
        {/* ═══ PAGE HEAD ═══ */}
        <header className="page-head">
          <div className="crumb">Home / About</div>
          <h1>A school of excellence in the Deodar forests of Almora.</h1>
          <p className="lede">
            Everything you need to know about Sharda Public School — how to reach us, who leads us, how admissions
            work, and what our families and alumni have to say.
          </p>
        </header>

        {/* ═══ SCHOOL CONTACT ═══ */}
        <AccordionSection id="contact" className="contact-section" defaultOpen>
          <div className="sec-head-row">
            <div>
              <div className="sec-eyebrow">School Contact</div>
              <h2 className="sec-title">Reach the front office.</h2>
              <p className="sec-intro">
                Two campuses, one front office. For admissions, call or WhatsApp the admissions number, or visit the
                Senior Branch during office hours.
              </p>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Sharda Public School</h3>
              <div className="sub">Front Office &amp; General Enquiries</div>
              <div className="contact-rows">
                <div className="crow">
                  <div className="lbl">Junior Branch</div>
                  <div className="val">
                    <span className="strong">Nursery – Class V</span>
                    Khatyari, Khagmara Kote,
                    <br />
                    Almora — 263601, Uttarakhand
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Senior Branch</div>
                  <div className="val">
                    <span className="strong">Class VI – XII</span>
                    Near Circuit House, Dugalkhola,
                    <br />
                    Almora — 263601, Uttarakhand
                    <small>The admissions office is at the Senior Branch.</small>
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Phone</div>
                  <div className="val">
                    <a href={school.phones.admissions.tel}>{school.phones.admissions.label}</a> &nbsp;·&nbsp;{" "}
                    <a href={school.phones.office[0].tel}>{school.phones.office[0].label}</a>
                    <small>Also {school.phones.office[1].label} and {school.phones.office[2].label}</small>
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Email</div>
                  <div className="val">
                    <a href={`mailto:${school.email.general}`}>{school.email.general}</a>
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Admissions</div>
                  <div className="val">
                    <a href={`mailto:${school.email.admissions}`}>{school.email.admissions}</a>
                    <small>{school.admissionHours}</small>
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Affiliation</div>
                  <div className="val">
                    <span className="strong">Central Board of Secondary Education</span>
                    CBSE Affiliation No. {school.affiliationNumber}
                    <small>Established {school.established} · Nursery to Class XII</small>
                  </div>
                </div>
              </div>
            </div>

            <aside className="map-card">
              <div className="pin">◉ Almora · Kumaon</div>
              <h4>Find us in the hills.</h4>
              <p>
                Two campuses in Almora: the Junior Branch at Khatyari for Nursery to Class V, and the Senior Branch near
                Circuit House, Dugalkhola, for Classes VI to XII. Admissions visits are at the Senior Branch.
              </p>
              <div className="map-svg-wrap">
                <svg viewBox="0 0 300 180" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.4" />
                    </pattern>
                  </defs>
                  <rect width="300" height="180" fill="url(#grid)" />
                  <path d="M 0 110 Q 80 60 160 90 T 300 70" stroke="rgba(232,160,48,0.7)" strokeWidth="1.5" fill="none" />
                  <circle cx="160" cy="90" r="6" fill="rgba(232,160,48,0.9)" />
                  <circle cx="160" cy="90" r="14" fill="none" stroke="rgba(232,160,48,0.4)" strokeWidth="1" />
                </svg>
                <span>Khatyari · Dugalkhola · Almora</span>
              </div>
              <div className="map-meta">
                <div>
                  <div className="k">Junior Branch</div>
                  <div className="v">Khatyari · Nursery–V</div>
                </div>
                <div>
                  <div className="k">Senior Branch</div>
                  <div className="v">Dugalkhola · VI–XII</div>
                </div>
              </div>
            </aside>
          </div>
        </AccordionSection>

        {/* ═══ PRINCIPAL ═══ */}
        <AccordionSection id="principal" className="principal-section">
          <div className="sec-head-row">
            <div>
              <div className="sec-eyebrow">Principal&apos;s Office</div>
              <h2 className="sec-title">A word from our Principal.</h2>
            </div>
          </div>

          <div className="principal-grid">
            <div className="pp-portrait">
              <div className="pp-name-card">
                <div className="nm">{school.principal}</div>
                <div className="ti">Principal</div>
              </div>
            </div>
            <div className="pp-body">
              {/* Verbatim from the Principal's message (school-data.json → leadership.principal). */}
              <blockquote className="pp-quote">
                &quot;I assure that the doors of our Institution will always be open to both students and their
                parents.&quot;
              </blockquote>
              <p className="pp-text">
                It is both an honour and a privilege to serve as the Principal of Sharda Public School, an esteemed
                institution renowned for its commitment to excellence and its continuous efforts to establish the
                highest standards of education in Almora.
              </p>
              <p className="pp-text">
                In addition to my goal of being an effective administrator, I aspire to be a trusted mentor, friend,
                philosopher, and guide to our students — someone they can rely on and trust as they grow and realise
                their potential in various fields of education.
              </p>

              <div className="pp-contact">
                <div>
                  <div className="k">Email</div>
                  <div className="v">
                    <a href={`mailto:${school.email.general}`}>{school.email.general}</a>
                  </div>
                </div>
                <div>
                  <div className="k">School Office</div>
                  <div className="v">{school.phones.office[0].label}</div>
                </div>
                <div>
                  <div className="k">Meetings</div>
                  <div className="v">By appointment</div>
                </div>
              </div>

              <div className="pp-cta">
                <a href={`mailto:${school.email.general}`}>Request an appointment →</a>
              </div>
            </div>
          </div>
        </AccordionSection>

        {/* ═══ ADMISSIONS ═══ */}
        <AccordionSection id="admissions" className="adm-section">
          <div className="sec-head-row">
            <div>
              <div className="sec-eyebrow">How to Get Admission</div>
              <h2 className="sec-title">Four steps from enquiry to enrolment.</h2>
              <p className="sec-intro">
                Admissions for Session 2025–26 are open from Nursery to Class XI. Age criteria, what happens on
                assessment day, fees and FAQs are all on the admissions page.
              </p>
            </div>
          </div>

          <div className="adm-grid">
            <aside className="adm-aside">
              <h4>At a glance</h4>
              <p>The admissions office is at the Senior Branch, near Circuit House, Dugalkhola. Walk-ins are welcome; a call or WhatsApp lets us arrange a teacher and a class to visit.</p>
              <div className="adm-key">
                {keyFacts.map((d) => (
                  <div className="adm-key-row" key={d.k}>
                    <span className="k">{d.k}</span>
                    <span className="v">{d.v}</span>
                  </div>
                ))}
              </div>
              <a href="/admissions" className="btn">
                Read the admissions guide
              </a>
            </aside>

            <div className="adm-steps">
              {steps.map((s) => (
                <div className="adm-step" key={s.num}>
                  <div className="num">{s.num}</div>
                  <div>
                    <div className="meta">{s.meta}</div>
                    <h5>{s.title}</h5>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AccordionSection>

        {/* ═══ HELP & FEEDBACK ═══ */}
        <AccordionSection id="help" className="twocol-section">
          <div className="twocol">
            <div className="help-card">
              <div className="sec-eyebrow">Help &amp; Support</div>
              <h3 className="card-title">Who to call for what.</h3>
              <p className="card-sub">
                Call the admissions line for anything about joining SPS, or the school office for everything else.
                Admissions office hours: {school.admissionHours}.
              </p>

              <div className="help-list">
                {helpLines.map((h) => (
                  <div className="help-row" key={h.num}>
                    <div className="help-icon">{h.icon}</div>
                    <div className="name">
                      {h.name}
                      <small>{h.sub}</small>
                    </div>
                    <a className="num" href={h.tel}>
                      {h.num}
                    </a>
                  </div>
                ))}
              </div>

              <div className="help-extra">
                <div className="k">Can&apos;t find what you need?</div>
                <div className="v">
                  Write to <a href={`mailto:${school.email.general}`}>{school.email.general}</a> — every email is read by a
                  person and routed to the right office.
                </div>
              </div>
            </div>

            <div className="fb-card">
              <div className="sec-eyebrow">Give Feedback</div>
              <h3 className="card-title">Tell us how we&apos;re doing.</h3>
              <p className="card-sub">
                Compliments, complaints, suggestions — all of it goes to the Principal&apos;s office and the relevant
                Head of School. We respond to every signed message within five working days.
              </p>
              <FeedbackForm />
            </div>
          </div>
        </AccordionSection>

        {/* ═══ TESTIMONIALS ═══ */}
        <AccordionSection id="testimonials" className="testi-section">
          <div className="sec-head-row">
            <div>
              <div className="sec-eyebrow">Testimonials</div>
              <h2 className="sec-title">Voices from our community.</h2>
              <p className="sec-intro">
                Parents, students and alumni in their own words. We pick a fresh set every term — these are from the
                spring of 2026.
              </p>
            </div>
          </div>

          <div className="testi-grid">
            {testimonials.map((t) => (
              <article className="testi" key={t.name}>
                <div className="quote-mark">&quot;</div>
                <div className="stars">{t.stars}</div>
                <blockquote>{t.quote}</blockquote>
                <div className="testi-foot">
                  <div className={t.tone ? `testi-av ${t.tone}` : "testi-av"}>{t.initials}</div>
                  <div className="testi-info">
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </AccordionSection>

        {/* ═══ CTA STRIP ═══ */}
        <div className="cta-strip">
          <h3>
            Still have questions? <em>We&apos;d rather you ask</em> than wonder.
          </h3>
          <a href="/admissions#enquire">Talk to admissions</a>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
