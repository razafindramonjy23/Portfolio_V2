'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="relative py-40 overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <p className="font-display font-black text-[15vw] text-white/[0.02] whitespace-nowrap select-none">
          CONTACT
        </p>
      </div>

      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '3rem' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-gold"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-mono text-gold text-xs tracking-[0.4em] uppercase"
          >
            05. Contact
          </motion.span>
        </div>

        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl lg:text-7xl text-white leading-tight mb-8"
          >
            Travaillons
            <br />
            <span className="text-gold-gradient">ensemble</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-body text-white/50 text-xl leading-relaxed mb-12"
          >
            Vous avez un projet en tête ? Je suis disponible pour de nouvelles opportunités.
            N'hésitez pas à me contacter — je réponds rapidement.
          </motion.p>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid sm:grid-cols-2 gap-4 mb-12"
          >
            {[
              {
                icon: '✉',
                label: 'Email',
                value: 'razafindramonjytahina@gmail.com',
                href: 'mailto:razafindramonjytahina@gmail.com',
              },
              {
                icon: '📱',
                label: 'Téléphone',
                value: '+261 34 977 4084',
                href: 'tel:+261349774084',
              },
              {
                icon: '🌐',
                label: 'Portfolio',
                value: 'razafindramonjy.vercel.app',
                href: 'https://razafindramonjy.vercel.app',
              },
              {
                icon: '📍',
                label: 'Localisation',
                value: 'Antananarivo, Madagascar',
                href: '#',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group p-5 border border-white/10 hover:border-gold/40 bg-navy/30 transition-all duration-300 hover:bg-gold/5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="font-mono text-white/30 text-xs tracking-widest mb-1">{item.label}</p>
                    <p className="font-body text-white/70 group-hover:text-gold transition-colors duration-300 text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="mailto:razafindramonjytahina@gmail.com"
              className="group relative px-10 py-5 bg-gold text-navy-deep font-mono font-medium tracking-wider overflow-hidden hover:shadow-[0_0_40px_rgba(173,145,45,0.5)] transition-all duration-300 text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Envoyer un message
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gold-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>

            <a
              href="https://razafindramonjy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-gold/30 text-gold font-mono text-sm tracking-wider hover:bg-gold/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>Mon portfolio live</span>
              <span>↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
