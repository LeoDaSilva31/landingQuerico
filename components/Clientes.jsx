import Reveal from '@/components/Reveal'
import BotonWhatsApp from '@/components/BotonWhatsApp'
import { CLIENTES } from '@/lib/data'

export default function Clientes() {
  return (
    <section id="clientes" className="clientes section-padding bg-warm">
      <div className="container">
        <Reveal>
          <p className="eyebrow">¿Con quién trabajamos?</p>
          <h2 className="section-title">Proveedor de pan para comercios, gastronomía y revendedores</h2>
        </Reveal>

        <div className="clientes-grid">
          {CLIENTES.map(({ titulo, texto }, indice) => (
            <Reveal key={titulo} delay={indice * 100}>
              <article className="cliente-card">
                <span className="cliente-num">{String(indice + 1).padStart(2, '0')}</span>
                <h3 className="cliente-titulo">{titulo}</h3>
                <p>{texto}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="clientes-eventos">
            También tomamos pedidos para eventos, como tapas de empanadas o de pastelitos para escuelas e iglesias.
          </p>
          <div className="clientes-cierre">
            <p className="clientes-lema">Siempre con excelente calidad y precio</p>
            <BotonWhatsApp texto="Consultanos por WhatsApp" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
