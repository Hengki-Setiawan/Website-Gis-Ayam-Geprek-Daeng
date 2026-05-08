# 🚀 BP4 — SETUP & DEPLOY
> Ayam Geprek Daeng GIS | Kelompok 4 UNM

---

## Langkah 1 — Init Proyek Vite + React

```bash
# Di dalam folder "Landing page gis"
npx create-vite@latest ./ --template react --force
npm install
```

---

## Langkah 2 — Install Semua Dependencies

```bash
npm install framer-motion react-compare-slider react-helmet-async
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Total dependencies:**
| Package | Fungsi |
|---|---|
| `framer-motion` | Semua animasi |
| `react-compare-slider` | Slider before/after |
| `react-helmet-async` | SEO meta tags |
| `tailwindcss` | Styling utama |

---

## Langkah 3 — Konfigurasi File

### `tailwind.config.js`
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
}
```

### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* { scroll-behavior: smooth; box-sizing: border-box; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: #0A0F1E;
  color: #F9FAFB;
  -webkit-font-smoothing: antialiased;
}

/* Chapter divider */
.chapter-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
}
.chapter-divider::before,
.chapter-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(255,255,255,0.1);
}

@layer components {
  .glass {
    @apply bg-white/5 backdrop-blur-xl border border-white/10;
  }
  .card-dark {
    @apply bg-gray-900 rounded-2xl border border-white/[0.07] shadow-xl shadow-black/50;
  }
  .text-gradient {
    @apply bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent;
  }
  .section-label {
    @apply text-xs font-semibold tracking-widest text-red-500 uppercase;
  }
}
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Analisis GIS Lokasi Cabang — Ayam Geprek Daeng</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

### `vercel.json`
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Langkah 4 — Pindahkan Gambar WebP ke `public/`

Gambar sudah dikompres ke WebP via `node scripts/compress-images.mjs`.
Pastikan semua file ini ada di `public/`:

```
public/
├── Logo Ayam Geprek Daeng.webp   ✅
├── Outlet.webp                    ✅
├── Gambar produk lengkap.webp     ✅
├── Gambar produk.webp             ✅
├── Gambar iklan.webp              ✅
├── Aksebilitas Jalan.webp         ✅  ← ejaan "Aksebilitas"
├── Fasilitas Pendidikan.webp      ✅
├── Kepadatan Penduduk Potensi Pasar Fix.webp  ✅
└── Peta Spot Kepadatan Kompetitor Fix.webp    ✅
```

---

## Langkah 5 — Jalankan Dev Server

```bash
npm run dev
# Buka: http://localhost:5173
```

---

## Langkah 6 — Build Production

```bash
npm run build
# Output di folder dist/
```

---

## Langkah 7 — Push ke GitHub

```bash
git init
git add .
git commit -m "feat: GIS landing page Ayam Geprek Daeng - Kelompok 4 UNM"
# Buat repo baru di github.com, lalu:
git remote add origin https://github.com/USERNAME/ayam-geprek-gis.git
git branch -M main
git push -u origin main
```

---

## Langkah 8 — Deploy ke Vercel

1. Buka **[vercel.com](https://vercel.com)** → Login dengan GitHub
2. Klik **"New Project"**
3. Pilih repo `ayam-geprek-gis`
4. Framework Preset: **Vite** (auto-detect)
5. Klik **"Deploy"**

> Setiap kali kamu `git push`, Vercel otomatis redeploy! 🎉

---

## ✅ Final Checklist

### Komponen
- [ ] `ScrollProgress.jsx` — merah tipis di atas halaman
- [ ] `Navbar.jsx` — glassmorphism + mobile hamburger
- [ ] `HeroSection.jsx` — split, floating outlet, stagger
- [ ] `BisnisSection.jsx` — bento grid 3 kotak
- [ ] `MengapaGISSection.jsx` — narasi + 4 stat counters
- [ ] `AnalisisPetaSection.jsx` — tabs + lightbox
- [ ] `KesimpulanSection.jsx` — slider + 2 rekomendasi
- [ ] `TimSection.jsx` — dosen + 6 anggota
- [ ] `Footer.jsx` — copyright UNM
- [ ] `BackToTop.jsx` — tombol merah pojok kanan bawah

### Konten (dari BP2)
- [ ] Narasi blog panjang tiap section
- [ ] "Callout box" insight di tiap tab peta
- [ ] 2 kotak rekomendasi (Tallo & Mariso)
- [ ] Semua teks anggota kelompok benar

### Performa
- [x] Gambar WebP sudah dikompres (hemat ~91%)
- [ ] `loading="lazy"` semua img kecuali hero
- [ ] Width & height eksplisit tiap `<img>`
- [ ] SEO meta tags + Open Graph

### Deploy
- [ ] `vercel.json` ada
- [ ] `favicon.ico` di `public/`
- [ ] Push ke GitHub
- [ ] Deploy di Vercel

---

## ⚠️ Troubleshooting Umum

| Masalah | Solusi |
|---|---|
| Gambar 404 | Pastikan nama file PERSIS sama (case-sensitive, spasi tetap ada) |
| Tailwind tidak jalan | Cek `content` di `tailwind.config.js` include path `./src/**/*.{js,jsx}` |
| AnimatePresence error | Pastikan child punya `key` prop yang unik |
| Slider tidak muncul | `react-compare-slider` butuh container dengan height eksplisit |
| Font tidak muncul | Link Google Fonts harus di `index.html`, bukan di CSS import |

---

*Lihat BP1 untuk desain. Lihat BP2 untuk konten. Lihat BP3 untuk kode komponen.*
