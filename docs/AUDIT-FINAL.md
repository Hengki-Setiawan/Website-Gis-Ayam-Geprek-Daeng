## ANALISIS MENYELURUH & RENCANA UPGRADE
> Ayam Geprek Daeng GIS Landing Page — Audit Final

---

### ✅ Yang sudah bagus
- Build production 0 error
- Semua gambar WebP sudah di public/
- ScrollProgress bar ✓
- Lightbox ✓
- Before/After slider ✓
- Animated counters ✓
- Glassmorphism navbar ✓
- Active nav indicator ✓
- ChapterDivider antar bab ✓

---

### 🔴 MASALAH KRITIS MOBILE

#### 1. Hero — Gambar muncul di BAWAH teks (mobile)
Grid `md:grid-cols-2` berarti di mobile (<768px) semua 1 kolom, gambar outlet jatuh di bawah teks panjang. Di HP kecil (390px), pengguna harus scroll jauh sebelum lihat gambar. Solusi: hide gambar di mobile, atau munculkan gambar kecil di atas sebelum teks.

#### 2. AnalisisPeta — Tab horizontal scroll belum optimal
Tab terlalu lebar (px-5 py-4 + icon + 2 baris teks). Di HP 390px mungkin hanya terlihat 1.5 tab, dan tidak ada hint visual bahwa bisa di-scroll. Solusi: gunakan `min-w-fit` dan tambah fade gradient di kanan sebagai scroll hint.

#### 3. AnalisisPeta — Konten tab (2-kolom) collapse ke 1 kolom
`grid md:grid-cols-2` → di mobile, gambar peta full width dulu baru teks deskripsi. Tinggi `h-[400px]` pada gambar di mobile terlalu tinggi, memakai 70% viewport. Solusi: `h-[250px] md:h-full`.

#### 4. BisnisSection — Bento card tinggi tidak konsisten mobile
`min-h-[300px]` pada card full-width produk sudah ok, tapi `md:col-span-3` card terbawah punya `min-h-[250px]` inner image yang bisa collapse.

#### 5. Teks TABS deskripsi — masih ada karakter `—` (em-dash) sisa
Layer 4 kompetitor: `'Densitas kompetitor tertinggi: 3.32 — batas threshold...'`

---

### 🟠 UPGRADE UX YANG DISARANKAN

#### 6. Hero — Tidak ada animasi parallax atau gradient blob
Background hero polos gradient gelap. Bisa tambahkan floating gradient blobs untuk depth visual.

#### 7. Analisis Peta desc — teks panjang tidak rapi (wall of text)
Deskripsi tab saat ini 2-3 kalimat panjang tanpa struktur. Bisa ganti jadi bullet points singkat agar lebih mudah dibaca di mobile.

#### 8. MengapaGIS — Metodologi flow (1→2→3) jelek di mobile
Arrow `→` hilang di mobile (hidden sm:block) tapi step-step tidak punya connector visual. Di mobile ke 3 step terlihat seperti list biasa tanpa flow.

#### 9. TimSection — Heading "Di Balik Analisis Ini" kurang deskriptif
Kurang konteks untuk dosen yang baru buka. Sebaiknya ada sub-kalimat singkat.

#### 10. KesimpulanSection — Tidak ada animasi entry pada 2 kartu rekomendasi
2 kartu Tallo & Mariso tidak punya `whileInView` animation.

---

### 🟢 NICE-TO-HAVE (opsional)

- Favicon custom (saat ini tidak ada)
- `og-image.webp` untuk social preview (meta tag ada tapi file tidak ada)
- Tombol CTA di KesimpulanSection untuk link ke analisis lengkap / unduh laporan

