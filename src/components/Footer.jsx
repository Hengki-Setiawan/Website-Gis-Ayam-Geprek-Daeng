export default function Footer() {
  const members = [
    'Hengki Setiawan', 'Nur Aisyah', 'Muthiah Adibah',
    'Al Fira Damayanti', 'Ahmad Zaki Al Afif'
  ]

  return (
    <footer className="bg-slate-50 pt-16 pb-8 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/Logo Ayam Geprek Daeng.webp" alt="Logo" className="w-12 h-12 rounded-full ring-2 ring-red-600 object-cover" loading="lazy" />
              <div>
                <h4 className="text-slate-900 font-bold text-lg">Ayam Geprek Daeng</h4>
                <p className="text-slate-500 text-xs">Analisis Spasial Ekspansi Bisnis</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Website ini merupakan presentasi laporan analisis GIS untuk mata kuliah GIS for Business, Program Studi Bisnis Digital, Universitas Negeri Makassar.
            </p>
          </div>

          {/* Dosen */}
          <div>
            <h5 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-widest">Dosen Pengampu</h5>
            <p className="text-slate-700 font-semibold">Pak Fadil Muhammad S.Kel., M.Sc.</p>
            <p className="text-slate-500 text-sm mt-1">GIS for Business · UNM</p>
          </div>

          {/* Tim */}
          <div>
            <h5 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-widest">Anggota Kelompok</h5>
            <ul className="space-y-1.5">
              {members.map((m, i) => (
                <li key={m} className="text-slate-600 text-sm flex items-center gap-2">
                  <span className="text-red-600 font-bold">{i + 1}.</span> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Ayam Geprek Daeng | Universitas Negeri Makassar</p>
          <p>Tugas Mata Kuliah GIS for Business</p>
        </div>
      </div>
    </footer>
  )
}
