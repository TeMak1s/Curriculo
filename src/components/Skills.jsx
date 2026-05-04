import { motion } from 'framer-motion'

const hardSkills = [
  { name: 'SQL', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'Power BI', level: 70 },
  { name: 'JavaScript', level: 65 },
  { name: 'HTML/CSS', level: 80 },
  { name: 'Oracle Cloud', level: 50 },
]

const softSkills = [
  'Comunicação',
  'Pensamento analítico',
  'Trabalho em equipe',
  'Proatividade',
  'Liderança',
  'Gestão de tempo',
]

function Skills() {
  return (
    <div>
      <h2 className="section-title">Skills</h2>
      <p className="mt-3 max-w-5xl text-lg text-gray-300 sm:text-xl">
        * Hard Skills e Soft Skills com foco em desenvolvimento de software, análise de
        dados e colaboração em ambientes de alta performance.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card p-6">
          <h3 className="text-2xl font-semibold text-white">Hard Skills</h3>
          <ul className="mt-5 space-y-4">
            {hardSkills.map((skill, index) => (
              <li key={skill.name}>
                <div className="mb-1 flex items-center justify-between text-lg text-white">
                  <span>{skill.name}</span>
                  <span className="text-yellow-400">{skill.level}%</span>
                </div>
                <div className="h-4 overflow-hidden border-2 border-white bg-[#4d0000]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.8, delay: index * 0.08 }}
                    className="h-full bg-yellow-400"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-2xl font-semibold text-white">Soft Skills</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="border-2 border-white bg-black px-3 py-2 text-lg font-medium text-white"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
