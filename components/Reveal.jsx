'use client'
import { useRef, useEffect } from 'react'

export default function Reveal({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) el.style.transitionDelay = `${delay}ms`

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}
