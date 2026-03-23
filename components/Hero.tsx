'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const roles = ['Full Stack Developer', 'React / Next.js', 'Django / Python', 'SAP ABAP']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 90)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(173,145,45,0.12) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,41,71,0.8) 0%, transparent 70%)' }}
        />
        {/* Scan line */}
        <motion.div
          animate={{ y: ['-100%', '100vh'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
          className="absolute left-0 right-0 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #AD912D, transparent)' }}
        />
      </div>

      {/* Decorative corner brackets */}
      <div className="absolute top-28 left-8 lg:left-16 opacity-30">
        <div className="w-8 h-8 border-l-2 border-t-2 border-gold" />
      </div>
      <div className="absolute top-28 right-8 lg:right-16 opacity-30">
        <div className="w-8 h-8 border-r-2 border-t-2 border-gold" />
      </div>
      <div className="absolute bottom-16 left-8 lg:left-16 opacity-30">
        <div className="w-8 h-8 border-l-2 border-b-2 border-gold" />
      </div>
      <div className="absolute bottom-16 right-8 lg:right-16 opacity-30">
        <div className="w-8 h-8 border-r-2 border-b-2 border-gold" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[85vh]">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-gold" />
              <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase">
                Disponible · Antananarivo
              </span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-display font-black text-6xl lg:text-8xl xl:text-9xl text-white leading-[0.9]"
              >
                TAHINA
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                className="font-display font-black text-6xl lg:text-8xl xl:text-9xl text-gold-gradient leading-[0.9]"
              >
                RAZAFY
              </motion.h1>
            </div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="font-mono text-xl lg:text-2xl text-white/40">_</span>
              <span className="font-mono text-lg lg:text-xl text-gold/80">
                {displayText}
              </span>
              <span className="font-mono text-gold cursor-blink text-xl">|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="font-body text-white/50 text-lg leading-relaxed max-w-lg mb-10"
            >
              Développeur FullStack junior, autonome et créatif. Je transforme les idées en{' '}
              <span className="text-gold/80">solutions concrètes</span> avec précision et passion.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gold text-navy-deep font-mono font-medium text-sm tracking-wider overflow-hidden hover:shadow-[0_0_30px_rgba(173,145,45,0.4)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Voir mes projets
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gold-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
              <a
                href="mailto:razafindramonjytahina@gmail.com"
                className="px-8 py-4 border border-white/20 text-white/60 font-mono text-sm tracking-wider hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                Me contacter
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { num: '4+', label: 'Expériences' },
                { num: '3', label: 'Langues' },
                { num: '10+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-black text-2xl text-gold">{stat.num}</p>
                  <p className="font-mono text-white/40 text-xs tracking-widest">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side — Abstract visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-80 h-80"
            >
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-gold/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 border border-gold/10 rounded-full"
                style={{ borderStyle: 'dashed' }}
              />

              {/* Center */}
              <div className="absolute inset-12 border border-gold/30 flex items-center justify-center bg-navy/50 backdrop-blur-sm">
                <div className="text-center">
                  <p className="font-display font-black text-4xl text-gold">TR</p>
                  <p className="font-mono text-xs text-white/30 tracking-widest mt-1">DEV</p>
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'React', angle: 0, r: 140 },
                { label: 'Next.js', angle: 60, r: 140 },
                { label: 'Django', angle: 120, r: 140 },
                { label: 'SAP', angle: 180, r: 140 },
                { label: 'Python', angle: 240, r: 140 },
                { label: 'MongoDB', angle: 300, r: 140 },
              ].map((tech) => {
                const rad = (tech.angle * Math.PI) / 180
                const x = Math.cos(rad) * tech.r
                const y = Math.sin(rad) * tech.r
                return (
                  <motion.div
                    key={tech.label}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                    className="absolute px-2 py-1 bg-navy-deep border border-gold/30 font-mono text-xs text-gold/80"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {tech.label}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-white/30 text-xs tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
