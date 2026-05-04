import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { playConfirm, playSave, playPhone } from '../utils/sounds'

const typingPhrases = [
  'programação',
  'análise de dados',
  'cloud computing',
]

function Hero() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentPhrase = useMemo(() => typingPhrases[phraseIndex], [phraseIndex])

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentPhrase.slice(0, text.length + 1)
          setText(nextText)
          if (nextText === currentPhrase) {
            setTimeout(() => setIsDeleting(true), 850)
          }
        } else {
          const nextText = currentPhrase.slice(0, text.length - 1)
          setText(nextText)
          if (!nextText) {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % typingPhrases.length)
          }
        }
      },
      isDeleting ? 55 : 110,
    )

    return () => clearTimeout(timeout)
  }, [currentPhrase, isDeleting, text])

  return (
    <div className="glass-card relative overflow-hidden p-8 sm:p-12">
      {/* Battle encounter label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 inline-block border-2 border-yellow-400 bg-black px-4 py-1 text-lg font-semibold uppercase tracking-widest text-yellow-400"
      >
        Portfólio Profissional
      </motion.p>

      {/* Name with soul */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative z-10 mt-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
      >
        TeMaki
      </motion.h1>

      {/* Stats line */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22 }}
        className="relative z-10 mt-2 flex flex-wrap items-center gap-4 border-b-2 border-t-2 border-white py-3 text-xl text-white"
      >
        <span>Estudante de Eng. Software</span>
        <span className="text-yellow-400">LV 19</span>
        <div className="flex items-center gap-2">
          <span>HP</span>
          <div className="h-4 w-32 border-2 border-white bg-[#4d0000]">
            <div className="h-full w-full bg-yellow-400" />
          </div>
          <span>20 / 20</span>
        </div>
      </motion.div>

      {/* Dialogue box */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative z-10 mt-6 border-2 border-white bg-black p-4"
      >
        <p className="text-lg text-white sm:text-xl">
          * Focado em{' '}
          <span className="font-semibold text-yellow-400">{text}</span>
          <span className="typing-caret" />
          {' '}para criar soluções digitais com impacto real.
        </p>
      </motion.div>

      {/* Battle menu buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 mt-8 flex flex-wrap gap-3"
      >
        <a
          href="#projects"
          onClick={playConfirm}
          className="border-2 border-white bg-black px-6 py-3 text-lg font-bold text-white transition hover:bg-white hover:text-black"
        >
          PROJETOS
        </a>
        <a
          href="#contact"
          onClick={playPhone}
          className="border-2 border-white bg-black px-6 py-3 text-lg font-bold text-white transition hover:bg-white hover:text-black"
        >
          CONTATO
        </a>
        <a
          href="/Strike-Maki-CV.txt"
          download
          onClick={playSave}
          className="border-2 border-yellow-400 bg-black px-6 py-3 text-lg font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          DOWNLOAD CV
        </a>
      </motion.div>
    </div>
  )
}

export default Hero
