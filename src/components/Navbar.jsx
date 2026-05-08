import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Bisnis', href: '#bisnis' },
  { label: 'Mengapa GIS', href: '#mengapa-gis' },
  { label: 'Analisis Peta', href: '#analisis-peta' },
  { label: 'Kesimpulan', href: '#kesimpulan' },
  { label: 'Tim', href: '#tim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection via IntersectionObserver — BP3
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
        scrolled ? 'backdrop-blur-xl bg-gray-950/80 border-b border-white/10 shadow-lg shadow-black/30' : 'bg-transparent'
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
          <span className="font-bold text-white text-sm md:text-base">
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
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {l.label}
                {/* Active underline indicator — BP3 */}
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-950/95 border-t border-white/10 px-6 py-4 flex flex-col gap-1"
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
