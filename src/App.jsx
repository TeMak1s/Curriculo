import { motion } from 'framer-motion'
import About from './components/About'
import BackgroundMusic from './components/BackgroundMusic'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import Projects from './components/Projects'
import Skills from './components/Skills'

const sectionMotion = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-black text-white selection:bg-yellow-400/40 selection:text-black">
      <ParticlesBackground />
      <BackgroundMusic />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <motion.section
          id="home"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Hero />
        </motion.section>

        <motion.section
          id="about"
          className="mt-20"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <About />
        </motion.section>

        <motion.section
          id="experience"
          className="mt-20"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Experience />
        </motion.section>

        <motion.section
          id="skills"
          className="mt-20"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          id="projects"
          className="mt-20"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="contact"
          className="mt-20"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.section>
      </main>
    </div>
  )
}

export default App
