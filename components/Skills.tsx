'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─────────────────────────────────────────────
   SKILL CATEGORIES  —  no duplicates, clear separation
   ───────────────────────────────────────────── */
const skillCategories = [
  {
    title: 'Langages',
    icon: '{ }',
    color: '#61DAFB',          // accent couleur pour le badge
    skills: [
      { name: 'Python',     level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java',       level: 75 },
      { name: 'PHP',        level: 65 },
    ],
  },
  {
    title: 'Frameworks & UI',
    icon: '◈',
    color: '#38BDF8',
    skills: [
      { name: 'React / Next.js', level: 85 },
      { name: 'Django',          level: 85 },
      { name: 'Laravel',         level: 65 },
      { name: 'Node.js',         level: 70 },
      { name: 'Tailwind CSS',    level: 90 },
    ],
  },
  {
    title: 'Bases de données',
    icon: '◉',
    color: '#4DB33D',
    skills: [
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB',    level: 70 },
      { name: 'MySQL',      level: 65 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    color: '#FF9900',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'REST API',     level: 85 },
      { name: 'AWS (EC2/S3)', level: 70 },
      { name: 'cPanel / VPS', level: 80 },
    ],
  },
  {
    title: 'SAP S/4HANA',
    icon: '⬢',
    color: '#0070F2',
    skills: [
      { name: 'ABAP',              level: 75 },
      { name: 'SAP Fiori',         level: 70 },
      { name: 'CDS View',          level: 80 },
      { name: 'OData',             level: 65 },
      { name: 'Integration Suite', level: 70 },
      { name: 'BTP Cockpit',       level: 55 },
    ],
  },
  {
    title: 'Design UI/UX',
    icon: '✦',
    color: '#F24E1E',
    skills: [
      { name: 'Figma',    level: 80 },
      { name: 'Adobe XD', level: 65 },
    ],
  },
]

/* ─────────────────────────────────────────────
   CORE STACK LOGOS — grouped by domain
   ───────────────────────────────────────────── */
const logoGroups = [
  {
    label: 'Langages',
    logos: [
      { name: 'Python', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="pyb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="pyy" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs><path d="M49 6C29 6 30 14 30 14l0 12h20v4H24s-13-1.5-13 19 11 19 11 19h7v-9s-0.4-11 11-11h19s10 0.2 10-10V18S71 6 49 6z" fill="url(#pyb)"/><circle cx="40" cy="19" r="3.5" fill="white"/><path d="M51 94c20 0 19-8 19-8l0-12H50v-4h26s13 1.5 13-19-11-19-11-19h-7v9s0.4 11-11 11H41s-10-0.2-10 10V82S29 94 51 94z" fill="url(#pyy)"/><circle cx="60" cy="81" r="3.5" fill="white"/></svg>` },
      { name: 'JavaScript', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#F7DF1E"/><path d="M25 82l6-3.5c1.1 2 2.2 3.7 4.7 3.7 2.4 0 3.9-0.9 3.9-4.6V57h7.5v20.8c0 7.6-4.5 11-11 11C30.6 88.8 27 85.8 25 82z" fill="#323330"/><path d="M54 81.3l6-3.4c1.5 2.5 3.5 4.3 7 4.3 3 0 4.8-1.5 4.8-3.5 0-2.4-1.9-3.3-5.2-4.7L64.7 73c-5.2-2.2-8.6-4.9-8.6-10.7 0-5.3 4-9.4 10.4-9.4 4.5 0 7.7 1.6 10 5.7l-5.7 3.6C69.6 59.8 68.2 58.8 66 58.8c-2.3 0-3.7 1.4-3.7 3.2 0 2.2 1.4 3.1 4.7 4.5l1.8 0.8c6.1 2.6 9.5 5.3 9.5 11.2 0 6.4-5 9.9-11.7 9.9C55.5 88.4 51.8 85.5 54 81.3z" fill="#323330"/></svg>` },
      { name: 'TypeScript', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="8" fill="#3178C6"/><path d="M55 54v4c1.5 0.7 3.2 1 5 1 4.5 0 7-2.2 7-5.5 0-2.7-1.6-4.3-4.8-5.4-2.4-0.8-3.2-1.4-3.2-2.5 0-1 0.8-1.7 2.2-1.7 1.5 0 3 0.6 4.3 1.5V42c-1.1-0.5-2.6-0.8-4.2-0.8-4.2 0-6.8 2.2-6.8 5.4 0 2.7 1.7 4.3 4.9 5.3 2.5 0.8 3.1 1.5 3.1 2.6 0 1.1-0.9 1.8-2.4 1.8-1.7 0-3.5-0.7-5.1-1.8z" fill="white"/><path d="M46 41.5H38v4.5h5v17h5.5v-17H54v-4.5z" fill="white"/></svg>` },
      { name: 'Java', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M38 68C38 68 33 71 42 72c10 1 15 1 25-1 0 0 3 2-3 3C50 78 26 73 38 68z" fill="#0074BD"/><path d="M35 61C35 61 29 65 40 66c14 1 23 1 35-2 0 0 3 2-4 4C55 73 24 67 35 61z" fill="#0074BD"/><path d="M55 10C55 10 66 16 48 25c-15 8-5 13 0 17C35 30 44 24 55 10z" fill="#EA2D2E"/><path d="M40 75C40 75 37 77 47 78c13 1 23 0 25-3 0 0 1 2-3 3C57 83 30 77 40 75z" fill="#0074BD"/></svg>` },
      { name: 'PHP', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="48" ry="26" fill="#777BB4"/><text x="50" y="57" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="26" fill="white">php</text></svg>` },
    ],
  },
  {
    label: 'Frameworks',
    logos: [
      { name: 'React', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="9" fill="#61DAFB"/><ellipse cx="50" cy="50" rx="45" ry="17" fill="none" stroke="#61DAFB" stroke-width="4.5"/><ellipse cx="50" cy="50" rx="45" ry="17" fill="none" stroke="#61DAFB" stroke-width="4.5" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="45" ry="17" fill="none" stroke="#61DAFB" stroke-width="4.5" transform="rotate(120 50 50)"/></svg>` },
      { name: 'Next.js', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#000"/><path d="M29 72V30l42 49h-8L29 33v39z" fill="white"/><path d="M63 30h8v28z" fill="url(#ng)" opacity="0.8"/><defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>` },
      { name: 'Django', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="8" fill="#092E20"/><path d="M56 16h12v52c0 6-1 9-4 11-3 2-7 3-13 3l-2-9c4 0 6-0.5 7-1.5s1-3 1-7V16z" fill="#44B78B"/><path d="M32 38h12v37c0 8-4 12-12 14l-3-8c4-1 6-3 6-8V38z" fill="#44B78B"/><rect x="32" y="16" width="12" height="13" rx="2" fill="#44B78B"/></svg>` },
      { name: 'Laravel', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M95 30L73 68 50 30h14l9 18 9-18z" fill="#FF2D20"/><path d="M5 30l22 38 23-38H36l-9 18-9-18z" fill="#FF2D20"/><path d="M27 68l23-8 23 8-23 19z" fill="#FF2D20"/><path d="M50 22l14 8-14 8-14-8z" fill="#FF6B6B"/></svg>` },
      { name: 'Node.js', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 5L10 28v44l40 23 40-23V28z" fill="#339933"/><path d="M50 5L10 28v44l40 23V5z" fill="#3fa63f"/><text x="50" y="59" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="18" fill="white">Node</text></svg>` },
      { name: 'Tailwind', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="8" fill="#0F172A"/><path d="M25 47c2.5-10 8-14.5 16.5-14.5 12.5 0 14 9.5 20.5 11.5 4 1.5 7.5-0.5 10.5-5.5C70 49 64.5 53.5 56 53.5c-12.5 0-14-9.5-20.5-11.5C31 40.5 27.5 42.5 25 47z" fill="#38BDF8"/><path d="M14 62c2.5-10 8-14.5 16.5-14.5 12.5 0 14 9.5 20.5 11.5 4 1.5 7.5-0.5 10.5-5.5C59 64 53.5 68.5 45 68.5c-12.5 0-14-9.5-20.5-11.5C20 55.5 16.5 57.5 14 62z" fill="#38BDF8"/></svg>` },
    ],
  },
  {
    label: 'Bases de données',
    logos: [
      { name: 'PostgreSQL', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M78 26c0-11-13-19-28-19S22 15 22 26v10c0 11 6 20 14 24l0 18c0 3 2 5 5 5h18c3 0 5-2 5-5V60C72 56 78 47 78 36z" fill="#336791"/><path d="M50 7C35 7 22 15 22 26c0 11 13 19 28 19s28-8 28-19C78 15 65 7 50 7z" fill="#396fa0"/><circle cx="35" cy="25" r="5" fill="white"/><circle cx="65" cy="25" r="5" fill="white"/><path d="M37 38 Q50 48 63 38" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>` },
      { name: 'MongoDB', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 5C50 5 20 32 20 58c0 17 13 31 30 36 17-5 30-19 30-36C80 32 50 5 50 5z" fill="#4DB33D"/><path d="M50 5C50 5 20 32 20 58c0 17 13 31 30 36V5z" fill="#3FA037"/><rect x="47" y="62" width="6" height="30" rx="3" fill="#3FA037"/></svg>` },
      { name: 'MySQL', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8 56c0 0 3-12 11-20s20-10 20-10V15S10 18 8 56z" fill="#00758F"/><path d="M92 56c0 0-3-12-11-20S61 26 61 26V15s29 3 31 41z" fill="#F29111"/><ellipse cx="50" cy="20" rx="28" ry="9" fill="#00758F"/><ellipse cx="50" cy="20" rx="21" ry="6" fill="#00618A"/><text x="50" y="60" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="13" fill="white">MySQL</text></svg>` },
    ],
  },
  {
    label: 'Cloud & DevOps',
    logos: [
      { name: 'Git', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M92 45L55 8C52 5 47 5 44 8l-8 8 10 10c3-1 7-0.3 9.5 2.5 2.5 2.8 3 6.8 1.5 10L68 49c3.5-1.5 7.5-0.7 10 2.5 3.5 4 3 10-1 13.5s-10 3.8-13.5-0.2c-2.7-3-3-7.3-1-10.3L52 44v24.5c1.7 0.8 3.2 2 4.2 3.5 3 4.5 2 10.5-2.2 13.5s-10 2.2-13.2-2.3c-3-4.5-2-10.5 2.2-13.5 1.3-0.9 2.7-1.4 4-1.7V43c-1.3-0.3-2.7-0.8-4-1.7-4.3-2.9-5.3-8.7-2.3-12.8 0.5-0.7 1-1.3 1.5-1.8L32 17 8 41c-3 3-3 7.5 0 10.5l37 37c3 3 7.5 3 10.5 0l37-37c2.7-3 2.7-7.7-0.5-6.5z" fill="#F05032"/></svg>` },
      { name: 'AWS', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="8" fill="#232F3E"/><path d="M28 55l4-14 4 14h-3l-0.7-3h-2.5L29 55zm2-5h1.8l-0.9-4z" fill="#FF9900"/><path d="M38 41h2.5l2 10 2-10H47l-3 14h-3z" fill="#FF9900"/><path d="M49 53.5l1.5-1.5c1 1.2 2.2 1.8 3.5 1.8 1.5 0 2.2-0.6 2.2-1.5 0-0.9-0.5-1.3-2.5-2-2.8-1-4-2.2-4-4.3 0-2.5 2-4 4.5-4 2 0 3.5 0.7 4.8 2L58 46c-1-0.9-2-1.4-3.2-1.4-1.2 0-1.8 0.5-1.8 1.3 0 0.8 0.5 1.2 2.5 2 2.8 1 4 2.3 4 4.4 0 2.7-2 4.3-5 4.3-2 0-4-0.8-5.5-2.6z" fill="#FF9900"/><path d="M18 68c8 5 18 8 32 8s24-3 32-8" fill="none" stroke="#FF9900" stroke-width="3" stroke-linecap="round"/><path d="M78 62l8 6-8 3" fill="#FF9900"/></svg>` },
    ],
  },
  {
    label: 'SAP',
    logos: [
      { name: 'SAP', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="8" fill="#0070F2"/><text x="50" y="62" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="30" fill="white">SAP</text></svg>` },
    ],
  },
  {
    label: 'Design',
    logos: [
      { name: 'Figma', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="25" y="8" width="22" height="22" rx="11" fill="#F24E1E"/><rect x="25" y="30" width="22" height="22" fill="#FF7262"/><rect x="25" y="52" width="22" height="22" fill="#1ABCFE"/><rect x="47" y="8" width="22" height="22" fill="#A259FF"/><rect x="47" y="30" width="22" height="22" rx="11" fill="#0ACF83"/></svg>` },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden grid-bg"
      style={{ backgroundColor: 'var(--bg-primary)' }}>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section header ── */}
        <div className="flex items-center gap-4 mb-20">
          <motion.div initial={{ width: 0 }} animate={inView ? { width: '3rem' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} className="h-px"
            style={{ backgroundColor: 'var(--gold)' }} />
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>
            03. Compétences
          </motion.span>
        </div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-black text-4xl lg:text-6xl leading-tight mb-16"
          style={{ color: 'var(--text-primary)' }}>
          Stack &amp; <span className="text-gold-gradient">expertise</span>
        </motion.h2>

        {/* ══════════════════════════════════════
            SKILL BARS  —  3 colonnes
        ══════════════════════════════════════ */}
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div key={cat.title}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.4 + catIdx * 0.1 }}
              className="p-5 backdrop-blur-sm transition-colors duration-300"
              style={{ border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-card)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold-border)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'}>

              {/* Card header */}
              <div className="flex items-center gap-2.5 mb-5">
                {/* Colored dot */}
                <div className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.color }} />
                <span className="font-mono text-sm font-semibold tracking-wide"
                  style={{ color: 'var(--text-primary)' }}>
                  {cat.title}
                </span>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs tabular-nums"
                        style={{ color: 'var(--gold)', opacity: 0.7 }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[3px] relative overflow-hidden rounded-full"
                      style={{ backgroundColor: 'var(--border-subtle)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 0.9,
                          delay: 0.5 + catIdx * 0.12 + skillIdx * 0.07,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ══════════════════════════════════════
            CORE STACK  —  logos groupés
        ══════════════════════════════════════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="relative p-8 overflow-hidden"
          style={{ border: '1px solid var(--gold-border)', backgroundColor: 'var(--bg-card)' }}>

          {/* shimmer top */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg,transparent,var(--gold),transparent)', opacity: 0.4 }} />

          <p className="font-mono text-xs tracking-[0.4em] uppercase text-center mb-8"
            style={{ color: 'var(--text-muted)' }}>CORE STACK</p>

          {/* Groups with dividers */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
            {logoGroups.map((group, gIdx) => (
              <div key={group.label} className="flex flex-col items-center gap-3">
                {/* group label */}
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase"
                  style={{ color: 'var(--text-muted)' }}>
                  {group.label}
                </span>
                {/* logos row */}
                <div className="flex items-center gap-3">
                  {group.logos.map((tech, i) => {
                    const globalIdx = logoGroups.slice(0, gIdx).reduce((acc, g) => acc + g.logos.length, 0) + i
                    return (
                      <motion.div key={tech.name}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9 + globalIdx * 0.035, type: 'spring', stiffness: 280, damping: 22 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        className="group flex flex-col items-center gap-1.5 cursor-default">
                        <div className="w-11 h-11 flex items-center justify-center rounded-xl p-1.5 transition-all duration-300
                          group-hover:shadow-[0_6px_20px_rgba(173,145,45,0.28)]"
                          style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
                          dangerouslySetInnerHTML={{ __html: tech.svg }} />
                        <span className="font-mono text-[8px] tracking-wide text-center
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                          style={{ color: 'var(--gold)' }}>
                          {tech.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}