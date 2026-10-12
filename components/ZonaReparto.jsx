import Reveal from '@/components/Reveal'
import BotonWhatsApp from '@/components/BotonWhatsApp'
import { ZONA_REPARTO } from '@/lib/data'
import { IcoTruck, IcoPin } from '@/components/icons'

export default function ZonaReparto() {
  return (
    <section id="reparto" className="reparto section-padding">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Distribución mayorista</p>
          <h2 className="section-title">Reparto de panificados en Oberá y zona centro de Misiones</h2>
          <p className="section-sub">
            Atendemos de lunes a sábado y cada localidad tiene su día de reparto.
            Comunicate y te decimos qué días de la semana podemos acercarte
            los mejores productos al mejor precio.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="reparto-grid">
            {ZONA_REPARTO.map(({ nombre, tipo }) => (
              <li key={nombre} className="reparto-card">
                <span className="reparto-icon">
                  {tipo === 'ciudad' ? <IcoPin size={20} /> : <IcoTruck size={20} />}
                </span>
                <span className="reparto-nombre">{nombre}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <div className="reparto-cta-box">
            <p>¿Tu comercio está en la zona y todavía no trabajás con nosotros?</p>
            <BotonWhatsApp texto="Consultá tu día de reparto" variante="claro" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
