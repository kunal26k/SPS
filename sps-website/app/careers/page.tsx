'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { JOB_OPENINGS, CONTACT, SCHOOL } from '@/lib/content'
import SectionHeading from '@/components/shared/SectionHeading'
import { Briefcase, Clock, GraduationCap, ChevronDown, CheckCircle2, Upload, User, Mail, Phone, BookOpen, X } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  qualification: string
  experience: string
  position: string
  message: string
}

type ModalJob = typeof JOB_OPENINGS[0] | null

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<ModalJob>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    setSubmitting(true)
    // Build mailto — replace with real API / form handler when backend is ready
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nPosition Applied: ${data.position || openJob?.title || 'Open Application'}\nSubject Expertise: ${data.subject}\nQualification: ${data.qualification}\nExperience: ${data.experience} years\n\nCover Note:\n${data.message}`
    )
    window.location.href = `mailto:${CONTACT.email}?subject=Teacher Application — ${data.position || 'Open Application'}&body=${body}`
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      reset()
      setOpenJob(null)
    }, 800)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="tag bg-gold/15 text-gold text-xs uppercase tracking-widest mb-4 inline-block">
            Join Our Team
          </span>
          <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-700 leading-tight mb-4">
            Teach at <span className="text-gold">SPS</span>
          </h1>
          <p className="font-inter text-white/65 text-lg max-w-2xl">
            We are always looking for passionate, dedicated educators who believe in shaping the next generation. Join a team of 50+ faculty members at Almora's finest school.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { label: 'Open Positions', value: `${JOB_OPENINGS.length}` },
              { label: 'Faculty Members', value: '50+' },
              { label: 'Est.', value: '2001' },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="font-playfair text-gold text-3xl font-700">{value}</span>
                <span className="font-inter text-white/50 text-xs uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why teach at SPS */}
      <section className="py-14 bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: '🏫', title: 'Modern Infrastructure', desc: 'AI & Robotics labs, smart classrooms, science labs, and a 6-acre campus.' },
              { emoji: '👨‍🏫', title: 'Collaborative Faculty', desc: 'Join 50+ experienced educators in a supportive, growth-oriented environment.' },
              { emoji: '📈', title: 'Professional Growth', desc: 'Regular workshops, training programs, and career advancement opportunities.' },
              { emoji: '🌳', title: 'Almora — Quality of Life', desc: 'Work in the serene hills of Kumaon with a healthy work-life balance.' },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-3 block" role="img" aria-label={title}>{emoji}</span>
                <h3 className="font-montserrat font-700 text-navy text-sm mb-2">{title}</h3>
                <p className="font-inter text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job openings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            tag="Current Openings"
            title="Teaching Positions"
            subtitle={`We are hiring for the 2025–26 academic session. All positions are at ${SCHOOL.name}, Almora.`}
            align="left"
          />

          <div className="mt-8 flex flex-col gap-4">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gold/30
                           transition-all duration-200 bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                      <Briefcase size={20} className="text-navy" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-montserrat font-700 text-navy text-base">{job.title}</h3>
                        <span className="tag bg-gold/10 text-gold-600 text-xs px-2 py-0.5 rounded-full">{job.type}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="flex items-center gap-1 font-inter text-xs text-gray-400">
                          <BookOpen size={11} aria-hidden="true" /> Classes {job.classes}
                        </span>
                        <span className="flex items-center gap-1 font-inter text-xs text-gray-400">
                          <GraduationCap size={11} aria-hidden="true" /> {job.qualification}
                        </span>
                        <span className="flex items-center gap-1 font-inter text-xs text-gray-400">
                          <Clock size={11} aria-hidden="true" /> {job.experience} experience
                        </span>
                      </div>
                      <p className="font-inter text-gray-500 text-sm mt-2 leading-relaxed max-w-xl">
                        {job.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:shrink-0">
                    <span className="font-inter text-xs text-gray-400">Posted {job.posted}</span>
                    <button
                      onClick={() => { setOpenJob(job); setSubmitted(false) }}
                      className="btn-gold text-xs px-5 py-2.5"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-inter text-sm text-gray-500 text-center">
            Don't see your subject? Send an open application to{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-gold hover:underline font-600">{CONTACT.email}</a>
          </p>
        </div>
      </section>

      {/* Application Modal */}
      {openJob && !submitted && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Apply for ${openJob.title}`}
          onClick={(e) => { if (e.target === e.currentTarget) setOpenJob(null) }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="bg-navy px-8 py-6 rounded-t-3xl flex items-start justify-between">
              <div>
                <p className="font-montserrat text-gold text-xs font-700 uppercase tracking-widest mb-1">Application Form</p>
                <h2 className="font-playfair text-white text-xl font-700">{openJob.title}</h2>
                <p className="font-inter text-white/50 text-xs mt-0.5">Classes {openJob.classes} · {openJob.type}</p>
              </div>
              <button
                onClick={() => setOpenJob(null)}
                className="text-white/50 hover:text-white transition-colors mt-1"
                aria-label="Close application form"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col gap-5" noValidate>
              <input type="hidden" value={openJob.title} {...register('position')} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-1.5 block" htmlFor="name">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                    <input
                      id="name"
                      placeholder="Your full name"
                      className={`w-full border rounded-xl pl-9 pr-4 py-3 font-inter text-navy text-sm
                        focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold
                        ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                      {...register('name', { required: 'Name is required' })}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-1.5 block" htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className={`w-full border rounded-xl pl-9 pr-4 py-3 font-inter text-navy text-sm
                        focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold
                        ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                      })}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-1.5 block" htmlFor="phone">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={`w-full border rounded-xl pl-9 pr-4 py-3 font-inter text-navy text-sm
                        focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold
                        ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}
                      {...register('phone', { required: 'Phone is required' })}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-1.5 block" htmlFor="subject-expertise">
                    Subject Expertise <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject-expertise"
                    placeholder="e.g. Mathematics, Physics"
                    className={`w-full border rounded-xl px-4 py-3 font-inter text-navy text-sm
                      focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold
                      ${errors.subject ? 'border-red-300' : 'border-gray-200'}`}
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                {/* Qualification */}
                <div>
                  <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-1.5 block" htmlFor="qualification">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="qualification"
                    placeholder="e.g. M.Sc. + B.Ed."
                    className={`w-full border rounded-xl px-4 py-3 font-inter text-navy text-sm
                      focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold
                      ${errors.qualification ? 'border-red-300' : 'border-gray-200'}`}
                    {...register('qualification', { required: 'Qualification is required' })}
                  />
                  {errors.qualification && <p className="text-red-500 text-xs mt-1">{errors.qualification.message}</p>}
                </div>

                {/* Experience */}
                <div>
                  <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-1.5 block" htmlFor="experience">
                    Years of Experience
                  </label>
                  <input
                    id="experience"
                    placeholder="e.g. 3"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-navy text-sm
                               focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold"
                    {...register('experience')}
                  />
                </div>
              </div>

              {/* Cover note */}
              <div>
                <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-1.5 block" htmlFor="message">
                  Why do you want to join SPS? (Cover Note)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about yourself, your teaching philosophy, and why you'd like to join Sharda Public School..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-navy text-sm
                             focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold resize-none"
                  {...register('message')}
                />
              </div>

              {/* CV note */}
              <div className="flex items-start gap-2 bg-gold/5 border border-gold/20 rounded-xl p-4">
                <Upload size={15} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-inter text-sm text-gray-600">
                  Please attach your CV / resume to the email that opens after submitting. Supported formats: PDF, DOCX.
                </p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-gold justify-center py-4 text-sm disabled:opacity-60"
              >
                {submitting ? 'Submitting…' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success state */}
      {submitted && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-sm w-full">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h2 className="font-playfair text-navy text-2xl font-700 mb-2">Application Sent!</h2>
            <p className="font-inter text-gray-500 text-sm mb-6">
              Thank you for your interest in joining SPS. Our HR team will review your application and reach out within 5–7 working days.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-navy text-sm w-full justify-center">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
