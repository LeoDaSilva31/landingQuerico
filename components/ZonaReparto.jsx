import Reveal from '@/components/Reveal'
import { ZONA_REPARTO } from '@/lib/data'
import { IcoTruck, IcoPin } from '@/components/icons'

export default function ZonaReparto() {
  return (
    <section id="reparto" className="reparto section-padding">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Distribución mayorista</p>
          <h2 className="section-title">Llegamos a toda la zona centro</h2>
          <p className="section-sub">
            Repartimos de lunes a sábado por Oberá y las localidades vecinas.
            Si tu comercio está en la zona, podemos ser tu proveedor de panificados.
          </p>
        </Reveal>

        <div className="reparto-grid">
          {ZONA_REPARTO.map(({ nombre, tipo, desc }, i) => (
            <Reveal key={nombre} delay={i * 80}>
              <div className="reparto-card">
                <span className="reparto-icon">
                  {tipo === 'ciudad' ? <IcoPin size={20} /> : <IcoTruck size={20} />}
                </span>
                <div>
                  <strong className="reparto-nombre">{nombre}</strong>
                  <span className="reparto-desc">{desc}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="reparto-cta-box">
            <p>¿Tu comercio está en la zona y todavía no trabajás con nosotros? ¡Escribinos por WhatsApp!</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
