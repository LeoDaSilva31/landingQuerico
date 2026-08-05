'use client'
import { useRef, useEffect } from 'react'
import Reveal from '@/components/Reveal'
import { PRODUCTS } from '@/lib/data'

const GALLERY = [
  { src: '/img/pan.webp',                   alt: 'Pan artesanal Que Rico Oberá' },
  { src: '/img/pan1.webp',                  alt: 'Pan fresco del horno Que Rico' },
  { src: '/img/prepizza.webp',              alt: 'Prepizzas artesanales Oberá' },
  { src: '/img/prepizza1.webp',             alt: 'Prepizzas Que Rico panadería' },
  { src: '/img/torraditas.webp',            alt: 'Torraditas Que Rico Oberá' },
  { src: '/img/torraditas1.webp',           alt: 'Torraditas crocantes panadería' },
  { src: '/img/pan_pancho.webp',            alt: 'Pan para panchos Oberá' },
  { src: '/img/pan_hamburguesa.webp',       alt: 'Pan para hamburguesas Que Rico' },
  { src: '/img/tapas_empanadas.webp',       alt: 'Tapas de empanadas artesanales' },
  { src: '/img/tapas_pastelitos.webp',      alt: 'Tapas de pastelitos Que Rico' },
  { src: '/img/pastelitos.webp',            alt: 'Pastelitos artesanales panadería' },
  { src: '/img/pan_rallado.webp',           alt: 'Pan rallado Que Rico' },
  { src: '/img/pan_rallado_embasado.webp',  alt: 'Pan rallado embasado Que Rico' },
]

const ITEM_W = 280 + 16
const SINGLE_W = GALLERY.length * ITEM_W

function Carousel() {
  const outerRef = useRef(null)
  const trackRef = useRef(null)
  const state   = useRef({ pos: 0, dragging: false, lastX: 0 })

  useEffect(() => {
    let rafId
    function tick() {
      if (!state.current.dragging) {
        state.current.pos -= 0.4
        if (state.current.pos <= -SINGLE_W) state.current.pos += SINGLE_W
        if (trackRef.current) trackRef.current.style.transform = `translateX(${state.current.pos}px)`
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      if (!state.current.dragging) return
      const dx = e.clientX - state.current.lastX
      state.current.lastX = e.clientX
      state.current.pos += dx
      if (state.current.pos <= -SINGLE_W) state.current.pos += SINGLE_W
      if (state.current.pos > 0) state.current.pos -= SINGLE_W
      if (trackRef.current) trackRef.current.style.transform = `translateX(${state.current.pos}px)`
    }
    const onUp = () => {
      state.current.dragging = false
      outerRef.current?.classList.remove('carousel-grabbing')
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  const items = [...GALLERY, ...GALLERY]

  return (
    <div
      ref={outerRef}
      className="carousel-outer"
      onMouseDown={e => {
        state.current.dragging = true
        state.current.lastX = e.clientX
        outerRef.current?.classList.add('carousel-grabbing')
      }}
      onTouchStart={e => {
        state.current.dragging = true
        state.current.lastX = e.touches[0].clientX
      }}
      onTouchMove={e => {
        if (!state.current.dragging) return
        const dx = e.touches[0].clientX - state.current.lastX
        state.current.lastX = e.touches[0].clientX
        state.current.pos += dx
        if (state.current.pos <= -SINGLE_W) state.current.pos += SINGLE_W
        if (state.current.pos > 0) state.current.pos -= SINGLE_W
        if (trackRef.current) trackRef.current.style.transform = `translateX(${state.current.pos}px)`
      }}
      onTouchEnd={() => { state.current.dragging = false }}
    >
      <div ref={trackRef} className="carousel-track">
        {items.map((item, i) => (
          <div key={i} className="carousel-item">
            <img src={item.src} alt={item.alt} loading="lazy" draggable="false" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Productos() {
  return (
    <section id="productos" className="productos section-padding bg-warm">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Lo que elaboramos</p>
          <h2 className="section-title">Nuestra producción</h2>
          <p className="section-sub">
            Todo sale del horno a primera hora. Nuestros clientes reciben el pedido fresco, listo para la góndola.
          </p>
        </Reveal>

        <div className="prod-cat-grid">
          {PRODUCTS.map(({ name, sub }, i) => (
            <Reveal key={name} delay={i * 70}>
              <div className="prod-cat-card">
                <strong>{name}</strong>
                <span>{sub}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={100}>
        <Carousel />
      </Reveal>
    </section>
  )
}
