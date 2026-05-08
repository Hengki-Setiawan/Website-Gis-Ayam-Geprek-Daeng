import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = [
  {
    id: 'jalan', label: 'Aksesibilitas Jalan', icon: '🛣️', badge: 'Layer 1',
    image: '/Aksebilitas Jalan.webp',
    alasan: 'Lokasi yang sulit dijangkau akan menurunkan volume pesanan online dan walk-in.',
    points: [
      'Zona Biru (radius 50m): berbatasan langsung dengan jalan utama, visibilitas maksimal',
      'Zona Hijau (radius 200m): masih dalam jangkauan baik untuk kurir dan pelanggan',
      'Prioritas pada kecamatan dengan konektivitas jalan kolektor atau arteri',
    ],
    insight: 'Lokasi di zona biru/hijau berpotensi mendapat 30–40% lebih banyak pesanan online karena waktu antar lebih singkat.',
  },
  {
    id: 'kampus', label: 'Fasilitas Pendidikan', icon: '🎓', badge: 'Layer 2',
    image: '/Fasilitas Pendidikan.webp',
    alasan: 'Pelajar dan mahasiswa adalah segmen pasar utama Ayam Geprek Daeng karena daya beli dan preferensinya sesuai.',
    points: [
      'Radius 500m dari kampus/sekolah: jarak nyaman yang bisa ditempuh berjalan kaki',
      'Kecamatan prioritas: Rappocini (UNM, UIN Alauddin), Panakkukang (Unhas)',
      'Makassar memiliki lebih dari 50 perguruan tinggi aktif dengan mahasiswa >200.000 jiwa',
    ],
    insight: 'Outlet yang berada dalam radius 500m dari kampus cenderung mendapat traffic makan siang dan malam yang konsisten.',
  },
  {
    id: 'pasar', label: 'Kepadatan Pasar', icon: '👥', badge: 'Layer 3',
    image: '/Kepadatan Penduduk Potensi Pasar Fix.webp',
    alasan: 'Volume penjualan harian berkorelasi langsung dengan jumlah penduduk di sekitar outlet.',
    points: [
      'Area merah pekat (>10.000 jiwa/km²): Tallo, Wajo, Makasar, Mariso — prioritas utama',
      'Area merah muda (5.000–10.000 jiwa/km²): Tamalate, Rappocini — alternatif potensial',
      'Area rendah (<5.000 jiwa/km²): kurang direkomendasikan untuk skala bisnis saat ini',
    ],
    insight: 'Kecamatan Wajo memiliki kepadatan tertinggi di Makassar: ±19.000 jiwa/km².',
  },
  {
    id: 'kompetitor', label: 'Titik Kompetitor', icon: '🔥', badge: 'Layer 4',
    image: '/Peta Spot Kepadatan Kompetitor Fix.webp',
    alasan: 'Masuk ke area yang sudah jenuh kompetitor (red ocean) akan menekan margin dan mempersulit pertumbuhan.',
    points: [
      'Zona hitam pekat (hindari): Ujung Tanah–Wajo (Utara) dan Mamajang–Rappocini (Selatan)',
      'Zona abu-abu: persaingan ketat, butuh diferensiasi produk yang kuat',
      'Zona terang: peluang terbaik, kompetitor rendah dengan potensi pasar memadai',
    ],
    insight: 'Nilai densitas kompetitor tertinggi tercatat 3.32 — angka ini menjadi batas threshold area yang dianggap jenuh.',
  },
]

export default function AnalisisPetaSection() {
  const [active, setActive] = useState('jalan')
  const [lightbox, setLightbox] = useState(null)
  const tab = TABS.find(t => t.id === active)

  return (
    <section id="analisis-peta" className="py-20 px-4 md:px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12">
          <span className="section-label">BAB 3 · ANALISIS SPASIAL</span>
          <h2 className="section-title text-white mt-2 mb-3">Empat Lapisan Data untuk Membaca Kota</h2>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Setiap peta merepresentasikan satu dimensi spasial Kota Makassar yang berpengaruh terhadap keberhasilan outlet kuliner. Pilih tab untuk membaca analisis lengkapnya.
          </p>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-6 md:gap-8">

          {/* Tab list — horizontal scroll on mobile, vertical on desktop */}
          <div className="relative">
            {/* Scroll hint fade on mobile */}
            <div className="lg:hidden absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-3 lg:pb-0 pr-4 lg:pr-0" style={{ scrollbarWidth: 'none' }}>
              {TABS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    active === t.id
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-red-500/50 shadow-lg shadow-red-900/20'
                      : 'bg-gray-900/50 border border-white/5 text-gray-400 hover:bg-gray-800/80'
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{t.icon}</span>
                  <div className="min-w-0">
                    <div className={`text-xs font-bold mb-0.5 ${active === t.id ? 'text-red-400' : 'text-gray-500'}`}>{t.badge}</div>
                    <div className={`text-sm font-semibold whitespace-nowrap ${active === t.id ? 'text-white' : ''}`}>{t.label}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col md:grid md:grid-cols-2 gap-6"
            >
              {/* Gambar peta */}
              <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10"
                onClick={() => setLightbox(tab.image)}
              >
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-full object-cover h-[240px] md:h-full min-h-[300px] transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Tap/hover hint */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span>🔍</span> Tap untuk perbesar
                </div>
              </div>

              {/* Deskripsi */}
              <div className="card-dark p-6 md:p-8 flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tab.icon}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{tab.label}</h3>
                  </div>
                  <p className="text-xs text-red-400 font-bold uppercase tracking-widest">{tab.badge}</p>
                </div>

                {/* Alasan variabel dipilih */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-2">Mengapa variabel ini?</p>
                  <p className="text-gray-200 text-sm leading-relaxed">{tab.alasan}</p>
                </div>

                {/* Poin analisis */}
                <ul className="space-y-2.5 flex-grow">
                  {tab.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Insight box */}
                <div className="bg-gradient-to-br from-amber-950/40 to-orange-950/20 border border-amber-600/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">💡</span>
                    <div>
                      <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-1">Insight Data</p>
                      <p className="text-amber-100 text-sm leading-relaxed">{tab.insight}</p>
                    </div>
                  </div>
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
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
