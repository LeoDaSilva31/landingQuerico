import Reveal from '@/components/Reveal'

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros section-padding">
      <div className="container nosotros-layout">
        <Reveal>
          <p className="eyebrow">Nuestra historia</p>
          <h2 className="section-title">Panadería de Oberá<br />desde 1999</h2>
          <p className="nosotros-text">
            Lo que nació como un sueño familiar hoy llega a cada rincón de nuestra zona centro.
            Trabajamos con la misma pasión del primer día: hornos encendidos al amanecer,
            para que vos puedas ofrecer siempre lo mejor.
          </p>
        </Reveal>
        <div className="nosotros-grid">
          <Reveal delay={100}>
            <div className="nosotros-card">
              <span className="nosotros-num">1999</span>
              <p>Desde 1999 elaborando pan fresco en Oberá</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="nosotros-card">
              <span className="nosotros-num">6</span>
              <p>Localidades con reparto</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
