import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('https://formspree.io/f/xaqpvwjj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-surface dark:bg-gray-800 transition-colors duration-300">
      <SectionWrapper id="contact">
        <h2 className="font-heading text-4xl font-bold mb-4 text-primary dark:text-gray-100">Get In Touch</h2>
        <p className="text-muted dark:text-gray-400 mb-10 max-w-lg text-lg leading-relaxed">
          Have a question, opportunity, or just want to say hi? Send me a message.
        </p>

        {status === 'success' ? (
          <div className="max-w-lg rounded-xl border border-accent bg-accent/10 px-6 py-5 text-accent font-medium">
            Message sent! I'll get back to you soon.
          </div>
        ) : (
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
            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again later.</p>
            )}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-8 py-3 rounded-xl transition-colors"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        )}
      </SectionWrapper>
    </div>
  )
}
