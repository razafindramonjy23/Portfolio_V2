'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '2+',  label: 'Ans\nd\'expérience' },
  { value: '15+', label: 'Projets\nlivrés' },
  { value: '3',   label: 'Langues\nparlées' },
  { value: '∞',   label: 'Curiosité\ntechnique' },
]

const traits = [
  { tag: 'Full Stack',        desc: 'Du back-end robuste au front-end soigné' },
  { tag: 'SAP S/4HANA',       desc: 'ABAP, Fiori, CDS Views, OData' },
  { tag: 'Open to work',      desc: 'Disponible pour nouvelles opportunités' },
  { tag: 'Madagascar',        desc: 'Basé à Antananarivo' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden diagonal-lines"
      style={{ backgroundColor: 'var(--bg-secondary)' }}>

      {/* vertical gold line */}
      <div className="absolute right-0 top-0 w-px h-full opacity-30"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section label ── */}
        <div className="flex items-center gap-4 mb-20">
          <motion.div initial={{ width: 0 }} animate={inView ? { width: '3rem' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} className="h-px"
            style={{ backgroundColor: 'var(--gold)' }} />
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
            className="font-mono text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>
            01. À propos
          </motion.span>
        </div>

        {/* ── TITLE full-width ── */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-black text-5xl lg:text-7xl xl:text-6xl leading-[0.9] mb-20"
          style={{ color: 'var(--text-primary)' }}>
          Créer avec<br />
          <span className="text-gold-gradient">intention</span>{' '}
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.55em', fontWeight: 400,
            fontFamily: 'var(--font-body)', letterSpacing: '0.01em', verticalAlign: 'middle' }}>
            &amp;
          </span>{' '}
          <span className="text-gold-gradient">précision</span>
        </motion.h2>

        {/* ── STATS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-20"
          style={{ border: '1px solid var(--border-subtle)', backgroundColor: 'var(--border-subtle)' }}>
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="group flex flex-col items-start gap-1 px-8 py-7 transition-colors duration-300 cursor-default"
              style={{ backgroundColor: 'var(--bg-card)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--gold-faint)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-card)'}>
              <span className="font-display font-black text-4xl lg:text-5xl leading-none"
                style={{ color: 'var(--gold)' }}>{s.value}</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase leading-tight whitespace-pre-line"
                style={{ color: 'var(--text-muted)' }}>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── MAIN CONTENT — asymmetric split ── */}
        <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-0 lg:gap-0 items-start">

          {/* LEFT — bio text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="pr-0 lg:pr-16 pb-12 lg:pb-0">

            <div className="space-y-5 font-body text-base lg:text-lg leading-relaxed mb-10"
              style={{ color: 'var(--text-secondary)' }}>
              <p>
                Développeur FullStack junior basé à{' '}
                <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Antananarivo, Madagascar</span>,
                je combine créativité et rigueur technique pour livrer des solutions robustes et élégantes.
              </p>
              <p>
                Titulaire d'une Licence en Informatique Risque et Décision à{' '}
                <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>l'Université ESMIA</span>,
                j'ai acquis une expérience variée — du développement ABAP SAP à la création de sites web,
                en passant par la gestion de projet au sein d'un ministère.
              </p>
              <p>
                Autonome, curieux et passionné, je transforme les défis techniques en{' '}
                <span style={{ color: 'var(--gold)' }}>opportunités d'innovation</span>.
              </p>
            </div>

            {/* Passions inline */}
            <div className="pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase mb-4"
                style={{ color: 'var(--text-muted)' }}>Passions</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['Athlétisme', 'Basketball', 'Musique'].map((p, i) => (
                  <motion.span key={p}
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.08 }}
                    className="font-mono text-sm"
                    style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--gold)', marginRight: '6px', opacity: 0.6 }}>—</span>
                    {p}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* DIVIDER */}
          <div className="hidden lg:block w-px self-stretch"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--gold-border), transparent)' }} />

          {/* RIGHT — trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="pl-0 lg:pl-16 space-y-3">

            {traits.map((t, i) => (
              <motion.div key={t.tag}
                initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="group flex items-center justify-between px-6 py-5 transition-all duration-300 cursor-default"
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
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="font-mono text-sm font-semibold tracking-wide"
                    style={{ color: 'var(--text-primary)' }}>{t.tag}</span>
                  <span className="font-body text-xs truncate"
                    style={{ color: 'var(--text-muted)' }}>{t.desc}</span>
                </div>
                <span className="flex-shrink-0 ml-4 text-xs opacity-0 group-hover:opacity-100
                  transition-opacity duration-200"
                  style={{ color: 'var(--gold)' }}>→</span>
              </motion.div>
            ))}

            {/* accent quote */}
            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="mt-6 px-6 py-6 relative overflow-hidden"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--bg-primary)' }}>
              <span className="absolute top-2 left-4 font-display font-black text-6xl leading-none opacity-20
                select-none">"</span>
              <p className="relative font-display font-bold text-lg leading-snug">
                Le code est une forme d'art.<br />
                <span className="font-mono font-normal text-xs tracking-widest opacity-70 mt-2 block">
                  — ma philosophie
                </span>
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}