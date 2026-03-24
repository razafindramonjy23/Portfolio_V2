'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isLight = theme === 'light'

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.92 }}
      aria-label="Toggle theme"
      className={`
        relative w-14 h-7 rounded-full border transition-all duration-500 focus:outline-none
        ${isLight
          ? 'bg-[#f2ede0] border-[rgba(173,145,45,0.35)]'
          : 'bg-[rgba(173,145,45,0.10)] border-[rgba(173,145,45,0.30)]'
        }
      `}
    >
      {/* Track shimmer */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-500 ${isLight ? 'opacity-0' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(173,145,45,0.08) 50%, transparent 100%)',
        }}
      />

      {/* Thumb */}
      <motion.div
        animate={{ x: isLight ? 28 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className={`
          absolute top-1 w-5 h-5 rounded-full flex items-center justify-center text-xs
          ${isLight ? 'bg-[#AD912D] shadow-[0_2px_8px_rgba(173,145,45,0.5)]' : 'bg-[#AD912D] shadow-[0_0_8px_rgba(173,145,45,0.6)]'}
        `}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            {isLight ? '☀' : '☾'}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}