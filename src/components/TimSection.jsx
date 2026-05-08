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
  { name: 'Hengki Setiawan', nim: '230907501043' },
  { name: 'Nur Aisyah', nim: '230907500021' },
  { name: 'Muthiah Adibah', nim: '230907501034' },
  { name: 'Al Fira Damayanti', nim: '230907502040' },
  { name: 'Ahmad Zaki Al Afif', nim: '230907502033' },
]

export default function TimSection() {
  return (
    <section id="tim" className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <span className="section-label">TIM PENELITI</span>
        <h2 className="section-title text-slate-900 mt-2 mb-3">Di Balik Analisis Ini</h2>
        <p className="text-slate-600 text-base mb-10 max-w-2xl">
          Proyek ini merupakan hasil kerja Kelompok kami, Program Studi Bisnis Digital, Universitas Negeri Makassar, dalam mata kuliah GIS for Business.
        </p>

        {/* Dosen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-dark p-5 md:p-8 mb-8 flex flex-col sm:flex-row items-center gap-5 border border-slate-200 bg-white"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-lg flex-shrink-0">
            F
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs text-red-600 font-bold uppercase tracking-widest mb-1.5">Dosen Pengampu</p>
            <p className="text-slate-900 font-bold text-xl md:text-2xl mb-1">Pak Fadil Muhammad S.Kel., M.Sc.</p>
            <p className="text-slate-500 text-sm md:text-base">Mata Kuliah GIS for Business · Universitas Negeri Makassar</p>
          </div>
        </motion.div>

        {/* Anggota */}
        <p className="text-slate-500 mb-4 font-semibold uppercase tracking-widest text-xs">Anggota Kelompok</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.nim}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-dark p-4 md:p-5 flex items-center gap-4 hover:border-red-500/30 transition-colors group border border-slate-200 bg-slate-50"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${COLORS[i % COLORS.length]} flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-inner group-hover:scale-110 transition-transform flex-shrink-0`}>
                {member.name[0]}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 font-medium mb-0.5">{member.nim}</p>
                <p className="text-slate-900 font-bold text-sm md:text-base leading-tight truncate">{member.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
