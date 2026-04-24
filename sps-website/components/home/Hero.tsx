'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SCHOOL, CONTACT } from '@/lib/content'
import { ArrowRight, Play, Phone } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background — photo placeholder until real image provided */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder gradient (replace with <Image> when campus photo is ready) */}
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #0E1A28 0%, #1A2E4A 40%, #1e3d30 70%, #2D6A3F 100%)',
          }}
          aria-hidden="true"
        />

        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                        rounded-full px-4 py-1.5 mb-6 transition-all duration-700
                        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
            <span className="font-montserrat text-xs font-700 text-white/90 uppercase tracking-wider">
              Admissions Open 2025–26
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-playfair text-white text-balance transition-all duration-700 delay-100
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-700 leading-tight mb-6
                        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {SCHOOL.heroHeadline.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'text-gold block' : 'block'}>{line}</span>
            ))}
          </h1>

          {/* Sub */}
          <p
            className={`font-inter text-white/75 text-lg md:text-xl mb-4 transition-all duration-700 delay-200
                        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {SCHOOL.heroSubline}
          </p>

          {/* Tagline */}
          <p
            className={`font-montserrat text-gold font-700 text-sm uppercase tracking-widest mb-10 transition-all duration-700 delay-300
                        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {SCHOOL.tagline}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-400
                        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link
              href="/admissions"
              className="btn-gold text-sm px-7 py-3.5 font-700"
            >
              Apply for Admission
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/#programs"
              className="btn-outline text-sm px-7 py-3.5"
            >
              <Play size={15} className="fill-current" />
              Explore School
            </Link>
          </div>

          {/* Quick contact */}
          <a
            href={`tel:${CONTACT.phone}`}
            className={`inline-flex items-center gap-2 mt-8 text-white/60 hover:text-white
                        text-sm font-inter transition-all duration-700 delay-500 hover:gap-3
                        ${loaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <Phone size={14} />
            Quick enquiry: {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2
                    transition-all duration-700 delay-700
                    ${loaded ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      >
        <span className="font-montserrat text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
