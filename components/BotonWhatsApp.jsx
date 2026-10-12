import { WA_CHAT } from '@/lib/data'
import { IcoWA } from '@/components/icons'

/* Botón reutilizable que abre el chat de WhatsApp con el mensaje precargado */
export default function BotonWhatsApp({ texto = 'Pedí por WhatsApp', variante = 'primario' }) {
  return (
    <a
      href={WA_CHAT}
      target="_blank"
      rel="noopener noreferrer"
      className={`boton boton--${variante}`}
    >
      <IcoWA size={20} />
      {texto}
    </a>
  )
}
