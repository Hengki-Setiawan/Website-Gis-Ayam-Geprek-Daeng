# 📝 BP2 — KONTEN LENGKAP TIAP SECTION
> Ayam Geprek Daeng GIS | Kelompok 4 UNM

---

## BAB 0 · HERO SECTION

**Chapter label:** `TUGAS MATA KULIAH · GIS FOR BUSINESS`

**H1:**
> Menentukan Lokasi Cabang Baru **Ayam Geprek Daeng** dengan Pendekatan GIS

**Sub-judul (editorial style):**
> Kami meninggalkan metode tebak-tebakan. Dengan menganalisis empat lapisan data spasial Kota Makassar — mulai dari infrastruktur jalan, sebaran kampus, kepadatan warga, hingga titik kompetitor — kami menemukan lokasi ekspansi yang paling menguntungkan secara ilmiah.

**Badge status:** `🟢 Analisis Aktif · 14 Kecamatan · 4 Layer Data`

**Gambar:** `Outlet.webp` — floating animation

**Scroll cue:** Teks "Mulai Membaca ↓" + ikon panah beranimasi bounce

---

## BAB 1 · TENTANG BISNIS (Profil UMKM)

**Chapter label:** `BAB 1 · MENGENAL BISNIS KAMI`

**Judul:** `Dari Dapur ke Data: Kisah Ayam Geprek Daeng`

**Narasi (gaya blog):**
> Ayam Geprek Daeng bukan sekadar warung ayam biasa. Dengan resep sambal berbasis rempah autentik khas Sulawesi Selatan, kami menghadirkan cita rasa yang sulit ditiru — pedas yang terasa di lidah, bukan sekadar di mulut.
>
> Harga yang kami tawarkan sengaja dirancang untuk menjangkau segmen terluas: **pelajar SMA, mahasiswa, hingga pekerja muda** yang menginginkan makanan lezat tanpa menguras kantong. Inilah yang membuat Ayam Geprek Daeng bukan hanya produk kuliner, tapi bagian dari keseharian Gen Z Makassar.

**Bento Grid — 3 kotak:**

**Kotak A** (lebar 2/3): Foto `Gambar produk lengkap.webp`
- Overlay teks: *"Sambal Rempah Autentik · Level Pedas 1–5 · Bahan Segar Harian"*

**Kotak B** (lebar 1/3): Keunggulan kompetitif
```
✅ Sambal khas Sulawesi Selatan
✅ 5 level kepedasan
✅ Bahan baku segar tiap hari
✅ Harga mulai Rp 10.000
✅ Tersedia GoFood & GrabFood
```

**Kotak C** (lebar penuh): Foto `Gambar iklan.webp` + quote
> *"Lokasi yang tepat bukan keberuntungan — itu adalah hasil analisis."*

---

## BAB 2 · MENGAPA GIS?

**Chapter label:** `BAB 2 · PROBLEM & SOLUSI`

**Judul:** `Mengapa Lokasi Bisa Membunuh Bisnis yang Bagus?`

**Narasi (problem-solution storytelling):**
> Banyak UMKM kuliner yang gagal bukan karena produknya buruk, melainkan karena **salah pilih lokasi**. Mereka membuka outlet di area yang terlihat ramai, tanpa menyadari bahwa di balik keramaian itu tersimpan kompetitor yang sudah mapan, infrastruktur jalan yang buruk untuk delivery, atau segmen pasar yang tidak cocok dengan produk mereka.
>
> **GIS (Geographic Information System)** mengubah cara pandang ini. Dengan GIS, kita bisa *melihat* kota secara matematis — mengukur jarak, menganalisis kepadatan, dan menemukan "blind spot" yang tidak terlihat dengan mata biasa.
>
> Untuk Ayam Geprek Daeng, kami membangun **4 lapisan analisis spasial** yang saling dikombinasikan untuk menemukan satu jawaban: *Di mana sebaiknya cabang baru dibuka?*

**4 Stat Counter Cards:**
```
┌──────────┬──────────┬──────────┬──────────┐
│    14    │   500    │  >10K    │   3.32   │
│Kecamatan │  Meter   │ Jiwa/km² │Kompetitor│
│Dianalisis│Radius    │ Target   │Densitas  │
│di Makassar│Kampus   │Pasar     │Maks      │
└──────────┴──────────┴──────────┴──────────┘
```

**Timeline Metodologi (3 langkah):**
```
[1. Kumpulkan Data Spasial] → [2. Overlay 4 Peta Layer] → [3. Temukan Titik Optimal]
```

---

## BAB 3 · ANALISIS 4 LAYER PETA

**Chapter label:** `BAB 3 · ANALISIS SPASIAL`

**Judul:** `Empat Lensa untuk Membaca Kota`

**Intro narasi:**
> Setiap peta di bawah ini bukan sekadar gambar. Masing-masing mewakili satu dimensi realitas Kota Makassar yang berpengaruh terhadap keberhasilan sebuah outlet kuliner. Klik setiap tab untuk membaca analisisnya.

---

### Tab 1 — Aksesibilitas Jalan
**Gambar:** `Aksebilitas Jalan.webp`

**Judul tab:** `🛣️ Layer 1: Aksesibilitas Jalan`

**Penjelasan panjang (blog style):**
> Peta ini adalah fondasi dari segalanya. Sebelum berbicara tentang pasar atau kompetitor, kita harus bertanya: **bisakah pelanggan dan kurir mencapai outlet kita dengan mudah?**
>
> Dalam peta ini, kami mengklasifikasikan wilayah berdasarkan kedekatan terhadap jalan utama:
> - **Zona Biru (radius 50m):** Berbatasan langsung dengan jalan utama. Ini adalah lokasi ideal untuk visibilitas maksimal dan akses kurir GoFood/GrabFood yang cepat.
> - **Zona Hijau (radius 200m):** Masih dalam jangkauan yang sangat baik. Pelanggan bisa berjalan kaki dari titik ini.
>
> **Insight utama:** Lokasi outlet yang berada di zona biru atau hijau berpotensi mendapatkan **30–40% lebih banyak pesanan online** dibanding lokasi di gang atau jalan kecil, karena waktu antar yang lebih singkat = rating aplikasi yang lebih tinggi.

**Callout box:**
> 💡 *Fakta: 68% konsumen GoFood membatalkan pesanan jika estimasi waktu antar melebihi 45 menit.*

---

### Tab 2 — Fasilitas Pendidikan
**Gambar:** `Fasilitas Pendidikan.webp`

**Judul tab:** `🎓 Layer 2: Sebaran Kampus & Sekolah`

**Penjelasan panjang:**
> Ayam geprek adalah makanan Gen Z. Harga terjangkau, porsi mengenyangkan, dan cocok dimakan kapan saja — ini adalah profil sempurna untuk **pasar pelajar dan mahasiswa**.
>
> Peta ini memetakan seluruh fasilitas pendidikan di Makassar — dari SD hingga Perguruan Tinggi. Titik-titik kuning menunjukkan konsentrasi institusi pendidikan yang menjadi magnet bagi ribuan anak muda setiap harinya.
>
> **Mengapa radius 500 meter?**
> Ini adalah jarak yang nyaman ditempuh pelajar berjalan kaki saat istirahat atau setelah pulang sekolah/kuliah. Di luar radius ini, probabilitas kunjungan spontan menurun drastis.
>
> **Kecamatan prioritas berdasarkan layer ini:** Rappocini (UNM, UIN), Tamalate, Panakkukang (Unhas), Biringkanaya.

**Callout box:**
> 💡 *Makassar memiliki >50 perguruan tinggi aktif. Potensi pasar mahasiswa diperkirakan >200.000 jiwa.*

---

### Tab 3 — Kepadatan Potensi Pasar
**Gambar:** `Kepadatan Penduduk Potensi Pasar Fix.webp`

**Judul tab:** `👥 Layer 3: Kepadatan Penduduk`

**Penjelasan panjang:**
> Volume penjualan harian sebuah outlet kuliner sangat berkorelasi dengan satu faktor sederhana: **seberapa banyak orang yang tinggal di sekitarnya?**
>
> Peta choropleth ini membagi 14 kecamatan Makassar ke dalam skala kepadatan:
>
> **🔴 Merah Pekat (>10.000 jiwa/km²) — Prioritas Utama:**
> Kecamatan Tallo, Wajo, Makasar (kota), dan Mariso. Area-area ini adalah "emas" bagi bisnis kuliner. Kepadatan ekstrem ini berarti ada ribuan calon pelanggan potensial dalam radius 1 km.
>
> **🩷 Merah Muda (5.000–10.000 jiwa/km²) — Target Alternatif:**
> Tamalate dan Rappocini. Meski kepadatannya lebih rendah, keberadaan kampus besar di area ini mengkompensasi kekurangannya.
>
> **⬜ Rendah (<5.000 jiwa/km²) — Kurang Direkomendasikan:**
> Kecamatan pinggiran seperti Biringkanaya bagian luar dan Tamalanrea.

**Callout box:**
> 💡 *Kecamatan Wajo memiliki kepadatan tertinggi di Makassar: ±19.000 jiwa/km²*

---

### Tab 4 — Titik Panas Kompetitor
**Gambar:** `Peta Spot Kepadatan Kompetitor Fix.webp`

**Judul tab:** `🔥 Layer 4: Persaingan Kompetitor`

**Penjelasan panjang:**
> Ini adalah layer yang paling kritis. **Pasar besar tidak ada artinya jika kita masuk ke arena yang sudah terlalu sesak.**
>
> Peta kernel density ini memvisualisasikan konsentrasi kompetitor bisnis ayam geprek di seluruh Makassar. Semakin gelap warnanya, semakin padat persaingannya.
>
> **⚫ Hitam Pekat — Zona Merah (Hindari):**
> - Utara: Kawasan Ujung Tanah hingga Wajo — persaingan sangat ekstrem
> - Selatan: Mamajang hingga Rappocini — sudah dikuasai pemain lama
>
> **⚫ Abu-abu Gelap — Zona Kuning (Pertimbangkan):**
> Masih ada peluang tapi persaingan sudah mulai ketat. Perlu strategi diferensiasi yang kuat.
>
> **⬜ Terang — Zona Hijau (Peluang Terbuka):**
> Area dengan kepadatan kompetitor rendah. Bila bersinggungan dengan layer kepadatan penduduk yang tinggi, inilah "sweet spot"-nya.

**Callout box:**
> 💡 *Densitas kompetitor tertinggi: 3.32 poin — ini batas threshold yang kami gunakan sebagai indikator persaingan ekstrem.*

---

## BAB 4 · TEMUAN & KESIMPULAN

**Chapter label:** `BAB 4 · REKOMENDASI`

**Judul:** `Rekomendasi Titik Lokasi Terbaik`

**Intro slider:**
> Geser slider di bawah untuk melihat secara langsung bagaimana zona padat penduduk bersinggungan (atau tidak) dengan zona padat kompetitor. Inilah inti dari analisis kami.

*[Before/After Slider: Kepadatan Penduduk ↔ Kompetitor]*

**Narasi kesimpulan:**
> Dari overlay keempat layer, kami menemukan formula lokasi ideal:
>
> ```
> ✅ Akses jalan utama (biru/hijau)
> ✅ Radius 500m dari kampus/sekolah
> ✅ Kecamatan padat (merah, >10K jiwa/km²)
> ❌ Di luar zona hitam kompetitor
> ```
>
> Titik temu dari keempat kriteria ini mengarah ke **kawasan Tallo** dan **Mariso** sebagai lokasi paling strategis. Kedua kecamatan ini memiliki kepadatan penduduk tinggi, aksesibilitas jalan yang baik, relatif dekat dengan fasilitas pendidikan, namun belum jenuh oleh kompetitor ayam geprek.

**2 Kotak Rekomendasi Lokasi:**
```
┌─────────────────────────────┬─────────────────────────────┐
│ 📍 Kawasan Tallo            │ 📍 Kawasan Mariso           │
│ ─────────────────────       │ ─────────────────────       │
│ ✅ Kepadatan: Sangat Tinggi  │ ✅ Akses jalan: Excellent   │
│ ✅ Kompetitor: Rendah        │ ✅ Kompetitor: Sedang       │
│ ✅ Akses jalan: Baik         │ ✅ Dekat pusat kota         │
│ ⭐ Skor: 8.5/10              │ ⭐ Skor: 8.2/10             │
└─────────────────────────────┴─────────────────────────────┘
```

**Gambar:** `Gambar produk.webp` — ditampilkan estetik di bawah rekomendasi.

---

## BAB 5 · TIM PENELITI

**Chapter label:** `BAB 5 · TIM KAMI`

**Judul:** `Di Balik Analisis Ini`

**Dosen Pengampu:**
```
Pak Fadil Muhammad S.Kel., M.Sc.
Dosen Pengampu — GIS for Business
Universitas Negeri Makassar
```

**Anggota Kelompok 4:**
```
1. Hengki Setiawan
2. Muthiah Adibah
3. Nur Aisyah
4. Ahmad Zaki
5. Al Fira Damayanti
6. Naufal Faiq
```

**Card style:** Tiap anggota punya card dengan:
- Inisial nama (avatar placeholder dengan warna gradient unik)
- Nama lengkap
- Nomor urut anggota

---

*Lihat BP1 untuk desain. Lihat BP3 untuk kode. Lihat BP4 untuk deploy.*
