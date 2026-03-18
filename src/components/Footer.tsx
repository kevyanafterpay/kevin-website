import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-gray-700 py-10 px-6 text-center text-muted dark:text-gray-500 text-sm">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/kevyanafterpay"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin--yan/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:kevin.qiyan@gmail.com"
          className="hover:text-accent transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Kevin Yan. Built with React.</p>
    </footer>
  )
}
