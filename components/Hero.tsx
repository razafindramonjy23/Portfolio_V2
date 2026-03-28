'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import tahina from '../assets/tahina2.png'

const roles = ['Full Stack Developer', 'React / Next.js', 'Django / Python', 'SAP ABAP / Fiori']

export default function Hero() {
  const [roleIndex, setRoleIndex]     = useState(0)
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
          className="absolute -top-40 -right-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 rounded-full"
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
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-20 sm:pt-24">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[85vh] py-8 lg:py-0">

          {/* ══ LEFT ══ */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-6 sm:w-8 h-px flex-shrink-0" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase"
                style={{ color: 'var(--gold)' }}>
                Disponible · Antananarivo
              </span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            </motion.div>

            {/* TAHINA */}
            <div className="overflow-hidden mb-1">
              <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-display font-black leading-[0.88]"
                style={{ fontSize: 'clamp(2.4rem, 10vw, 6rem)', color: 'var(--text-primary)' }}>
                TAHINA
              </motion.h1>
            </div>

            {/* RAZAFINDRAMONJY */}
            <div className="overflow-hidden mb-5 sm:mb-6">
              <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                className="font-display font-black leading-[0.88] text-gold-gradient"
                style={{ fontSize: 'clamp(1.1rem, 4.2vw, 2.8rem)' }}>
                RAZAFINDRAMONJY
              </motion.h1>
            </div>

            {/* Typewriter */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="flex items-center gap-2 mb-6 sm:mb-8">
              <span className="font-mono text-base sm:text-xl" style={{ color: 'var(--text-muted)' }}>_</span>
              <span className="font-mono text-sm sm:text-lg lg:text-xl" style={{ color: 'var(--gold)', opacity: 0.85 }}>
                {displayText}
              </span>
              <span className="font-mono text-base sm:text-xl cursor-blink" style={{ color: 'var(--gold)' }}>|</span>
            </motion.div>

            {/* Description */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="font-body text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-8 sm:mb-10"
              style={{ color: 'var(--text-secondary)' }}>
              Développeur FullStack junior, autonome et créatif. Je transforme les idées en{' '}
              <span style={{ color: 'var(--gold)' }}>solutions concrètes</span> avec précision et passion.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3">
              <a href="#projects"
                className="group px-5 sm:px-8 py-3 sm:py-4 font-mono font-medium text-xs sm:text-sm tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(173,145,45,0.4)] flex items-center gap-2"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--bg-primary)' }}>
                Voir mes projets
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a href="mailto:razafindramonjytahina@gmail.com"
                className="px-5 sm:px-8 py-3 sm:py-4 font-mono text-xs sm:text-sm tracking-wider transition-all duration-300"
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

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              className="flex items-center gap-6 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8"
              style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { num: '2+',  label: 'Expériences' },
                { num: '2',   label: 'Langues' },
                { num: '15+', label: 'Technologies' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-display font-black text-xl sm:text-2xl" style={{ color: 'var(--gold)' }}>{s.num}</p>
                  <p className="font-mono text-[10px] sm:text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ══ RIGHT — Photo ══ */}
          <div className="flex items-center justify-center relative lg:min-h-[520px]">
            <motion.div initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative">

              {/* Rotating rings — desktop only */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute hidden lg:block rounded-full"
                style={{ inset: -28, border: '1px solid var(--gold)', opacity: 0.2 }} />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute hidden lg:block rounded-full"
                style={{ inset: -52, border: '1px dashed var(--gold)', opacity: 0.1 }} />

              {/* Gold accent blocks */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 sm:w-20 h-14 sm:h-20 z-0"
                style={{ backgroundColor: 'var(--gold)', opacity: 0.15 }} />
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 sm:w-14 h-10 sm:h-14 z-0"
                style={{ border: '2px solid var(--gold)', opacity: 0.3 }} />

              {/* ── Photo frame ── */}
              <div className="relative z-10 overflow-hidden"
                style={{
                  width: 'clamp(180px, 45vw, 288px)',
                  height: 'clamp(220px, 55vw, 360px)',
                  border: '2px solid var(--gold-border)',
                  backgroundColor: 'var(--bg-secondary)',
                }}>

                {/* Next.js optimized Image */}
                <Image
                  src={tahina}
                  alt="Tahina Razafindramonjy"
                  fill
                  priority
                  sizes="(max-width: 768px) 45vw, 288px"
                  className="object-cover object-top"
                />

                {/* Bottom gradient fade */}
                <div className="absolute inset-0 pointer-events-none z-10"
                  style={{ background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 45%)' }} />

                {/* Name chip */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20">
                  <p className="font-display font-bold text-xs sm:text-sm" style={{ color: 'var(--text-primary)' }}>
                    Tahina Razafindramonjy
                  </p>
                  <p className="font-mono text-[10px] sm:text-xs" style={{ color: 'var(--gold)' }}>
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 sm:-bottom-4 -left-5 sm:-left-8 z-20 px-3 sm:px-4 py-1.5 sm:py-2"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--bg-primary)' }}>
                <p className="font-mono text-[9px] sm:text-xs font-bold tracking-widest">DISPONIBLE</p>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>SCROLL</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)', opacity: 0.5 }} />
        </motion.div>
      </motion.div>
    </section>
  )
}