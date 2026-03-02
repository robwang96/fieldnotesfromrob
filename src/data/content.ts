/**
 * YOUR SITE CONTENT — edit this file to update everything on the site.
 *
 * This is the only file you need to touch for content changes.
 * No code knowledge required — just update the text between the quotes.
 */

export const siteContent = {

  // ─── Hero / Intro ─────────────────────────────────────────────────────────
  hero: {
    greeting: 'Hey, I\'m Rob.',
    tagline: 'Builder at the intersection of AI, mental health, and human connection.',
    bio: [
      'Co-founder of TherapyAI — a HIPAA-compliant platform that helps therapists spend less time on paperwork and more time with their patients.',
      'I write about what I\'m building, what I\'m learning, and the moments in between.',
    ],
    location: 'Based in the US',
    tags: ['AI', 'Mental Health', 'Web3', 'Product', 'Startups'],
    social: [
      { label: 'GitHub',   href: 'https://github.com/robwang96' },
      { label: 'LinkedIn', href: '#' },
      { label: 'X',        href: '#' },
    ],
  },

  // ─── Projects ─────────────────────────────────────────────────────────────
  // accent: 'coral' | 'gold' | 'blue'
  // status: 'Active' | 'Building' | 'Acquired' | 'Paused' | 'Inactive'
  projects: [
    {
      title: 'TherapyAI',
      role: 'Co-founder',
      year: '2024–present',
      status: 'Active' as const,
      accent: 'coral' as const,
      description:
        'HIPAA-compliant AI journaling platform that auto-generates SOAP/BIRP/DAP clinical notes and insurance filings. Built on Next.js, Supabase, and Claude.',
      href: 'https://github.com/robwang96/web3-therapist',
    },
    {
      title: 'Field Notes',
      role: 'Author',
      year: '2025–present',
      status: 'Active' as const,
      accent: 'gold' as const,
      description:
        'A writing practice. Dispatches on AI, mental health infrastructure, and the things I notice while building.',
      href: '#writing',
    },
    {
      title: 'Coming soon',
      role: '',
      year: '2025',
      status: 'Building' as const,
      accent: 'blue' as const,
      description:
        'Something at the intersection of Web3 and healthcare access. Still in the field-notes phase.',
      href: '#',
    },
  ],

  // ─── Writing / Field Notes ─────────────────────────────────────────────────
  // Add new posts here. newest first.
  posts: [
    {
      title: 'Why I\'m building in mental health',
      date: 'Feb 2025',
      tags: ['Mental Health', 'AI', 'Startups'],
      excerpt:
        '1 in 5 adults in the US needs mental health support. The average therapist spends 30% of their time on documentation. Those two facts shouldn\'t coexist.',
      href: '#',
    },
    {
      title: 'HIPAA for founders: what you actually need to know',
      date: 'Jan 2025',
      tags: ['HIPAA', 'Startups', 'Health Tech'],
      excerpt:
        'Most guides make HIPAA sound impossible. It\'s not. Here\'s what a non-lawyer builder actually needs to understand to ship compliantly.',
      href: '#',
    },
    {
      title: 'The Supabase + Claude stack for health tech',
      date: 'Dec 2024',
      tags: ['Technical', 'AI', 'Supabase'],
      excerpt:
        'How we got to $0/month in infrastructure costs while building a HIPAA-ready platform. The full stack breakdown.',
      href: '#',
    },
  ],

  // ─── Contact ──────────────────────────────────────────────────────────────
  contact: {
    heading: 'Let\'s connect',
    body: 'I\'m always interested in collaborations, conversations about mental health tech, or just a good exchange of ideas.',
    email: 'rob@fieldnotesfromrob.com',
  },
}

export type ProjectStatus = 'Active' | 'Building' | 'Acquired' | 'Paused' | 'Inactive'
export type Project = typeof siteContent.projects[number]
export type Post    = typeof siteContent.posts[number]
