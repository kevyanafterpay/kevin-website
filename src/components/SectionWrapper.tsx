import { motion } from 'framer-motion'

export default function SectionWrapper({
  id,
  children,
  className = '',
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`py-24 px-6 max-w-5xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  )
}
