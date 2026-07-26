import './globals.css'

const DOMAIN = 'https://panificadosquerico.obersys.com'

export const metadata = {
  title: '¡Que Rico! | Panadería Artesanal en Oberá, Misiones',
  description:
    'Más de 20 años elaborando pan artesanal en Oberá. Distribución mayorista diaria en Campo Ramón, Villa Bonita, San Martín, Guaraní, Caayarí y toda la zona centro de Misiones.',
  keywords: [
    'panaderia obera',
    'panificados mayoristas misiones',
    'pan artesanal obera',
    'panaderia que rico',
    'facturas obera misiones',
    'reparto pan zona centro misiones',
    'panaderia campo ramon',
    'panaderia villa bonita misiones',
  ],
  openGraph: {
    title: '¡Que Rico! | Panadería Artesanal en Oberá, Misiones',
    description:
      'Distribución mayorista de panificados artesanales en Oberá y zona centro. Más de 20 años de trayectoria.',
    url: DOMAIN,
    siteName: '¡Que Rico! Panadería',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: `${DOMAIN}/img/logoPanaderia.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¡Que Rico! | Panadería Artesanal en Oberá',
    description: 'Pan artesanal fresco con distribución diaria en zona centro de Misiones.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${DOMAIN}/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: '¡Que Rico! Panadería Artesanal',
  description:
    'Panadería artesanal con más de 20 años de trayectoria. Distribución mayorista en Oberá y zona centro de Misiones.',
  url: DOMAIN,
  telephone: '+5491168044215',
  image: `${DOMAIN}/img/logoPanaderia.webp`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oberá',
    addressRegion: 'Misiones',
    postalCode: '3360',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -27.485,
    longitude: -55.118,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '06:00',
    closes: '20:00',
  },
  areaServed: ['Oberá', 'Campo Ramón', 'San Martín', 'Villa Bonita', 'Guaraní', 'Caayarí'],
  priceRange: '$$',
  servesCuisine: 'Panificados artesanales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Nunito:wght@400;600;700&display=swap"
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
