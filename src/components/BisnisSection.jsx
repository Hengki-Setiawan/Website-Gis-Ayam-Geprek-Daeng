import { motion } from 'framer-motion'

export default function BisnisSection() {
  return (
    <section id="bisnis" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">BAB 1 · MENGENAL BISNIS KAMI</span>
          <h2 className="text-4xl font-black text-slate-900 mt-2 mb-6">Dari Dapur ke Data: Kisah Ayam Geprek Daeng</h2>
          <div className="text-slate-600 leading-relaxed max-w-3xl space-y-4">
            <p>
              Ayam Geprek Daeng bukan sekadar warung makan biasa. Kami memadukan resep ayam krispi dengan sambal rempah autentik khas Sulawesi Selatan. Hasilnya adalah cita rasa pedas yang unik dan langsung pas di lidah.
            </p>
            <p>
              Harga yang kami tawarkan sengaja dirancang untuk menjangkau segmen terluas: <strong>pelajar SMA, mahasiswa, hingga pekerja muda</strong> yang menginginkan makanan lezat tanpa menguras kantong. Inilah yang membuat Ayam Geprek Daeng bukan hanya produk kuliner, tapi bagian dari keseharian Gen Z Makassar.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 card-dark overflow-hidden relative min-h-[300px] group border border-slate-200"
          >
            <img src="/Gambar produk lengkap.webp" alt="Produk Lengkap" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-xl drop-shadow-md">Sambal Rempah Autentik · Level Pedas 1–5 · Bahan Segar Harian</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-dark p-8 flex flex-col justify-center bg-slate-50 border border-slate-200"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Keunggulan Utama</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-3"><span>✅</span> Sambal khas Sulawesi Selatan</li>
              <li className="flex items-center gap-3"><span>✅</span> 5 level kepedasan</li>
              <li className="flex items-center gap-3"><span>✅</span> Bahan baku segar tiap hari</li>
              <li className="flex items-center gap-3"><span>✅</span> Harga mulai Rp 10.000</li>
              <li className="flex items-center gap-3"><span>✅</span> Tersedia GoFood & GrabFood</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 card-dark overflow-hidden flex flex-col md:flex-row border border-slate-200"
          >
            <div className="md:w-1/3 p-8 flex items-center justify-center bg-red-50">
              <blockquote className="text-2xl font-bold text-red-900 italic text-center leading-snug">
                "Lokasi yang tepat bukan keberuntungan — itu adalah hasil analisis."
              </blockquote>
            </div>
            <div className="md:w-2/3 relative min-h-[250px] md:min-h-[auto]">
              <img src="/Gambar iklan.webp" alt="Iklan Ayam Geprek Daeng" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
