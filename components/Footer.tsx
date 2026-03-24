'use client'

export default function Footer() {
  return (
    <footer className="relative py-10" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center" style={{ border: '1px solid var(--gold-border)' }}>
            <span className="font-display font-black text-sm" style={{ color: 'var(--gold)' }}>T</span>
          </div>
          <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>Tahina Razafindramonjy © 2025</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>Conçu & développé avec ❤️</span>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
          <span className="font-mono text-xs" style={{ color: 'var(--gold)', opacity: 0.5 }}>Next.js + Tailwind + Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}