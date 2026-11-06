import { IcoCash, IcoTransfer } from '@/components/icons'

/* ── WhatsApp ── */
export const WA = '5491168044215'
export const WA_CHAT = `https://wa.me/${WA}?text=Hola%20%C2%A1Que%20Rico!%20Quer%C3%ADa%20consultar%20sobre%20sus%20productos.`

/* ── Cinta superior ── */
export const TICKER = [
  '🥖 PANADERÍA FAMILIAR DE OBERÁ',
  '🥐 REPARTO EN OBERÁ Y ZONA CENTRO',
  '🚚 ATENCIÓN DE LUNES A SÁBADO',
  '☕ FRESCURA DEL HORNO DIRECTO A TU GÓNDOLA',
]

/* ── Navegación ── */
export const NAV_LINKS = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#productos', label: 'Productos' },
  { href: '/#reparto', label: 'Reparto' },
  { href: '/#pedidos', label: 'Cómo pedir' },
]

/* ── Productos (el orden de esta lista es el orden en la página) ──
   imagen: ruta dentro de public/img/ (WebP cuadrado 800x800).
   alt: descripción real de la foto, para accesibilidad y SEO. */
export const PRODUCTOS = [
  { nombre: 'Pan',                       detalle: 'Pan de mesa fresco, recién horneado',     imagen: '/img/pan-blanco.webp',         alt: 'Pan blanco de mesa recién horneado, suelto y en bandeja, listo para empaquetar' },
  { nombre: 'Pan de salvado',            detalle: 'Pan negro de salvado, recién elaborado',  imagen: '/img/pan-salvado-bolsa.webp',  alt: 'Pan negro de salvado suelto y en bolsa con la marca Que Rico' },
  { nombre: 'Prepizzas',                 detalle: 'Listas para hornear, al por mayor',       imagen: '/img/prepizza.webp',           alt: 'Prepizza envasada en bolsa transparente con la marca Que Rico' },
  { nombre: 'Torraditas y bizcochitos',  detalle: 'Crocantes, ideales para la merienda',     imagen: '/img/torraditas-bolsa.webp',   alt: 'Bolsas de torraditas y bizcochitos con la marca Que Rico, listas para la góndola' },
  { nombre: 'Pan para panchos',          detalle: 'Tiernos y en el tamaño justo',            imagen: '/img/pan-pancho.webp',         alt: 'Pan para panchos tradicional, blando y dorado' },
  { nombre: 'Pan para hamburguesas',     detalle: 'Suaves, para gastronomía y reventa',      imagen: '/img/pan-hamburguesa.webp',    alt: 'Panes de hamburguesa con sésamo sobre una tabla de madera' },
  { nombre: 'Tapas de empanadas',        detalle: 'Para horno y fritura, por docena',        imagen: '/img/tapas-empanadas.webp',    alt: 'Pilas de tapas de empanadas crudas, listas para rellenar' },
  { nombre: 'Tapas de pastelitos',       detalle: 'Listas para rellenar',                    imagen: '/img/pastelitos.webp',         alt: 'Pastelitos dorados y fritos sobre una bandeja' },
  { nombre: 'Pan rallado',               detalle: 'Envasado, para rebozar y cocinar',        imagen: '/img/pan-rallado-bolsa.webp',  alt: 'Bolsa de pan rallado envasado' },
  { nombre: 'Torniaditos',               detalle: 'Consultá presentaciones por WhatsApp',    imagen: '/img/torniaditos-anis.webp',   alt: 'Torniaditos de anís sueltos y en bolsa con la marca Que Rico' },
]

/* ── Con quién trabajamos ── */
export const CLIENTES = [
  {
    titulo: 'Comercios',
    texto: 'Supermercados, despensas de barrio, maxiquioscos y quioscos. Acompañamos al amigo comerciante con pan fresco para su góndola.',
  },
  {
    titulo: 'Gastronomía',
    texto: 'Pizzerías, cafeterías, restaurantes, cocinas y comedores. Un suministro constante, a la medida de lo que necesitás en el día a día.',
  },
  {
    titulo: 'Revendedores',
    texto: '¿Tenés vehículo propio y tu cartera de clientes? Te abastecemos de mercadería y ganás hasta un 30% de la venta bruta.',
  },
]

/* ── Cómo hacer tu pedido ── */
export const PASOS_PEDIDO = [
  'Escribinos por WhatsApp y contanos qué necesitás.',
  'Coordinamos cantidades, días y entrega.',
  'Recibís el pedido en tu comercio.',
]

/* ── Zona de reparto ── */
export const ZONA_REPARTO = [
  { nombre: 'Oberá',        tipo: 'ciudad' },
  { nombre: 'Campo Ramón',  tipo: 'localidad' },
  { nombre: 'San Martín',   tipo: 'localidad' },
  { nombre: 'Villa Bonita', tipo: 'localidad' },
  { nombre: 'Guaraní',      tipo: 'localidad' },
  { nombre: 'Caayarí',      tipo: 'localidad' },
]

/* ── Medios de pago ── */
export const PAYMENTS = [
  { icon: <IcoCash />, name: 'Efectivo', sub: 'Pesos argentinos' },
  { icon: <IcoTransfer />, name: 'Transferencia', sub: 'CBU / Alias disponibles' },
]
