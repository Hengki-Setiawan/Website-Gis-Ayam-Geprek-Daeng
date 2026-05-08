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
    <section id="tim" className="py-20 px-4 md:px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <span className="section-label">BAB 5 · TIM PENELITI</span>
        <h2 className="section-title text-white mt-2 mb-3">Di Balik Analisis Ini</h2>
        <p className="text-gray-400 text-base mb-10 max-w-2xl">
          Proyek ini merupakan hasil kerja Kelompok 4, Program Studi Bisnis Digital, Universitas Negeri Makassar, dalam mata kuliah GIS for Business.
        </p>

        {/* Dosen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-dark p-5 md:p-8 mb-8 flex flex-col sm:flex-row items-center gap-5"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-red-700 to-orange-600 flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-lg flex-shrink-0">
            F
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs text-red-500 font-bold uppercase tracking-widest mb-1.5">Dosen Pengampu</p>
            <p className="text-white font-bold text-xl md:text-2xl mb-1">Pak Fadil Muhammad S.Kel., M.Sc.</p>
            <p className="text-gray-400 text-sm md:text-base">Mata Kuliah GIS for Business · Universitas Negeri Makassar</p>
          </div>
        </motion.div>

        {/* Anggota */}
        <p className="text-gray-500 mb-4 font-semibold uppercase tracking-widest text-xs">Anggota Kelompok 4</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MEMBERS.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-dark p-4 md:p-5 flex items-center gap-4 hover:border-red-500/30 transition-colors group"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${COLORS[i]} flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-inner group-hover:scale-110 transition-transform flex-shrink-0`}>
                {name[0]}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium mb-0.5">Anggota {i + 1}</p>
                <p className="text-white font-bold text-sm md:text-base leading-tight truncate">{name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
