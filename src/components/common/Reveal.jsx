import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ eyebrow, children, light = false }) {
  return (
    <div className={`section-title ${light ? 'light' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{children}</h2>
      <i />
    </div>
  )
}
