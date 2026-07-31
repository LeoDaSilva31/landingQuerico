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
        <p>&copy; {year} ¡Que Rico!</p>
      </div>

      <div className="obersys-credit">
        <span style={{color:"#c4c2cc",fontFamily:"system-ui,sans-serif",fontSize:".68rem",letterSpacing:".05em"}}>Este sitio fue desarrollado por el equipo de</span>
        <a href="https://obersys.com" target="_blank" rel="noopener noreferrer" aria-label="OberSys">
          <img src="/img/logo_obersys.webp" alt="" className="obersys-credit-logo" />
          <span style={{color:'#ffffff',fontFamily:'system-ui,sans-serif',fontSize:'.68rem',letterSpacing:'.05em',fontWeight:600}}>OberSys</span>
        </a>
      </div>
    </footer>
  )
}
