import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Career from './sections/Career'
import PersonalLife from './sections/PersonalLife'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="bg-background dark:bg-gray-900 font-body text-primary dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Nav />
      <main>
        <Hero />
        <About />
        <Career />
        <PersonalLife />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
