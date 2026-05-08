import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { motion } from 'framer-motion'

export default function KesimpulanSection() {
  return (
    <section id="kesimpulan" className="py-24 px-6 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="section-label">BAB 5 · REKOMENDASI</span>
          <h2 className="text-4xl font-black text-slate-900 mt-2 mb-6">Rekomendasi Titik Lokasi Terbaik</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Dari overlay keempat layer (Aksesibilitas, Kampus, Kepadatan, Kompetitor), kami menemukan titik temu yang ideal. Geser slider di bawah ini untuk melihat irisan kritis antara zona padat penduduk dengan konsentrasi kompetitor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[400px] md:h-[500px]"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-slate-900 shadow-md">
              <span>👥</span> Kepadatan Pasar
            </div>
            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-slate-900 shadow-md">
              <span>🔥</span> Kompetitor
            </div>

            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src="/Kepadatan Penduduk Potensi Pasar Fix.webp" alt="Kepadatan Penduduk" className="object-cover" />}
              itemTwo={<ReactCompareSliderImage src="/Peta Spot Kepadatan Kompetitor Fix.webp" alt="Titik Kompetitor" className="object-cover" />}
              className="h-full w-full"
            />
          </motion.div>

          <div className="space-y-8">
            <div className="card-dark p-8 bg-slate-50 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Formula Lokasi Ideal</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3"><span>✅</span> Berada di akses jalan utama (biru/hijau)</li>
                <li className="flex items-center gap-3"><span>✅</span> Dekat area kampus (radius 500m)</li>
                <li className="flex items-center gap-3"><span>✅</span> Berada di kecamatan padat {'>'}10K jiwa</li>
                <li className="flex items-center gap-3"><span>❌</span> Menghindari area padat pesaing (hitam)</li>
              </ul>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              Kesimpulannya, strategi terbaik adalah membuka outlet baru di sekitar perimeter luar dari area kompetitor utama. Berdasarkan kriteria ini, kami merekomendasikan dua kawasan:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-green-200 shadow-sm rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📍</span>
                  <h4 className="text-xl font-bold text-slate-900">Kawasan Tallo</h4>
                </div>
                <ul className="text-sm text-slate-500 space-y-2 mb-4">
                  <li>✅ Kepadatan penduduk sangat tinggi</li>
                  <li>✅ Densitas kompetitor relatif rendah</li>
                  <li>✅ Aksesibilitas jalan baik</li>
                </ul>
                <div className="text-green-600 font-bold">⭐ Skor: 8.5/10</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-blue-200 shadow-sm rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📍</span>
                  <h4 className="text-xl font-bold text-slate-900">Kawasan Mariso</h4>
                </div>
                <ul className="text-sm text-slate-500 space-y-2 mb-4">
                  <li>✅ Aksesibilitas jalan sangat baik</li>
                  <li>✅ Dekat dengan pusat kota</li>
                  <li>✅ Kompetitor dalam batas wajar</li>
                </ul>
                <div className="text-blue-600 font-bold">⭐ Skor: 8.2/10</div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden h-[300px] relative shadow-2xl"
        >
          <img src="/Gambar produk.webp" alt="Produk Ayam Geprek" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
            <p className="text-white font-bold text-2xl italic">"Siap melayani kawasan baru dengan rasa yang sama."</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
