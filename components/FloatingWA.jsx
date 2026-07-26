'use client'
import { WA_CHAT } from '@/lib/data'
import { IcoWA } from '@/components/icons'

export default function FloatingWA() {
  return (
    <a
      href={WA_CHAT}
      target="_blank"
      rel="noopener noreferrer"
      className="wpp-float"
      aria-label="Contactar por WhatsApp"
    >
      <IcoWA size={30} />
    </a>
  )
}
