/**
 * Divider — the ✦────────✦ section separator.
 *
 * Used between every major section. The glyph gives the site that
 * editorial, hand-crafted feel (same pattern as heyarinze.com).
 */

interface DividerProps {
  glyph?: string
}

export function Divider({ glyph = '✦' }: DividerProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-2">
      <div className="glyph-divider">
        <span>{glyph}</span>
      </div>
    </div>
  )
}
