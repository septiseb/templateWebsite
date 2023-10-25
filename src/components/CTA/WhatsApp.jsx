import React from 'react'
import Image from 'next/image'
import WhatsAppSVG from '@/utils/WhatsApp.svg'

export default function WhatsApp({ phoneNumber }) {
  const defaultMessage = 'Hola! Me gustaría saber más.' // optional, replace with your default message
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`

  return (
    <div id="cta_whatsapp" className="fixed bottom-5 right-5 z-50">
      <button id="cta_whatsapp">
        <a id="cta_whatsapp" href={waLink} target="_blank">
          <Image
            id="cta_whatsapp"
            className="w-16 lg:w-20"
            src={WhatsAppSVG}
            alt="WhatsApp Chat Button"
          />
        </a>
      </button>
    </div>
  )
}
