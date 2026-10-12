import Reveal from '@/components/Reveal'
import { PRODUCTOS } from '@/lib/data'

export default function Productos() {
  return (
    <section id="productos" className="productos section-padding">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Lo que elaboramos</p>
          <h2 className="section-title">Panificados por mayor</h2>
          <p className="section-sub">
            Todo sale del horno a primera hora. Nuestros clientes reciben el pedido fresco, listo para la góndola.
          </p>
        </Reveal>

        <div className="prod-grid">
          {PRODUCTOS.map(({ nombre, detalle, imagen }, indice) => (
            <Reveal key={nombre} delay={(indice % 4) * 70}>
              <article className="prod-card">
                {imagen ? (
                  <img src={imagen} alt={nombre} className="prod-foto" loading="lazy" width="400" height="400" />
                ) : (
                  <div className="prod-foto prod-foto--vacia" aria-hidden="true">
                    <span>Foto próximamente</span>
                  </div>
                )}
                <div className="prod-info">
                  <h3 className="prod-nombre">{nombre}</h3>
                  <p className="prod-detalle">{detalle}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
