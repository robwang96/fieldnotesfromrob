/**
 * Hero — the first thing visitors see.
 *
 * WHAT THIS DOES: Big greeting, your tagline, a short bio, tags,
 * and links to your social profiles.
 *
 * TO EDIT: Change the content in src/data/content.ts — not here.
 */

import { siteContent } from '@/data/content'

export function Hero() {
  const { hero } = siteContent

  return (
    <section id="home" className="pt-32 pb-16 max-w-3xl mx-auto px-6">

      {/* Location tag */}
      <p className="font-mono text-xs text-[var(--ink-faint)] tracking-widest uppercase mb-6">
        ◆ {hero.location}
      </p>

      {/* Main heading — Playfair Display kicks in here via h1 */}
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-[var(--ink)] leading-tight mb-6">
        {hero.greeting}
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl font-serif text-[var(--ink-light)] leading-relaxed mb-8 max-w-xl">
        {hero.tagline}
      </p>

      {/* Bio paragraphs */}
      <div className="space-y-3 font-mono text-sm text-[var(--ink-light)] leading-relaxed max-w-lg mb-10">
        {hero.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Interest tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {hero.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--ink-light)] bg-[var(--card)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Social links */}
      <div className="flex items-center gap-6">
        {hero.social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="font-mono text-xs text-[var(--ink-faint)] hover:text-[var(--coral)] transition-colors tracking-wide"
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.label} ↗
          </a>
        ))}
      </div>
    </section>
  )
}
