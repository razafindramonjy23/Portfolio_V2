'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 diagonal-lines opacity-50" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

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
            01. À propos
          </motion.span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display font-black text-4xl lg:text-6xl text-white leading-tight mb-8"
            >
              Créer avec{' '}
              <span className="text-gold-gradient">intention</span>
              {' '}et{' '}
              <span className="text-gold-gradient">précision</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-4 text-white/55 font-body text-lg leading-relaxed"
            >
              <p>
                Développeur FullStack junior basé à{' '}
                <span className="text-gold/80">Antananarivo, Madagascar</span>, je combine
                créativité et rigueur technique pour livrer des solutions robustes et élégantes.
              </p>
              <p>
                Titulaire d'une Licence en Informatique Risque et Décision à{' '}
                <span className="text-gold/80">l'Université ESMIA</span>, j'ai acquis une
                expérience variée — du développement ABAP SAP à la création de sites web,
                en passant par la gestion de projet au sein d'un ministère.
              </p>
              <p>
                Autonome, curieux et passionné, je transforme les défis techniques en
                <span className="text-gold/80"> opportunités d'innovation</span>.
              </p>
            </motion.div>

            {/* Personal info pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                { icon: '📍', text: 'Amboasarikely, Antananarivo' },
                { icon: '🎓', text: 'Licence Informatique 2025' },
                { icon: '🌍', text: 'Français · Anglais · Malgache' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 bg-navy/60 border border-gold/15 text-sm text-white/60 font-mono"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Passions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <p className="font-mono text-xs text-white/30 tracking-widest mb-4">PASSIONS</p>
              <div className="flex gap-4">
                {['🏃 Athlétisme', '🏀 Basketball', '🎵 Musique'].map((p) => (
                  <span key={p} className="font-body text-white/40 text-sm">{p}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative p-8 border border-gold/20 bg-navy/40 backdrop-blur-sm glow-border">
              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/40" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gold/40" />

              <p className="font-mono text-gold/50 text-xs tracking-widest mb-6">// profil.json</p>

              <div className="space-y-4 font-mono text-sm">
                {[
                  { key: 'nom', val: '"Tahina Razafindramonjy"', color: 'text-green-400/80' },
                  { key: 'role', val: '"Développeur Full Stack"', color: 'text-blue-400/80' },
                  { key: 'localisation', val: '"Antananarivo, MG"', color: 'text-yellow-400/80' },
                  { key: 'disponible', val: 'true', color: 'text-green-400/80' },
                  { key: 'email', val: '"razafindramonjytahina@gmail.com"', color: 'text-purple-400/80' },
                  { key: 'portfolio', val: '"razafindramonjy.vercel.app"', color: 'text-blue-400/80' },
                ].map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex gap-2"
                  >
                    <span className="text-white/30">"{item.key}"</span>
                    <span className="text-white/20">:</span>
                    <span className={item.color}>{item.val}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 p-4 bg-gold text-navy-deep border border-gold"
            >
              <p className="font-display font-black text-2xl">2+</p>
              <p className="font-mono text-xs tracking-widest">ANS EXP.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
