'use client'

import Link from 'next/link'
import { CONTACT } from '@/lib/content'
import { ArrowRight, Cpu, BookOpen, Utensils, Mic2, Trophy, Bus, Shield, FlaskConical, Microscope, Waves, Dumbbell } from 'lucide-react'

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

// ─── Campus Stats ─────────────────────────────────────────────────────────────
const CAMPUS_STATS = [
  { value: '6', unit: 'Acres', label: 'Total Campus Area' },
  { value: '24,281', unit: 'sq.m', label: 'Campus Area' },
  { value: '990', unit: 'sq.m', label: 'Playground Space' },
  { value: '2', unit: 'Campuses', label: 'Dedicated Branches' },
]

const SPORTS_LIST = [
  { name: 'Swimming Pool', icon: Waves, tag: 'Specialized', featured: true },
  { name: 'Cricket', icon: Trophy, tag: 'Outdoor' },
  { name: 'Football', icon: Trophy, tag: 'Outdoor' },
  { name: 'Hockey', icon: Trophy, tag: 'Outdoor' },
  { name: 'Basketball', icon: Trophy, tag: 'Outdoor' },
  { name: 'Volleyball', icon: Trophy, tag: 'Outdoor' },
  { name: 'Badminton', icon: Trophy, tag: 'Outdoor' },
  { name: 'Gymnasium', icon: Dumbbell, tag: 'Indoor' },
  { name: 'Table Tennis', icon: Trophy, tag: 'Indoor' },
  { name: 'Chess Arena', icon: Trophy, tag: 'Indoor' },
  { name: 'Carrom', icon: Trophy, tag: 'Indoor' },
  { name: 'Multi-Purpose Indoor Hall', icon: Trophy, tag: 'Indoor' },
]

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        tag="6-Acre Campus · Two Locations"
        title="World-Class Infrastructure"
        subtitle="Modern facilities designed to inspire learning, sporting excellence, and creative expression — across two dedicated campuses in Almora."
      />

      {/* ── Stats ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CAMPUS_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-playfair text-4xl lg:text-5xl font-700 text-gold">{s.value}<span className="text-xl ml-1">{s.unit}</span></p>
                <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI & Robotics Lab — Featured ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-gold text-navy font-montserrat text-xs font-700 uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                ⭐ Flagship Facility
              </span>
              <h2 className="font-playfair text-white text-4xl lg:text-5xl font-700 leading-tight mb-5">
                AI & Robotics Lab
              </h2>
              <p className="font-inter text-white/70 text-lg leading-relaxed mb-5">
                One of the very few schools in Almora — and among the first in the Kumaon region — to offer a dedicated AI & Robotics laboratory where students don't just learn about technology, they create it.
              </p>
              <p className="font-inter text-white/60 leading-relaxed mb-8">
                Students design, build, and code their own machines. They explore Artificial Intelligence, Virtual Reality, and emerging technologies — building skills for careers that don't yet exist.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Robotics Design & Build', 'AI Fundamentals', 'Virtual Reality', 'Coding & Programming', 'Digital Prototyping', 'STEM Integration'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="font-inter text-sm text-white/70">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="photo-placeholder rounded-3xl aspect-[4/3] flex items-center justify-center bg-white/5 border border-white/10">
              <div className="text-center">
                <Cpu size={64} className="text-gold/30 mx-auto mb-3" />
                <p className="font-montserrat text-xs text-white/30 uppercase tracking-widest">AI & Robotics Lab Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Science Labs ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Hands-On Learning</span>
            <h2 className="section-heading">Science Laboratories</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Physics Lab', icon: FlaskConical, desc: 'Mechanics, Electricity, Magnetism, and Optics through safe, structured experiments.' },
              { name: 'Chemistry Lab', icon: FlaskConical, desc: 'High-quality apparatus and modern safety equipment for real chemical exploration.' },
              { name: 'Biology Lab', icon: Microscope, desc: 'Microscopes, anatomical models, and specimens covering genetics, ecology, and physiology.' },
              { name: 'Computer Lab', icon: Cpu, desc: 'High-speed internet, modern hardware, and software for programming and digital fluency.' },
            ].map((lab) => (
              <div key={lab.name} className="bg-light rounded-2xl p-7 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                  <lab.icon size={22} className="text-navy" />
                </div>
                <h3 className="font-montserrat font-700 text-navy mb-2">{lab.name}</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Library ── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="photo-placeholder rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <BookOpen size={64} className="text-navy/20 mx-auto mb-3" />
                <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest">Library Photo</p>
              </div>
            </div>
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">The Nucleus of Our School</span>
              <h2 className="section-heading mb-5">Library</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                "A well-read mind creates a foundation where insight takes root and vision grows." Our library is more than a collection of books — it's a hub of intellectual activity throughout the school year.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Reading Challenges', 'Book Clubs', 'Author Visits', 'Storytelling Sessions', 'Book Fairs', 'Literature Festivals', 'Creative Writing Workshops', 'Extended Exam Hours'].map((prog) => (
                  <div key={prog} className="flex items-center gap-2">
                    <BookOpen size={13} className="text-gold shrink-0" />
                    <span className="font-inter text-sm text-gray-600">{prog}</span>
                  </div>
                ))}
              </div>
              <p className="font-inter text-sm text-gray-500 bg-white rounded-xl p-4 border border-gray-100">
                📚 Expert librarians available throughout the school day and during extended hours for exam preparation and project work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Auditorium ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">The Performance Stage</span>
              <h2 className="section-heading mb-5">Auditorium</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                The platform where students express, perform, and shine. Our auditorium is equipped with professional-grade technology to host events worthy of our students' talents.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Professional Sound System', 'Stage Lighting', 'HD Projection', 'Spacious Seating', 'Annual Functions', 'Inter-School Competitions', 'Guest Lectures', 'Debate & MUN'].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Mic2 size={13} className="text-gold shrink-0" />
                    <span className="font-inter text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="photo-placeholder rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <Mic2 size={64} className="text-navy/20 mx-auto mb-3" />
                <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest">Auditorium Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sports ── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Physical Education</span>
            <h2 className="section-heading">Sports Complex — 15 Programs</h2>
            <p className="section-subheading mt-4 mx-auto">
              Physical education is just as vital as academics. With 15 sports programs, every student finds their sport.
            </p>
          </div>

          {/* Swimming Pool — Featured */}
          <div className="bg-navy rounded-3xl p-10 mb-8 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-gold text-navy font-montserrat text-xs font-700 uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Premium Facility
              </span>
              <h3 className="font-playfair text-white text-3xl font-700 mb-4">Swimming Pool</h3>
              <p className="font-inter text-white/70 leading-relaxed mb-4">
                A full swimming pool with qualified instructors and trained lifeguards — a rare facility in Almora. Students learn water safety, competitive swimming, and build the confidence that comes with mastering a life skill.
              </p>
              <p className="font-inter text-white/50 text-sm">Qualified instructors · Trained lifeguards · All skill levels welcome</p>
            </div>
            <div className="photo-placeholder rounded-2xl aspect-video flex items-center justify-center bg-white/5 border border-white/10">
              <div className="text-center">
                <Waves size={48} className="text-blue-300/40 mx-auto mb-2" />
                <p className="font-montserrat text-xs text-white/30 uppercase tracking-widest">Swimming Pool Photo</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPORTS_LIST.filter(s => s.name !== 'Swimming Pool').map((sport) => (
              <div key={sport.name} className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-4 hover:border-gold/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  <sport.icon size={18} className="text-navy" />
                </div>
                <div>
                  <p className="font-montserrat font-700 text-navy text-sm">{sport.name}</p>
                  <p className="font-inter text-xs text-gray-400">{sport.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cafeteria ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="photo-placeholder rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <Utensils size={64} className="text-navy/20 mx-auto mb-3" />
                <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest">Cafeteria Photo</p>
              </div>
            </div>
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Nutrition & Care</span>
              <h2 className="section-heading mb-5">Cafeteria</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                Our cafeteria isn't just a place to eat — it's a space where nutrition meets care. Every meal is thoughtfully curated by in-house chefs who understand what growing children need.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Balanced Nutrition', desc: 'Age-appropriate, nutritionally designed menus' },
                  { title: 'Chef-Curated Menu', desc: 'Wholesome meals with variety and taste' },
                  { title: 'Hygiene First', desc: 'Strict hygiene protocols across all food prep' },
                  { title: 'Inclusive for All', desc: 'Dietary requirements and preferences honoured' },
                ].map((item) => (
                  <div key={item.title} className="bg-light rounded-xl p-4">
                    <p className="font-montserrat font-700 text-navy text-sm mb-1">{item.title}</p>
                    <p className="font-inter text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transport & Safety ── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Student Safety</span>
            <h2 className="section-heading">Transport & Security</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Bus, title: 'GPS-Tracked Transport', desc: 'Fleet covering entire Almora region with GPS tracking, verified drivers, and dedicated attendants.' },
              { icon: Shield, title: '24/7 Security', desc: 'Round-the-clock security personnel, CCTV surveillance, and fire safety equipment across all campus areas.' },
              { icon: Shield, title: 'Medical Infirmary', desc: 'Fully equipped infirmary staffed by trained medical personnel, with coordination with local hospitals for urgent care.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-montserrat font-700 text-navy mb-3">{item.title}</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-playfair text-navy text-3xl lg:text-4xl font-700 mb-4">See Our Facilities in Person</h2>
          <p className="font-inter text-navy/70 text-lg mb-8">Schedule a campus tour and experience the SPS difference first-hand.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-navy">Schedule a Visit <ArrowRight size={16} /></Link>
            <a href={`tel:${CONTACT.phone}`} className="btn-outline border-navy text-navy hover:bg-navy hover:text-white">{CONTACT.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  )
}
