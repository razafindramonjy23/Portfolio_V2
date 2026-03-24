'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden diagonal-lines"
      style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute right-0 top-0 w-px h-full opacity-30"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-20">
          <motion.div initial={{ width: 0 }} animate={inView ? { width: '3rem' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} className="h-px" style={{ backgroundColor: 'var(--gold)' }} />
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
            className="font-mono text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>
            01. À propos
          </motion.span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display font-black text-4xl lg:text-6xl leading-tight mb-8"
              style={{ color: 'var(--text-primary)' }}>
              Créer avec{' '}<span className="text-gold-gradient">intention</span>{' '}et{' '}<span className="text-gold-gradient">précision</span>
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }} className="space-y-4 text-lg leading-relaxed font-body"
              style={{ color: 'var(--text-secondary)' }}>
              <p>Développeur FullStack junior basé à <span style={{ color: 'var(--gold)' }}>Antananarivo, Madagascar</span>, je combine créativité et rigueur technique pour livrer des solutions robustes et élégantes.</p>
              <p>Titulaire d'une Licence en Informatique Risque et Décision à <span style={{ color: 'var(--gold)' }}>l'Université ESMIA</span>, j'ai acquis une expérience variée — du développement ABAP SAP à la création de sites web, en passant par la gestion de projet au sein d'un ministère.</p>
              <p>Autonome, curieux et passionné, je transforme les défis techniques en <span style={{ color: 'var(--gold)' }}>opportunités d'innovation</span>.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }} className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: '📍', text: 'Amboasarikely, Antananarivo' },
                { icon: '🎓', text: 'Licence Informatique 2025' },
                { icon: '🌍', text: 'Français · Anglais · Malgache' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 px-4 py-2 font-mono text-sm"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--gold-border)', color: 'var(--text-secondary)' }}>
                  <span>{item.icon}</span><span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}
              className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>PASSIONS</p>
              <div className="flex gap-4">
                {['🏃 Athlétisme', '🏀 Basketball', '🎵 Musique'].map(p => (
                  <span key={p} className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>{p}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }} className="relative">
            <div className="relative p-8 backdrop-blur-sm glow-border"
              style={{ border: '1px solid var(--gold-border)', backgroundColor: 'var(--bg-card)' }}>
              <div className="absolute top-0 right-0 w-16 h-16" style={{ borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)', opacity: 0.5 }} />
              <div className="absolute bottom-0 left-0 w-16 h-16" style={{ borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)', opacity: 0.5 }} />
              <p className="font-mono text-xs tracking-widest mb-6" style={{ color: 'var(--gold)', opacity: 0.5 }}>// profil.json</p>
              <div className="space-y-3 font-mono text-sm">
                {[
                  { key: 'nom', val: '"Tahina Razafindramonjy"', color: '#4ade80' },
                  { key: 'role', val: '"Développeur Full Stack"', color: '#60a5fa' },
                  { key: 'localisation', val: '"Antananarivo, MG"', color: '#facc15' },
                  { key: 'disponible', val: 'true', color: '#4ade80' },
                  { key: 'email', val: '"razafindramonjytahina@gmail.com"', color: '#c084fc' },
                  { key: 'portfolio', val: '"razafindramonjy.vercel.app"', color: '#60a5fa' },
                ].map((item, i) => (
                  <motion.div key={item.key} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.08 }} className="flex gap-2 flex-wrap">
                    <span style={{ color: 'var(--text-muted)' }}>"{item.key}"</span>
                    <span style={{ color: 'var(--text-muted)', opacity: 0.5 }}>:</span>
                    <span style={{ color: item.color, opacity: 0.85 }}>{item.val}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 p-4" style={{ backgroundColor: 'var(--gold)', color: 'var(--bg-primary)' }}>
              <p className="font-display font-black text-2xl">4+</p>
              <p className="font-mono text-xs tracking-widest">ANS EXP.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}