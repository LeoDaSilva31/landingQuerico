import Ticker from '@/components/Ticker'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nosotros from '@/components/Nosotros'
import Clientes from '@/components/Clientes'
import Productos from '@/components/Productos'
import ZonaReparto from '@/components/ZonaReparto'
import ComoPedir from '@/components/ComoPedir'
import Pagos from '@/components/Pagos'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'

export default function Page() {
  return (
    <>
      <Ticker />
      <Header />
      <main id="main">
        <Hero />
        <Nosotros />
        <Clientes />
        <Productos />
        <ZonaReparto />
        <ComoPedir />
        <Pagos />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
