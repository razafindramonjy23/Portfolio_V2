'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactItems = [
  {
    label: 'Email',
    value: 'razafindramonjytahina@gmail.com',
    href: 'mailto:razafindramonjytahina@gmail.com',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>`,
  },
  {
    label: 'Téléphone',
    value: '+261 34 977 4084',
    href: 'tel:+261349774084',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>`,
  },
  {
    label: 'Portfolio',
    value: 'razafindramonjy.vercel.app',
    href: 'https://razafindramonjy.vercel.app',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>`,
  },
  {
    label: 'Localisation',
    value: 'Antananarivo, Madagascar',
    href: '#',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative py-20 sm:py-28 lg:py-40 overflow-hidden grid-bg"
      style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* BG watermark */}
      <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none overflow-hidden">
        <p className="font-display font-black text-[15vw] select-none"
          style={{ color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>CONTACT</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20">
          <motion.div initial={{ width: 0 }} animate={inView ? { width: '3rem' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} className="h-px" style={{ backgroundColor: 'var(--gold)' }} />
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase"
            style={{ color: 'var(--gold)' }}>05. Contact</motion.span>
        </div>

        <div className="max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6 sm:mb-8"
            style={{ color: 'var(--text-primary)' }}>
            Travaillons<br /><span className="text-gold-gradient">ensemble</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-body text-base sm:text-lg lg:text-xl leading-relaxed mb-10 sm:mb-14"
            style={{ color: 'var(--text-secondary)' }}>
            Vous avez un projet en tête ? Je suis disponible pour de nouvelles opportunités.
            N'hésitez pas à me contacter — je réponds rapidement.
          </motion.p>

          {/* ── Contact cards ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 sm:mb-14">

            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.65 + i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group relative p-5 sm:p-6 overflow-hidden block transition-all duration-300"
                style={{ border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-card)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--gold-border)'
                  el.style.backgroundColor = 'var(--gold-faint)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--border-subtle)'
                  el.style.backgroundColor = 'var(--bg-card)'
                }}>

                {/* Top shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

                <div className="flex items-center gap-4">
                  {/* Icon box */}
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg transition-all duration-300
                    group-hover:shadow-[0_0_16px_rgba(173,145,45,0.3)]"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--gold)',
                    }}
                    dangerouslySetInnerHTML={{ __html: item.svg }} />

                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-1.5"
                      style={{ color: 'var(--text-muted)' }}>
                      {item.label}
                    </p>
                    <p className="font-body text-xs sm:text-sm font-medium truncate transition-colors duration-300"
                      style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="flex-shrink-0 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0
                    -translate-x-2 transition-all duration-300"
                    style={{ color: 'var(--gold)' }}>
                    →
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4">

            {/* Primary */}
            <a href="mailto:razafindramonjytahina@gmail.com"
              className="group relative overflow-hidden px-8 sm:px-10 py-4 sm:py-5 font-mono font-semibold
                tracking-wider text-xs sm:text-sm transition-all duration-300 text-center
                flex items-center justify-center gap-3
                hover:shadow-[0_0_40px_rgba(173,145,45,0.35)]"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--bg-primary)' }}>
              {/* shine sweep */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%]
                transition-transform duration-700 ease-in-out"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }} />
              <span>Envoyer un message</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>

            {/* Secondary */}
            <a href="https://razafindramonjy.vercel.app" target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 sm:px-10 py-4 sm:py-5 font-mono text-xs sm:text-sm
                tracking-wider transition-all duration-300 flex items-center justify-center gap-3"
              style={{ border: '1px solid var(--gold-border)', color: 'var(--gold)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--gold-faint)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}>
              {/* top shimmer */}
              <span className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
              <span>Mon portfolio live</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                transition-transform duration-300">↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}