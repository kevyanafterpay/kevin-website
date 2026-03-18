import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { HOBBIES, PHOTOS } from '../data/personal'

export default function PersonalLife() {
  return (
    <SectionWrapper id="personal">
      <h2 className="font-heading text-4xl font-bold mb-4 text-primary dark:text-gray-100">Life Outside Code</h2>
      <p className="text-muted dark:text-gray-400 text-lg mb-12 max-w-2xl leading-relaxed">
        When I'm not shipping features or tuning dashboards, you'll find me outdoors,
        at the gym, on the court, or tinkering with AI tools.
      </p>

      {/* Hobby Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-16">
        {HOBBIES.map((hobby) => (
          <div
            key={hobby.title}
            className="bg-surface dark:bg-gray-800 rounded-2xl p-6 border border-border dark:border-gray-700 hover:border-accent hover:shadow-sm transition-all"
          >
            <span className="text-3xl mb-3 block">{hobby.emoji}</span>
            <h3 className="font-semibold text-primary dark:text-gray-100 mb-1">{hobby.title}</h3>
            <p className="text-muted dark:text-gray-400 text-sm leading-relaxed">{hobby.description}</p>
          </div>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl overflow-hidden aspect-square bg-surface dark:bg-gray-800 border border-border dark:border-gray-700"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
