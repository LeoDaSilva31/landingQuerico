'use client'
import { useRef, useEffect } from 'react'

export default function Reveal({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95) {
      if (delay) setTimeout(() => el.classList.add('visible'), delay)
      else el.classList.add('visible')
      return
    }
    if (delay) el.style.transitionDelay = `${delay}ms`
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
    )
    obs.observe(el); return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className={`reveal ${className}`} style={style}>{children}</div>
}
