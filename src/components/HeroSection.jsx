import { motion } from 'framer-motion'

const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } }

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden bg-gray-950">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* Gambar — tampil di atas di mobile */}
        <div className="flex justify-center md:hidden mb-4">
          <motion.img
            src="/Outlet.webp"
            alt="Outlet Ayam Geprek Daeng"
            width={600}
            height={450}
            className="w-full max-w-sm rounded-2xl shadow-2xl shadow-black/60 object-cover"
            loading="eager"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Teks */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-5">
          <motion.span variants={item} className="inline-block text-xs font-semibold tracking-widest text-red-500 uppercase border border-red-600/40 px-4 py-1.5 rounded-full bg-red-600/10">
            Tugas Mata Kuliah · GIS for Business
          </motion.span>

          <motion.h1 variants={item} className="hero-title text-white">
            Menentukan Lokasi Cabang Baru{' '}
            <span className="text-gradient">Ayam Geprek Daeng</span>{' '}
            dengan Pendekatan GIS
          </motion.h1>

          <motion.p variants={item} className="text-gray-400 text-base md:text-lg leading-relaxed">
            Penentuan lokasi bisnis yang tepat sangat penting bagi keberhasilan usaha. Melalui pendekatan GIS, kami menganalisis empat lapisan data spasial Kota Makassar untuk menghasilkan rekomendasi lokasi cabang baru yang lebih objektif dan strategis.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-500">Analisis Aktif · 14 Kecamatan · 4 Layer Data</span>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4 flex-wrap">
            <a href="#bisnis"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-red-900/40 text-sm md:text-base"
            >
              Mulai Membaca
            </a>
            <a href="#bisnis" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm">
              <span className="bounce-arrow text-xl">↓</span>
              <span>Scroll untuk lanjut</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Gambar — hanya tampil di desktop */}
        <div className="hidden md:flex justify-center">
          <motion.img
            src="/Outlet.webp"
            alt="Outlet Ayam Geprek Daeng"
            width={600}
            height={450}
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
