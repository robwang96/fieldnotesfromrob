/**
 * Contact section
 *
 * WHAT THIS DOES: Simple, clean close to the page.
 * Shows your contact email and links out to socials.
 *
 * TO EDIT: Update the contact object in src/data/content.ts.
 */

import { siteContent } from '@/data/content'

export function Contact() {
  const { contact, hero } = siteContent

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16">

      {/* Section header */}
      <div className="mb-8">
        <p className="font-mono text-xs text-[var(--ink-faint)] tracking-widest uppercase mb-2">
          ◆ Contact
        </p>
        <h2 className="text-3xl font-serif font-bold text-[var(--ink)]">
          {contact.heading}
        </h2>
      </div>

      <p className="font-mono text-sm text-[var(--ink-light)] leading-relaxed max-w-md mb-8">
        {contact.body}
      </p>

      {/* Email */}
      <a
        href={`mailto:${contact.email}`}
        className="inline-flex items-center gap-2 font-mono text-sm text-[var(--coral)] hover:underline underline-offset-4 mb-10"
      >
        {contact.email} ↗
      </a>

      {/* Social row */}
      <div className="flex items-center gap-6 pt-6 border-t border-[var(--border)]">
        {hero.social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="font-mono text-xs text-[var(--ink-faint)] hover:text-[var(--coral)] transition-colors tracking-wide"
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  )
}
