import { NAV_LINKS, ZONA_REPARTO, WA_CHAT } from '@/lib/data'
import { IcoWA } from '@/components/icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/img/logoPanaderia.webp" alt="¡Que Rico! Panadería" className="footer-logo" />
          <p>Aromas y sabores de nuestra tierra.</p>
          <a href={WA_CHAT} target="_blank" rel="noopener noreferrer" className="footer-wa">
            <IcoWA size={18} />
            Escribinos por WhatsApp
          </a>
        </div>

        <div className="footer-nav">
          <h4>Navegación</h4>
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-zona">
          <h4>Zona de reparto</h4>
          <ul>
            {ZONA_REPARTO.map(({ nombre }) => (
              <li key={nombre}>{nombre}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {year} ¡Que Rico! &nbsp;|&nbsp; Desarrollado por{' '}
          <a href="https://obersys.com" target="_blank" rel="noopener noreferrer">OberSys.com</a>
        </p>
      </div>
    </footer>
  )
}
