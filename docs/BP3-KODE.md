# ⚙️ BP3 — KODE KOMPONEN
> Ayam Geprek Daeng GIS | Kelompok 4 UNM

---

## Struktur File `src/`

```
src/
├── main.jsx
├── App.jsx
├── index.css
└── components/
    ├── ScrollProgress.jsx
    ├── Navbar.jsx
    ├── HeroSection.jsx
    ├── BisnisSection.jsx       ← Bento Grid profil
    ├── MengapaGISSection.jsx   ← Problem + stat counters
    ├── AnalisisPetaSection.jsx ← Interactive tabs + lightbox
    ├── KesimpulanSection.jsx   ← Slider + rekomendasi
    ├── TimSection.jsx          ← Anggota kelompok
    ├── Footer.jsx
    └── BackToTop.jsx
```

---

## `main.jsx`
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
```

---

## `App.jsx`
```jsx
import { Helmet } from 'react-helmet-async'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BisnisSection from './components/BisnisSection'
import MengapaGISSection from './components/MengapaGISSection'
import AnalisisPetaSection from './components/AnalisisPetaSection'
import KesimpulanSection from './components/KesimpulanSection'
import TimSection from './components/TimSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Analisis GIS Lokasi Cabang — Ayam Geprek Daeng | UNM</title>
        <meta name="description" content="Laporan analisis GIS untuk penentuan lokasi cabang baru Ayam Geprek Daeng di Kota Makassar. Menggunakan 4 layer data spasial: aksesibilitas jalan, fasilitas pendidikan, kepadatan penduduk, dan pemetaan kompetitor." />
        <meta property="og:title" content="Analisis GIS — Ayam Geprek Daeng" />
        <meta property="og:description" content="Kami menggunakan GIS untuk menemukan lokasi cabang paling strategis di Makassar." />
        <meta property="og:image" content="/og-image.webp" />
      </Helmet>

      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <BisnisSection />
        <MengapaGISSection />
        <AnalisisPetaSection />
        <KesimpulanSection />
        <TimSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
```

---

## `components/ScrollProgress.jsx`
```jsx
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[200] bg-gradient-to-r from-red-600 to-orange-400"
    />
  )
}
```

---

## `components/Navbar.jsx`
```jsx
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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-gray-950/80 border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/Logo Ayam Geprek Daeng.webp"
            alt="Logo"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-red-600"
          />
          <span className="font-bold text-white text-sm md:text-base">
            Ayam Geprek Daeng
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
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
          className="md:hidden bg-gray-950/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4"
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white font-medium"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
```

---

## `components/HeroSection.jsx`
```jsx
import { motion } from 'framer-motion'

const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } }

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Teks */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.span variants={item} className="inline-block text-xs font-semibold tracking-widest text-red-500 uppercase border border-red-600/40 px-4 py-1.5 rounded-full bg-red-600/10">
            Tugas Mata Kuliah · GIS for Business
          </motion.span>

          <motion.h1 variants={item} className="text-4xl md:text-6xl font-black text-white leading-tight">
            Menentukan Lokasi Cabang Baru{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Ayam Geprek Daeng
            </span>{' '}
            dengan Pendekatan GIS
          </motion.h1>

          <motion.p variants={item} className="text-gray-400 text-lg leading-relaxed">
            Kami meninggalkan metode tebak-tebakan. Dengan menganalisis empat lapisan data spasial Kota Makassar — infrastruktur jalan, sebaran kampus, kepadatan warga, hingga titik kompetitor — kami menemukan lokasi ekspansi yang paling menguntungkan.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-500">Analisis Aktif · 14 Kecamatan · 4 Layer Data</span>
          </motion.div>

          <motion.a variants={item} href="#bisnis"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-red-900/40"
          >
            Mulai Membaca ↓
          </motion.a>
        </motion.div>

        {/* Gambar */}
        <div className="flex justify-center">
          <motion.img
            src="/Outlet.webp"
            alt="Outlet Ayam Geprek Daeng"
            className="w-full max-w-lg rounded-2xl shadow-2xl shadow-black/60 object-cover"
            loading="eager"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  )
}
```

---

## Hook `useAnimatedCounter`
```jsx
// src/hooks/useAnimatedCounter.js
import { useState, useEffect } from 'react'

export function useAnimatedCounter(target, isInView, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isInView || typeof target !== 'number') return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, duration])
  return count
}
```

---

## `components/AnalisisPetaSection.jsx` — Tabs + Lightbox
```jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = [
  {
    id: 'jalan', label: 'Aksesibilitas Jalan', icon: '🛣️', badge: 'Layer 1',
    image: '/Aksebilitas Jalan.webp',
    // Ambil teks lengkap dari BP2
    desc: 'Peta ini adalah fondasi dari segalanya...',
    insight: '68% konsumen GoFood membatalkan pesanan jika estimasi melebihi 45 menit.',
  },
  {
    id: 'kampus', label: 'Fasilitas Pendidikan', icon: '🎓', badge: 'Layer 2',
    image: '/Fasilitas Pendidikan.webp',
    desc: 'Ayam geprek adalah makanan Gen Z...',
    insight: 'Makassar memiliki >50 perguruan tinggi aktif. Potensi pasar mahasiswa >200.000 jiwa.',
  },
  {
    id: 'pasar', label: 'Kepadatan Pasar', icon: '👥', badge: 'Layer 3',
    image: '/Kepadatan Penduduk Potensi Pasar Fix.webp',
    desc: 'Volume penjualan harian berkorelasi langsung dengan kepadatan penduduk sekitar...',
    insight: 'Kecamatan Wajo memiliki kepadatan tertinggi di Makassar: ±19.000 jiwa/km²',
  },
  {
    id: 'kompetitor', label: 'Titik Panas Kompetitor', icon: '🔥', badge: 'Layer 4',
    image: '/Peta Spot Kepadatan Kompetitor Fix.webp',
    desc: 'Pasar besar tidak ada artinya jika kita masuk ke arena yang sudah terlalu sesak...',
    insight: 'Densitas kompetitor tertinggi: 3.32 — batas threshold persaingan ekstrem.',
  },
]

export default function AnalisisPetaSection() {
  const [active, setActive] = useState('jalan')
  const [lightbox, setLightbox] = useState(null)
  const tab = TABS.find(t => t.id === active)

  return (
    <section id="analisis-peta" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-red-500 uppercase">BAB 3 · ANALISIS SPASIAL</span>
          <h2 className="text-4xl font-black text-white mt-2">Empat Lensa untuk Membaca Kota</h2>
          <p className="text-gray-400 mt-3 max-w-2xl">Setiap peta mewakili satu dimensi realitas Kota Makassar yang mempengaruhi keberhasilan outlet kuliner.</p>
        </div>

        <div className="grid md:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar Tabs */}
          <div className="flex md:flex-col gap-2">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  active === t.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/40'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <span>{t.icon}</span>
                <div>
                  <div className="text-xs opacity-70">{t.badge}</div>
                  <div className="text-sm font-medium">{t.label}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Gambar */}
              <div className="relative group cursor-pointer" onClick={() => setLightbox(tab.image)}>
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-full rounded-2xl object-cover max-h-[480px] transition-transform group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-2xl">
                  <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">🔍 Klik untuk perbesar</span>
                </div>
              </div>

              {/* Deskripsi */}
              <div className="bg-gray-900 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{tab.icon} {tab.label}</h3>
                <p className="text-gray-300 leading-relaxed">{tab.desc}</p>
                <div className="bg-amber-950/40 border border-amber-600/30 rounded-xl p-4">
                  <p className="text-amber-300 text-sm">💡 {tab.insight}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-[92vw] max-h-[92vh] rounded-2xl object-contain"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20"
              onClick={() => setLightbox(null)}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
```

---

## `components/TimSection.jsx`
```jsx
import { motion } from 'framer-motion'

const COLORS = [
  'from-red-600 to-orange-500',
  'from-purple-600 to-pink-500',
  'from-blue-600 to-cyan-500',
  'from-green-600 to-emerald-500',
  'from-yellow-500 to-orange-500',
  'from-indigo-600 to-purple-500',
]

const MEMBERS = [
  'Hengki Setiawan',
  'Muthiah Adibah',
  'Nur Aisyah',
  'Ahmad Zaki',
  'Al Fira Damayanti',
  'Naufal Faiq',
]

export default function TimSection() {
  return (
    <section id="tim" className="py-24 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-red-500 uppercase">BAB 5 · TIM KAMI</span>
        <h2 className="text-4xl font-black text-white mt-2 mb-4">Di Balik Analisis Ini</h2>

        {/* Dosen */}
        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 mb-10 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-700 to-orange-600 flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">F</div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Dosen Pengampu</p>
            <p className="text-white font-bold text-lg">Pak Fadil Muhammad S.Kel., M.Sc.</p>
            <p className="text-gray-400 text-sm">GIS for Business · Universitas Negeri Makassar</p>
          </div>
        </div>

        {/* Anggota */}
        <p className="text-gray-400 mb-6 font-medium">Anggota Kelompok 4:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {MEMBERS.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:border-red-600/40 transition-colors"
            >
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${COLORS[i]} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                {name[0]}
              </div>
              <div>
                <p className="text-xs text-gray-500">#{i + 1}</p>
                <p className="text-white font-semibold text-sm leading-tight">{name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## `components/BackToTop.jsx`
```jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-red-600 hover:bg-red-500 text-white rounded-full shadow-xl shadow-red-900/50 flex items-center justify-center text-xl transition-colors"
          aria-label="Kembali ke atas"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
```

---

*Lihat BP1 untuk desain. Lihat BP2 untuk konten. Lihat BP4 untuk setup & deploy.*
