'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { INFRASTRUCTURE_HIGHLIGHTS } from '@/lib/content'
import SectionHeading from '@/components/shared/SectionHeading'
import { Cpu, Trophy, BookOpen, Mic2, ArrowRight } from 'lucide-react'

const ICONS = { Cpu, Trophy, BookOpen, Mic2 } as const

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

export default function InfraHighlights() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-20 bg-white" aria-labelledby="infra-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeading
            tag="World-Class Facilities"
            title="Infrastructure Built for Excellence"
            subtitle="A 6-acre campus with modern labs, sports complex, library, and facilities that bring learning to life."
          />
        </div>

        <ul
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          role="list"
        >
          {INFRASTRUCTURE_HIGHLIGHTS.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS]
            return (
              <li
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl
                            transition-all duration-600
                            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${100 + i * 120}ms` }}
              >
                {/* Background — photo placeholder */}
                <div
                  className="h-64 w-full photo-placeholder"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(135deg, #1A2E4A 0%, #2D6A3F 100%)'
                      : 'linear-gradient(135deg, #2D6A3F 0%, #1A2E4A 100%)',
                  }}
                  aria-hidden="true"
                >
                  {/* Replace this div with <Image> when real photos are available */}
                  <Icon size={48} className="text-white/20" aria-hidden="true" />
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6
                                bg-gradient-to-t from-navy via-navy/60 to-transparent">
                  {/* Tag */}
                  <span className="tag bg-gold/20 text-gold text-xs mb-2 self-start">
                    {item.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-gold" aria-hidden="true" />
                  </div>

                  <h3 className="font-montserrat font-700 text-white text-lg leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-white/70 text-xs leading-relaxed
                                max-h-0 overflow-hidden group-hover:max-h-24
                                transition-all duration-400">
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/infrastructure"
            className="inline-flex items-center gap-2 font-montserrat text-sm font-700
                       text-navy hover:text-gold transition-colors duration-200 hover:gap-3"
          >
            View All Facilities <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
