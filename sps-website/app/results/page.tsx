'use client'

import { useState } from 'react'
import { RESULT_CLASSES, SAMPLE_RESULT } from '@/lib/content'
import { Search, FileText, User, Award, AlertCircle, CheckCircle2, ChevronDown, Printer } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

type ViewState = 'form' | 'result' | 'notfound'

const GRADE_COLORS: Record<string, string> = {
  A1: 'bg-green-50 text-green-700 border-green-300',
  A2: 'bg-blue-50 text-blue-700 border-blue-300',
  B1: 'bg-cyan-50 text-cyan-700 border-cyan-300',
  B2: 'bg-yellow-50 text-yellow-700 border-yellow-300',
  C1: 'bg-orange-50 text-orange-700 border-orange-300',
  C2: 'bg-red-50 text-red-700 border-red-300',
}

export default function ResultsPage() {
  const [selectedClass, setSelectedClass] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [session, setSession] = useState('2024-25')
  const [viewState, setViewState] = useState<ViewState>('form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!selectedClass) { setError('Please select a class.'); return }
    if (!rollNo.trim()) { setError('Please enter the roll number.'); return }

    setLoading(true)
    // Simulate a network fetch — replace with real API call when backend is ready
    setTimeout(() => {
      setLoading(false)
      // Demo: only roll number "2024-001" returns a result
      if (rollNo.trim() === '2024-001' && selectedClass === 'Class X') {
        setViewState('result')
      } else {
        setViewState('notfound')
      }
    }, 1200)
  }

  const handleReset = () => {
    setViewState('form')
    setRollNo('')
    setSelectedClass('')
    setError('')
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <span className="tag bg-gold/15 text-gold text-xs uppercase tracking-widest mb-4 inline-block">
            Student Results
          </span>
          <h1 className="font-playfair text-white text-4xl md:text-5xl font-700 leading-tight mb-4">
            Results <span className="text-gold">Portal</span>
          </h1>
          <p className="font-inter text-white/65 text-lg">
            Parents can view their child's examination results securely. Enter the class and roll number issued at the time of examination.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">

          {/* ── SEARCH FORM ── */}
          {viewState === 'form' && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center">
                  <Search size={22} className="text-gold" />
                </div>
                <div>
                  <h2 className="font-playfair text-navy text-2xl font-700">Find Result</h2>
                  <p className="font-inter text-gray-400 text-sm">Enter the details below to view the result</p>
                </div>
              </div>

              <form onSubmit={handleSearch} className="flex flex-col gap-6" noValidate>
                {/* Session */}
                <div>
                  <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-2 block" htmlFor="session">
                    Academic Session
                  </label>
                  <div className="relative">
                    <select
                      id="session"
                      value={session}
                      onChange={(e) => setSession(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-navy text-sm
                                 appearance-none focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white"
                    >
                      <option value="2024-25">2024–25</option>
                      <option value="2023-24">2023–24</option>
                      <option value="2022-23">2022–23</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Class */}
                <div>
                  <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-2 block" htmlFor="class">
                    Select Class <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="class"
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-navy text-sm
                                 appearance-none focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white"
                    >
                      <option value="">— Select Class —</option>
                      {RESULT_CLASSES.map((cls) => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Roll number */}
                <div>
                  <label className="font-montserrat text-xs font-700 text-navy uppercase tracking-wider mb-2 block" htmlFor="rollno">
                    Roll Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="rollno"
                    type="text"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    placeholder="e.g. 2024-001"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-navy text-sm
                               focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                  <p className="font-inter text-xs text-gray-400 mt-1.5">
                    Roll number is printed on the student's admit card / identity card.
                  </p>
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    <span className="font-inter text-sm">{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold justify-center py-4 text-sm disabled:opacity-60 disabled:cursor-wait"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                      Searching...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Search size={16} /> View Result
                    </span>
                  )}
                </button>
              </form>

              <p className="mt-6 font-inter text-xs text-gray-400 text-center">
                For result-related queries, contact <a href="mailto:contact@shardapublicschool.com" className="text-gold hover:underline">contact@shardapublicschool.com</a>
              </p>
            </div>
          )}

          {/* ── NOT FOUND ── */}
          {viewState === 'notfound' && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={32} className="text-red-400" />
              </div>
              <h2 className="font-playfair text-navy text-2xl font-700 mb-2">No Result Found</h2>
              <p className="font-inter text-gray-500 text-sm mb-6">
                We couldn't find a result for Roll No. <strong>{rollNo}</strong> in <strong>{selectedClass}</strong> ({session}).
                Please verify the details and try again.
              </p>
              <button onClick={handleReset} className="btn-navy text-sm">Try Again</button>
              <p className="mt-4 font-inter text-xs text-gray-400">
                Need help? Call <a href="tel:7300502640" className="text-gold">+91 73005 02640</a>
              </p>
            </div>
          )}

          {/* ── RESULT CARD ── */}
          {viewState === 'result' && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Result header */}
              <div className="bg-navy px-8 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-montserrat text-gold text-xs font-700 uppercase tracking-widest mb-1">Sharda Public School, Almora</p>
                    <h2 className="font-playfair text-white text-2xl font-700">Examination Result</h2>
                    <p className="font-inter text-white/50 text-sm mt-0.5">Session {SAMPLE_RESULT.session}</p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white
                               font-montserrat text-xs font-700 px-4 py-2 rounded-full transition-colors no-print"
                    aria-label="Print result"
                  >
                    <Printer size={14} /> Print
                  </button>
                </div>

                {/* Student info */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Student Name', value: SAMPLE_RESULT.studentName },
                    { label: 'Roll No.', value: SAMPLE_RESULT.rollNo },
                    { label: 'Class & Section', value: `${SAMPLE_RESULT.class} – ${SAMPLE_RESULT.section}` },
                    { label: 'Overall Grade', value: SAMPLE_RESULT.grade },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white/8 rounded-xl p-3">
                      <p className="font-inter text-white/50 text-xs mb-0.5">{label}</p>
                      <p className="font-montserrat text-white font-700 text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marks table */}
              <div className="p-8">
                <h3 className="font-montserrat font-700 text-navy text-sm uppercase tracking-wider mb-4">Subject-wise Performance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" aria-label="Subject-wise result">
                    <thead>
                      <tr className="border-b-2 border-gray-100">
                        <th className="text-left py-3 font-montserrat text-xs text-gray-400 uppercase tracking-wider">Subject</th>
                        <th className="text-center py-3 font-montserrat text-xs text-gray-400 uppercase tracking-wider">Max Marks</th>
                        <th className="text-center py-3 font-montserrat text-xs text-gray-400 uppercase tracking-wider">Obtained</th>
                        <th className="text-center py-3 font-montserrat text-xs text-gray-400 uppercase tracking-wider">%</th>
                        <th className="text-center py-3 font-montserrat text-xs text-gray-400 uppercase tracking-wider">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {SAMPLE_RESULT.subjects.map((sub) => (
                        <tr key={sub.name} className="hover:bg-light transition-colors">
                          <td className="py-3.5 font-inter text-navy font-500">{sub.name}</td>
                          <td className="py-3.5 text-center font-inter text-gray-500">{sub.maxMarks}</td>
                          <td className="py-3.5 text-center font-montserrat font-700 text-navy">{sub.obtained}</td>
                          <td className="py-3.5 text-center font-inter text-gray-500">
                            {((sub.obtained / sub.maxMarks) * 100).toFixed(1)}%
                          </td>
                          <td className="py-3.5 text-center">
                            <span className={`tag border text-xs px-2 py-0.5 rounded-full ${GRADE_COLORS[sub.grade] ?? 'bg-gray-100 text-gray-600'}`}>
                              {sub.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-navy/10 bg-navy/5">
                        <td className="py-4 font-montserrat font-700 text-navy">Total</td>
                        <td className="py-4 text-center font-montserrat font-700 text-navy">{SAMPLE_RESULT.totalMax}</td>
                        <td className="py-4 text-center font-montserrat font-700 text-navy">{SAMPLE_RESULT.totalObtained}</td>
                        <td className="py-4 text-center font-montserrat font-700 text-navy">{SAMPLE_RESULT.percentage}%</td>
                        <td className="py-4 text-center">
                          <span className={`tag border text-xs px-2 py-0.5 rounded-full ${GRADE_COLORS[SAMPLE_RESULT.grade]}`}>
                            {SAMPLE_RESULT.grade}
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                {/* Summary */}
                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-5 py-3">
                    <CheckCircle2 size={20} className="text-green-600" />
                    <div>
                      <p className="font-montserrat font-700 text-green-700 text-sm">RESULT: PASS</p>
                      <p className="font-inter text-green-600 text-xs">{SAMPLE_RESULT.remarks}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-xl px-5 py-3">
                    <Award size={20} className="text-gold-600" />
                    <div>
                      <p className="font-montserrat font-700 text-navy text-sm">Percentage: {SAMPLE_RESULT.percentage}%</p>
                      <p className="font-inter text-gray-500 text-xs">Overall Grade: {SAMPLE_RESULT.grade}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="font-inter text-xs text-gray-400">
                    This is a digitally generated result. For the official marksheet, contact the school office.
                  </p>
                  <button onClick={handleReset} className="btn-navy text-sm shrink-0">
                    Search Another
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
