import { motion } from 'framer-motion'

const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } }

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden bg-slate-50">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-red-100/50 blur-[100px] mix-blend-multiply opacity-50" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-orange-100/50 blur-[100px] mix-blend-multiply opacity-50" />
      </div>

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
          <motion.span variants={item} className="inline-block text-xs font-semibold tracking-widest text-red-600 uppercase border border-red-600/40 px-4 py-1.5 rounded-full bg-red-600/10">
            Tugas Mata Kuliah · GIS for Business
          </motion.span>

          <motion.h1 variants={item} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
            Pemanfaatan Sistem Informasi Geografis (GIS) dalam Strategi Ekspansi<br />
            <span className="text-gradient">UMKM Ayam Geprek Daeng</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Analisis Spasial Berbasis Jangkauan Pasar, Aksesibilitas, dan Distribusi Kompetitor di Kota Makassar.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a href="#analisis" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-red-900/20 text-sm md:text-base"
            >
              Lihat Analisis Peta
              <span className="bounce-arrow">↓</span>
            </a>
            <a href="#bisnis" className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm">
              Tentang Bisnis
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-slate-600">Analisis Aktif · 14 Kecamatan · 4 Layer Data</span>
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
