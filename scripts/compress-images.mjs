/**
 * compress-images.mjs
 * Kompres semua gambar dari subfolder ke public/ dalam format WebP
 * Jalankan: node scripts/compress-images.mjs
 */
import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, basename, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');

// Pastikan folder public ada
if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });

// Daftar sumber gambar
const SOURCES = [
  {
    folder: join(ROOT, 'Gambar ayam geprek daeng'),
    files: [
      'Logo Ayam Geprek Daeng.jpeg',
      'Outlet.png',
      'Gambar produk lengkap.png',
      'Gambar produk.png',
      'Gambar iklan.png',
    ],
  },
  {
    folder: join(ROOT, 'Peta Gis'),
    files: [
      'Aksebilitas Jalan.png',
      'Fasilitas Pendidikan.png',
      'Kepadatan Penduduk Potensi Pasar Fix.png',
      'Peta Spot Kepadatan Kompetitor Fix.png',
    ],
  },
];

// Konfigurasi kompresi
const CONFIG = {
  // Gambar UI (produk, iklan, outlet, logo) → kualitas lebih tinggi
  ui: { quality: 85, effort: 6 },
  // Gambar peta (banyak detail warna) → kualitas sedikit lebih rendah ok
  map: { quality: 80, effort: 6 },
};

function formatBytes(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async function compressImage(inputPath, outputName, isMap = false) {
  const outputPath = join(PUBLIC_DIR, outputName);
  const cfg = isMap ? CONFIG.map : CONFIG.ui;

  try {
    const inputStat = statSync(inputPath);
    const inputSize = inputStat.size;

    await sharp(inputPath)
      .webp({ quality: cfg.quality, effort: cfg.effort })
      .toFile(outputPath);

    const outputStat = statSync(outputPath);
    const outputSize = outputStat.size;
    const reduction = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);

    console.log(`✅ ${basename(outputName)}`);
    console.log(`   ${formatBytes(inputSize)} → ${formatBytes(outputSize)} (hemat ${reduction}%)\n`);
  } catch (err) {
    console.error(`❌ Gagal memproses ${inputPath}: ${err.message}`);
  }
}

async function main() {
  console.log('🔄 Memulai kompresi gambar ke WebP...\n');
  console.log(`📁 Output folder: ${PUBLIC_DIR}\n`);
  console.log('─'.repeat(50));

  for (const source of SOURCES) {
    const isMap = source.folder.includes('Peta');
    console.log(`\n📂 ${basename(source.folder)}`);
    console.log('─'.repeat(50));

    for (const file of source.files) {
      const inputPath = join(source.folder, file);
      if (!existsSync(inputPath)) {
        console.warn(`⚠️  File tidak ditemukan: ${file}`);
        continue;
      }
      // Ganti ekstensi ke .webp, pertahankan nama (termasuk spasi)
      const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      await compressImage(inputPath, outputName, isMap);
    }
  }

  // Juga copy Logo sebagai .webp dengan nama yang mudah diakses
  console.log('─'.repeat(50));
  console.log('\n🎉 Kompresi selesai! Semua file tersimpan di folder public/');
  console.log('\n📋 Update src/assets yang perlu diganti di JSX:');
  console.log('   /Logo Ayam Geprek Daeng.webp');
  console.log('   /Outlet.webp');
  console.log('   /Gambar produk lengkap.webp');
  console.log('   /Gambar produk.webp');
  console.log('   /Gambar iklan.webp');
  console.log('   /Aksebilitas Jalan.webp');
  console.log('   /Fasilitas Pendidikan.webp');
  console.log('   /Kepadatan Penduduk Potensi Pasar Fix.webp');
  console.log('   /Peta Spot Kepadatan Kompetitor Fix.webp');
}

main();
