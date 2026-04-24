'use client'

import Link from 'next/link'
import { CONTACT, ADMISSION_STEPS, CAMPUSES } from '@/lib/content'
import { ArrowRight, Phone, Mail, MapPin, Calendar, FileText, CheckCircle, Search, ClipboardCheck, MessageCircle } from 'lucide-react'

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

const STEP_ICONS: React.ElementType[] = [Search, FileText, ClipboardCheck, CheckCircle]

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        tag="Admissions Open 2025–26"
        title="Join the SPS Family"
        subtitle="Taking the first step toward exceptional education. We welcome students from Nursery to Class XII — come, explore, and discover what makes SPS Almora's finest school."
      />

      {/* ── Open Banner ── */}
      <section className="py-10 bg-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center shrink-0">
                <Calendar size={24} className="text-gold" />
              </div>
              <div>
                <p className="font-montserrat font-700 text-navy text-lg">Admissions Currently Open</p>
                <p className="font-inter text-navy/70 text-sm">Session 2025–26 · Nursery to Class XII · April – September</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a href={`tel:${CONTACT.phone}`} className="btn-navy whitespace-nowrap">
                <Phone size={15} /> Call Now
              </a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="bg-white text-navy font-montserrat font-700 px-5 py-3 rounded-full inline-flex items-center gap-2 hover:bg-navy hover:text-white transition-all">
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── (Woods Academy inspired "Take the Next Step") */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">How to Enrol</span>
            <h2 className="section-heading">Admission Process — Simple & Transparent</h2>
            <p className="section-subheading mt-4 mx-auto">
              Four clear steps from enquiry to welcome. We're with you at every stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ADMISSION_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i]
              return (
                <div key={step.step} className="relative">
                  {i < ADMISSION_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gold/30 z-0" style={{ width: 'calc(100% - 4rem)', left: '4rem' }} aria-hidden="true" />
                  )}
                  <div className="bg-light rounded-3xl p-8 text-center relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-5">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gold text-navy font-montserrat font-700 text-xs flex items-center justify-center mx-auto -mt-11 mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-montserrat font-700 text-navy text-base mb-3">{step.title}</h3>
                    <p className="font-inter text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick CTA */}
          <div className="bg-navy rounded-3xl p-10 text-center">
            <h3 className="font-playfair text-white text-2xl font-700 mb-3">Ready to Take the Next Step?</h3>
            <p className="font-inter text-white/70 mb-8 max-w-xl mx-auto">
              Visit our Senior Branch (Dugalkhola) Monday to Saturday, 8:30 AM – 2:30 PM, or reach out to us instantly via phone or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:${CONTACT.phone}`} className="btn-gold">
                <Phone size={16} /> {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.admissionEmail}`} className="bg-white/10 border border-white/20 text-white font-montserrat font-700 px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-white/20 transition-all">
                <Mail size={16} /> {CONTACT.admissionEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Age & Classes ── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Classes Offered */}
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Classes Offered</span>
              <h2 className="section-heading mb-8">Nursery to Class XII</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Pre-School', classes: 'Nursery · LKG · UKG', campus: 'Junior Branch', color: 'green' },
                  { label: 'Primary', classes: 'Class I – V', campus: 'Junior Branch', color: 'green' },
                  { label: 'Middle School', classes: 'Class VI – VIII', campus: 'Senior Branch', color: 'navy' },
                  { label: 'Secondary', classes: 'Class IX – X', campus: 'Senior Branch', color: 'navy' },
                  { label: 'Senior Secondary', classes: 'Class XI – XII', campus: 'Senior Branch', color: 'gold' },
                  { label: 'Streams (XI–XII)', classes: 'Science · Commerce · Humanities', campus: 'Senior Branch', color: 'gold' },
                ].map((item) => (
                  <div key={item.label} className={`rounded-2xl p-5 border-2
                    ${item.color === 'green' ? 'border-green-200 bg-green-50' :
                      item.color === 'navy' ? 'border-navy/20 bg-navy/5' :
                      'border-gold/30 bg-gold/5'}`}>
                    <p className="font-montserrat font-700 text-navy text-sm">{item.label}</p>
                    <p className="font-inter text-xs text-gray-600 mt-1">{item.classes}</p>
                    <p className="font-montserrat text-xs text-gold font-700 mt-2">{item.campus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents & Timings */}
            <div>
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">What You'll Need</span>
              <h2 className="section-heading mb-8">Documents & Timings</h2>

              <div className="bg-white rounded-2xl border border-gray-100 p-7 mb-6 shadow-sm">
                <h4 className="font-montserrat font-700 text-navy mb-4">Documents Required</h4>
                <ul className="space-y-3">
                  {[
                    'Birth certificate of the child',
                    'Aadhaar card (child & parent/guardian)',
                    'Passport-size photographs (4 copies)',
                    'Previous school Transfer Certificate (if applicable)',
                    'Previous year mark sheet or report card',
                    'Proof of address (parent/guardian)',
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-2">
                      <FileText size={14} className="text-gold mt-0.5 shrink-0" />
                      <span className="font-inter text-sm text-gray-600">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                <h4 className="font-montserrat font-700 text-navy mb-4">Admission Office Timings</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-gold shrink-0" />
                    <span className="font-inter text-sm text-gray-600">Monday to Saturday</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-gold shrink-0" />
                    <span className="font-inter text-sm text-gray-600">8:30 AM – 2:30 PM</span>
                  </div>
                  <div className="flex items-start gap-3 mt-2 pt-3 border-t border-gray-100">
                    <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-gray-600">Senior Branch, Near Circuit House, Dugalkhola, Almora – 263601</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campuses ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Two Dedicated Campuses</span>
            <h2 className="section-heading">Where Will Your Child Learn?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CAMPUSES.map((campus) => (
              <div key={campus.id} className="bg-light rounded-3xl overflow-hidden">
                <div className="photo-placeholder h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={36} className="text-navy/20 mx-auto mb-2" />
                    <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest">{campus.name} Photo</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-xl font-700 text-navy mb-1">{campus.name}</h3>
                  <p className="font-montserrat text-xs text-gold font-700 uppercase tracking-widest mb-4">{campus.label}</p>
                  <div className="space-y-2 text-sm font-inter text-gray-600">
                    <p className="flex items-start gap-2"><MapPin size={14} className="shrink-0 mt-0.5 text-gold" />{campus.address}, {campus.city}</p>
                    <p className="flex items-start gap-2"><Calendar size={14} className="shrink-0 mt-0.5 text-gold" />{campus.timing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section className="py-20 bg-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Get in Touch</span>
            <h2 className="section-heading">Send an Enquiry</h2>
            <p className="section-subheading mt-4 mx-auto">Fill in the form and our admissions team will reach out within one working day.</p>
          </div>

          <form className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label">Parent / Guardian Name *</label>
                <input type="text" className="form-input" placeholder="Your full name" required />
              </div>
              <div>
                <label className="form-label">Child's Name *</label>
                <input type="text" className="form-input" placeholder="Child's full name" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label">Phone Number *</label>
                <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div>
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="your@email.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label">Applying for Class *</label>
                <select className="form-input" required defaultValue="">
                  <option value="" disabled>Select class</option>
                  {['Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
                    'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Preferred Session</label>
                <select className="form-input" defaultValue="2025-26">
                  <option value="2025-26">2025–26</option>
                  <option value="2026-27">2026–27</option>
                </select>
              </div>
            </div>
            <div>
              <label className="form-label">Message / Questions</label>
              <textarea className="form-input min-h-[100px] resize-none" placeholder="Any specific questions or information you'd like..." />
            </div>
            <button type="submit" className="btn-gold w-full justify-center text-base py-4">
              Send Enquiry <ArrowRight size={18} />
            </button>
            <p className="font-inter text-xs text-gray-400 text-center">
              Or reach us directly at <a href={`tel:${CONTACT.phone}`} className="text-navy hover:text-gold">{CONTACT.phoneDisplay}</a>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
