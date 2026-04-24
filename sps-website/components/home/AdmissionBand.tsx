'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CONTACT } from '@/lib/content'
import { ArrowRight, Phone } from 'lucide-react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function AdmissionBand() {
  const { ref, visible } = useReveal()

  return (
    <section
      className="py-20 bg-gold relative overflow-hidden"
      aria-labelledby="admission-band-heading"
      ref={ref}
    >
      {/* Decorative dots */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-navy/10 translate-y-1/2 -translate-x-1/2"
        aria-hidden="true"
      />

      <div
        className={`max-w-5xl mx-auto px-6 lg:px-10 text-center relative z-10
                    transition-all duration-700
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-navy animate-pulse" aria-hidden="true" />
          <span className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider">
            Admissions Open — Session 2025–26
          </span>
        </span>

        <h2
          id="admission-band-heading"
          className="font-playfair text-navy text-3xl md:text-4xl lg:text-5xl font-700 leading-tight mb-4"
        >
          Begin Your Child's Journey at SPS
        </h2>

        <p className="font-inter text-navy/70 text-lg mb-10 max-w-2xl mx-auto">
          Nursery to Class XII · Mon–Sat 8:30 AM – 2:30 PM · Two campuses in Almora
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="bg-navy text-white font-montserrat font-700 text-sm px-8 py-4 rounded-full
                       hover:bg-navy-700 transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
          >
            Apply Online <ArrowRight size={16} />
          </Link>
          <a
            href={`tel:${CONTACT.phone}`}
            className="bg-white text-navy font-montserrat font-700 text-sm px-8 py-4 rounded-full
                       hover:bg-gray-50 transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
          >
            <Phone size={15} /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
