import Link from 'next/link'
import Image from 'next/image'
import { SCHOOL, CONTACT, CAMPUSES, NAV_LINKS } from '@/lib/content'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/70" role="contentinfo">
      {/* Gold accent top */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-gold to-green-500" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/images/sps-logo.png"
                alt="Sharda Public School"
                width={140}
                height={70}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-inter text-sm leading-relaxed text-white/55 max-w-xs">
              {SCHOOL.description}
            </p>
            <div>
              <p className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest mb-1">
                {SCHOOL.tagline}
              </p>
              <p className="font-inter text-xs text-white/40 italic">
                "{SCHOOL.motto}" — {SCHOOL.mottoMeaning}
              </p>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-1">
              {[
                { href: CONTACT.social.facebook,  Icon: Facebook,  label: 'Facebook' },
                { href: CONTACT.social.instagram, Icon: Instagram, label: 'Instagram' },
                { href: CONTACT.social.youtube,   Icon: Youtube,   label: 'YouTube' },
                { href: CONTACT.social.linkedin,  Icon: Linkedin,  label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                             hover:border-gold hover:text-gold transition-all duration-200"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-montserrat font-700 text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/55 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mandatory-disclosure"
                  className="font-inter text-sm text-white/55 hover:text-gold transition-colors duration-200"
                >
                  Mandatory Disclosure
                </Link>
              </li>
            </ul>
          </nav>

          {/* Col 3 — Campuses */}
          <div>
            <h3 className="font-montserrat font-700 text-white text-sm uppercase tracking-widest mb-5">
              Our Campuses
            </h3>
            <ul className="flex flex-col gap-6" role="list">
              {CAMPUSES.map((campus) => (
                <li key={campus.id}>
                  <p className="font-montserrat font-700 text-white text-sm mb-1">{campus.name}</p>
                  <p className="font-inter text-xs text-gold/80 mb-2">{campus.label}</p>
                  <address className="not-italic flex flex-col gap-1">
                    <span className="flex items-start gap-2 text-xs text-white/55">
                      <MapPin size={12} className="mt-0.5 shrink-0 text-gold/60" aria-hidden="true" />
                      {campus.address}, {campus.city}
                    </span>
                    <span className="text-xs text-white/40 ml-[18px]">{campus.timing}</span>
                  </address>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-montserrat font-700 text-white text-sm uppercase tracking-widest mb-5">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4" role="list">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 text-sm text-white/55 hover:text-gold transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone size={13} aria-hidden="true" />
                  </div>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-sm text-white/55 hover:text-gold transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail size={13} aria-hidden="true" />
                  </div>
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.admissionEmail}`}
                  className="flex items-center gap-3 text-sm text-white/55 hover:text-gold transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail size={13} aria-hidden="true" />
                  </div>
                  {CONTACT.admissionEmail}
                </a>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/admissions"
              className="mt-6 inline-flex items-center justify-center w-full
                         bg-gold text-navy font-montserrat font-700 text-sm
                         px-5 py-3 rounded-full hover:bg-gold-300 transition-colors duration-200"
            >
              Apply for Admission
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {year} {SCHOOL.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/mandatory-disclosure" className="hover:text-gold transition-colors">
              Mandatory Disclosure
            </Link>
            <span>CBSE Affiliation No. {SCHOOL.affiliationNo}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
