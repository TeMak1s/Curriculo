import { useState } from 'react'
import { motion } from 'framer-motion'
import { playTextNoise } from '../utils/sounds'

function Contact() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleEnviar = () => {
    playTextNoise()
    const subject = encodeURIComponent(`Contato de ${nome}`)
    const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`)
    window.location.href = `mailto:strikemaki@email.com?subject=${subject}&body=${body}`
  }
  return (
    <div className="glass-card p-8 sm:p-10">
      <h2 className="section-title">Contato</h2>
      <p className="mt-3 max-w-4xl text-lg text-gray-300 sm:text-xl">
        * Vamos conversar sobre projetos, colaborações ou oportunidades.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-lg">
        <a
          href="mailto:strikemaki@email.com"
          className="border-2 border-white bg-black px-4 py-2 text-white transition hover:border-yellow-400 hover:text-yellow-400"
        >
          Email
        </a>
        <span
          className="border-2 border-white bg-black px-4 py-2 text-white select-all cursor-pointer transition hover:border-yellow-400 hover:text-yellow-400"
          title="Clique para copiar"
          onClick={() => navigator.clipboard.writeText('caceteperdimeunome')}
        >
          Discord: caceteperdimeunome
        </span>
      </div>

      <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); handleEnviar() }}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border-2 border-white bg-black px-4 py-3 text-lg text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
        />
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-white bg-black px-4 py-3 text-lg text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
        />
        <textarea
          rows="4"
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="sm:col-span-2 border-2 border-white bg-black px-4 py-3 text-lg text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="sm:col-span-2 w-full border-2 border-yellow-400 bg-black px-6 py-3 text-xl font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          * Enviar Mensagem
        </motion.button>
      </form>
    </div>
  )
}

export default Contact
