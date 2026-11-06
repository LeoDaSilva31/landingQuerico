'use client'
import { useState, useEffect, useRef } from 'react'
import { NAV_LINKS } from '@/lib/data'

/* Debe coincidir con el breakpoint de escritorio del CSS (min-width: 1024px) */
const MQ_ESCRITORIO = '(min-width: 1024px)'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [escritorio, setEscritorio] = useState(false)
  const menuRef = useRef(null)
  const botonRef = useRef(null)
  const headerRef = useRef(null)

  /* Detecta escritorio: allí el menú es una barra fija y siempre debe ser interactiva */
  useEffect(() => {
    const mq = window.matchMedia(MQ_ESCRITORIO)
    const actualizar = () => {
      setEscritorio(mq.matches)
      if (mq.matches) setOpen(false)
    }
    actualizar()
    mq.addEventListener('change', actualizar)
    return () => mq.removeEventListener('change', actualizar)
  }, [])

  /* En móvil el panel cerrado no debe recibir foco ni clics (inert); en escritorio nunca */
  useEffect(() => {
    const el = menuRef.current
    if (!el) return
    if (!escritorio && !open) el.setAttribute('inert', '')
    else el.removeAttribute('inert')
  }, [open, escritorio])

  /* Menú móvil abierto: Escape lo cierra y devuelve el foco; se bloquea el scroll del fondo.
     El panel arranca justo debajo del header real (la cinta superior desplaza al header),
     así que se mide su borde inferior en vez de asumir una altura fija. */
  useEffect(() => {
    if (!open) return
    const ubicarPanel = () => {
      const base = headerRef.current?.getBoundingClientRect().bottom ?? 0
      menuRef.current?.style.setProperty('--menu-top', `${Math.max(0, Math.round(base))}px`)
    }
    ubicarPanel()
    window.addEventListener('resize', ubicarPanel)
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        botonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('resize', ubicarPanel)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const ocultoParaLectores = !escritorio && !open

  return (
    <header ref={headerRef} className="header">
      <nav className="navbar container" aria-label="Navegación principal">
        <a href="/" className="nav-brand" aria-label="Que Rico Panificados, inicio">
          <img src="/img/logoPanaderia.webp" alt="" className="nav-logo" width="75" height="50" />
        </a>

        <button
          ref={botonRef}
          type="button"
          className={`hamburger${open ? ' hamburger--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span /><span /><span />
        </button>

        <ul
          id="menu-principal"
          ref={menuRef}
          className={`nav-menu${open ? ' nav-menu--open' : ''}`}
          role="list"
          aria-hidden={ocultoParaLectores}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link" onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
