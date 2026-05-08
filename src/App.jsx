import { Helmet } from 'react-helmet-async'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BisnisSection from './components/BisnisSection'
import MengapaGISSection from './components/MengapaGISSection'
import AnalisisPetaSection from './components/AnalisisPetaSection'
import KesimpulanSection from './components/KesimpulanSection'
import LandasanTeoriSection from './components/LandasanTeoriSection'
import TimSection from './components/TimSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { ChapterDivider } from './components/ChapterDivider'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Analisis GIS Lokasi Cabang — Ayam Geprek Daeng | UNM</title>
        <meta name="description" content="Laporan analisis GIS untuk penentuan lokasi cabang baru Ayam Geprek Daeng di Kota Makassar. Menggunakan 4 layer data spasial: aksesibilitas jalan, fasilitas pendidikan, kepadatan penduduk, dan pemetaan kompetitor." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Analisis GIS — Ayam Geprek Daeng" />
        <meta property="og:description" content="Kami menggunakan GIS untuk menemukan lokasi cabang paling strategis di Makassar." />
        <meta property="og:image" content="/og-image.webp" />
      </Helmet>

      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <ChapterDivider label="BAB 1" />
        <BisnisSection />
        <ChapterDivider label="BAB 2" />
        <MengapaGISSection />
        <ChapterDivider label="BAB 3" />
        <LandasanTeoriSection />
        <ChapterDivider label="BAB 4" />
        <AnalisisPetaSection />
        <ChapterDivider label="BAB 5" />
        <KesimpulanSection />
        <ChapterDivider label="BAB 6" />
        <TimSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
