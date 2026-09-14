import { school } from "@/site/school";
import { siteLinks } from "@/site/links";

const admissions = [
  { href: "/admissions#why", label: "Why SPS" },
  { href: "/admissions#age", label: "Age criteria" },
  { href: "/admissions#visit", label: "Campus visit" },
  { href: "/admissions#fees", label: "Fees" },
  { href: "/admissions#faq", label: "Admissions FAQ" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/SPS-crest.png" alt="Sharda Public School" />
          <p>
            Sharda Public School stands in the ancient Deodar forests of Almora, Uttarakhand — a school of
            excellence, character, and Himalayan spirit.
          </p>
          <p className="footer-affil">
            CBSE Affiliated · Aff. No. {school.affiliationNumber} · Almora, Uttarakhand · Est. {school.established}
          </p>
        </div>
        <div className="footer-col">
          <h5>Explore</h5>
          <ul>
            {siteLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="/#gallery">Gallery</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Admissions</h5>
          <ul>
            {admissions.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href={school.phones.admissions.tel}>{school.phones.admissions.label}</a>
            </li>
            <li>
              <a href={school.phones.office[0].tel}>{school.phones.office[0].label}</a>
            </li>
            <li>
              <a href={`mailto:${school.email.general}`}>{school.email.general}</a>
            </li>
            <li>
              <a href={`mailto:${school.email.admissions}`}>{school.email.admissions}</a>
            </li>
            <li>
              <a href={school.whatsapp}>WhatsApp us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Sharda Public School, Almora, Uttarakhand. All rights reserved.</p>
        <div className="footer-motto">
          {school.motto} · {school.mottoMeaning}
        </div>
      </div>
    </footer>
  );
}
