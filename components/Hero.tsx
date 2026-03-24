'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import tahina from '../assets/tahina2.png'

const roles = ['Full Stack Developer', 'React / Next.js', 'Django / Python', 'SAP ABAP / Fiori']

export default function Hero() {
  const [roleIndex, setRoleIndex]   = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting]   = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  /* typewriter */
  useEffect(() => {
    const cur = roles[roleIndex]
    const t = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < cur.length) setDisplayText(cur.slice(0, displayText.length + 1))
        else setTimeout(() => setIsDeleting(true), 2000)
      } else {
        if (displayText.length > 0) setDisplayText(displayText.slice(0, -1))
        else { setIsDeleting(false); setRoleIndex(p => (p + 1) % roles.length) }
      }
    }, isDeleting ? 50 : 90)
    return () => clearTimeout(t)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* ── background orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(173,145,45,0.12) 0%, transparent 70%)' }} />
        <motion.div animate={{ y: ['-100%', '100vh'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
          className="absolute left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,var(--gold),transparent)', opacity: 0.15 }} />
      </div>

      {/* ── corner brackets ── */}
      {(['top-28 left-8 lg:left-16', 'top-28 right-8 lg:right-16',
         'bottom-16 left-8 lg:left-16', 'bottom-16 right-8 lg:right-16'] as const).map((pos, i) => (
        <div key={i} className={`absolute opacity-20 w-8 h-8 ${pos}`}
          style={{
            borderTop:    i < 2  ? '2px solid var(--gold)' : undefined,
            borderBottom: i >= 2 ? '2px solid var(--gold)' : undefined,
            borderLeft:   i % 2 === 0 ? '2px solid var(--gold)' : undefined,
            borderRight:  i % 2 === 1 ? '2px solid var(--gold)' : undefined,
          }} />
      ))}

      <motion.div style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[85vh]">

          {/* ══════════════ LEFT ══════════════ */}
          <div>
            {/* availability badge */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--gold)' }}>
                Disponible · Antananarivo
              </span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            {/* TAHINA */}
            <div className="overflow-hidden mb-1">
              <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-display font-black leading-[0.88]"
                style={{ fontSize: 'clamp(2.8rem, 7.5vw, 6rem)', color: 'var(--text-primary)' }}>
                TAHINA
              </motion.h1>
            </div>

            {/* RAZAFINDRAMONJY */}
            <div className="overflow-hidden mb-6">
              <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                className="font-display font-black leading-[0.88] text-gold-gradient"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)' }}>
                RAZAFINDRAMONJY
              </motion.h1>
            </div>

            {/* typewriter */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="flex items-center gap-2 mb-8">
              <span className="font-mono text-xl" style={{ color: 'var(--text-muted)' }}>_</span>
              <span className="font-mono text-lg lg:text-xl" style={{ color: 'var(--gold)', opacity: 0.85 }}>
                {displayText}
              </span>
              <span className="font-mono text-xl cursor-blink" style={{ color: 'var(--gold)' }}>|</span>
            </motion.div>

            {/* description */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="font-body text-lg leading-relaxed max-w-lg mb-10"
              style={{ color: 'var(--text-secondary)' }}>
              Développeur FullStack junior, autonome et créatif. Je transforme les idées en{' '}
              <span style={{ color: 'var(--gold)' }}>solutions concrètes</span> avec précision et passion.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4">
              <a href="#projects"
                className="group relative px-8 py-4 font-mono font-medium text-sm tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(173,145,45,0.4)]"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--bg-primary)' }}>
                <span className="relative z-10 flex items-center gap-2">
                  Voir mes projets
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
              <a href="mailto:razafindramonjytahina@gmail.com"
                className="px-8 py-4 font-mono text-sm tracking-wider transition-all duration-300"
                style={{ border: '1px solid var(--border-medium)', color: 'var(--text-secondary)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'var(--gold)'; el.style.borderColor = 'var(--gold-border)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'var(--text-secondary)'; el.style.borderColor = 'var(--border-medium)'
                }}>
                Me contacter
              </a>
            </motion.div>

            {/* stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              className="flex items-center gap-8 mt-12 pt-8"
              style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { num: '2+', label: 'Expériences' },
                { num: '3',  label: 'Langues' },
                { num: '15+', label: 'Technologies' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-display font-black text-2xl" style={{ color: 'var(--gold)' }}>{s.num}</p>
                  <p className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ══════════════ RIGHT — PHOTO ══════════════ */}
          <div className="hidden lg:flex items-center justify-center relative">
            <motion.div initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative">

              {/* rotating rings */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full"
                style={{ inset: -28, border: '1px solid var(--gold)', opacity: 0.2 }} />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full"
                style={{ inset: -52, border: '1px dashed var(--gold)', opacity: 0.1 }} />

              {/* gold accent blocks */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 z-0"
                style={{ backgroundColor: 'var(--gold)', opacity: 0.15 }} />
              <div className="absolute -top-4 -left-4 w-14 h-14 z-0"
                style={{ border: '2px solid var(--gold)', opacity: 0.3 }} />

              {/* ── photo frame ── */}
              <div className="relative z-10 overflow-hidden"
                style={{
                  width: 288, height: 360,
                  border: '2px solid var(--gold-border)',
                  backgroundColor: 'var(--bg-secondary)',
                }}>

                {/* photo — transparent background shows theme color */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tahina.src}
                  alt="Tahina Razafindramonjy"
                  className="w-full h-full object-cover object-top"
                  style={{ display: 'block' }}
                />

                {/* bottom gradient fade */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 45%)' }} />

                {/* name chip */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <p className="font-display font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                    Tahina Razafindramonjy
                  </p>
                  <p className="font-mono text-xs" style={{ color: 'var(--gold)' }}>Full Stack Developer</p>
                </div>
              </div>

              {/* floating "DISPONIBLE" badge */}
              <motion.div animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-8 z-20 px-4 py-2"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--bg-primary)' }}>
                <p className="font-mono text-xs font-bold tracking-widest">DISPONIBLE</p>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>SCROLL</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)', opacity: 0.5 }} />
        </motion.div>
      </motion.div>
    </section>
  )
}