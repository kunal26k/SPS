'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { SCHOOL, CONTACT, PRINCIPAL } from '@/lib/content'
import { ArrowRight, Award, BookOpen, Calendar, Users, Star, CheckCircle } from 'lucide-react'

// ─── Page Hero ───────────────────────────────────────────────────────────────
function PageHero({ title, subtitle, tag }: { title: string; subtitle: string; tag: string }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" aria-label={`${title} hero`}>
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0E1A28 0%, #1A2E4A 50%, #1e3d30 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
          <span className="font-montserrat text-xs font-700 text-white/90 uppercase tracking-wider">{tag}</span>
        </span>
        <h1 className="font-playfair text-white text-4xl sm:text-5xl lg:text-6xl font-700 leading-tight mb-4">{title}</h1>
        <p className="font-inter text-white/70 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 z-10" style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }} aria-hidden="true" />
    </section>
  )
}

// ─── Our Story ───────────────────────────────────────────────────────────────
const TIMELINE = [
  { year: '2001', title: 'Founded', desc: 'Sharda Public School established in Almora with a vision to provide quality CBSE education to the Kumaon region.' },
  { year: '2011', title: 'CBSE Affiliation', desc: 'Officially affiliated with CBSE (Affiliation No. 3530299), cementing our commitment to the national curriculum.' },
  { year: '2015', title: 'Senior Branch Opens', desc: 'Dedicated Senior Branch inaugurated at Dugalkhola, near Circuit House, to serve Classes VI–XII.' },
  { year: '2020', title: 'AI & Robotics Lab', desc: 'State-of-the-art Robotics & AI Lab launched — one of the first in Almora — preparing students for tomorrow\'s world.' },
  { year: '2024', title: 'NCF 2024 Aligned', desc: 'Curriculum fully aligned with CBSE NCF 2024 and NEP 2020, integrating 21st-century competencies across all grades.' },
  { year: '2026', title: 'Today', desc: '1300+ students, 50+ faculty, two campuses — continuing to set the benchmark for excellence in Uttarakhand.' },
]

// ─── Achievements ────────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  { year: '2024–25', c10: 'Outstanding performance in CBSE Board Exams', c12: 'Extraordinary results — best in Almora' },
  { year: '2023–24', c10: 'Exceptional academic achievements', c12: 'Outstanding achievements across streams' },
  { year: '2022–23', c10: 'Exceptional achievements', c12: 'Remarkable results in board exams' },
  { year: '2021–22', c10: 'Recognized toppers in Kumaon division', c12: 'Recognized toppers — region-wide accolades' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Est. 2001 · Almora, Uttarakhand"
        title="About Sharda Public School"
        subtitle="23 years of nurturing curious minds, building confident leaders, and serving the Kumaon community with academic excellence."
      />

      {/* ── Our Story ── */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Our Story</span>
              <h2 className="section-heading mb-6">A Legacy of Excellence in the Heart of Kumaon</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                Founded in 2001 in the historic hill town of Almora, Sharda Public School was born from a singular belief — that every child in Uttarakhand deserves world-class education without leaving their roots.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-5">
                From a small institution with a handful of classrooms, we have grown into a two-campus school with over 1,300 students, 50 expert faculty members, and some of the most modern facilities in the region — including an AI & Robotics Lab and a full swimming pool.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                Our motto, <strong className="text-navy">"Seva Parmo Dharma"</strong> (Service before Self), is not just a phrase — it is the philosophy that shapes every decision, every classroom, and every milestone at SPS.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="font-playfair text-4xl font-700 text-gold">23+</p>
                  <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-1">Years</p>
                </div>
                <div className="w-px h-12 bg-gray-200" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-playfair text-4xl font-700 text-gold">1300+</p>
                  <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-1">Students</p>
                </div>
                <div className="w-px h-12 bg-gray-200" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-playfair text-4xl font-700 text-gold">2</p>
                  <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-1">Campuses</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gold/30" aria-hidden="true" />
              <ol className="flex flex-col gap-8">
                {TIMELINE.map((item, i) => (
                  <li key={i} className="flex gap-5">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center z-10 relative">
                        <span className="font-montserrat text-gold text-xs font-700">{item.year.slice(-2)}</span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest">{item.year}</span>
                        <span className="font-montserrat text-sm font-700 text-navy">{item.title}</span>
                      </div>
                      <p className="font-inter text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section id="vision" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Purpose & Direction</span>
            <h2 className="section-heading">Vision & Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold/10 -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <Star className="text-gold" size={22} />
                </div>
                <h3 className="font-playfair text-2xl font-700 text-white mb-4">Our Vision</h3>
                <p className="font-inter text-white/80 leading-relaxed">{SCHOOL.vision}</p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-green-50 translate-y-1/2 -translate-x-1/2" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                  <BookOpen className="text-green-500" size={22} />
                </div>
                <h3 className="font-playfair text-2xl font-700 text-navy mb-4">Our Mission</h3>
                <p className="font-inter text-gray-600 leading-relaxed">{SCHOOL.mission}</p>
              </div>
            </div>
          </div>

          {/* Three Pillars — inspired by Woods Academy */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Award, title: 'Academic Excellence', desc: 'Consistently top CBSE results in Almora for over a decade. NCF 2024 and NEP 2020 aligned curriculum.', color: 'gold' },
              { icon: Users, title: 'Character & Values', desc: 'Grounded in "Seva Parmo Dharma" — we develop empathetic, responsible citizens alongside scholars.', color: 'green' },
              { icon: Star, title: 'Holistic Growth', desc: '15 sports, arts, robotics, leadership — every child finds their stage to express, compete, and shine.', color: 'navy' },
            ].map((pillar, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center
                  ${pillar.color === 'gold' ? 'bg-gold/10' : pillar.color === 'green' ? 'bg-green-50' : 'bg-navy/5'}`}>
                  <pillar.icon className={
                    pillar.color === 'gold' ? 'text-gold' : pillar.color === 'green' ? 'text-green-500' : 'text-navy'
                  } size={24} />
                </div>
                <h4 className="font-playfair text-lg font-700 text-navy mb-3">{pillar.title}</h4>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principal's Desk ── */}
      <section id="principal" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="lg:col-span-2">
              <div className="photo-placeholder rounded-3xl aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-navy/20 mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} className="text-navy/40" />
                  </div>
                  <p className="font-montserrat text-xs text-navy/40 uppercase tracking-widest">Principal's Photo</p>
                  <p className="font-inter text-xs text-navy/30 mt-1">(Photo to be provided)</p>
                </div>
              </div>
              {/* Name card */}
              <div className="bg-navy rounded-2xl p-6 mt-4 max-w-sm mx-auto lg:mx-0">
                <p className="font-playfair text-white text-xl font-700">{PRINCIPAL.name}</p>
                <p className="font-montserrat text-gold text-xs uppercase tracking-widest mt-1">{PRINCIPAL.designation}</p>
                <p className="font-montserrat text-xs text-white/50 mt-1">Sharda Public School, Almora</p>
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-3">
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Principal's Desk</span>
              <h2 className="section-heading mb-6">A Message of Commitment & Inspiration</h2>
              <blockquote className="border-l-4 border-gold pl-6 mb-8">
                <p className="font-playfair text-xl italic text-navy leading-relaxed">"{PRINCIPAL.quote}"</p>
              </blockquote>
              <div className="space-y-4">
                {PRINCIPAL.fullMessage.split('\n\n').map((para, i) => (
                  <p key={i} className="font-inter text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section id="achievements" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Academic Results</span>
            <h2 className="section-heading">CBSE Board Achievements</h2>
            <p className="section-subheading mt-4 mx-auto">
              Consistently delivering some of the best CBSE results in the Kumaon region — year after year.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <Award className="text-gold" size={18} />
                </div>
                <p className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest mb-3">{a.year}</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-montserrat text-xs font-700 text-navy uppercase tracking-wide mb-1">Class X</p>
                    <p className="font-inter text-sm text-gray-600">{a.c10}</p>
                  </div>
                  <div>
                    <p className="font-montserrat text-xs font-700 text-navy uppercase tracking-wide mb-1">Class XII</p>
                    <p className="font-inter text-sm text-gray-600">{a.c12}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alumni highlight */}
          <div className="bg-navy rounded-3xl p-10 text-center">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-4">Where Our Alumni Go</span>
            <h3 className="font-playfair text-white text-2xl font-700 mb-8">Our graduates reach the world's finest institutions</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['IIT Madras', 'IIT Jodhpur', 'University of Edinburgh', 'Lady Shri Ram College, DU', 'Postgrad, Australia'].map((place) => (
                <span key={place} className="bg-white/10 border border-white/20 text-white font-inter text-sm px-5 py-2.5 rounded-full">
                  {place}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Leadership</span>
            <h2 className="section-heading">Guided by Experience & Vision</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: 'Dr. H.D. Kandpal', role: 'Manager / President', desc: 'Guiding the institution since its founding with a vision for quality education that empowers Uttarakhand\'s youth.' },
              { name: 'Mrs. Vinita Shekhar', role: 'Principal', desc: 'Leading with dedication and warmth, ensuring every student receives personal mentorship and achieves their highest potential.' },
            ].map((leader, i) => (
              <div key={i} className="text-center bg-light rounded-3xl p-8">
                <div className="photo-placeholder w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-navy/30" />
                </div>
                <h4 className="font-playfair text-xl font-700 text-navy mb-1">{leader.name}</h4>
                <p className="font-montserrat text-xs text-gold uppercase tracking-widest font-700 mb-3">{leader.role}</p>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-playfair text-navy text-3xl lg:text-4xl font-700 mb-4">Ready to Join the SPS Family?</h2>
          <p className="font-inter text-navy/70 text-lg mb-8">Admissions open for 2025–26. Visit our campus or enquire online today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions" className="btn-navy">Apply for Admission <ArrowRight size={16} /></Link>
            <a href={`tel:${CONTACT.phone}`} className="btn-outline border-navy text-navy hover:bg-navy hover:text-white">Call {CONTACT.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  )
}
