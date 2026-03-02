/**
 * Nav — top navigation bar
 *
 * WHAT THIS DOES: Shows your name on the left and navigation links
 * on the right. The links scroll the page to each section smoothly
 * (that's what the href="#about" means — it jumps to the element
 * with id="about" on the page).
 */

export function Nav() {
  const links = [
    { label: 'About',    href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Writing',  href: '#writing' },
    { label: 'Contact',  href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border-light)]">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Your name — acts as a "go to top" link */}
        <a href="#" className="font-mono text-sm font-medium text-[var(--ink)] hover:text-[var(--coral)] transition-colors">
          fieldnotesfromrob<span className="text-[var(--coral)]">.</span>
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-[var(--ink-light)] hover:text-[var(--coral)] transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
