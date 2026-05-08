import { useState, useEffect } from 'react'

export function useAnimatedCounter(target, isInView, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isInView || typeof target !== 'number') return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, duration])
  return count
}
