import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)
    window.location.href = `mailto:kevin.qiyan@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-surface dark:bg-gray-800 transition-colors duration-300">
      <SectionWrapper id="contact">
        <h2 className="font-heading text-4xl font-bold mb-4 text-primary dark:text-gray-100">Get In Touch</h2>
        <p className="text-muted dark:text-gray-400 mb-10 max-w-lg text-lg leading-relaxed">
          Have a question, opportunity, or just want to say hi? Send me a message.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-gray-700 bg-background dark:bg-gray-900 text-primary dark:text-gray-100 placeholder:text-muted dark:placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-gray-700 bg-background dark:bg-gray-900 text-primary dark:text-gray-100 placeholder:text-muted dark:placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
          />
          <textarea
            placeholder="Your message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-gray-700 bg-background dark:bg-gray-900 text-primary dark:text-gray-100 placeholder:text-muted dark:placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-xl transition-colors"
          >
            Send Message →
          </button>
        </form>
      </SectionWrapper>
    </div>
  )
}
