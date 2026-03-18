import SectionWrapper from '../components/SectionWrapper'
import profilePhoto from '../assets/photos/profile.jpg'

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="font-heading text-4xl font-bold mb-10 text-primary dark:text-gray-100">About Me</h2>
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-5 text-lg text-muted dark:text-gray-400 leading-relaxed">
          <p>
            I'm a Software Engineer at Afterpay/Cash App, working on the web platform for
            Afterpay and Cash App. I enjoy building reliable systems and solving problems
            through thoughtful design.
          </p>
          <p>
            I started my career in QA across utilities, retail, and consulting, and later
            transitioned into software engineering. That background shapes how I work
            today — I care deeply about reliability, quality, and building systems that
            hold up in production.
          </p>
          <p>
            Outside of work, I like building AI-powered applications (RAG, LLM tooling)
            to automate workflows and reduce manual effort. I also enjoy hiking, going to
            the gym, and playing sports like badminton, table tennis, and tennis.
          </p>
        </div>

        {/* Profile photo */}
        <div className="rounded-2xl overflow-hidden aspect-square border border-border dark:border-gray-700">
          <img src={profilePhoto} alt="Kevin Yan" className="w-full h-full object-cover" />
        </div>
      </div>
    </SectionWrapper>
  )
}
