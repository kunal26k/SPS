import Link from "next/link";

const columns = [
  {
    title: "About",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/about#principal", label: "Principal's Office" },
      { href: "/about#testimonials", label: "Testimonials" },
      { href: "/#gallery", label: "Gallery" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { href: "/about#admissions", label: "How to Apply" },
      { href: "/about#admissions", label: "Key Dates" },
      { href: "/about#admissions", label: "Scholarships" },
      { href: "/about#contact", label: "Contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/about#help", label: "Help Desk" },
      { href: "/about#help", label: "Give Feedback" },
      { href: "/student-portal", label: "Student Portal" },
      { href: "/teacher-portal", label: "Teacher Portal" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/SPS-crest.png" alt="Sharda Public School" />
          <p>
            Sharda Public School stands in the ancient Deodar forests of Almora, Uttarakhand — a school of
            excellence, character, and Himalayan spirit.
          </p>
          <p className="footer-affil">CBSE Affiliated · Almora, Uttarakhand, India</p>
        </div>
        {columns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h5>{col.title}</h5>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2026 Sharda Public School, Almora, Uttarakhand. All rights reserved.</p>
        <div className="footer-motto">Learn • Excel • Perform</div>
      </div>
    </footer>
  );
}
