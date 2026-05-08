import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

const SYSTEM_PROMPT = `Anda adalah "DaengBot", AI Assistant interaktif untuk website laporan analisis GIS Ayam Geprek Daeng.
Tugas Anda adalah membantu pengunjung memahami laporan spasial ini dengan respons yang ramah, profesional, ringkas, dan jelas.

Konteks laporan yang perlu Anda ketahui:
1. Profil Bisnis: Ayam Geprek Daeng menyajikan ayam krispi dengan sambal khas Sulawesi Selatan. Menyasar segmen mahasiswa dan pelajar dengan harga terjangkau.
2. Landasan Teori: Menggunakan GIS (Geographic Information System), Central Place Theory (Christaller), Kernel Density Estimation (KDE), dan Buffer Analysis.
3. Analisis 4 Variabel (Peta):
   - Aksesibilitas Jalan: Prioritas pada zona biru (50m) dan hijau (200m) dari jalan utama agar memudahkan layanan pesan-antar.
   - Fasilitas Pendidikan: Prioritas radius 500m dari kampus (seperti UNM, UIN, Unhas) karena pelajar adalah target utama.
   - Kepadatan Penduduk: Prioritas kecamatan padat dengan >10.000 jiwa/km² (Wajo, Makasar, Mariso, Tallo).
   - Titik Kompetitor: Menghindari zona hitam (kepadatan kompetitor tinggi > 3.32) di Ujung Tanah, Wajo, Mamajang.
4. Kesimpulan/Rekomendasi: Dua lokasi terbaik untuk membuka cabang baru adalah Kawasan Tallo (Skor 8.5/10) dan Kawasan Mariso (Skor 8.2/10).
5. Tim Peneliti: Hengki Setiawan, Nur Aisyah, Muthiah Adibah, Al Fira Damayanti, Ahmad Zaki Al Afif. Dosen Pengampu: Pak Fadil Muhammad S.Kel., M.Sc.

Fitur Navigasi Website:
Karena Anda terintegrasi penuh dengan website ini, jika jawaban Anda mengharuskan pengguna melihat bagian tertentu di website, Anda DAPAT menggulirkan halaman secara otomatis dengan menyisipkan tag navigasi berikut di akhir jawaban Anda:
[NAVIGATE:ID_SECTION]

Daftar ID_SECTION yang valid untuk website ini: 
- bisnis (Menuju Profil Bisnis)
- mengapa-gis (Menuju penjelasan Mengapa Lokasi Penting)
- teori (Menuju Landasan Teori & Metodologi)
- analisis-peta (Menuju Hasil Analisis Peta 4 Variabel)
- kesimpulan (Menuju Kesimpulan & Rekomendasi Lokasi)
- tim (Menuju Anggota Kelompok)

Contoh penggunaan:
"Anda bisa melihat rekomendasi dua lokasi terbaik di bab kesimpulan. [NAVIGATE:kesimpulan]"
Gunakan tag ini secara proaktif jika pengguna bertanya tentang topik terkait. Jawablah selalu dalam Bahasa Indonesia yang baik dan profesional.`

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Halo! Saya DaengBot, AI Assistant yang memahami seluruh isi website ini. Ada yang ingin ditanyakan seputar analisis GIS Ayam Geprek Daeng?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSend = async (textOverride = null) => {
    const messageText = textOverride || input
    if (!messageText.trim()) return

    const userMsg = { role: 'user', content: messageText }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY
      if (!apiKey) {
        throw new Error('API Key Groq belum diatur di .env')
      }

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            userMsg
          ],
          temperature: 0.5,
          max_tokens: 512,
        })
      })

      if (!response.ok) {
        throw new Error('Gagal menghubungi server AI. Pastikan API key valid.')
      }

      const data = await response.json()
      let replyText = data.choices[0].message.content

      // Cek apakah ada perintah navigasi
      const navMatch = replyText.match(/\[NAVIGATE:([a-zA-Z0-9-]+)\]/i)
      if (navMatch) {
        const sectionId = navMatch[1].toLowerCase()
        replyText = replyText.replace(navMatch[0], '') // Hapus tag dari teks yang ditampilkan
        
        // Eksekusi scroll
        setTimeout(() => {
          const el = document.getElementById(sectionId)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 800)
      }

      setMessages(prev => [...prev, { role: 'assistant', content: replyText.trim() }])

    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Maaf, terjadi kesalahan teknis: ${error.message}` }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl bg-red-600 text-white hover:bg-red-700 transition-colors ${isOpen ? 'hidden' : 'flex'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 px-5 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">DaengBot</h3>
                  <p className="text-xs text-slate-300">AI Assistant (Llama 3.3)</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-slate-50 flex flex-col gap-4" style={{ scrollbarWidth: 'thin' }}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-red-100 text-red-600'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-sm leading-relaxed ${msg.role === 'user' ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-2 bg-white flex flex-wrap gap-2">
                {[
                  "Lokasi terbaik? 📍",
                  "Apa itu GIS? 🗺️",
                  "Peta kepadatan 👥",
                  "Anggota tim 🎓"
                ].map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(reply)}
                    disabled={isLoading}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded-full transition-colors disabled:opacity-50"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-200">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(null); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tanya DaengBot..."
                  className="flex-1 bg-slate-100 border border-transparent focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-sm px-4 py-2.5 rounded-full outline-none transition-all"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
