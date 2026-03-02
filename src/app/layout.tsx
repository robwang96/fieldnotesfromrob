/**
 * Root Layout — fieldnotesfromrob.com
 *
 * WHAT THIS FILE DOES:
 * Every page on your site shares this wrapper. It's where you load
 * fonts, set page metadata (title, description for Google), and add
 * anything that should appear on every page.
 *
 * The fonts below are loaded by Next.js automatically at build time —
 * no CDN link needed, no extra package. Next.js fetches them from
 * Google Fonts and self-hosts them for you (faster + privacy-friendly).
 */

import type { Metadata } from 'next'
import { Playfair_Display, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

// ─── Fonts ─────────────────────────────────────────────────────────────────
// Playfair Display: the elegant serif used for all headings
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

// IBM Plex Mono: the monospace font used for body text (gives it that
// "digital notebook" feel — same vibe as heyarinze.com)
const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-mono-custom',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

// ─── SEO Metadata ──────────────────────────────────────────────────────────
// This shows up in Google search results and when you share the link
export const metadata: Metadata = {
  title: 'Field Notes from Rob',
  description:
    'Builder, thinker, co-founder of TherapyAI. Writing at the intersection of technology, mental health, and what it means to build things that matter.',
  openGraph: {
    title: 'Field Notes from Rob',
    description: 'Builder. Thinker. Co-founder of TherapyAI.',
    url: 'https://fieldnotesfromrob.com',
    siteName: 'Field Notes from Rob',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Field Notes from Rob',
    description: 'Builder. Thinker. Co-founder of TherapyAI.',
  },
}

// ─── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
