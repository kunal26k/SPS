'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { PROGRAMS } from '@/lib/content'
import SectionHeading from '@/components/shared/SectionHeading'
import { ArrowRight, Check } from 'lucide-react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

const COLOR_MAP = {
  green: {
    bg: 'bg-green-500',
    text: 'text-green-500',
    tag: 'bg-green-50 text-green-600',
    border: 'border-green-200',
    hover: 'hover:border-green-400',
  },
  navy: {
    bg: 'bg-navy',
    text: 'text-navy',
    tag: 'bg-navy/5 text-navy',
    border: 'border-navy/20',
    hover: 'hover:border-navy',
  },
  gold: {
    bg: 'bg-gold',
    text: 'text-gold-600',
    tag: 'bg-gold/10 text-gold-600',
    border: 'border-gold/30',
    hover: 'hover:border-gold',
  },
}

export default function Programs() {
  const { ref, visible } = useReveal()

  return (
    <section id="programs" className="py-20 bg-light" aria-labelledby="programs-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeading
            tag="Academic Programs"
            title="A Journey from Nursery to Class XII"
            subtitle="Structured learning pathways for every stage of your child's growth — each designed to build on the last."
          />
        </div>

        <ul
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
        >
          {PROGRAMS.map((prog, i) => {
            const c = COLOR_MAP[prog.color as keyof typeof COLOR_MAP]
            return (
              <li
                key={prog.id}
                className={`group card border-2 ${c.border} ${c.hover} p-8 flex flex-col gap-5
                            transition-all duration-600
                            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${150 + i * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`tag ${c.tag} mb-3 inline-block`}>{prog.label}</span>
                    <h3 className="font-playfair text-navy text-2xl font-700 leading-tight">
                      {prog.classes}
                    </h3>
                    <p className="font-montserrat text-xs text-gray-400 mt-1">{prog.campus}</p>
                  </div>
                  {/* Step number */}
                  <span
                    className={`shrink-0 w-12 h-12 rounded-2xl ${c.bg} text-white
                                font-playfair text-xl font-700 flex items-center justify-center`}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </div>

                <p className="font-inter text-gray-500 text-sm leading-relaxed">
                  {prog.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2" role="list">
                  {prog.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={14} className={`shrink-0 mt-0.5 ${c.text}`} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={prog.href}
                  className={`mt-auto inline-flex items-center gap-2 font-montserrat text-sm font-700
                              ${c.text} group-hover:gap-3 transition-all duration-200`}
                >
                  Learn More <ArrowRight size={15} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
