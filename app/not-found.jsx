import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BotonWhatsApp from '@/components/BotonWhatsApp'

export const metadata = {
  title: 'Página no encontrada · Que Rico Panificados',
  robots: { index: false, follow: true },
}

export default function PaginaNoEncontrada() {
  return (
    <>
      <Header />
      <main id="main" className="no-encontrada">
        <div className="container">
          <p className="no-encontrada-codigo">Error 404</p>
          <h1 className="section-title">No encontramos esta página</h1>
          <p className="section-sub">
            Puede que el enlace esté mal escrito o que la página ya no exista.
            Volvé al inicio o escribinos y te ayudamos con tu pedido.
          </p>
          <div className="no-encontrada-botones">
            <a href="/" className="boton boton--oscuro">Volver al inicio</a>
            <BotonWhatsApp texto="Escribinos por WhatsApp" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
