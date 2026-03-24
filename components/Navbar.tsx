'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backgroundColor: scrolled ? 'var(--bg-overlay)' : 'transparent',
        borderBottomColor: scrolled ? 'var(--gold-border)' : 'transparent',
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1px solid var(--gold-border)' }}>
            <span className="font-display font-black text-lg leading-none" style={{ color: 'var(--gold)' }}>T</span>
          </div>
          <div>
            <p className="font-display font-bold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>Tahina</p>
            <p className="font-mono text-xs tracking-widest" style={{ color: 'var(--gold)', opacity: 0.6 }}>FULL STACK DEV</p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}>
              <a
                href={link.href}
                className="font-body text-sm relative group transition-colors duration-300"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--gold)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ backgroundColor: 'var(--gold)' }} />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 font-mono text-sm transition-all duration-300 group"
            style={{ border: '1px solid var(--gold-border)', color: 'var(--gold)', backgroundColor: 'transparent' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--gold)'; el.style.color = 'var(--bg-primary)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'transparent'; el.style.color = 'var(--gold)' }}
          >
            <span>Recruter</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5">
            <span className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--gold)' }} />
            <span className={`w-4 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--gold)' }} />
            <span className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--gold)' }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-xl" style={{ backgroundColor: 'var(--bg-overlay)', borderBottom: '1px solid var(--gold-border)' }}>
            <ul className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)} className="font-body text-lg" style={{ color: 'var(--text-secondary)' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}