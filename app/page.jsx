import Ticker from '@/components/Ticker'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nosotros from '@/components/Nosotros'
import ZonaReparto from '@/components/ZonaReparto'
import Productos from '@/components/Productos'
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
        <ZonaReparto />
        <Productos />
        <Pagos />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
