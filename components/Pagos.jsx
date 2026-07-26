import Reveal from '@/components/Reveal'
import { PAYMENTS } from '@/lib/data'

export default function Pagos() {
  return (
    <section className="pagos section-padding">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Facilidades</p>
          <h2 className="section-title">Medios de pago</h2>
        </Reveal>
        <div className="pagos-grid">
          {PAYMENTS.map(({ icon, name, sub }, i) => (
            <Reveal key={name} delay={i * 100}>
              <div className="pago-card">
                <span className="pago-icon">{icon}</span>
                <strong>{name}</strong>
                <span>{sub}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
