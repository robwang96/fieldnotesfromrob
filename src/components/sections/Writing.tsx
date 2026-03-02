/**
 * Writing / Field Notes section
 *
 * WHAT THIS DOES: Shows your blog post previews. Each card has a
 * subtle glass-morphism effect (semi-transparent background + blur)
 * and a slight rotation — again lifted from heyarinze.com's
 * Thoughts section.
 *
 * TO ADD A NEW POST: Go to src/data/content.ts and add an entry
 * to the `posts` array. The page updates automatically.
 */

import { siteContent } from '@/data/content'
import type { Post } from '@/data/content'

const tagColors: Record<string, string> = {
  'Mental Health': 'text-emerald-700 bg-emerald-50',
  'AI':            'text-blue-700 bg-blue-50',
  'Startups':      'text-amber-700 bg-amber-50',
  'HIPAA':         'text-purple-700 bg-purple-50',
  'Health Tech':   'text-teal-700 bg-teal-50',
  'Technical':     'text-gray-700 bg-gray-100',
  'Supabase':      'text-green-700 bg-green-50',
}

const tilts = ['tilt-2', 'tilt-3', 'tilt-1']

export function Writing() {
  return (
    <section id="writing" className="max-w-3xl mx-auto px-6 py-16">

      {/* Section header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-[var(--ink-faint)] tracking-widest uppercase mb-2">
          ◆ Field Notes
        </p>
        <h2 className="text-3xl font-serif font-bold text-[var(--ink)]">
          Dispatches from the build
        </h2>
      </div>

      {/* Post cards */}
      <div className="space-y-4">
        {siteContent.posts.map((post, i) => (
          <PostCard key={post.title} post={post} tilt={tilts[i % tilts.length]} />
        ))}
      </div>

      {/* More link */}
      <div className="mt-8">
        <a
          href="#"
          className="font-mono text-xs text-[var(--ink-faint)] hover:text-[var(--coral)] transition-colors tracking-wide"
        >
          All notes ↗
        </a>
      </div>
    </section>
  )
}

function PostCard({ post, tilt }: { post: Post; tilt: string }) {
  return (
    <a
      href={post.href}
      className={`
        block ${tilt}
        bg-white/35 backdrop-blur-sm
        rounded-lg p-5
        border border-[var(--border)]
        hover:bg-white/60 hover:shadow-sm
        transition-all duration-200
        group
      `}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className={`font-mono text-xs px-2 py-0.5 rounded-full ${tagColors[tag] ?? 'text-gray-600 bg-gray-100'}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-serif text-lg font-bold text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors mb-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="font-mono text-sm text-[var(--ink-light)] leading-relaxed mb-3">
        {post.excerpt}
      </p>

      {/* Date */}
      <p className="font-mono text-xs text-[var(--ink-faint)]">{post.date}</p>
    </a>
  )
}
