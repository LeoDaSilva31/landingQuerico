import {
  IcoBread, IcoPrepizza, IcoBiscochito, IcoPancho, IcoEmpanada, IcoAnisado,
  IcoCash, IcoTransfer,
  IcoPin, IcoWA, IcoTruck
} from '@/components/icons'

/* ── WhatsApp ── */
export const WA = '5491168044215'
export const WA_CHAT = `https://wa.me/${WA}?text=Hola%20%C2%A1Que%20Rico!%20Quer%C3%ADa%20consultar%20sobre%20sus%20productos.`

/* ── Ticker ── */
export const TICKER = [
  '🥖 MÁS DE 20 AÑOS JUNTO A VOS',
  '🥐 REPARTO EN OBERÁ, CAMPO RAMÓN Y VILLA BONITA',
  '🍞 CALIDAD ARTESANAL PARA TU COMERCIO',
  '🚚 DISTRIBUCIÓN DIARIA EN ZONA CENTRO',
  '🥯 FACTURAMOS A COMERCIOS',
  '☕ FRESCURA DEL HORNO DIRECTO A TU GÓNDOLA',
]

/* ── Nav links ── */
export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#reparto', label: 'Zona de Reparto' },
  { href: '#productos', label: 'Productos' },
]

/* ── Productos ── */
export const PRODUCTS = [
  { icon: <IcoBread />,      name: 'Pan Artesanal',       sub: 'Pan de mesa fresco, directo del horno' },
  { icon: <IcoPrepizza />,   name: 'Prepizzas',            sub: 'Listas para hornear, al por mayor' },
  { icon: <IcoBiscochito />, name: 'Torraditas y Biscochitos', sub: 'Crocantes, ideales para merienda' },
  { icon: <IcoPancho />,     name: 'Pan para Panchos',     sub: 'Esponjosos y en el tamaño justo' },
  { icon: <IcoEmpanada />,   name: 'Tapas de Empanadas',   sub: 'Para horno y fritura, por docena' },
  { icon: <IcoAnisado />,    name: 'Masas con Anís',       sub: 'Sabor tradicional de nuestra panadería' },
]

/* ── Zona de reparto ── */
export const ZONA_REPARTO = [
  { nombre: 'Oberá', tipo: 'ciudad', desc: 'Zona centro y barrios' },
  { nombre: 'Campo Ramón', tipo: 'localidad', desc: 'Reparto diario' },
  { nombre: 'San Martín', tipo: 'localidad', desc: 'Reparto frecuente' },
  { nombre: 'Villa Bonita', tipo: 'localidad', desc: 'Reparto diario' },
  { nombre: 'Guaraní', tipo: 'localidad', desc: 'Reparto programado' },
  { nombre: 'Caayarí', tipo: 'localidad', desc: 'Reparto programado' },
]

/* ── Medios de pago ── */
export const PAYMENTS = [
  { icon: <IcoCash />, name: 'Efectivo', sub: 'Pesos argentinos' },
  { icon: <IcoTransfer />, name: 'Transferencia', sub: 'CBU / Alias disponibles' },
]

/* ── Horarios ── */
export const SCHEDULE = [
  { day: 'Lunes a Sábado', time: '06:00 – 20:00' },
  { day: 'Domingo', time: 'Cerrado' },
]
