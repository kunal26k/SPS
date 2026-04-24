'use client'

import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { COMMUNITY_POSTS, CONTACT, type PostCategory, type CommunityPost } from '@/lib/content'
import SectionHeading from '@/components/shared/SectionHeading'
import { Pin, Megaphone, Calendar, Trophy, Bell, Search, Plus, X, CheckCircle2, Send } from 'lucide-react'

const CATEGORY_CONFIG: Record<PostCategory, { color: string; icon: typeof Bell; bg: string }> = {
  Announcement: { color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200', icon: Megaphone },
  Event:        { color: 'text-green-700', bg: 'bg-green-50 border-green-200', icon: Calendar },
  Achievement:  { color: 'text-gold-600', bg: 'bg-gold/10 border-gold/30', icon: Trophy },
  Notice:       { color: 'text-orange-700', bg: 'bg-orange-50 border-orange-200', icon: Bell },
}

const ROLE_COLORS: Record<string, string> = {
  Admin:   'bg-navy text-white',
  Teacher: 'bg-green-600 text-white',
  Student: 'bg-gold text-navy',
}

type FormData = {
  name: string
  role: string
  category: PostCategory
  title: string
  body: string
  email: string
}

type FilterType = 'All' | PostCategory

const FILTERS: FilterType[] = ['All', 'Announcement', 'Event', 'Achievement', 'Notice']

export default function CommunityPage() {
  const [filter, setFilter] = useState<FilterType>('All')
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Local posts state (new submissions prepended)
  const [localPosts, setLocalPosts] = useState<CommunityPost[]>([])

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const allPosts = [...localPosts, ...COMMUNITY_POSTS]

  const filtered = useMemo(() => {
    return allPosts.filter((post) => {
      const matchCategory = filter === 'All' || post.category === filter
      const matchSearch = search.trim() === '' ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.author.toLowerCase().includes(search.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [filter, search, localPosts])

  const pinned = filtered.filter((p) => p.pinned)
  const unpinned = filtered.filter((p) => !p.pinned)

  const onSubmit = (data: FormData) => {
    const newPost: CommunityPost = {
      id: Date.now().toString(),
      category: data.category,
      title: data.title,
      body: data.body,
      author: data.name,
      role: data.role as CommunityPost['role'],
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    }
    setLocalPosts((prev) => [newPost, ...prev])
    setSubmitted(true)
    reset()
    setTimeout(() => {
      setSubmitted(false)
      setShowForm(false)
    }, 2500)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="tag bg-gold/15 text-gold text-xs uppercase tracking-widest mb-4 inline-block">
            Community Board
          </span>
          <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-700 leading-tight mb-4">
            SPS <span className="text-gold">Community</span>
          </h1>
          <p className="font-inter text-white/65 text-lg max-w-2xl">
            The school notice board — announcements, upcoming events, achievements, and notices from administration, teachers, and students.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-light min-h-[60vh]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          {/* Controls bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            {/* Filters */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter posts">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full font-montserrat text-xs font-700 transition-all duration-200
                    ${filter === f ? 'bg-navy text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-gold hover:text-gold'}`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Search */}
              <div className="relative flex-1 sm:w-52">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search posts…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm font-inter border border-gray-200 rounded-full
                             focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white"
                  aria-label="Search community posts"
                />
              </div>

              {/* Post button */}
              <button
                onClick={() => { setShowForm(true); setSubmitted(false) }}
                className="btn-gold text-xs px-4 py-2 shrink-0"
              >
                <Plus size={14} /> Post
              </button>
            </div>
          </div>

          {/* Pinned posts */}
          {pinned.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Pin size={14} className="text-gold" aria-hidden="true" />
                <span className="font-montserrat text-xs font-700 text-gray-400 uppercase tracking-wider">Pinned</span>
              </div>
              <div className="flex flex-col gap-4">
                {pinned.map((post) => <PostCard key={post.id} post={post} />)}
              </div>
            </div>
          )}

          {/* Divider if both */}
          {pinned.length > 0 && unpinned.length > 0 && (
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-200" aria-hidden="true" />
              <span className="font-montserrat text-xs text-gray-400 uppercase tracking-wider">Recent Posts</span>
              <div className="flex-1 h-px bg-gray-200" aria-hidden="true" />
            </div>
          )}

          {/* Regular posts */}
          <div className="flex flex-col gap-4">
            {unpinned.map((post) => <PostCard key={post.id} post={post} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-inter text-gray-400 text-sm">No posts found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Post submission form modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Submit a post"
          onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false) }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="bg-navy px-8 py-6 rounded-t-3xl flex items-center justify-between">
              <div>
                <p className="font-montserrat text-gold text-xs font-700 uppercase tracking-widest mb-1">Share with SPS</p>
                <h2 className="font-playfair text-white text-xl font-700">New Post</h2>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Close form"
              >
                <X size={22} />
              </button>
            </div>

            {submitted ? (
              <div className="p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="font-playfair text-navy text-xl font-700 mb-2">Post Published!</h3>
                <p className="font-inter text-gray-500 text-sm">Your post is now visible on the community board.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="form-label" htmlFor="post-name">Your Name <span className="text-red-500">*</span></label>
                    <input
                      id="post-name"
                      placeholder="Full name"
                      className={`form-input ${errors.name ? 'border-red-300' : ''}`}
                      {...register('name', { required: 'Name required' })}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Role */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="form-label" htmlFor="post-role">You are a <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select
                        id="post-role"
                        className={`form-input appearance-none ${errors.role ? 'border-red-300' : ''}`}
                        {...register('role', { required: 'Role required' })}
                      >
                        <option value="">— Select —</option>
                        <option value="Admin">Admin / Staff</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student / Parent</option>
                      </select>
                    </div>
                    {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="form-label" htmlFor="post-category">Category <span className="text-red-500">*</span></label>
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Select category">
                    {(['Announcement', 'Event', 'Achievement', 'Notice'] as PostCategory[]).map((cat) => {
                      const cfg = CATEGORY_CONFIG[cat]
                      const Icon = cfg.icon
                      return (
                        <label
                          key={cat}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer text-xs font-montserrat font-700
                                      transition-all duration-150 ${cfg.bg} ${cfg.color}`}
                        >
                          <input type="radio" value={cat} className="sr-only" {...register('category', { required: true })} />
                          <Icon size={12} aria-hidden="true" /> {cat}
                        </label>
                      )
                    })}
                  </div>
                  {errors.category && <p className="text-red-500 text-xs mt-1">Please select a category.</p>}
                </div>

                {/* Title */}
                <div>
                  <label className="form-label" htmlFor="post-title">Title <span className="text-red-500">*</span></label>
                  <input
                    id="post-title"
                    placeholder="What's this about?"
                    className={`form-input ${errors.title ? 'border-red-300' : ''}`}
                    {...register('title', { required: 'Title required' })}
                  />
                  {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                </div>

                {/* Body */}
                <div>
                  <label className="form-label" htmlFor="post-body">Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="post-body"
                    rows={5}
                    placeholder="Share the details — event info, announcement, achievement…"
                    className={`form-input resize-none ${errors.body ? 'border-red-300' : ''}`}
                    {...register('body', { required: 'Message required', minLength: { value: 20, message: 'At least 20 characters' } })}
                  />
                  {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body.message}</p>}
                </div>

                <button type="submit" className="btn-gold justify-center py-3.5 text-sm">
                  <Send size={15} /> Publish Post
                </button>

                <p className="font-inter text-xs text-gray-400 text-center">
                  Posts are visible to all students, parents, and faculty. Please post responsibly.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

// ─── PostCard Component ───────────────────────────────────────────────────────

function PostCard({ post }: { post: CommunityPost }) {
  const [expanded, setExpanded] = useState(false)
  const cfg = CATEGORY_CONFIG[post.category]
  const Icon = cfg.icon

  return (
    <article
      className={`bg-white rounded-2xl border p-6 transition-all duration-200
                  ${post.pinned ? 'border-gold/30 shadow-sm' : 'border-gray-100 hover:shadow-md'}`}
      aria-label={post.title}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Category badge */}
          <span className={`tag border text-xs px-2.5 py-1 rounded-full flex items-center gap-1 ${cfg.bg} ${cfg.color}`}>
            <Icon size={11} aria-hidden="true" /> {post.category}
          </span>

          {/* Pinned indicator */}
          {post.pinned && (
            <span className="flex items-center gap-1 text-gold text-xs font-montserrat font-700">
              <Pin size={11} aria-hidden="true" /> Pinned
            </span>
          )}
        </div>

        <span className="font-inter text-xs text-gray-400 shrink-0">{post.date}</span>
      </div>

      <h3 className="font-montserrat font-700 text-navy text-base leading-snug mb-2">
        {post.title}
      </h3>

      <p className={`font-inter text-gray-600 text-sm leading-relaxed ${!expanded ? 'line-clamp-3' : ''}`}>
        {post.body}
      </p>

      {post.body.length > 180 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-montserrat text-xs font-700 text-gold mt-2 hover:underline"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}

      <div className="mt-4 pt-3 border-t border-gray-50 flex items-center gap-2">
        <span className={`text-xs font-montserrat font-700 px-2.5 py-0.5 rounded-full ${ROLE_COLORS[post.role] ?? 'bg-gray-100 text-gray-600'}`}>
          {post.role}
        </span>
        <span className="font-inter text-xs text-gray-500">{post.author}</span>
      </div>
    </article>
  )
}
