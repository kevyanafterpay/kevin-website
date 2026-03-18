import SectionWrapper from '../components/SectionWrapper'
import { JOBS, SKILLS, CERTIFICATIONS, EDUCATION } from '../data/career'

export default function Career() {
  return (
    <div className="bg-surface dark:bg-gray-800 transition-colors duration-300">
      <SectionWrapper id="career">
        <h2 className="font-heading text-4xl font-bold mb-12 text-primary dark:text-gray-100">Career</h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-border dark:border-gray-700 pl-8 space-y-8 mb-20">
          {JOBS.map((job) => (
            <div key={job.company} className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-surface dark:border-gray-800" />
              <p className="text-sm text-muted dark:text-gray-500 mb-1">{job.period}</p>
              <h3 className="font-heading text-xl font-bold text-primary dark:text-gray-100">{job.title}</h3>
              <p className="text-accent font-medium">{job.company}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <h3 className="font-heading text-2xl font-bold mb-6 text-primary dark:text-gray-100">Skills</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div
              key={category}
              className="bg-background dark:bg-gray-900 rounded-xl p-5 border border-border dark:border-gray-700"
            >
              <p className="font-semibold text-primary dark:text-gray-200 mb-3 text-sm uppercase tracking-wide">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-surface dark:bg-gray-800 text-muted dark:text-gray-400 px-3 py-1 rounded-full border border-border dark:border-gray-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="font-heading text-2xl font-bold mb-6 text-primary dark:text-gray-100">Certifications</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="bg-background dark:bg-gray-900 rounded-xl p-5 border border-border dark:border-gray-700 flex items-start gap-3"
            >
              <span className="text-xl mt-0.5">🏅</span>
              <div>
                <p className="font-medium text-primary dark:text-gray-200 text-sm">{cert.name}</p>
                <p className="text-muted dark:text-gray-500 text-xs mt-0.5">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <h3 className="font-heading text-2xl font-bold mb-6 text-primary dark:text-gray-100">Education</h3>
        <div className="space-y-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="flex justify-between items-start gap-4 pb-4 border-b border-border dark:border-gray-700 last:border-0"
            >
              <div>
                <p className="font-medium text-primary dark:text-gray-200">{edu.degree}</p>
                <p className="text-muted dark:text-gray-500 text-sm">{edu.school}</p>
              </div>
              <p className="text-muted dark:text-gray-500 text-sm whitespace-nowrap">{edu.period}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
