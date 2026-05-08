import { motion } from 'framer-motion'

export default function LandasanTeoriSection() {
  return (
    <section id="teori" className="py-20 px-4 md:px-6 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">BAB 3 · LANDASAN TEORI</span>
          <h2 className="section-title text-slate-900 mt-2">Sistem Informasi Geografis dalam Analisis Bisnis</h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
            Sistem Informasi Geografis (GIS) adalah platform berbasis komputer untuk mengelola dan menganalisis data spasial. Dalam konteks bisnis, GIS digunakan untuk memahami hubungan antara lokasi usaha dengan faktor eksternal seperti kepadatan penduduk dan aksesibilitas jalan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Teori 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200"
          >
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl mb-5">
              🎯
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Central Place Theory</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Teori Lokasi Sentral (Christaller) menjelaskan distribusi layanan ekonomi dalam suatu wilayah berdasarkan konsep <strong>range</strong> (jarak maksimal yang bersedia ditempuh konsumen) dan <strong>threshold</strong> (batas minimum populasi agar suatu usaha dapat bertahan secara finansial). Teori ini menjadi dasar dalam penentuan jangkauan layanan bisnis secara spasial.
            </p>
          </motion.div>

          {/* Teori 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200"
          >
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-2xl mb-5">
              🔥
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Metode Analisis Spasial</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Studi ini menggunakan dua metode utama: <strong>Kernel Density Estimation (KDE)</strong> untuk memetakan intensitas distribusi titik-titik usaha, dan <strong>Buffer Analysis</strong> untuk mendefinisikan zona jangkauan layanan serta mengidentifikasi potensi persaingan antar lokasi usaha di sekitarnya.
            </p>
          </motion.div>
        </div>

        {/* Tabel Data & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="p-5 md:p-6 border-b border-slate-200 bg-slate-50">
            <h3 className="font-bold text-slate-900">Data &amp; Tools yang Digunakan</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th className="p-4 md:p-5 text-sm font-semibold text-slate-900">Data / Tools</th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-slate-900">Sumber / Fungsi</th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-slate-900 hidden sm:table-cell">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 md:p-5 text-sm font-medium text-slate-900">Peta Administrasi</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">BPS / Dosen</td>
                  <td className="p-4 md:p-5 text-sm text-slate-500 hidden sm:table-cell">Batas wilayah per kecamatan Kota Makassar</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 md:p-5 text-sm font-medium text-slate-900">Titik UMKM Eksisting</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">Scraping Gmaps</td>
                  <td className="p-4 md:p-5 text-sm text-slate-500 hidden sm:table-cell">Lokasi warung nasi kuning / geprek</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 md:p-5 text-sm font-medium text-slate-900">Kepadatan Penduduk</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">BPS / Dosen</td>
                  <td className="p-4 md:p-5 text-sm text-slate-500 hidden sm:table-cell">Jumlah penduduk per kecamatan</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 md:p-5 text-sm font-medium text-slate-900">QGIS</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">Software GIS Utama</td>
                  <td className="p-4 md:p-5 text-sm text-slate-500 hidden sm:table-cell">Overlay peta, KDE, Hotspot Analysis, Buffer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
