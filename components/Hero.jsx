export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-inner container">
        <img
          src="/img/logoPanaderia.webp"
          alt="¡Que Rico! Panadería Artesanal en Oberá, Misiones"
          className="hero-logo"
          priority="true"
        />
        <h1 className="hero-title">
          Pan artesanal fresco,<br />
          <span className="hero-accent">directo a tu comercio</span>
        </h1>
        <p className="hero-sub">
          Más de 20 años llevando la frescura del horno a las góndolas de Oberá y zona centro de Misiones.
        </p>
      </div>
    </section>
  )
}
