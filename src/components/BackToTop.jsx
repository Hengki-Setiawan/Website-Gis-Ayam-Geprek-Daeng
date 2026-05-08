import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-full shadow-xl shadow-red-900/50 flex items-center justify-center text-2xl transition-all hover:-translate-y-1"
          aria-label="Kembali ke atas"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
