'use client'

import { useEffect, useRef, useState } from 'react'
import { ALUMNI } from '@/lib/content'
import { GraduationCap } from 'lucide-react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function AlumniStrip() {
  const { ref, visible } = useReveal()

  return (
    <section
      className="py-16 bg-light border-y border-gray-100"
      aria-labelledby="alumni-strip-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10
                      transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div>
            <span className="tag bg-gold/10 text-gold-600 text-xs uppercase tracking-widest mb-2 inline-block">
              Our Alumni
            </span>
            <h2 className="font-playfair text-navy text-2xl md:text-3xl font-700">
              SPS Alumni — Making a Mark Worldwide
            </h2>
          </div>
          <a
            href="/life-at-sps#alumni"
            className="font-montserrat text-sm font-700 text-navy hover:text-gold transition-colors shrink-0"
          >
            Meet All Alumni →
          </a>
        </div>

        {/* Alumni cards */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          role="list"
        >
          {ALUMNI.map((alumnus, i) => (
            <li
              key={alumnus.name}
              className={`bg-white rounded-2xl p-5 border border-gray-100
                          shadow-sm hover:shadow-md hover:-translate-y-1
                          transition-all duration-300
                          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-green-500
                              flex items-center justify-center mb-3">
                <GraduationCap size={20} className="text-white" aria-hidden="true" />
              </div>

              <p className="font-montserrat font-700 text-navy text-sm leading-tight">
                {alumnus.name}
              </p>
              <p className="font-inter text-gray-500 text-xs mt-1 leading-snug">
                {alumnus.achievement}
              </p>
              <span className="text-lg mt-2 block" aria-label="Country flag" role="img">
                {alumnus.flag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
