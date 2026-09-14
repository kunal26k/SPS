import type { Metadata } from "next";
import { FeedbackForm } from "@/components/feedback-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
// Shell CSS is imported here, not in the root layout, so it never styles the imported design screens.
import "./site-shell.css";
import "./about.css";

export const metadata: Metadata = {
  title: "About — Sharda Public School",
};

const keyDates = [
  { k: "Form opens", v: "15 Nov 2025" },
  { k: "Form closes", v: "10 Jan 2026" },
  { k: "Assessments", v: "Feb 2026" },
  { k: "Result", v: "Mar 2026" },
];

const steps: { num: string; meta: string; title: string; body: string; list?: string[] }[] = [
  {
    num: "01",
    meta: "Step One · 5 minutes",
    title: "Enquire online or by phone.",
    body: "Tell us about your child — current grade, previous school, any specific needs. Our admissions team replies within one working day with a campus-visit invitation.",
    list: ["Email: admissions@shardaschool.in", "Phone: +91 94120 09988"],
  },
  {
    num: "02",
    meta: "Step Two · ~2 hours on campus",
    title: "Visit the campus and meet a counsellor.",
    body: "A walk-through of the academic blocks, hostels and grounds, followed by a 30-minute conversation with one of our admissions counsellors and, where appropriate, the relevant Head of School.",
  },
  {
    num: "03",
    meta: "Step Three · 15 days to compile",
    title: "Submit the application form & documents.",
    body: "Forms are filled online; supporting documents may be submitted in person or scanned by email.",
    list: [
      "Birth certificate & recent photograph",
      "Last two years of school report cards",
      "Aadhaar / passport copy of student and parents",
      "Transfer Certificate (if currently enrolled elsewhere)",
    ],
  },
  {
    num: "04",
    meta: "Step Four · One day on campus",
    title: "Assessment & family interview.",
    body: "For Nursery–II, a play-based assessment with the child and a short conversation with parents. For higher grades, a written assessment in English, Mathematics and a subject of choice, followed by a faculty interview.",
  },
  {
    num: "05",
    meta: "Step Five · Within 14 days",
    title: "Offer of admission & enrolment.",
    body: "Successful candidates receive a written offer with fee details. Enrolment is confirmed on payment of the first-term fee within 14 days. Scholarships, if applicable, are communicated alongside the offer.",
  },
];

const helpLines = [
  { icon: "A", name: "Admissions Desk", sub: "Forms, fees, assessments, scholarships", num: "+91 94120 09988" },
  { icon: "F", name: "Fees & Accounts", sub: "Invoices, refunds, payment plans", num: "+91 5962 231 105" },
  { icon: "T", name: "Transport & Hostel", sub: "Bus routes, boarding, day-stay", num: "+91 5962 231 107" },
  { icon: "E", name: "Exams & Records", sub: "Mark sheets, transfer certificates", num: "+91 5962 231 108" },
  { icon: "!", name: "Emergency / After-hours", sub: "Medical, hostel, urgent only", num: "+91 94120 11122" },
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
        <section className="contact-section" id="contact">
          <div className="sec-head-row">
            <div>
              <div className="sec-eyebrow">School Contact</div>
              <h2 className="sec-title">Reach the front office.</h2>
              <p className="sec-intro">
                Our office is open through the academic year. For admissions specifically, please use the dedicated
                admissions desk number below.
              </p>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Sharda Public School</h3>
              <div className="sub">Front Office &amp; General Enquiries</div>
              <div className="contact-rows">
                <div className="crow">
                  <div className="lbl">Address</div>
                  <div className="val">
                    <span className="strong">Sharda Public School</span>
                    Deodar Estate, Bright End Corner Road,
                    <br />
                    Almora — 263601, Uttarakhand, India
                    <small>Approx. 2 km from Almora town centre.</small>
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Phone</div>
                  <div className="val">
                    <a href="tel:+915962231100">+91 5962 231 100</a> &nbsp;·&nbsp;{" "}
                    <a href="tel:+915962231101">+91 5962 231 101</a>
                    <small>Mon – Sat, 8:30 am – 4:30 pm IST</small>
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Email</div>
                  <div className="val">
                    <a href="mailto:office@shardaschool.in">office@shardaschool.in</a>
                    <small>Replies within one working day.</small>
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Admissions</div>
                  <div className="val">
                    <a href="mailto:admissions@shardaschool.in">admissions@shardaschool.in</a> &nbsp;·&nbsp;{" "}
                    <a href="tel:+919412009988">+91 94120 09988</a>
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Hours</div>
                  <div className="val">
                    Monday – Friday &nbsp; 8:00 am – 4:30 pm
                    <br />
                    Saturday &nbsp; 8:00 am – 1:00 pm
                    <br />
                    <small>Closed on Sundays and gazetted holidays.</small>
                  </div>
                </div>
                <div className="crow">
                  <div className="lbl">Affiliation</div>
                  <div className="val">
                    <span className="strong">Central Board of Secondary Education</span>
                    CBSE Affiliation No. 3530142
                    <small>Senior Secondary, recognized since 1989.</small>
                  </div>
                </div>
              </div>
            </div>

            <aside className="map-card">
              <div className="pin">◉ Almora · 1,651 m</div>
              <h4>Find us in the hills.</h4>
              <p>
                A 5-minute drive from Mall Road. Visitor parking available at the lower gate; please report to security
                before entering campus.
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
                <span>Map Placeholder · Replace with embed</span>
              </div>
              <div className="map-meta">
                <div>
                  <div className="k">Coordinates</div>
                  <div className="v">29.5971° N, 79.6593° E</div>
                </div>
                <div>
                  <div className="k">Nearest Airport</div>
                  <div className="v">Pantnagar (PGH) · 134 km</div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ═══ PRINCIPAL ═══ */}
        <section className="principal-section" id="principal">
          <div className="sec-head-row">
            <div>
              <div className="sec-eyebrow">Principal&apos;s Office</div>
              <h2 className="sec-title">A word from our Principal.</h2>
            </div>
          </div>

          <div className="principal-grid">
            <div className="pp-portrait">
              <div className="pp-name-card">
                <div className="nm">Dr. Anjali Pant</div>
                <div className="ti">Principal · Since 2017</div>
              </div>
            </div>
            <div className="pp-body">
              <blockquote className="pp-quote">
                &quot;We do not merely prepare children for examinations — we prepare them to think, to lead, and to
                live with conscience among the mountains and beyond.&quot;
              </blockquote>
              <p className="pp-text">
                Dr. Pant has led Sharda Public School since 2017, bringing to it twenty-three years of experience across
                CBSE and IB schools in Dehradun, Mussoorie and Pune. She holds a doctorate in Educational Leadership
                from Punjab University and is a regular contributor to national curriculum advisory boards.
              </p>
              <p className="pp-text">
                The Principal&apos;s office is open to parents, students and prospective families by prior
                appointment. Please write or call ahead — Dr. Pant prefers conversations she can give her full attention
                to.
              </p>

              <div className="pp-contact">
                <div>
                  <div className="k">Direct Email</div>
                  <div className="v">
                    <a href="mailto:principal@shardaschool.in">principal@shardaschool.in</a>
                  </div>
                </div>
                <div>
                  <div className="k">PA / Office</div>
                  <div className="v">+91 5962 231 110</div>
                </div>
                <div>
                  <div className="k">Open Hours</div>
                  <div className="v">Tue &amp; Thu · 11 am – 1 pm</div>
                </div>
              </div>

              <div className="pp-cta">
                <a href="mailto:principal@shardaschool.in">Request an appointment →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ADMISSIONS ═══ */}
        <section className="adm-section" id="admissions">
          <div className="sec-head-row">
            <div>
              <div className="sec-eyebrow">How to Get Admission</div>
              <h2 className="sec-title">Five steps from enquiry to enrolment.</h2>
              <p className="sec-intro">
                Admissions for the 2026–27 session open in November 2025. We admit roughly 280 students across grades;
                entry into Nursery, Class VI and Class XI is most competitive.
              </p>
            </div>
          </div>

          <div className="adm-grid">
            <aside className="adm-aside">
              <h4>Key dates</h4>
              <p>
                The numbers most parents ask about, kept in one place. Fees shown are annual and include tuition, library
                and lab.
              </p>
              <div className="adm-key">
                {keyDates.map((d) => (
                  <div className="adm-key-row" key={d.k}>
                    <span className="k">{d.k}</span>
                    <span className="v">{d.v}</span>
                  </div>
                ))}
              </div>
              <a href="mailto:admissions@shardaschool.in" className="btn">
                Start your application
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
                    {s.list && (
                      <ul>
                        {s.list.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HELP & FEEDBACK ═══ */}
        <section className="twocol-section" id="help">
          <div className="twocol">
            <div className="help-card">
              <div className="sec-eyebrow">Help &amp; Support</div>
              <h3 className="card-title">Who to call for what.</h3>
              <p className="card-sub">
                Five direct lines so your enquiry reaches the right person on the first ring. Lines are staffed Mon–Sat,
                8:30 am – 4:30 pm.
              </p>

              <div className="help-list">
                {helpLines.map((h) => (
                  <div className="help-row" key={h.name}>
                    <div className="help-icon">{h.icon}</div>
                    <div className="name">
                      {h.name}
                      <small>{h.sub}</small>
                    </div>
                    <div className="num">{h.num}</div>
                  </div>
                ))}
              </div>

              <div className="help-extra">
                <div className="k">Can&apos;t find what you need?</div>
                <div className="v">
                  Write to <a href="mailto:help@shardaschool.in">help@shardaschool.in</a> — every email is read by a
                  person and routed within four working hours.
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
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="testi-section" id="testimonials">
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
        </section>

        {/* ═══ CTA STRIP ═══ */}
        <div className="cta-strip">
          <h3>
            Still have questions? <em>We&apos;d rather you ask</em> than wonder.
          </h3>
          <a href="mailto:admissions@shardaschool.in">Talk to admissions</a>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
