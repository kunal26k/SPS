'use client'

import { CONTACT, CAMPUSES, SCHOOL } from '@/lib/content'
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Youtube, Linkedin, ArrowRight, Send } from 'lucide-react'

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

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="We're Here to Help"
        title="Get in Touch"
        subtitle="Whether you have questions about admissions, academics, or anything else — our doors are always open. Reach us by phone, email, WhatsApp, or visit us in person."
      />

      {/* ── Quick Contact Buttons ── */}
      <section className="py-10 bg-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`}
              className="btn-navy text-base px-8 py-3.5">
              <Phone size={18} /> {CONTACT.phoneDisplay}
            </a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-montserrat font-700 px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all text-base">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a href={`mailto:${CONTACT.admissionEmail}`}
              className="bg-white text-navy font-montserrat font-700 px-8 py-3.5 rounded-full inline-flex items-center gap-2 hover:bg-navy hover:text-white transition-all text-base">
              <Mail size={18} /> Email Admissions
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Details + Form ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-4">Contact Information</span>
                <div className="space-y-5">
                  <a href={`tel:${CONTACT.phone}`}
                    className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      <Phone size={18} className="text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <p className="font-montserrat font-700 text-navy text-sm mb-0.5">Phone</p>
                      <p className="font-inter text-gray-600 text-sm">{CONTACT.phoneDisplay}</p>
                      <p className="font-inter text-gray-400 text-xs mt-0.5">+91 5962-236611 / 236073 / 230283</p>
                    </div>
                  </a>

                  <a href={`mailto:${CONTACT.email}`}
                    className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      <Mail size={18} className="text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <p className="font-montserrat font-700 text-navy text-sm mb-0.5">General Enquiries</p>
                      <p className="font-inter text-gray-600 text-sm">{CONTACT.email}</p>
                    </div>
                  </a>

                  <a href={`mailto:${CONTACT.admissionEmail}`}
                    className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      <Mail size={18} className="text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <p className="font-montserrat font-700 text-navy text-sm mb-0.5">Admissions</p>
                      <p className="font-inter text-gray-600 text-sm">{CONTACT.admissionEmail}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-montserrat font-700 text-navy text-sm mb-0.5">Office Hours</p>
                      <p className="font-inter text-gray-600 text-sm">Monday – Saturday</p>
                      <p className="font-inter text-gray-600 text-sm">8:30 AM – 2:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-montserrat font-700 text-navy text-sm mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { href: CONTACT.social.facebook, Icon: Facebook, label: 'Facebook' },
                    { href: CONTACT.social.instagram, Icon: Instagram, label: 'Instagram' },
                    { href: CONTACT.social.youtube, Icon: Youtube, label: 'YouTube' },
                    { href: CONTACT.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  ].map(({ href, Icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-11 h-11 rounded-xl border-2 border-gray-200 flex items-center justify-center text-navy hover:border-gold hover:text-gold transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 border-2 border-green-200 rounded-2xl p-5 hover:border-green-400 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-700 text-green-800 text-sm">Chat on WhatsApp</p>
                  <p className="font-inter text-green-600 text-xs mt-0.5">Instant responses during school hours</p>
                </div>
                <ArrowRight size={16} className="text-green-600 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-4">Send a Message</span>
              <form className="space-y-5 bg-light rounded-3xl p-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Your Name *</label>
                    <input type="text" className="form-input" placeholder="Full name" required />
                  </div>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="form-label">Subject *</label>
                  <select className="form-input" defaultValue="" required>
                    <option value="" disabled>Select a subject</option>
                    <option>Admission Enquiry</option>
                    <option>Academic Information</option>
                    <option>Campus Visit Request</option>
                    <option>Fee Structure</option>
                    <option>Transport Information</option>
                    <option>Careers at SPS</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Your Message *</label>
                  <textarea className="form-input min-h-[130px] resize-none" placeholder="How can we help you?" required />
                </div>
                <button type="submit" className="btn-gold w-full justify-center text-base py-4">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campuses ── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="font-montserrat text-xs font-700 text-gold uppercase tracking-widest block mb-3">Find Us</span>
            <h2 className="section-heading">Our Two Campuses</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CAMPUSES.map((campus) => (
              <div key={campus.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                {/* Map placeholder */}
                <div className="bg-navy/5 h-52 flex items-center justify-center border-b border-gray-100">
                  <div className="text-center">
                    <MapPin size={36} className="text-navy/20 mx-auto mb-2" />
                    <p className="font-montserrat text-xs text-navy/30 uppercase tracking-widest">Map — {campus.name}</p>
                    <p className="font-inter text-xs text-gray-300 mt-1">(Google Maps embed to be added)</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-playfair text-xl font-700 text-navy">{campus.name}</h3>
                      <p className="font-montserrat text-xs text-gold font-700 uppercase tracking-widest mt-1">{campus.label}</p>
                    </div>
                    <a href={`https://maps.google.com/?q=Sharda+Public+School+Almora`}
                      target="_blank" rel="noopener noreferrer"
                      className="text-xs font-montserrat font-700 text-navy hover:text-gold flex items-center gap-1 transition-colors">
                      Get Directions <ArrowRight size={12} />
                    </a>
                  </div>
                  <div className="space-y-3 text-sm font-inter text-gray-600">
                    <p className="flex items-start gap-3">
                      <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                      {campus.address}, {campus.city}
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock size={15} className="text-gold shrink-0" />
                      {campus.timing}
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone size={15} className="text-gold shrink-0" />
                      <a href={`tel:${CONTACT.phone}`} className="hover:text-gold transition-colors">{CONTACT.phoneDisplay}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-playfair text-white text-3xl lg:text-4xl font-700 mb-4">Admissions Are Open</h2>
          <p className="font-inter text-white/70 text-lg mb-8">Session 2025–26 · Nursery to Class XII · Monday – Saturday 8:30 AM – 2:30 PM</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/admissions" className="btn-gold">Apply for Admission <ArrowRight size={16} /></a>
            <a href={`tel:${CONTACT.phone}`} className="bg-white/10 border border-white/20 text-white font-montserrat font-700 px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-white/20 transition-all">
              <Phone size={16} /> {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
