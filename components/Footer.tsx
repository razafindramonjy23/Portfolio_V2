'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-gold/40 flex items-center justify-center">
            <span className="font-display font-black text-gold text-sm">T</span>
          </div>
          <span className="font-mono text-white/30 text-xs">
            Tahina Razafindramonjy © 2025
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-white/20 text-xs">Conçu & développé avec ❤️</span>
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <a
            href="https://razafindramonjy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-gold/40 hover:text-gold text-xs transition-colors duration-300"
          >
            Next.js + Tailwind + Framer Motion
          </a>
        </div>
      </div>
    </footer>
  )
}
