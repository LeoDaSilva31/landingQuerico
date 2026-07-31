'use client'
import { useState, useEffect, useRef } from 'react'
import { NAV_LINKS } from '@/lib/data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const el = menuRef.current
    if (!el) return
    if (open) el.removeAttribute('inert')
    else el.setAttribute('inert', '')
  }, [open])

  return (
    <header className="header">
      <nav className="navbar container" aria-label="Navegación principal">
        <a href="#inicio" className="nav-brand">
          <img src="/img/logoPanaderia.webp" alt="¡Que Rico! Panadería Artesanal" className="nav-logo" />
        </a>

        <button
          className={`hamburger${open ? ' hamburger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>

        <ul ref={menuRef} className={`nav-menu${open ? ' nav-menu--open' : ''}`} role="list" aria-hidden={!open}>
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
