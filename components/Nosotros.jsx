import Reveal from '@/components/Reveal'

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros section-padding">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Nuestra historia</p>
          <h2 className="section-title">Más de 20 años<br />acompañando tu mesa</h2>
        </Reveal>
        <div className="nosotros-grid">
          <Reveal delay={100}>
            <div className="nosotros-card">
              <span className="nosotros-num">20+</span>
              <p>Años de trayectoria elaborando panificados artesanales en Oberá</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="nosotros-card">
              <span className="nosotros-num">100%</span>
              <p>Producción artesanal con ingredientes seleccionados, cada día</p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="nosotros-card">
              <span className="nosotros-num">6+</span>
              <p>Localidades de Misiones reciben nuestro pan fresco diariamente</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <p className="nosotros-text">
            Lo que nació como un sueño familiar hoy llega a cada rincón de nuestra zona centro.
            Trabajamos con la misma pasión del primer día: hornos encendidos al amanecer,
            para que vos puedas ofrecer siempre lo mejor.
          </p>
          <p className="nosotros-cta">¡Sumate a nuestra historia!</p>
        </Reveal>
      </div>
    </section>
  )
}
