import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

function NumericCounterCard({ label, subtitle, targetVal }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const val = useAnimatedCounter(targetVal, isInView)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-dark p-5 md:p-6 text-center border border-slate-200 bg-white"
    >
      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 mb-2">
        {val}
      </div>
      <div className="text-sm md:text-base font-bold text-slate-800">{label}</div>
      <div className="text-xs text-slate-500 mt-1">{subtitle}</div>
    </motion.div>
  )
}

function StaticCounterCard({ label, subtitle, value, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="card-dark p-5 md:p-6 text-center border border-slate-200 bg-white"
    >
      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-orange-500 mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base font-bold text-slate-800">{label}</div>
      <div className="text-xs text-slate-500 mt-1">{subtitle}</div>
    </motion.div>
  )
}

export default function MengapaGISSection() {
  return (
    <section id="mengapa-gis" className="py-20 px-4 md:px-6 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="section-label">BAB 2 · PROBLEM &amp; SOLUSI</span>
            <h2 className="section-title text-slate-900 mt-2 mb-5">Mengapa Lokasi Menentukan Keberhasilan Bisnis?</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                Banyak usaha kuliner yang tutup bukan karena produknya buruk, melainkan karena <strong>salah memilih lokasi</strong>. Lokasi yang terlihat ramai belum tentu menguntungkan apabila kompetitor di sana sudah sangat padat atau segmen pasarnya tidak sesuai.
              </p>
              <p>
                <strong>GIS (Geographic Information System)</strong> mengubah cara pandang ini. Dengan GIS, kita dapat menganalisis kota secara spasial — mengukur jarak dengan presisi, memetakan kepadatan wilayah, dan menemukan area berpotensi yang sering terlewatkan.
              </p>
              <p>
                Untuk Ayam Geprek Daeng, kami menggunakan <strong>4 lapisan data spasial</strong> utama. Mengapa empat variabel ini? Akses jalan menjamin kelancaran layanan pesan-antar. Fasilitas pendidikan dan kepadatan penduduk merepresentasikan target pasar kami. Sementara pemetaan titik kompetitor bertujuan menghindari area yang sudah jenuh.
              </p>
            </div>

            {/* Metodologi flow — mobile-friendly */}
            <div className="mt-8 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Alur Metodologi</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: '📍', step: '1', label: 'Pengumpulan Data Spasial', sub: 'OpenStreetMap, data BPS Makassar' },
                  { icon: '🗺️', step: '2', label: 'Overlay 4 Layer Peta', sub: 'Jalan, Kampus, Kepadatan, Kompetitor' },
                  { icon: '✅', step: '3', label: 'Identifikasi Titik Optimal', sub: 'Skor tertinggi dari irisan 4 kriteria' },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-600 font-black text-sm flex-shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold text-sm">{s.label}</p>
                      <p className="text-slate-500 text-xs">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <NumericCounterCard label="Kecamatan" subtitle="Dianalisis di Makassar" targetVal={14} />
            <NumericCounterCard label="Meter Radius" subtitle="Optimal dari Kampus" targetVal={500} />
            <StaticCounterCard label="Jiwa/km²" subtitle="Threshold Pasar Utama" value=">10K" delay={0.1} />
            <StaticCounterCard label="Skor Maks" subtitle="Densitas Kompetitor" value="3.32" delay={0.2} />
          </div>
        </div>
      </div>
    </section>
  )
}
