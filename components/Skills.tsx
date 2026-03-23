'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '⬡',
    skills: [
      { name: 'React / Next.js', level: 85 },
      { name: 'JavaScript / TypeScript', level: 80 },
      { name: 'HTML / CSS / Tailwind', level: 90 },
      { name: 'Blender 3D', level: 55 },
    ],
  },
  {
    title: 'Backend',
    icon: '◈',
    skills: [
      { name: 'Python / Django', level: 80 },
      { name: 'Java', level: 65 },
      { name: 'Node.js', level: 60 },
      { name: 'SAP ABAP', level: 70 },
    ],
  },
  {
    title: 'Data & DevOps',
    icon: '◉',
    skills: [
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Data Warehouse', level: 65 },
      { name: 'Git / GitHub', level: 80 },
    ],
  },
]

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Python', 'Django',
  'Java', 'SAP ABAP', 'PostgreSQL', 'MongoDB', 'Blender 3D',
  'Tailwind CSS', 'JavaScript', 'Git', 'REST API', 'Data Warehouse',
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

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
            03. Compétences
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-black text-4xl lg:text-6xl text-white leading-tight mb-16"
        >
          Stack &{' '}
          <span className="text-gold-gradient">expertise</span>
        </motion.h2>

        {/* Skill categories */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + catIdx * 0.15 }}
              className="p-6 border border-white/10 bg-navy/40 backdrop-blur-sm hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-gold text-2xl">{cat.icon}</span>
                <h3 className="font-display font-bold text-white text-lg">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-white/60 text-xs">{skill.name}</span>
                      <span className="font-mono text-gold/60 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/5 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + catIdx * 0.2 + skillIdx * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/60 to-gold"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="p-8 border border-gold/15 bg-navy/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <p className="font-mono text-white/30 text-xs tracking-widest mb-6 text-center">
            TECHNOLOGIES MAÎTRISÉES
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.05 }}
                whileHover={{ scale: 1.05, color: '#AD912D' }}
                className="px-4 py-2 border border-white/10 font-mono text-sm text-white/50 hover:border-gold/40 hover:text-gold transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
