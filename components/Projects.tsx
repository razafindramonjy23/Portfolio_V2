'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1, number: '01', title: 'ERP/CRM SAP Application', company: 'Augusta Reeves Suisse',
    description: 'Développement d\'une application ERP/CRM complète en ABAP sur la plateforme SAP. Gestion des workflows métiers, interfaces utilisateur SAP, et intégration des processus d\'entreprise.',
    tags: ['SAP', 'ABAP', 'ERP', 'CRM'], year: '2025',
  },
  {
    id: 2, number: '02', title: 'Plateforme Web Kontiki', company: 'Kontiki Services',
    description: 'Création du site web officiel complet + mise en place d\'un datawarehouse pour le département data analyst. Architecture full-stack avec Django en backend et React en frontend.',
    tags: ['React', 'Django', 'PostgreSQL', 'Data Warehouse'], year: '2024-2025',
  },
  {
    id: 3, number: '03', title: 'Système de Suivi de Projets', company: 'Ministère de l\'Intérieur',
    description: 'Outil de suivi et reporting des projets numériques du ministère. Dashboard de visualisation de l\'avancement, coordination inter-équipes et génération de rapports automatisés.',
    tags: ['Python', 'React', 'PostgreSQL', 'Dashboard'], year: '2024',
  },
  {
    id: 4, number: '04', title: 'Site Vitrine SmartPredict', company: 'SmartPredict',
    description: 'Développement d\'un site vitrine moderne avec animations et interface responsive. Première réalisation professionnelle mêlant design et développement web contemporain.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'], year: '2023',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute right-0 top-0 w-px h-full opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-20">
          <motion.div initial={{ width: 0 }} animate={inView ? { width: '3rem' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} className="h-px" style={{ backgroundColor: 'var(--gold)' }} />
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
            className="font-mono text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>
            04. Projets
          </motion.span>
        </div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-black text-4xl lg:text-6xl leading-tight mb-16"
          style={{ color: 'var(--text-primary)' }}>
          Réalisations <span className="text-gold-gradient">notables</span>
        </motion.h2>

        <div className="space-y-2">
          {projects.map((project, i) => (
            <motion.div key={project.id}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden cursor-default transition-all duration-300"
              style={{ border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-card)' }}
              onMouseEnterCapture={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold-border)'}
              onMouseLeaveCapture={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'}>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: hoveredId === project.id ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 origin-left" style={{ backgroundColor: 'var(--gold-faint)' }} />

              <div className="relative p-6 lg:p-8 grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 items-start">
                <div className="flex items-center gap-4">
                  <span className="font-display font-black text-5xl lg:text-6xl leading-none transition-colors duration-300"
                    style={{ color: hoveredId === project.id ? 'var(--gold-border)' : 'var(--text-faint)' }}>
                    {project.number}
                  </span>
                  <div className="w-px h-12 hidden lg:block" style={{ backgroundColor: 'var(--border-subtle)' }} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{project.year}</span>
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
                    <span className="font-mono text-xs" style={{ color: 'var(--gold)', opacity: 0.6 }}>{project.company}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl lg:text-2xl mb-3 transition-colors duration-300"
                    style={{ color: hoveredId === project.id ? 'var(--gold)' : 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="font-body text-sm leading-relaxed mb-4"
                        style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 font-mono text-xs transition-all duration-300"
                        style={{ color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.div animate={{ x: hoveredId === project.id ? 4 : 0 }} transition={{ duration: 0.3 }}
                  className="flex items-center text-2xl font-light transition-colors duration-300"
                  style={{ color: hoveredId === project.id ? 'var(--gold)' : 'var(--text-muted)' }}>→</motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}