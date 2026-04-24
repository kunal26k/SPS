'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { PRINCIPAL } from '@/lib/content'
import { Quote, ArrowRight } from 'lucide-react'

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

export default function PrincipalMessage() {
  const { ref, visible } = useReveal()

  return (
    <section
      className="py-20 bg-navy overflow-hidden relative"
      aria-labelledby="principal-heading"
      ref={ref}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute top-8 right-10 text-white/5 font-playfair text-[180px] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </div>

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo side */}
          <div
            className={`transition-all duration-700 delay-100
                        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Principal photo placeholder — replace with <Image src="/images/principal.jpg"> */}
            <div className="relative">
              <div
                className="w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden
                           bg-gradient-to-br from-navy-700 to-green-600 flex items-end justify-center"
                aria-label="Principal Mrs. Vinita Shekhar"
              >
                {/* Placeholder silhouette */}
                <div className="text-white/10 text-9xl pb-4 font-playfair" aria-hidden="true">VS</div>
              </div>

              {/* Name card */}
              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-gold rounded-2xl px-6 py-4 shadow-xl">
                <p className="font-montserrat font-700 text-navy text-sm leading-tight">
                  {PRINCIPAL.name}
                </p>
                <p className="font-inter text-navy/70 text-xs mt-0.5">{PRINCIPAL.designation}</p>
              </div>
            </div>
          </div>

          {/* Message side */}
          <div
            className={`transition-all duration-700 delay-200
                        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <span className="tag bg-white/10 text-gold text-xs uppercase tracking-widest mb-6 inline-block">
              Principal's Desk
            </span>

            {/* Quote icon */}
            <Quote size={32} className="text-gold mb-4" aria-hidden="true" />

            <blockquote className="font-playfair text-white text-2xl md:text-3xl leading-relaxed mb-8 italic">
              "{PRINCIPAL.quote}"
            </blockquote>

            <p className="font-inter text-white/65 text-sm leading-relaxed mb-8 line-clamp-4">
              It is both an honour and a privilege to serve as the Principal of Sharda Public School.
              Our students have brought us immense pride by reaching exceptional milestones and
              achieving remarkable success at the state, national, and international levels in
              academics, sports, and co-curricular activities.
            </p>

            <Link
              href="/about#principal"
              className="inline-flex items-center gap-2 font-montserrat font-700 text-sm
                         text-gold hover:gap-4 transition-all duration-200"
            >
              Read Full Message <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
