import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const botAnswers = {
  oi: 'Olá! Posso te mostrar meus projetos e skills.',
  projetos: 'Dashboard, Bot Interativo, Portfólio e Atlas (em desenvolvimento).',
  skills: 'SQL, Python, Power BI, JavaScript, HTML/CSS e Oracle Cloud.',
  contato: 'Entre em contato pelo formulário na seção de Contato.',
}

const projectCards = [
  {
    title: 'Dashboard',
    status: 'Concluído',
    inProgress: false,
    description: 'Dashboard com visualização de métricas e comparação mensal com Chart.js.',
  },
  {
    title: 'Bot Interativo',
    status: 'Concluído',
    inProgress: false,
    description: 'Chat simples com respostas automáticas para interação rápida.',
  },
  {
    title: 'Atlas - Comunidade de Formação de Staffs',
    inProgress: true,
    description:
      'Projeto de liderança e gestão de comunidade para estruturar formação, acompanhamento e crescimento de staffs.',
    badge: 'Em Desenvolvimento',
  },
]

function MiniDashboardChart() {
  const data = useMemo(
    () => ({
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [
        {
          label: 'Performance',
          data: [45, 58, 52, 76, 71, 86],
          backgroundColor: 'rgba(255, 255, 0, 0.8)',
          borderColor: '#ffffff',
          borderWidth: 1,
          borderRadius: 0,
        },
      ],
    }),
    [],
  )

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          ticks: { color: '#ffffff', font: { family: 'VT323', size: 16 } },
          grid: { color: 'rgba(255,255,255,0.15)' },
          border: { color: '#ffffff' },
        },
        y: {
          ticks: { color: '#ffffff', font: { family: 'VT323', size: 16 } },
          grid: { color: 'rgba(255,255,255,0.15)' },
          border: { color: '#ffffff' },
        },
      },
    }),
    [],
  )

  return (
    <div className="mt-5 h-48 border-2 border-white bg-black p-3">
      <Bar data={data} options={options} />
    </div>
  )
}

function MiniBot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Digite: oi, projetos, skills ou contato.' },
  ])
  const [input, setInput] = useState('')

  const handleSend = (event) => {
    event.preventDefault()
    const normalized = input.trim().toLowerCase()
    if (!normalized) {
      return
    }

    const answer = botAnswers[normalized] || 'Ainda não aprendi essa pergunta. Tente: projetos.'

    setMessages((prev) => [
      ...prev,
      { from: 'user', text: input.trim() },
      { from: 'bot', text: answer },
    ])
    setInput('')
  }

  return (
    <div className="mt-4 border-2 border-white bg-black p-3">
      <div className="h-36 space-y-2 overflow-y-auto pr-1 text-base">
        {messages.map((message, index) => (
          <p
            key={`${message.from}-${index}`}
            className={message.from === 'bot' ? 'text-yellow-400' : 'text-white'}
          >
            <span className="font-semibold">{message.from === 'bot' ? '* Bot' : '> Você'}:</span>{' '}
            {message.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleSend} className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Digite sua mensagem"
          className="w-full border-2 border-white bg-black px-3 py-2 text-base text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
        />
        <button
          type="submit"
          className="border-2 border-yellow-400 bg-black px-3 py-2 text-base font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          OK
        </button>
      </form>
    </div>
  )
}

function Projects() {
  return (
    <div>
      <h2 className="section-title">Projetos</h2>
      <p className="mt-3 max-w-5xl text-lg text-gray-300 sm:text-xl">
        * Selecionados para demonstrar evolução técnica, visão de produto e capacidade
        de execução.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {projectCards.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className={`glass-card p-6 ${
              project.inProgress ? 'opacity-70' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              {project.badge && (
                <span className="border-2 border-yellow-400 bg-black px-3 py-1 text-sm font-semibold text-yellow-400">
                  {project.badge}
                </span>
              )}
            </div>

            <p className="mt-3 text-lg leading-relaxed text-gray-300">{project.description}</p>
            <p className="mt-3 text-base uppercase tracking-wider text-yellow-400">{project.status}</p>

            {project.title === 'Dashboard' && <MiniDashboardChart />}
            {project.title === 'Bot Interativo' && <MiniBot />}
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Projects
