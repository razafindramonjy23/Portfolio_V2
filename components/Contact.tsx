'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="relative py-40 overflow-hidden grid-bg"
      style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <p className="font-display font-black text-[15vw] whitespace-nowrap select-none"
          style={{ color: 'var(--text-faint)' }}>
          CONTACT
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-20">
          <motion.div initial={{ width: 0 }} animate={inView ? { width: '3rem' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px" style={{ backgroundColor: 'var(--gold)' }} />
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>
            05. Contact
          </motion.span>
        </div>

        <div className="max-w-3xl">

          {/* Heading */}
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl lg:text-7xl leading-tight mb-8"
            style={{ color: 'var(--text-primary)' }}>
            Travaillons
            <br />
            <span className="text-gold-gradient">ensemble</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-body text-xl leading-relaxed mb-12"
            style={{ color: 'var(--text-secondary)' }}>
            Vous avez un projet en tête ? Je suis disponible pour de nouvelles opportunités.
            N'hésitez pas à me contacter — je réponds rapidement.
          </motion.p>

          {/* Contact cards */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: '✉', label: 'Email',        value: 'razafindramonjytahina@gmail.com', href: 'mailto:razafindramonjytahina@gmail.com' },
              { icon: '📱', label: 'Téléphone',   value: '+261 34 977 4084',                href: 'tel:+261349774084' },
              { icon: '🌐', label: 'Portfolio',   value: 'razafindramonjy.vercel.app',      href: 'https://razafindramonjy.vercel.app' },
              { icon: '📍', label: 'Localisation',value: 'Antananarivo, Madagascar',        href: '#' },
            ].map((item) => (
              <a key={item.label} href={item.href}
                className="group p-5 transition-all duration-300 block"
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
                <div className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="font-mono text-xs tracking-widest mb-1"
                      style={{ color: 'var(--text-muted)' }}>
                      {item.label}
                    </p>
                    <p className="font-body text-sm transition-colors duration-300"
                      style={{ color: 'var(--text-primary)' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}>
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }} className="flex flex-wrap gap-4">

            <a href="mailto:razafindramonjytahina@gmail.com"
              className="group relative px-10 py-5 font-mono font-medium tracking-wider overflow-hidden text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(173,145,45,0.4)]"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--bg-primary)' }}>
              <span className="relative z-10 flex items-center gap-2">
                Envoyer un message
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </a>

            <a href="https://razafindramonjy.vercel.app" target="_blank" rel="noopener noreferrer"
              className="px-10 py-5 font-mono text-sm tracking-wider transition-all duration-300 flex items-center gap-2"
              style={{ border: '1px solid var(--gold-border)', color: 'var(--gold)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--gold-faint)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}>
              <span>Mon portfolio live</span>
              <span>↗</span>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}