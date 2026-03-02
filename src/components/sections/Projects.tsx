/**
 * Projects section
 *
 * WHAT THIS DOES: Renders a card for each project in your content.ts.
 * Each card has a colored left border (coral, gold, or blue) and a
 * slight tilt — inspired directly by heyarinze.com's Creations section.
 *
 * The tilt is pure CSS (transform: rotate(-0.4deg)) — it gives the
 * cards a "placed on a desk" feeling rather than a rigid grid.
 */

import { siteContent } from '@/data/content'
import type { Project, ProjectStatus } from '@/data/content'

const accentColors = {
  coral: 'var(--coral)',
  gold:  'var(--gold)',
  blue:  'var(--blue)',
}

const statusStyles: Record<ProjectStatus, string> = {
  Active:   'text-emerald-700 bg-emerald-50',
  Building: 'text-amber-700 bg-amber-50',
  Acquired: 'text-blue-700 bg-blue-50',
  Paused:   'text-gray-500 bg-gray-100',
  Inactive: 'text-gray-400 bg-gray-50',
}

const tilts = ['tilt-1', 'tilt-2', 'tilt-3']

export function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16">

      {/* Section header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-[var(--ink-faint)] tracking-widest uppercase mb-2">
          ◆ Creations
        </p>
        <h2 className="text-3xl font-serif font-bold text-[var(--ink)]">
          Things I&apos;m building
        </h2>
      </div>

      {/* Project cards */}
      <div className="space-y-4">
        {siteContent.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} tilt={tilts[i % tilts.length]} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, tilt }: { project: Project; tilt: string }) {
  const borderColor = accentColors[project.accent]

  return (
    <a
      href={project.href}
      target={project.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`
        block ${tilt}
        bg-[var(--card)] rounded-lg p-5
        border border-[var(--border)]
        hover:shadow-md hover:bg-white
        transition-all duration-200
        group
      `}
      style={{ borderLeft: `4px solid ${borderColor}` }}
    >
      {/* Card header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-serif text-lg font-bold text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors">
            {project.title}
          </h3>
          {project.role && (
            <p className="font-mono text-xs text-[var(--ink-faint)] mt-0.5">{project.role}</p>
          )}
        </div>

        {/* Metadata badges */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-xs text-[var(--ink-faint)]">{project.year}</span>
          <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${statusStyles[project.status]}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="font-mono text-sm text-[var(--ink-light)] leading-relaxed">
        {project.description}
      </p>
    </a>
  )
}
