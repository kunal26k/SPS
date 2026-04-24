'use client'

import { useEffect, useRef, useState } from 'react'
import { PILLARS, SCHOOL } from '@/lib/content'
import SectionHeading from '@/components/shared/SectionHeading'
import { GraduationCap, FlaskConical, Heart, Users } from 'lucide-react'

const ICONS = { GraduationCap, FlaskConical, Heart, Users } as const

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function WhySPS() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-20 bg-white" aria-labelledby="why-sps-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          ref={ref}
        >
          <SectionHeading
            tag="Why Choose SPS"
            title="Where Every Child Thrives"
            subtitle={`At ${SCHOOL.name}, we go beyond textbooks — nurturing curiosity, building character, and preparing every student for a life of purpose.`}
          />
        </div>

        {/* Pillars grid */}
        <ul
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
        >
          {PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS]
            return (
              <li
                key={pillar.title}
                className={`group card p-8 flex flex-col gap-4
                            transition-all duration-600
                            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${100 + i * 120}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center
                                group-hover:bg-gold/10 transition-colors duration-300">
                  <Icon
                    size={28}
                    className="text-navy group-hover:text-gold transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Number accent */}
                <span className="font-montserrat text-xs text-gold font-700 uppercase tracking-widest">
                  0{i + 1}
                </span>

                <h3 className="font-montserrat font-700 text-navy text-lg leading-snug">
                  {pillar.title}
                </h3>

                <p className="font-inter text-gray-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                {/* Hover underline accent */}
                <div className="h-0.5 w-8 bg-gold mt-auto rounded-full
                                group-hover:w-full transition-all duration-500" aria-hidden="true" />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
