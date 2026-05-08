import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Bisnis', href: '#bisnis' },
  { label: 'Mengapa GIS', href: '#mengapa-gis' },
  { label: 'Analisis Peta', href: '#analisis-peta' },
  { label: 'Kesimpulan', href: '#kesimpulan' },
  { label: 'Tim', href: '#tim' },
]

const lkLinks = [
  { label: 'Lembar Kerja 1', href: 'https://docs.google.com/document/d/19mR4mEdL8VDjSLLf5y7tQAXw2SpAyEzBi78GSZEVAR8/edit?tab=t.0' },
  { label: 'Lembar Kerja 2', href: 'https://docs.google.com/document/d/1to2AthcZEALk8dp1AP1U7UUeFoe2sEJlJA7weI5zQK4/edit?tab=t.0' },
  { label: 'Lembar Kerja 3', href: 'https://docs.google.com/document/d/1DR2S4I8Qhxeiz7uCA9Mfg7LoKFoYqdWasS6829-bqtk/edit?usp=sharing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [lkOpen, setLkOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map(l => l.href.replace('#', ''))
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-white/90 border-b border-slate-200 shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/Logo Ayam Geprek Daeng.webp"
            alt="Logo Ayam Geprek Daeng"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-red-600 transition-transform group-hover:scale-110"
          />
          <span className="font-bold text-slate-900 text-sm md:text-base">
            Ayam Geprek Daeng
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => {
            const sectionId = l.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
          
          {/* LK Dropdown */}
          <div className="relative ml-2" onMouseEnter={() => setLkOpen(true)} onMouseLeave={() => setLkOpen(false)}>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors flex items-center gap-1 shadow-sm">
              Materi LK <span className="text-[10px]">▼</span>
            </button>
            <AnimatePresence>
              {lkOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden py-1"
                >
                  {lkLinks.map((lk, i) => (
                    <a
                      key={i}
                      href={lk.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {lk.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-900 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden shadow-md"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-600 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="h-px bg-slate-200 my-2 mx-3" />
              <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-widest">Materi LK</div>
              {lkLinks.map((lk, i) => (
                <a
                  key={i}
                  href={lk.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium py-2 px-3 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2"
                >
                  📄 {lk.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

