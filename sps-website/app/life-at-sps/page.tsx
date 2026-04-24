'use client'

import Link from 'next/link'
import { CONTACT, ALUMNI } from '@/lib/content'
import { ArrowRight, Trophy, Camera, Users, Music, Cpu, BookOpen, Heart, Star, Globe } from 'lucide-react'

function PageHero({ title, subtitle, tag }: { title: string; subtitle: string; tag: string }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #0E1A28 0%, #1A2E4A 50%, #1e3d30 100%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-montserrat text-xs font-700 text-white/90 uppercase tracking-wider">{tag}</span>
        </span>
        <h1 className="font-playfair text-white text-4xl sm:text-5xl lg:text-6xl font-700 leading-tight mb-4">{title}</h1>
        <p className="font-inter text-white/70 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 z-10" style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }} />
    </section>
  )
}

const ACTIVITIES = [
  { icon: Trophy, title: 'Sports & Athletics', desc: '15 sports programs — cricket, football, swimming, hockey, basketball and more. Champions are made here.', tag: 'Physical' },
  { icon: Cpu, title: 'Robotics Club', desc: 'Build, code, compete. Our Robotics Club has qualified for national-level championships.', tag: 'STEM' },
  { icon: Music, title: 'Arts & Culture', desc: 'Music, dance, drama, and visual arts — the auditorium stage is always alive with student talent.', tag: 'Creative' },
  { icon: BookOpen, title: 'Debate & MUN', desc: 'Sharpening critical thinking and public speaking through inter-school debates and Model UN.', tag: 'Leadership' },
  { icon: Heart, title: 'Community Service', desc: 'Rooted in "Seva Parmo Dharma" — students regularly engage in community outreach and social initiatives.', tag: 'Values' },
  { icon: Star, title: 'Science Olympiads', desc: 'Annual participation in regional and national Olympiads in Mathematics, Science, and English.', tag: 'Academic' },
]

const SPORTS_HIGHLIGHTS = [
  { sport: 'Cricket', level: 'District & State Level' },
  { sport: 'Football', level: 'Inter-School Tournaments' },
  { sport: 'Swimming', level: 'Competitive & Recreational' },
  { sport: 'Hockey', level: 'School Championship' },
  { sport: 'Basketball', level: 'Inter-School League' },
  { sport: 'Athletics', level: 'State Participation' },
]

export default function LifeAtSpsPage() {
  return (
    <>
      <PageHero
        tag="Beyond the Classroom"
        title="Life at SPS"
        subtitle="School is not just academics — it's friendships, discoveries, passions, and memories that shape who you become. Here's what life truly looks like at Sharda Public School."
      />

      {/* ── Student Life Intro ── */}
      <section id="student-life" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Every Day, Every Student</span>
              <h2 className="section-heading mb-5">A School That Feels Like Home</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                At SPS, we believe a school's greatest achievement isn't just toppers — it's producing graduates who are curious, compassionate, and ready for the world.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                From morning assembly to sports day, from science fairs to annual functions — every experience is designed to help students discover who they are and what they're capable of.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-light rounded-2xl p-5">
                  <p className="font-playfair text-3xl font-700 text-gold">15</p>
                  <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-1">Sports Programs</p>
                </div>
                <div className="bg-light rounded-2xl p-5">
                  <p className="font-playfair text-3xl font-700 text-gold">10+</p>
                  <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-1">Clubs & Activities</p>
                </div>
                <div className="bg-light rounded-2xl p-5">
                  <p className="font-playfair text-3xl font-700 text-gold">23+</p>
                  <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-1">Years of Memories</p>
                </div>
              </div>
            </div>
            {/* Photo grid placeholder */}
            <div className="grid grid-cols-2 gap-3">
              {['Sports Day', 'Science Fair', 'Annual Function', 'Robotics Club'].map((label) => (
                <div key={label} className="photo-placeholder rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-center p-4">
                    <Camera size={24} className="text-navy/20 mx-auto mb-1" />
                    <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Activities ── (Woods Academy pillars + Taft-style modules) */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Co-Curricular Life</span>
            <h2 className="section-heading">Clubs, Activities & Programs</h2>
            <p className="section-subheading mt-4 mx-auto">
              From robotics to drama, debate to community service — there's a place for every passion at SPS.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((act) => (
              <div key={act.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                    <act.icon size={22} className="text-navy" />
                  </div>
                  <span className="tag bg-gold/10 text-gold">{act.tag}</span>
                </div>
                <h3 className="font-montserrat font-700 text-navy text-base mb-3">{act.title}</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sports ── */}
      <section id="sports" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Championship Culture</span>
              <h2 className="font-playfair text-white text-4xl lg:text-5xl font-700 leading-tight mb-5">
                Sports at SPS
              </h2>
              <p className="font-inter text-white/70 text-lg leading-relaxed mb-5">
                Physical education is just as vital as academics. Our 15 sports programs, professional sports complex, and qualified coaches create champions — not just athletes.
              </p>
              <p className="font-inter text-white/60 leading-relaxed mb-8">
                With a full swimming pool, cricket pitch, football field, gymnasium, basketball court, and indoor arena — every student has the facilities to excel in their sport.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SPORTS_HIGHLIGHTS.map((s) => (
                  <div key={s.sport} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="font-montserrat font-700 text-white text-sm">{s.sport}</p>
                    <p className="font-inter text-xs text-white/50 mt-1">{s.level}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Swimming Pool', 'Cricket Field', 'Indoor Sports', 'Athletics Track'].map((label) => (
                <div key={label} className="photo-placeholder rounded-2xl aspect-square flex items-center justify-center bg-white/5 border border-white/10">
                  <div className="text-center">
                    <Trophy size={24} className="text-gold/30 mx-auto mb-1" />
                    <p className="font-montserrat text-xs text-white/20 uppercase tracking-widest">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">School Life</span>
            <h2 className="section-heading">Gallery</h2>
            <p className="section-subheading mt-4 mx-auto">A glimpse into the vibrant life at Sharda Public School.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Annual Function 2025', 'Sports Day', 'Science Exhibition', 'Robotics Showcase',
              'Cultural Program', 'Debate Competition', 'Republic Day', 'Book Fair',
              'Swimming Gala', 'Teachers Day', 'Independence Day', 'Prize Distribution'
            ].map((label, i) => (
              <div key={label} className={`photo-placeholder rounded-2xl flex items-center justify-center
                ${i === 0 || i === 7 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                <div className="text-center p-4">
                  <Camera size={20} className="text-navy/20 mx-auto mb-1" />
                  <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest leading-tight">{label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center font-inter text-sm text-gray-400 mt-6">📸 High-resolution campus photos to be added</p>
        </div>
      </section>

      {/* ── Alumni ── (Gilman School / Taft inspired placement showcase) */}
      <section id="alumni" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Our Graduates</span>
            <h2 className="section-heading">Where Our Alumni Reach</h2>
            <p className="section-subheading mt-4 mx-auto">
              SPS graduates go on to some of India's and the world's finest institutions — proof that excellence starts here.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ALUMNI.map((alumnus) => (
              <div key={alumnus.name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center shrink-0">
                    <span className="font-playfair text-gold font-700 text-lg">{alumnus.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-montserrat font-700 text-navy">{alumnus.name}</p>
                    <p className="font-inter text-xs text-gray-400">SPS Alumna/Alumni</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gold/10 rounded-xl px-4 py-2.5">
                  <Globe size={14} className="text-gold shrink-0" />
                  <p className="font-inter text-sm text-navy font-500">{alumnus.achievement}</p>
                </div>
                <p className="font-inter text-2xl mt-3 text-right">{alumnus.flag}</p>
              </div>
            ))}
          </div>

          {/* Placement banner */}
          <div className="bg-navy rounded-3xl p-10 text-center">
            <h3 className="font-playfair text-white text-2xl font-700 mb-3">IITs · UK · Australia · Delhi University</h3>
            <p className="font-inter text-white/60 mb-8 max-w-xl mx-auto">
              Our alumni are at premier institutions across India and the world — from IIT Madras to the University of Edinburgh. Your child's journey can start here.
            </p>
            <Link href="/admissions" className="btn-gold">
              Begin Your Journey <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Community ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Seva Parmo Dharma</span>
              <h2 className="section-heading mb-5">Community & Service</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                "Service before Self" is not just our motto — it's the spirit our students live by. From environmental drives to community outreach in Almora, SPS students are active citizens.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                Regular community service initiatives, awareness campaigns, and participation in social causes teach our students that education's highest purpose is to serve others.
              </p>
              <Link href="/community" className="btn-navy inline-flex">
                View Notice Board <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-light rounded-3xl p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Heart size={36} className="text-gold" />
              </div>
              <blockquote className="font-playfair text-2xl italic text-navy mb-4">
                "Seva Parmo Dharma"
              </blockquote>
              <p className="font-inter text-gray-500">Service before Self — the guiding philosophy of every SPS student</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
