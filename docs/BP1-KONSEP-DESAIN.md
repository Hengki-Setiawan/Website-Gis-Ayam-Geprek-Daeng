# 📐 BP1 — KONSEP & DESAIN
> Ayam Geprek Daeng GIS Landing Page | Kelompok 4 UNM

---

## 🎯 Konsep Inti: "Scrollytelling Editorial Report"

Website ini bukan sekedar landing page biasa. Inspirasinya gabungan dari:
- **ArcGIS StoryMaps** — narasi berbasis peta yang mengalir
- **Medium/Substack** — feel blog editorial yang enak dibaca
- **Vercel.com** — dashboard analitik yang bersih & profesional
- **F&B Website** — visual makanan yang menggugah selera

### Filosofi Desain
> *"Data harus bercerita, bukan hanya ditampilkan."*

User men-scroll dari atas ke bawah seperti membaca sebuah **laporan investigasi interaktif** — setiap section adalah "bab" baru yang punya judul, narasi, visual, dan insight.

---

## 🎨 Design System

### Palet Warna
```css
:root {
  /* Aksen Utama */
  --chili:       #C0392B;
  --chili-light: #E74C3C;
  --chili-dark:  #96281B;
  --orange:      #F97316;

  /* Background */
  --bg-dark:     #0A0F1E;   /* lebih gelap dari slate-900 */
  --bg-card:     #111827;   /* gray-900 */
  --bg-surface:  #1F2937;   /* gray-800 */

  /* Teks */
  --text-primary:  #F9FAFB;
  --text-secondary:#9CA3AF;
  --text-muted:    #6B7280;

  /* Border */
  --border:      rgba(255,255,255,0.07);
}
```

### Tipografi
- **Font:** Inter (Google Fonts) — `weights: 400, 500, 600, 700, 800, 900`
- **H1 Hero:** `font-size: clamp(2.5rem, 6vw, 4.5rem)` bold
- **H2 Section:** `font-size: clamp(1.8rem, 4vw, 2.8rem)` bold
- **"Chapter" label:** `font-size: 0.75rem` uppercase tracking-widest merah
- **Body:** `font-size: 1.0625rem` line-height: 1.75 (nyaman dibaca seperti blog)

### Efek Visual
```
Glassmorphism : backdrop-blur-xl bg-white/5 border border-white/10
Card          : bg-gray-900 rounded-2xl shadow-2xl shadow-black/60
Gradient teks : from-red-400 via-orange-400 to-yellow-400
Divider bab   : garis horizontal tipis dengan label "●" di tengah
```

---

## 🏛️ Arsitektur Layout — "Bab per Bab"

```
┌─────────────────────────────────────────────────────┐
│  [ScrollProgress Bar — merah tipis di atas]         │
│  [Sticky Navbar — glassmorphism]                    │
├─────────────────────────────────────────────────────┤
│  BAB 0 · HERO                                       │
│  "Menentukan Lokasi Cabang Baru..."                 │
├─────────────────────────────────────────────────────┤
│  BAB 1 · TENTANG BISNIS                             │
│  Profil UMKM + foto produk (Bento Grid)             │
├─────────────────────────────────────────────────────┤
│  BAB 2 · MENGAPA GIS?                               │
│  Narasi problem + solusi + 4 stat counter           │
├─────────────────────────────────────────────────────┤
│  BAB 3 · ANALISIS 4 LAYER PETA                      │
│  Interactive tabs + lightbox + penjelasan panjang   │
├─────────────────────────────────────────────────────┤
│  BAB 4 · TEMUAN & KESIMPULAN                        │
│  Before/after slider + rekomendasi lokasi           │
├─────────────────────────────────────────────────────┤
│  BAB 5 · TIM PENELITI                               │
│  Card anggota kelompok + dosen                      │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
└─────────────────────────────────────────────────────┘
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Mobile < 768px | 1 kolom, font lebih kecil, tabs jadi accordion |
| Tablet 768–1024px | 2 kolom bento, tabs horizontal |
| Desktop > 1024px | Full layout, tabs sidebar kiri |

---

## ✨ Micro-animations Catalog

| Elemen | Animasi |
|---|---|
| Hero H1 | Fade up + stagger per kata |
| Outlet.webp | Float naik-turun 4 detik loop |
| Bento cards | Fade up saat masuk viewport |
| Stat counter | Hitung dari 0 saat scroll |
| Tab switch | Slide x + fade (AnimatePresence) |
| Peta gambar | Scale 1.02 saat hover |
| Lightbox | Fade + scale from center |
| Slider handle | Drag spring physics |
| BackToTop btn | Fade + scale muncul |
| Section entry | `whileInView` translateY(-20px→0) |

---

*Lihat BP2 untuk konten lengkap tiap section.*
*Lihat BP3 untuk kode komponen.*
*Lihat BP4 untuk setup & deploy.*
