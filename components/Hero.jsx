import BotonWhatsApp from '@/components/BotonWhatsApp'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-inner container">
        <div className="hero-texto">
          <p className="hero-ubicacion">Oberá · Misiones</p>
          <h1 className="hero-title">
            Panadería mayorista en Oberá:{' '}
            <span className="hero-accent">pan fresco para tu comercio</span>
          </h1>
          <p className="hero-sub">
            Un emprendimiento familiar que acompaña al amigo comerciante: llevamos la frescura del horno a las góndolas de Oberá y la zona centro de Misiones.
          </p>
          <div className="hero-botones">
            <BotonWhatsApp />
            <a href="#productos" className="boton boton--contorno">Ver productos</a>
          </div>
        </div>
        <img
          src="/img/logoPanaderia.webp"
          alt="Logo de ¡Que Rico! Panificados"
          className="hero-logo"
          width="520"
          height="347"
          fetchpriority="high"
        />
      </div>

    </section>
  )
}
