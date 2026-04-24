'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS } from '@/lib/content'

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

export default function StatsBar() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className="bg-navy py-12 relative overflow-hidden"
      aria-label="School statistics"
    >
      {/* Subtle gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4"
          role="list"
        >
          {STATS.map((stat, i) => (
            <li
              key={stat.label}
              className={`flex flex-col items-center text-center
                          transition-all duration-500
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-playfair text-gold text-4xl lg:text-5xl font-700 leading-none mb-1">
                {stat.value}
              </span>
              <span className="font-montserrat text-white/60 text-xs uppercase tracking-widest">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
    </section>
  )
}
