'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '#about',      label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#skills',     label: 'Compétences' },
  { href: '#projects',   label: 'Projets' },
  { href: '#contact',    label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://github.com/razafindramonjy23',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/fanomezantsoa-tahina-razafindramonjy-890517260/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-colors duration-300"
            style={{ border: '1px solid var(--gold-border)' }}>
            <span className="font-display font-black text-base sm:text-lg leading-none" style={{ color: 'var(--gold)' }}>T</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display font-bold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>Tahina</p>
            <p className="font-mono text-[10px] tracking-widest" style={{ color: 'var(--gold)', opacity: 0.6 }}>FULL STACK DEV</p>
          </div>
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, i) => (
            <motion.li key={link.href}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}>
              <a href={link.href}
                className="font-body text-sm relative group transition-colors duration-300"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--gold)' }} />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* ── Right: socials + toggle + CTA + burger ── */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Social icons — desktop only */}
          <div className="hidden lg:flex items-center gap-1">
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}>
                {s.icon}
              </a>
            ))}
            <div className="w-px h-4 mx-1" style={{ backgroundColor: 'var(--border-subtle)' }} />
          </div>

          <ThemeToggle />

          {/* Recruter CTA — desktop */}
          <motion.a href="#contact"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="hidden lg:flex items-center gap-2 px-4 py-2 font-mono text-xs sm:text-sm transition-all duration-300 group"
            style={{ border: '1px solid var(--gold-border)', color: 'var(--gold)', backgroundColor: 'transparent' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'var(--gold)'; el.style.color = 'var(--bg-primary)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'transparent'; el.style.color = 'var(--gold)' }}>
            <span>Recruter</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.a>

          {/* Burger — mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 flex-shrink-0">
            <span className={`w-6 h-0.5 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ backgroundColor: 'var(--gold)' }} />
            <span className={`h-0.5 transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`}
              style={{ backgroundColor: 'var(--gold)' }} />
            <span className={`w-6 h-0.5 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ backgroundColor: 'var(--gold)' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden backdrop-blur-xl overflow-hidden"
            style={{ backgroundColor: 'var(--bg-overlay)', borderBottom: '1px solid var(--gold-border)' }}>

            <div className="px-4 pt-4 pb-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a key={link.href} href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 py-3 px-2 font-body text-base transition-colors duration-200 rounded"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--gold)', opacity: 0.5 }} />
                  {link.label}
                </motion.a>
              ))}

              {/* Divider */}
              <div className="my-2 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />

              {/* Socials row */}
              <div className="flex items-center gap-4 px-2 py-2">
                {socialLinks.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}>
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>

              {/* CTA */}
              <a href="#contact" onClick={() => setMenuOpen(false)}
                className="mt-2 mx-2 py-3 text-center font-mono text-sm tracking-wider transition-all duration-300"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--bg-primary)' }}>
                Recruter →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}