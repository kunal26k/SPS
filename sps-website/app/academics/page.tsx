'use client'

import Link from 'next/link'
import { CONTACT, PROGRAMS } from '@/lib/content'
import { ArrowRight, BookOpen, Cpu, FlaskConical, Microscope, Globe, Lightbulb, Users, GraduationCap, CheckCircle } from 'lucide-react'

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

// ─── Labs ────────────────────────────────────────────────────────────────────
const LABS = [
  { name: 'Physics Laboratory', icon: FlaskConical, desc: 'Fully equipped for experiments in Mechanics, Electricity, Magnetism, and Optics with safety-first apparatus.', color: 'navy' },
  { name: 'Chemistry Laboratory', icon: FlaskConical, desc: 'Modern safety equipment and high-quality apparatus for hands-on exploration of chemical reactions.', color: 'green' },
  { name: 'Biology Laboratory', icon: Microscope, desc: 'Microscopes, anatomical models, and specimens for deep dives into cell biology, genetics, and ecology.', color: 'gold' },
  { name: 'Computer Science Lab', icon: Cpu, desc: 'High-speed internet, modern hardware, and software for programming, digital design, and coding skills.', color: 'navy' },
  { name: 'AI & Robotics Lab', icon: Lightbulb, desc: 'Students design, build, and code machines. Covers AI, Virtual Reality, and emerging tech — a flagship facility.', color: 'gold', featured: true },
]

const COMPETENCIES = ['Communication', 'Creativity', 'Collaboration', 'Critical Thinking']

const PROGRAM_ICONS: Record<string, React.ElementType> = {
  primary: BookOpen,
  secondary: GraduationCap,
  senior: Globe,
}

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        tag="CBSE NCF 2024 · NEP 2020 Aligned"
        title="Academics at SPS"
        subtitle="From Nursery to Class XII — a curriculum designed to ignite curiosity, build capability, and prepare students for a world beyond classrooms."
      />

      {/* ── Programs Overview ── (Taft-style grade-level cards) */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Academic Programs</span>
            <h2 className="section-heading">Three Stages of Excellence</h2>
            <p className="section-subheading mt-4 mx-auto">
              Each stage is designed with age-appropriate pedagogy, dedicated faculty, and modern infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => {
              const Icon = PROGRAM_ICONS[prog.id] || BookOpen
              const accentMap: Record<string, string> = { green: 'bg-green-50 text-green-600', navy: 'bg-navy/5 text-navy', gold: 'bg-gold/10 text-gold-600' }
              const borderMap: Record<string, string> = { green: 'border-green-200', navy: 'border-navy/20', gold: 'border-gold/30' }
              return (
                <div key={prog.id} className={`bg-white rounded-3xl border-2 ${borderMap[prog.color]} p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow`}>
                  <div className={`w-14 h-14 rounded-2xl ${accentMap[prog.color]} flex items-center justify-center mb-5`}>
                    <Icon size={26} />
                  </div>
                  <span className="font-montserrat text-xs font-700 text-gray-400 uppercase tracking-widest mb-1">{prog.classes}</span>
                  <h3 className="font-playfair text-2xl font-700 text-navy mb-2">{prog.label}</h3>
                  <p className="font-montserrat text-xs text-gold font-700 uppercase tracking-wider mb-4">{prog.campus}</p>
                  <p className="font-inter text-gray-600 leading-relaxed mb-6 flex-grow">{prog.description}</p>
                  <ul className="space-y-2 mb-6">
                    {prog.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle size={15} className="text-green-500 mt-0.5 shrink-0" />
                        <span className="font-inter text-sm text-gray-600">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={prog.href} className="font-montserrat text-sm font-700 text-navy hover:text-gold transition-colors inline-flex items-center gap-1">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Primary Wing Deep Dive ── */}
      <section id="primary" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Nursery – Class V · Junior Branch</span>
              <h2 className="section-heading mb-5">Primary Wing</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                A strong foundation in the early years lays the groundwork for a lifetime of learning. Our Junior Branch at Khatyari creates a nurturing, child-friendly environment where curiosity is celebrated and every small discovery is honoured.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                Play-based learning, social interaction, emotional development, and age-appropriate academic challenges — designed to make school a place children love to come to every morning.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['CBSE NCF 2024 aligned', 'Child-friendly infrastructure', 'Social & emotional learning', 'Creative arts integration', 'Safe & nurturing spaces', 'Activity-based pedagogy'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-green-500 shrink-0" />
                    <span className="font-inter text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="photo-placeholder rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <BookOpen size={48} className="text-navy/20 mx-auto mb-3" />
                <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest">Junior Branch Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Secondary ── */}
      <section id="secondary" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="photo-placeholder rounded-3xl aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              <div className="text-center p-8">
                <GraduationCap size={48} className="text-navy/20 mx-auto mb-3" />
                <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest">Secondary Campus Photo</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Class VI – X · Senior Branch</span>
              <h2 className="section-heading mb-5">Middle & Secondary School</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                The middle and secondary years at SPS are built on concept-based, experiential learning. Students don't just study — they investigate, debate, build, and create.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-6">
                Integrated with NEP 2020 principles, our curriculum develops the four essential competencies for the 21st century:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {COMPETENCIES.map((c) => (
                  <div key={c} className="bg-navy/5 rounded-xl px-4 py-3 text-center">
                    <p className="font-montserrat text-sm font-700 text-navy">{c}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-5">
                <p className="font-montserrat text-sm font-700 text-navy">🏆 Consistently top CBSE results in Almora for 10+ consecutive years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Senior Secondary ── */}
      <section id="senior" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Class XI – XII · Senior Branch</span>
              <h2 className="section-heading mb-5">Senior Secondary</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                The final two years are where ambition meets preparation. With unmatched CBSE Class XII results in Almora, SPS has sent students to IITs, central universities, and international institutions.
              </p>

              {/* Streams */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { stream: 'Science', subjects: 'Physics · Chemistry · Biology / Maths · Computer Science', color: 'navy' },
                  { stream: 'Commerce', subjects: 'Accountancy · Business Studies · Economics · Mathematics', color: 'green' },
                  { stream: 'Humanities', subjects: 'History · Geography · Political Science · English', color: 'gold' },
                ].map((s) => (
                  <div key={s.stream} className={`rounded-2xl p-4 text-center
                    ${s.color === 'navy' ? 'bg-navy text-white' : s.color === 'green' ? 'bg-green-500 text-white' : 'bg-gold text-navy'}`}>
                    <p className="font-montserrat font-700 text-sm mb-2">{s.stream}</p>
                    <p className="font-inter text-xs opacity-80">{s.subjects}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {['Regular assessments & mock CBSE boards', 'One-on-one academic counselling sessions', 'AI & Computer Labs for Science stream', 'Career guidance & university application support'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-green-500 shrink-0" />
                    <span className="font-inter text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="photo-placeholder rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <Globe size={48} className="text-navy/20 mx-auto mb-3" />
                <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest">Senior Block Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Labs ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">State-of-the-Art Facilities</span>
            <h2 className="font-playfair text-white text-4xl lg:text-5xl font-700 leading-tight">Science & Technology Labs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LABS.map((lab) => (
              <div key={lab.name} className={`rounded-2xl p-7 border transition-all hover:-translate-y-1
                ${lab.featured ? 'bg-gold/10 border-gold/30 col-span-full lg:col-span-1' : 'bg-white/5 border-white/10'}`}>
                {lab.featured && (
                  <span className="inline-block bg-gold text-navy font-montserrat text-xs font-700 uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    ⭐ Flagship Lab
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <lab.icon size={20} className={lab.featured ? 'text-gold' : 'text-white/70'} />
                </div>
                <h3 className="font-montserrat font-700 text-white text-base mb-2">{lab.name}</h3>
                <p className="font-inter text-white/60 text-sm leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Faculty ── */}
      <section id="faculty" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Our Educators</span>
              <h2 className="section-heading mb-5">Faculty Who Inspire, Not Just Instruct</h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
                With 50+ dedicated educators and a 1:20 teacher-student ratio, every child at SPS receives the personal attention they need to truly flourish.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                Our classrooms are places where students are free to ask questions, clear doubts, and express ideas — because our teachers see themselves as mentors, not just subject experts.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-playfair text-3xl font-700 text-gold">50+</p>
                  <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-1">Faculty Members</p>
                </div>
                <div>
                  <p className="font-playfair text-3xl font-700 text-gold">1:20</p>
                  <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-1">Teacher-Student Ratio</p>
                </div>
                <div>
                  <p className="font-playfair text-3xl font-700 text-gold">10+</p>
                  <p className="font-montserrat text-xs text-navy uppercase tracking-widest mt-1">Years Avg. Experience</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { subject: 'Mathematics & Science', icon: FlaskConical },
                { subject: 'Languages & Literature', icon: BookOpen },
                { subject: 'Computer Science & AI', icon: Cpu },
                { subject: 'Sports & Physical Education', icon: Users },
              ].map((dept) => (
                <div key={dept.subject} className="bg-light rounded-2xl p-6 text-center">
                  <dept.icon size={28} className="text-navy mx-auto mb-3" />
                  <p className="font-inter text-sm text-navy font-500">{dept.subject}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-playfair text-navy text-3xl lg:text-4xl font-700 mb-4">Explore the SPS Learning Experience</h2>
          <p className="font-inter text-navy/70 text-lg mb-8">Schedule a campus visit and see our labs, classrooms, and faculty in action.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions" className="btn-navy">Apply Now <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-outline border-navy text-navy hover:bg-navy hover:text-white">Schedule a Visit</Link>
          </div>
        </div>
      </section>
    </>
  )
}
