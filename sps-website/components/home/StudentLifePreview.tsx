'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const LIFE_ITEMS = [
  { label: 'Sports', color: 'from-navy to-green-600',   emoji: '⚽' },
  { label: 'Arts & Culture', color: 'from-green-600 to-navy', emoji: '🎭' },
  { label: 'STEM & Robotics', color: 'from-navy-700 to-navy', emoji: '🤖' },
  { label: 'Library & Reading', color: 'from-green-500 to-green-700', emoji: '📚' },
  { label: 'Annual Events', color: 'from-gold-400 to-gold-600', emoji: '🎉' },
  { label: 'Community', color: 'from-navy to-green-500', emoji: '🌱' },
]

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

export default function StudentLifePreview() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-20 bg-light" aria-labelledby="student-life-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12
                      transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <span className="tag bg-gold/10 text-gold-600 text-xs uppercase tracking-widest mb-3 inline-block">
              Life at SPS
            </span>
            <h2 id="student-life-heading" className="section-heading">
              Learning Beyond the Classroom
            </h2>
            <p className="section-subheading mt-3">
              A vibrant campus life where every student finds their passion — from sports arenas to science labs, debate halls to dance stages.
            </p>
          </div>
          <Link
            href="/life-at-sps"
            className="shrink-0 inline-flex items-center gap-2 font-montserrat text-sm font-700
                       text-navy hover:text-gold transition-colors duration-200 hover:gap-3"
          >
            Explore Campus Life <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4" role="list">
          {LIFE_ITEMS.map((item, i) => (
            <li
              key={item.label}
              className={`group relative h-40 md:h-52 rounded-2xl overflow-hidden cursor-default
                          transition-all duration-500
                          ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Placeholder background — replace with real photo */}
              <div
                className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center
                            transition-transform duration-500 group-hover:scale-105`}
                aria-hidden="true"
              >
                <span className="text-5xl opacity-30">{item.emoji}</span>
              </div>

              {/* Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent
                              flex items-end p-5">
                <span className="font-montserrat font-700 text-white text-sm">
                  {item.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
