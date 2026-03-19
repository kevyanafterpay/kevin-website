import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-medium mb-3 text-lg">Hello! 👋</p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary dark:text-gray-100 mb-6 leading-tight">
          I'm Qi Yan (Kevin Yan).
        </h1>
        <p className="text-xl md:text-2xl text-muted dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Senior Software Engineer building reliable, scalable systems — with a focus on AI and intelligent automation. Based in Melbourne, Australia.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/kevin--yan/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full border border-border dark:border-gray-700 hover:border-accent hover:text-accent text-muted dark:text-gray-400 transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="#contact"
            className="ml-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Get in touch →
          </a>
        </div>
      </motion.div>
    </section>
  )
}
