'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, CONTACT } from '@/lib/content'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navBg = scrolled
    ? 'bg-white shadow-md'
    : 'bg-transparent'

  const linkColor = scrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      role="banner"
    >
      {/* Top bar — contact strip */}
      <div
        className={`hidden lg:flex items-center justify-between px-8 py-1.5 text-xs font-montserrat font-500
                    transition-all duration-300
                    ${scrolled ? 'h-0 overflow-hidden opacity-0 py-0' : 'bg-navy/60 text-white/80'}`}
      >
        <span>Admissions Open 2025–26 · Mon–Sat 8:30 AM – 2:30 PM</span>
        <div className="flex items-center gap-4">
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1 hover:text-gold transition-colors">
            <Phone size={11} /> {CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors">
            {CONTACT.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="flex items-center justify-between px-6 lg:px-10 py-3"
        ref={dropdownRef}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/sps-logo.png"
            alt="Sharda Public School Logo"
            width={120}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative group">
              {link.children ? (
                <>
                  <button
                    className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg
                                ${linkColor} hover:bg-white/10`}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.label ? null : link.label)
                    }
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl
                                 border border-gray-100 overflow-hidden animate-fade-in z-50"
                      role="menu"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          role="menuitem"
                          className="block px-4 py-2.5 text-sm font-inter text-navy
                                     hover:bg-gold/10 hover:text-gold transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded-lg ${linkColor} hover:bg-white/10`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phone}`}
            className={`nav-link flex items-center gap-1.5 ${linkColor}`}
            aria-label="Call us"
          >
            <Phone size={14} /> Call Us
          </a>
          <Link
            href="/admissions"
            className="btn-gold text-sm px-5 py-2.5"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl" role="dialog" aria-label="Mobile navigation">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 font-montserrat font-600 text-navy hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l-2 border-gold/20 pl-3 mb-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-gold transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a href={`tel:${CONTACT.phone}`} className="btn-navy text-center justify-center">
                <Phone size={16} /> {CONTACT.phoneDisplay}
              </a>
              <Link href="/admissions" className="btn-gold text-center justify-center" onClick={() => setMenuOpen(false)}>
                Enquire Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
