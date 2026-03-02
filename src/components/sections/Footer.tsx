/**
 * Footer — bottom of every page.
 * Simple, monospace, unobtrusive.
 */

export function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-[var(--border)]">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs text-[var(--ink-faint)]">
          © {new Date().getFullYear()} fieldnotesfromrob.com
        </p>
        <p className="font-mono text-xs text-[var(--ink-faint)]">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  )
}
