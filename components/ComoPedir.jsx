import Reveal from '@/components/Reveal'
import BotonWhatsApp from '@/components/BotonWhatsApp'
import { PASOS_PEDIDO } from '@/lib/data'

export default function ComoPedir() {
  return (
    <section id="pedidos" className="pedidos section-padding bg-warm">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Simple y directo</p>
          <h2 className="section-title">Cómo hacer tu pedido por mayor</h2>
        </Reveal>

        <Reveal delay={100}>
          <ol className="pasos-lista">
            {PASOS_PEDIDO.map((paso, indice) => (
              <li key={paso} className="paso">
                <span className="paso-num" aria-hidden="true">{indice + 1}</span>
                <p>{paso}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={150}>
          <p className="pedidos-nota">
            Si sos distribuidor, también podés visitarnos en la panadería, previa confirmación.
          </p>
          <BotonWhatsApp texto="Hacer mi pedido" />
        </Reveal>
      </div>
    </section>
  )
}
