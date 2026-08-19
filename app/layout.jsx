import './globals.css'

const DOMAIN = 'https://panificadosquerico.obersys.com'

export const metadata = {
  metadataBase: new URL(DOMAIN),
  title: 'Que Rico Panificados | Distribución Mayorista de Panificados | Oberá, Misiones',
  description:
    'Proveemos panificados artesanales frescos a comercios, almacenes y distribuidores de zona centro de Misiones. Distribución diaria desde Oberá — más de 20 años en el rubro.',
  keywords: [
    'distribucion mayorista panificados misiones',
    'proveedor pan artesanal obera',
    'panificados para comercios misiones',
    'distribuidor panificados zona centro misiones',
    'pan mayorista campo ramon villa bonita',
    'que rico panificados obera',
    'reparto panificados misiones',
    'panaderia b2b obera',
  ],
  icons: {
    icon: [
      { url: '/img/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/img/icon.png',
    apple: { url: '/img/icon.png', sizes: '180x180' },
  },
  openGraph: {
    title: 'Que Rico Panificados | Distribución Mayorista de Panificados | Oberá, Misiones',
    description:
      'Proveemos panificados artesanales frescos a comercios, almacenes y distribuidores de zona centro de Misiones. Distribución diaria desde Oberá — más de 20 años en el rubro.',
    url: DOMAIN,
    siteName: 'Que Rico Panificados',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: `${DOMAIN}/img/fachada.jpg`,
        width: 1200,
        height: 630,
        alt: 'Que Rico Panadería Artesanal - Oberá, Misiones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Que Rico Panificados | Distribución Mayorista de Panificados | Oberá, Misiones',
    description: 'Proveemos panificados artesanales frescos a comercios, almacenes y distribuidores de zona centro de Misiones. Distribución diaria desde Oberá.',
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
    'Proveemos panificados artesanales frescos a comercios, almacenes y distribuidores de zona centro de Misiones. Distribución diaria desde Oberá — más de 20 años en el rubro.',
  url: DOMAIN,
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
        <link rel="icon" type="image/png" sizes="512x512" href="/img/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/icon.png" />
        <meta name="theme-color" content="#c8722a" />
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
