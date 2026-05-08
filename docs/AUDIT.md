## AUDIT HASIL vs BLUEPRINT — Ayam Geprek Daeng GIS Landing Page

### ✅ SUDAH ADA & BENAR
- Semua 10 komponen terbuat (ScrollProgress, Navbar, Hero, Bisnis, MengapaGIS, AnalisisPeta, Kesimpulan, Tim, Footer, BackToTop)
- Semua 9 gambar WebP tersimpan di public/
- vercel.json, vite.config.js, tailwind.config.js, postcss.config.js
- npm install sukses, npm run build sukses tanpa error
- Glassmorphism navbar + hamburger mobile
- Hero floating animation, stagger entry
- Bento Grid 3 kotak di BisnisSection
- 4 Stat Counter di MengapaGIS
- Interactive Tabs + Lightbox di AnalisisPeta
- Before/After slider di Kesimpulan
- 2 kartu rekomendasi Tallo & Mariso
- Tim Section dengan dosen + 6 anggota

---

### ❌ BELUM ADA / PERLU DIPERBAIKI

#### 1. BUG KRITIS — React Hook di dalam kondisi (MengapaGISSection.jsx baris 8)
```jsx
// ❌ SALAH — Hook dipanggil bersyarat (melanggar Rules of Hooks)
const val = typeof targetVal === 'number' ? useAnimatedCounter(targetVal, isInView) : targetVal

// ✅ HARUS DIPISAH ke CounterCardNumeric dan CounterCardStatic
```

#### 2. MISSING — CSS Variables dari BP1 belum ditambahkan ke index.css
BP1 mendefinisikan --chili, --bg-dark, dll tapi tidak ada di index.css saat ini.

#### 3. MISSING — clamp() typography dari BP1
H1 Hero harusnya pakai `clamp(2.5rem, 6vw, 4.5rem)` bukan fixed `text-4xl md:text-6xl`

#### 4. MISSING — `favicon.ico` di public/
BP4 checklist menyebut favicon.ico tapi belum ada di public/

#### 5. MISSING — Section divider "bab" antar section
BP1 menyebut "garis horizontal tipis dengan label ● di tengah" antar bab

#### 6. MISSING — `whileInView` pada HeroSection bento cards sudah ada tapi
`MengapaGISSection` counter cards tidak punya `motion.div` wrapper dengan `whileInView`

#### 7. MISSING — `loading="eager"` hanya untuk Outlet.webp, lainnya sudah `lazy` ✅

#### 8. MISSING — Active section detection di Navbar (highlight link aktif)
BP3 menyebut "Active link indicator (underline merah)" saat scroll ke section itu

#### 9. KURANG OPTIMAL — Footer terlalu minimal
BP2 menyebut layout yang lebih kaya, saat ini hanya 2 baris

#### 10. MISSING — Scroll cue di Hero
BP2 menyebut teks "Mulai Membaca ↓" sudah ada sebagai `<a href="#bisnis">` tapi tidak ada animasi bounce ikon panah

#### 11. MISSING — `og-image.webp` di public/
App.jsx sudah referensi `/og-image.webp` tapi file tidak ada

---

### 📋 PRIORITAS PERBAIKAN
1. 🔴 BUG KRITIS: Hook kondisional di MengapaGISSection
2. 🟠 CSS Variables + Typography clamp
3. 🟡 Active nav indicator
4. 🟡 Footer lebih kaya
5. 🟢 Favicon placeholder
6. 🟢 Section divider antar bab
