import './globals.css'
import { PRODUCTOS } from '@/lib/data'

const DOMAIN = 'https://panificadosquerico.obersys.com'

export const metadata = {
  metadataBase: new URL(DOMAIN),
  title: 'Que Rico · Panificados al por mayor en Oberá, Misiones',
  description:
    'Panadería mayorista en Oberá desde 1999. Acompañamos al amigo comerciante: almacenes, despensas, quioscos, pizzerías y restaurantes. Pedí por WhatsApp.',
  keywords: [
    'distribucion mayorista panificados misiones',
    'proveedor pan fresco obera',
    'panificados para comercios misiones',
    'distribuidor panificados zona centro misiones',
    'pan mayorista campo ramon villa bonita',
    'que rico panificados obera',
    'reparto panificados misiones',
    'panaderia b2b obera',
  ],
  icons: {
    icon: { url: '/img/icon.png', type: 'image/png' },
    apple: '/img/icon.png',
  },
  openGraph: {
    title: 'Que Rico · Panificados al por mayor en Oberá, Misiones',
    description:
      'Panadería mayorista en Oberá desde 1999. Acompañamos al amigo comerciante: almacenes, despensas, quioscos, pizzerías y restaurantes. Pedí por WhatsApp.',
    url: `${DOMAIN}/`,
    siteName: 'Que Rico Panificados',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: `${DOMAIN}/img/fachada.jpg`,
        width: 1200,
        height: 630,
        alt: 'Fachada de Que Rico Panificados en Oberá, Misiones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Que Rico · Panificados al por mayor en Oberá, Misiones',
    description: 'Panadería mayorista en Oberá desde 1999. Acompañamos al amigo comerciante: almacenes, despensas, quioscos, pizzerías y restaurantes. Pedí por WhatsApp.',
    images: [`${DOMAIN}/img/fachada.jpg`],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${DOMAIN}/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Que Rico Panificados',
  description:
    'Panadería mayorista en Oberá desde 1999. Acompañamos al amigo comerciante: almacenes, despensas, quioscos, pizzerías y restaurantes. Pedí por WhatsApp.',
  '@id': `${DOMAIN}/#panaderia`,
  url: `${DOMAIN}/`,
  foundingDate: '1999',
  telephone: '+5491168044215',
  image: `${DOMAIN}/img/fachada.jpg`,
  logo: `${DOMAIN}/img/logoPanaderia.webp`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oberá',
    addressRegion: 'Misiones',
    postalCode: '3360',
    addressCountry: 'AR',
  },
  areaServed: ['Oberá', 'Campo Ramón', 'San Martín', 'Villa Bonita', 'Guaraní', 'Caayarí'],
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Panificados por mayor',
    itemListElement: PRODUCTOS.map(({ nombre }) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Product', name: nombre },
    })),
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <head>
        <meta name="theme-color" content="#EF4123" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Saltar al contenido</a>
        {children}
      </body>
    </html>
  )
}
