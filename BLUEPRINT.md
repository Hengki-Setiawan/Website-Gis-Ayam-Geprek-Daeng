# 📋 BLUEPRINT v2 — Landing Page GIS Ayam Geprek Daeng
> **Kelompok 4 | GIS for Business | Universitas Negeri Makassar**
> Dosen: Pak Fadil Muhammad S.Kel., M.Sc. | Deploy Target: GitHub → Vercel

---

## ✅ STATUS ASET GAMBAR (Sudah Dikompres ke WebP)

Semua gambar telah dikompres otomatis ke format `.webp` dan tersimpan di `public/`.
Gunakan nama file berikut di semua tag `<img>` dan `src`:

| File WebP di `public/` | Ukuran Asal | Setelah WebP | Hemat |
|---|---|---|---|
| `Logo Ayam Geprek Daeng.webp` | 0.17 MB | 0.07 MB | 61% |
| `Outlet.webp` | 8.16 MB | **0.50 MB** | 94% |
| `Gambar produk lengkap.webp` | 7.77 MB | **0.44 MB** | 94% |
| `Gambar produk.webp` | 7.31 MB | **0.37 MB** | 95% |
| `Gambar iklan.webp` | 8.01 MB | **0.51 MB** | 94% |
| `Aksebilitas Jalan.webp` | 4.89 MB | **0.74 MB** | 85% |
| `Fasilitas Pendidikan.webp` | 2.54 MB | **0.36 MB** | 86% |
| `Kepadatan Penduduk Potensi Pasar Fix.webp` | 5.10 MB | **0.45 MB** | 91% |
| `Peta Spot Kepadatan Kompetitor Fix.webp` | 5.46 MB | **0.74 MB** | 86% |

> **Total penghematan: ~48 MB → ~4.2 MB** — halaman akan load jauh lebih cepat di Vercel!

---

## 🗂️ Struktur Folder Final

```
Landing page gis/
├── BLUEPRINT.md
├── scripts/
│   └── compress-images.mjs      ← script kompresi (sudah dijalankan)
├── public/
│   ├── Logo Ayam Geprek Daeng.webp
│   ├── Outlet.webp
│   ├── Gambar produk lengkap.webp
│   ├── Gambar produk.webp
│   ├── Gambar iklan.webp
│   ├── Aksebilitas Jalan.webp
│   ├── Fasilitas Pendidikan.webp
│   ├── Kepadatan Penduduk Potensi Pasar Fix.webp
│   ├── Peta Spot Kepadatan Kompetitor Fix.webp
│   ├── favicon.ico
│   └── og-image.webp            ← 1200x630px untuk social share preview
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── ScrollProgress.jsx   ← [BARU] progress bar scroll atas halaman
│       ├── Navbar.jsx
│       ├── HeroSection.jsx
│       ├── ProfileSection.jsx
│       ├── MetodologiSection.jsx
│       ├── AnalisisPetaSection.jsx
│       ├── KesimpulanSection.jsx
│       ├── Footer.jsx
│       └── BackToTop.jsx        ← [BARU] tombol kembali ke atas
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

---

## 📦 Dependencies Lengkap

```bash
# Core
npm install framer-motion react-compare-slider react-helmet-async

# Dev
npm install -D tailwindcss postcss autoprefixer @vitejs/plugin-react
```

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.x",
    "react-compare-slider": "^3.x",
    "react-helmet-async": "^2.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "sharp": "^0.33.x",
    "tailwindcss": "^3.x",
    "vite": "^5.x"
  }
}
```

---

## 🎨 Design System (Diperbarui & Dioptimalkan)

### Palet Warna
```css
:root {
  --chili:        #C0392B;   /* aksen utama */
  --chili-light:  #E74C3C;   /* hover */
  --chili-dark:   #96281B;   /* pressed */
  --dark:         #0F172A;   /* bg utama (slate-900) */
  --card:         #1E293B;   /* bg card (slate-800) */
  --card-hover:   #263448;   /* hover card */
  --surface:      #F8FAFC;   /* bg section terang */
  --text:         #F1F5F9;   /* teks utama */
  --muted:        #94A3B8;   /* teks sekunder */
  --border:       rgba(255,255,255,0.08);
}
```

### Tipografi — Google Fonts Inter
```html
<!-- di index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Utility Classes Kustom (di `index.css`)
```css
.glass {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.1);
}
.card-dark {
  background: var(--card);
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}
.text-gradient {
  background: linear-gradient(135deg, #E74C3C, #F97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btn-chili {
  background: linear-gradient(135deg, var(--chili-light), var(--chili-dark));
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-chili:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(192,57,43,0.4);
}
```

---

## 🏗️ Detail Komponen (v2 — Diperbarui)

### `index.html` — SEO & Meta Tags
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Analisis GIS Lokasi Cabang — Ayam Geprek Daeng | Makassar</title>
  <meta name="description" content="Laporan analisis GIS untuk penentuan lokasi cabang baru Ayam Geprek Daeng di Kota Makassar menggunakan data spasial, infrastruktur jalan, fasilitas pendidikan, dan pemetaan kompetitor." />

  <!-- Open Graph / Social Share -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Analisis GIS — Ayam Geprek Daeng" />
  <meta property="og:description" content="Kami menggunakan GIS untuk menemukan lokasi cabang paling strategis di Makassar." />
  <meta property="og:image" content="/og-image.webp" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

---

### `ScrollProgress.jsx` — [KOMPONEN BARU]
Progress bar merah tipis di paling atas halaman yang bergerak seiring scroll.
```jsx
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-orange-400 z-[200]"
    />
  );
}
```

---

### `Navbar.jsx` — Glassmorphism + Mobile Menu
```jsx
// Fitur:
// - Glassmorphism saat scroll (backdrop-blur)
// - Logo bulat (rounded-full, object-cover)
// - Link smooth-scroll ke section ID
// - Hamburger menu untuk mobile (state toggle)
// - Active link indicator (underline merah)

const navLinks = [
  { label: 'Latar Belakang', href: '#latar-belakang' },
  { label: 'Metodologi',     href: '#metodologi' },
  { label: 'Analisis Peta',  href: '#analisis-peta' },
  { label: 'Kesimpulan',     href: '#kesimpulan' },
];
```

**Perubahan dari v1:** Tambah hamburger menu mobile + active section detection via IntersectionObserver.

---

### `HeroSection.jsx` — Split Layout
```
[Col 1 - Teks]                    [Col 2 - Gambar]
─────────────────────────────────────────────────────
Badge: "Tugas GIS for Business"   Outlet.webp
H1: Menentukan Lokasi...          (floating anim)
Sub: Meninggalkan metode...
[Tombol: Lihat Analisis ↓]
[Scroll indicator animasi]
```

**Animasi entry (staggered):**
```jsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
```

**Floating Outlet:**
```jsx
<motion.img
  src="/Outlet.webp"
  animate={{ y: [0, -16, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  className="rounded-2xl shadow-2xl shadow-red-900/30 w-full object-cover"
  loading="eager"
  alt="Outlet Ayam Geprek Daeng"
/>
```

**[BARU]** Tambah label status: `"🟢 Analisis Aktif · 14 Kecamatan"` di bawah badge.

---

### `ProfileSection.jsx` — Bento Grid (Dioptimalkan)

**Layout Grid CSS:**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 1.5rem;
}
/* Mobile: stack vertical */
@media (max-width: 768px) {
  .bento-grid { grid-template-columns: 1fr; }
}
```

**Kotak 1** (col-span-2): Profil + `Gambar produk lengkap.webp`
**Kotak 2** (col-span-1): Kenapa GIS? + `Gambar iklan.webp`
**[BARU] Kotak 3** (col-span-3): Timeline singkat — 3 langkah metodologi GIS dengan ikon.

```
[📍 Kumpul Data] → [🗺️ Overlay Peta] → [✅ Rekomendasi]
```

---

### `MetodologiSection.jsx` — Counter Animasi

**4 Stat Cards + [BARU] Deskripsi metodologi di bawahnya:**

```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│    14    │ │   500    │ │  >10K    │ │   3.32   │
│Kecamatan │ │  Meter   │ │ Jiwa/km² │ │Kepadatan │
│Dianalisis│ │  Radius  │ │  Target  │ │Kompetitor│
└──────────┘ └──────────┘ └──────────┘ └──────────┘

[BARU] Penjelasan Metodologi 4 Layer:
┌─────────────────────────────────────────────────┐
│  Layer 1: Aksesibilitas    Layer 2: Pendidikan  │
│  Layer 3: Demografis       Layer 4: Kompetitor  │
└─────────────────────────────────────────────────┘
```

**Implementasi counter:**
```jsx
function useCounter(target, isInView, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView || typeof target !== 'number') return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);
  return count;
}
// Gunakan: const count = useCounter(14, isInView);
// Untuk ">10K" dan "3.32" → tampilkan string langsung saat isInView true
```

---

### `AnalisisPetaSection.jsx` — Tabs + Lightbox

**Struktur Tab Data:**
```jsx
const tabs = [
  {
    id: 'jalan',
    label: 'Aksesibilitas Jalan',
    icon: '🛣️',
    image: '/Aksebilitas Jalan.webp',
    badge: 'Layer 1',
    color: 'text-green-400',
    desc: 'Peta pertama mengukur kemudahan akses jalan. Area berwarna hijau (radius 200m) dan biru (radius 50m) dari jalan utama adalah lokasi yang sangat strategis — memudahkan pelanggan dine-in dan mitra ojek online GoFood/GrabFood.',
  },
  {
    id: 'kampus',
    label: 'Fasilitas Pendidikan',
    icon: '🎓',
    image: '/Fasilitas Pendidikan.webp',
    badge: 'Layer 2',
    color: 'text-yellow-400',
    desc: 'Segmen pasar utama kami adalah mahasiswa dan Gen Z. Titik-titik kuning merepresentasikan kampus dan sekolah di Makassar. Outlet baru idealnya dalam radius ~500 meter dari titik-titik tersebut.',
  },
  {
    id: 'pasar',
    label: 'Kepadatan Pasar',
    icon: '👥',
    image: '/Kepadatan Penduduk Potensi Pasar Fix.webp',
    badge: 'Layer 3',
    color: 'text-red-400',
    desc: 'Area merah pekat (>10.000 jiwa/km²) — Tallo, Wajo, Makasar, Mariso — adalah potensi pasar utama. Tamalate dan Rappocini menjadi target alternatif.',
  },
  {
    id: 'kompetitor',
    label: 'Titik Panas Kompetitor',
    icon: '🔥',
    image: '/Peta Spot Kepadatan Kompetitor Fix.webp',
    badge: 'Layer 4',
    color: 'text-orange-400',
    desc: 'Area hitam pekat (Ujung Tanah-Wajo di utara; Mamajang-Rappocini di selatan) menunjukkan persaingan yang sangat padat. Membuka cabang di sini berisiko perang harga dengan pemain lama.',
  },
];
```

**Lightbox — state sederhana:**
```jsx
const [lightboxImg, setLightboxImg] = useState(null);

// Overlay
{lightboxImg && (
  <motion.div
    className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
    onClick={() => setLightboxImg(null)}
    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
  >
    <img src={lightboxImg} className="max-w-[90vw] max-h-[90vh] rounded-xl" />
    <button className="absolute top-4 right-4 text-white text-3xl">✕</button>
  </motion.div>
)}
```

**[BARU]** Tambah hint di bawah gambar: `"🔍 Klik gambar untuk perbesar"`.

---

### `KesimpulanSection.jsx` — Before/After Slider

```jsx
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

<div className="relative">
  {/* Label Before/After */}
  <span className="absolute top-4 left-4 z-10 glass text-white text-sm px-3 py-1 rounded-full">
    👥 Kepadatan Penduduk
  </span>
  <span className="absolute top-4 right-4 z-10 glass text-white text-sm px-3 py-1 rounded-full">
    🔥 Kompetitor
  </span>

  <ReactCompareSlider
    itemOne={
      <ReactCompareSliderImage
        src="/Kepadatan Penduduk Potensi Pasar Fix.webp"
        alt="Kepadatan Penduduk"
      />
    }
    itemTwo={
      <ReactCompareSliderImage
        src="/Peta Spot Kepadatan Kompetitor Fix.webp"
        alt="Kompetitor"
      />
    }
    style={{ borderRadius: '1rem', height: '480px' }}
  />
</div>
```

**[BARU] Highlight Rekomendasi** — 2 kotak info di bawah slider:
```
┌────────────────────────┬───────────────────────────┐
│ ✅ Kawasan Tallo       │ ✅ Kawasan Mariso          │
│ Padat penduduk,        │ Akses jalan baik,          │
│ kompetitor rendah      │ dekat fasilitas kampus     │
└────────────────────────┴───────────────────────────┘
```

---

### `BackToTop.jsx` — [KOMPONEN BARU]
```jsx
import { motion, AnimatePresence, useScroll } from 'framer-motion';

export default function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() =>
    scrollY.on('change', v => setVisible(v > 400)), [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-red-600 hover:bg-red-500 text-white w-12 h-12 rounded-full shadow-lg shadow-red-900/40 flex items-center justify-center text-xl"
          aria-label="Kembali ke atas"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
```

---

### `Footer.jsx`

```jsx
// Layout:
// Baris 1: Logo + nama + tagline
// Baris 2: [Dosen Pengampu] | [Anggota Kelompok 4]
// Baris 3: Copyright + Universitas

const teamMembers = [
  'Hengki Setiawan', 'Muthiah Adibah', 'Nur Aisyah',
  'Ahmad Zaki', 'Al Fira Damayanti', 'Naufal Faiq'
];
```

---

## 🚀 Setup & Deploy (Step-by-Step)

### Langkah 1 — Init Proyek Vite React

```bash
# Di dalam folder "Landing page gis"
npx create-vite@latest ./ --template react --force
npm install
npm install framer-motion react-compare-slider react-helmet-async
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Langkah 2 — `tailwind.config.js`
```js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        chili: { DEFAULT: '#C0392B', light: '#E74C3C', dark: '#96281B' },
      },
    },
  },
  plugins: [],
};
```

### Langkah 3 — `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* { scroll-behavior: smooth; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: #0F172A;
  color: #F1F5F9;
}

/* Utility kustom */
@layer components {
  .glass {
    @apply bg-white/5 backdrop-blur-md border border-white/10;
  }
  .card-dark {
    @apply bg-slate-800 rounded-2xl shadow-xl shadow-black/40;
  }
  .text-gradient {
    @apply bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent;
  }
}
```

### Langkah 4 — `vercel.json`
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Langkah 5 — Deploy ke Vercel
```bash
git init
git add .
git commit -m "feat: GIS landing page Ayam Geprek Daeng"
# Buat repo di github.com, lalu:
git remote add origin https://github.com/USERNAME/ayam-geprek-gis.git
git push -u origin main
# Di vercel.com → New Project → Import repo → Deploy
```

---

## ✅ Checklist Fitur Lengkap

### Komponen & Interaktivitas
- [ ] `ScrollProgress.jsx` — progress bar merah tipis di atas
- [ ] `Navbar.jsx` — glassmorphism, logo bulat, hamburger mobile
- [ ] `HeroSection.jsx` — split layout, floating Outlet.webp, stagger anim
- [ ] `ProfileSection.jsx` — bento 3 kotak, timeline 3 langkah
- [ ] `MetodologiSection.jsx` — 4 animated counters, 4 layer cards
- [ ] `AnalisisPetaSection.jsx` — interactive tabs, lightbox klik perbesar
- [ ] `KesimpulanSection.jsx` — before/after slider, 2 rekomendasi highlight
- [ ] `Footer.jsx` — tim lengkap, copyright
- [ ] `BackToTop.jsx` — tombol merah muncul setelah scroll 400px

### Performa & Kualitas
- [x] Semua gambar sudah WebP (~94% lebih kecil)
- [ ] `loading="lazy"` pada semua gambar kecuali hero
- [ ] `width` & `height` eksplisit pada semua `<img>` (cegah CLS)
- [ ] `aria-label` pada semua tombol interaktif
- [ ] Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`

### SEO & Deploy
- [ ] `index.html` — title, meta description, Open Graph tags
- [ ] `vercel.json` — SPA rewrite rule
- [ ] `favicon.ico` di folder `public/`
- [ ] Push ke GitHub & import di vercel.com

---

## ⚠️ Catatan Penting

1. **Gunakan nama `.webp`** di semua JSX (bukan `.png` atau `.jpg` lagi).
2. **Ejaan "Aksebilitas"** — ikuti nama file: `/Aksebilitas Jalan.webp` ✅
3. **`react-compare-slider`** butuh container dengan tinggi eksplisit (`height: '480px'`).
4. **`AnimatePresence`** harus wrap komponen yang punya `exit` prop, dan tiap child wajib punya `key` unik.
5. **Font Inter** — tambahkan di `index.html` bukan di CSS import biasa agar tidak block render.
6. Semua section beri `id` yang sesuai: `id="latar-belakang"`, `id="metodologi"`, `id="analisis-peta"`, `id="kesimpulan"`.

---

*Blueprint v2 | Kelompok 4 GIS for Business | Universitas Negeri Makassar | 2026*
