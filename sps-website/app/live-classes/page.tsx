'use client'

import { useState } from 'react'
import { LIVE_SCHEDULE, PAST_RECORDINGS } from '@/lib/content'
import { Radio, Clock, User, BookOpen, Play, Calendar, Wifi, WifiOff } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const DAYS = LIVE_SCHEDULE.map((d) => d.day)

const CATEGORY_COLORS: Record<string, string> = {
  Mathematics: 'bg-blue-50 text-blue-700 border-blue-200',
  Physics: 'bg-purple-50 text-purple-700 border-purple-200',
  Chemistry: 'bg-green-50 text-green-700 border-green-200',
  Biology: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  English: 'bg-orange-50 text-orange-700 border-orange-200',
  'English Literature': 'bg-orange-50 text-orange-700 border-orange-200',
  'English Grammar': 'bg-orange-50 text-orange-700 border-orange-200',
  History: 'bg-amber-50 text-amber-700 border-amber-200',
  'History & Civics': 'bg-amber-50 text-amber-700 border-amber-200',
  Geography: 'bg-teal-50 text-teal-700 border-teal-200',
  Science: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'EVS / Science': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Computer Science': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Accountancy: 'bg-pink-50 text-pink-700 border-pink-200',
  Hindi: 'bg-red-50 text-red-700 border-red-200',
}

export default function LiveClassesPage() {
  const [activeDay, setActiveDay] = useState('Monday')
  const today = LIVE_SCHEDULE.find((d) => d.day === activeDay)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")` }}
          aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" aria-hidden="true" />
            <span className="font-montserrat text-xs font-700 text-red-300 uppercase tracking-wider">Live Broadcast</span>
          </div>

          <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-700 leading-tight mb-4">
            Live Classes at <span className="text-gold">SPS</span>
          </h1>
          <p className="font-inter text-white/65 text-lg max-w-2xl">
            Watch your teachers live from the classroom — real-time lessons, Q&A, and recordings available for every class. Never miss a session.
          </p>

          {/* Info cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: Radio, label: 'Mon – Fri', sub: 'Live sessions daily' },
              { icon: Clock, label: '9 AM – 3 PM', sub: 'Broadcast window' },
              { icon: BookOpen, label: 'All Classes', sub: 'Nursery to Class XII' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 bg-white/8 rounded-xl p-4">
                <Icon size={20} className="text-gold shrink-0" />
                <div>
                  <p className="font-montserrat text-white text-sm font-700">{label}</p>
                  <p className="font-inter text-white/50 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Live banner — shown when a class is actually live (YouTube embed) */}
      <section className="bg-red-600 py-4" aria-live="polite">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-white animate-pulse shrink-0" aria-hidden="true" />
            <p className="font-montserrat font-700 text-white text-sm">
              No class is live right now — next live session starts at 9:00 AM Monday
            </p>
          </div>
          <span className="font-inter text-red-200 text-xs">
            Live sessions are broadcast via the school's YouTube channel
          </span>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            tag="Weekly Schedule"
            title="Class Timetable"
            subtitle="Select a day to view the live class schedule. Join links appear 5 minutes before each session."
            align="left"
          />

          {/* Day tabs */}
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Select day">
            {DAYS.map((day) => (
              <button
                key={day}
                role="tab"
                aria-selected={activeDay === day}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-2 rounded-full font-montserrat text-sm font-700 transition-all duration-200
                  ${activeDay === day
                    ? 'bg-navy text-white shadow-md'
                    : 'bg-gray-100 text-gray-500 hover:bg-gold/10 hover:text-gold'}`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Slots */}
          <div className="mt-6 flex flex-col gap-4" role="tabpanel">
            {today?.slots.map((slot, i) => {
              const colorClass = CATEGORY_COLORS[slot.subject] ?? 'bg-gray-50 text-gray-700 border-gray-200'
              return (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4
                             border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow duration-200 bg-white"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Time */}
                    <div className="flex items-center gap-1.5 text-gray-400 shrink-0 min-w-[80px]">
                      <Clock size={14} aria-hidden="true" />
                      <span className="font-montserrat text-sm font-600">{slot.time}</span>
                    </div>

                    {/* Subject badge */}
                    <span className={`tag border text-xs px-3 py-1 rounded-full shrink-0 ${colorClass}`}>
                      {slot.subject}
                    </span>

                    <div>
                      <p className="font-montserrat font-700 text-navy text-sm">{slot.subject}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 font-inter text-xs text-gray-400">
                          <User size={11} aria-hidden="true" /> {slot.teacher}
                        </span>
                        <span className="flex items-center gap-1 font-inter text-xs text-gray-400">
                          <BookOpen size={11} aria-hidden="true" /> {slot.classes}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Join button */}
                  <div className="flex items-center gap-3 sm:shrink-0">
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <WifiOff size={13} aria-hidden="true" />
                      <span className="font-inter text-xs text-gray-400">Offline</span>
                    </div>
                    <button
                      disabled
                      className="px-5 py-2 rounded-full font-montserrat text-xs font-700
                                 bg-gray-100 text-gray-400 cursor-not-allowed"
                      title="Join link activates 5 minutes before class"
                    >
                      Join Live
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="mt-4 font-inter text-xs text-gray-400 text-center">
            🔴 Live join links activate automatically 5 minutes before each class. Sessions are broadcast via the school's YouTube channel.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            tag="How It Works"
            title="Joining a Live Class"
            subtitle="Simple steps to access your teacher's live session from anywhere."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Check the Schedule', desc: 'Find your class and subject in the weekly timetable above.' },
              { step: '02', title: 'Click Join Live', desc: 'The Join button activates 5 minutes before the session starts.' },
              { step: '03', title: 'Watch & Ask', desc: 'Watch the teacher live. Type questions in the YouTube chat — teachers respond in real time.' },
              { step: '04', title: 'Missed It? Watch Recording', desc: 'Every session is auto-saved. Access past recordings in the section below.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <span className="font-playfair text-4xl font-700 text-navy/10">{step}</span>
                <h3 className="font-montserrat font-700 text-navy text-base mt-2 mb-2">{title}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Recordings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            tag="Past Sessions"
            title="Recorded Classes"
            subtitle="Missed a session? All past broadcasts are saved and available to watch anytime."
            align="left"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAST_RECORDINGS.map((rec) => (
              <div key={rec.title} className="card group p-5">
                {/* Thumbnail placeholder */}
                <div className="w-full h-40 rounded-xl bg-gradient-to-br from-navy to-green-600
                                flex items-center justify-center mb-4 relative overflow-hidden">
                  <Play size={36} className="text-white/40" aria-hidden="true" />
                  {/* Replace this div with an actual YouTube thumbnail when youtubeId is real */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" aria-hidden="true" />
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-montserrat font-600 px-2 py-0.5 rounded">
                    {rec.duration}
                  </span>
                </div>

                <span className={`tag text-xs mb-2 inline-block px-2 py-0.5 rounded-full
                  ${CATEGORY_COLORS[rec.subject] ?? 'bg-gray-100 text-gray-600'}`}>
                  {rec.subject}
                </span>
                <h3 className="font-montserrat font-700 text-navy text-sm leading-snug mb-1">{rec.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-inter text-xs text-gray-400 flex items-center gap-1">
                    <User size={11} aria-hidden="true" /> {rec.teacher}
                  </span>
                  <span className="font-inter text-xs text-gray-400 flex items-center gap-1">
                    <Calendar size={11} aria-hidden="true" /> {rec.date}
                  </span>
                </div>
                <button
                  className="mt-4 w-full py-2 rounded-full bg-navy/5 hover:bg-navy text-navy hover:text-white
                             font-montserrat text-xs font-700 transition-all duration-200 flex items-center justify-center gap-2"
                  onClick={() => alert('Recording will open on the school YouTube channel once the YouTube ID is configured.')}
                >
                  <Play size={13} /> Watch Recording
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://youtube.com/@shardapublicschool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy text-sm"
            >
              View All Recordings on YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
