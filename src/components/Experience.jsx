import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Projetos Acadêmicos',
    description:
      'Construção de análises estruturadas com SQL e Python para interpretar dados e orientar decisões.',
    stack: ['SQL', 'Python', 'Power BI'],
  },
  {
    title: 'Projetos Pessoais',
    description:
      'Aplicações front-end responsivas com HTML, CSS e JavaScript focadas em usabilidade e performance.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Análise e Visualização',
    description:
      'Criação de dashboards e relatórios para traduzir dados complexos em insights acionáveis.',
    stack: ['Power BI', 'Storytelling', 'KPIs'],
  },
]

function Experience() {
  return (
    <div>
      <h2 className="section-title">Experiência</h2>
      <p className="mt-3 max-w-5xl text-lg text-gray-300 sm:text-xl">
        * Experiências em projetos acadêmicos e pessoais com foco em dados, desenvolvimento
        front-end e solução de problemas reais.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {experiences.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-semibold text-yellow-400">* {item.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-gray-300">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="border-2 border-yellow-400 bg-black px-2 py-1 text-base font-medium text-yellow-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Experience
