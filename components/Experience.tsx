'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    company: 'Augusta Reeves Group',
    role: 'Développeur ABAP',
    period: '2025 - Present',
    location: 'Antananarivo, Madagascar',
    description: 'Développement d\'applications ERP/CRM sur la plateforme SAP avec le langage ABAP. Création de modules métiers sur mesure pour les processus d\'entreprise.',
    tags: ['SAP', 'ABAP', 'Fiori', 'OData', 'CDS View', 'Integration Suite'],
    highlight: true,
  },
  {
    company: 'Kontiki Services',
    role: 'Développeur Web',
    period: '2024 — 2025',
    location: 'Antsahavola, Antananarivo',
    description: 'Création du site web officiel de Kontiki Services. Développement d\'un datawarehouse complet pour le département data analyst, optimisant les flux de données.',
    tags: ['React', 'Django', 'PostgreSQL', 'Data Warehouse'],
    highlight: false,
  },
  {
    company: 'Ministère de l\'Intérieur',
    role: 'Chef de Projet Junior · Développeur',
    period: '2024',
    location: 'Tsimbazaza, Antananarivo',
    description: 'Participation aux réunions de suivi de projet et coordination avec les équipes concernées. Suivi de l\'avancement des projets numériques du ministère.',
    tags: ['Gestion de projet', 'Coordination', 'Dev'],
    highlight: false,
  },
  {
    company: 'SmartPredict',
    role: 'Stagiaire Développeur',
    period: '2023',
    location: 'Cap 300 Andraharo',
    description: 'Stage de découverte incluant le développement d\'un site vitrine complet. Première immersion professionnelle dans le développement web moderne.',
    tags: ['HTML/CSS', 'JavaScript', 'Site vitrine'],
    highlight: false,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute left-0 top-0 w-px h-full opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-20">
          <motion.div initial={{ width: 0 }} animate={inView ? { width: '3rem' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} className="h-px" style={{ backgroundColor: 'var(--gold)' }} />
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
            className="font-mono text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>
            02. Expérience
          </motion.span>
        </div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-black text-4xl lg:text-6xl leading-tight mb-16"
          style={{ color: 'var(--text-primary)' }}>
          Mon parcours<br /><span className="text-gold-gradient">professionnel</span>
        </motion.h2>

        <div className="relative">
          <motion.div initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px origin-top"
            style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)', opacity: 0.3, transform: 'translateX(-50%)' }} />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
                className="relative grid lg:grid-cols-2 gap-0">
                <div className="absolute left-0 lg:left-1/2 top-6 -translate-x-1/2 z-10">
                  <motion.div animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="w-4 h-4"
                    style={{
                      border: '2px solid var(--gold)',
                      backgroundColor: exp.highlight ? 'var(--gold)' : 'var(--bg-primary)',
                    }} />
                </div>

                <div className={`pl-8 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className="group p-6 transition-all duration-300 cursor-default"
                    style={{
                      border: `1px solid ${exp.highlight ? 'var(--gold-border)' : 'var(--border-subtle)'}`,
                      backgroundColor: exp.highlight ? 'var(--gold-faint)' : 'var(--bg-card)',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold-border)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = exp.highlight ? 'var(--gold-border)' : 'var(--border-subtle)'}>
                    {exp.highlight && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--gold)' }} />
                        <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--gold)' }}>RÉCENT</span>
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display font-bold text-xl transition-colors duration-300"
                          style={{ color: 'var(--text-primary)' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}>
                          {exp.company}
                        </h3>
                        <p className="font-body text-sm mt-0.5" style={{ color: 'var(--gold)', opacity: 0.7 }}>{exp.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{exp.period}</p>
                        <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>{exp.location}</p>
                      </div>
                    </div>
                    <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 font-mono text-xs"
                          style={{ color: 'var(--gold)', opacity: 0.7, border: '1px solid var(--gold-border)', backgroundColor: 'var(--gold-faint)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}