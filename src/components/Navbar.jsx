import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { playMenuHover, playConfirm } from '../utils/sounds'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-white bg-black">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-xl font-bold tracking-wider text-yellow-400">
          TeMaki
        </a>

        <ul className="hidden items-center gap-8 text-lg font-medium text-white md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onMouseEnter={playMenuHover}
                onClick={playConfirm}
                className="ut-nav-link transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="border-2 border-white bg-black px-3 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black md:hidden"
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <ul className="space-y-3 border-t-2 border-white bg-black px-4 pb-4 pt-3 text-lg text-white">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-1 transition hover:text-yellow-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
