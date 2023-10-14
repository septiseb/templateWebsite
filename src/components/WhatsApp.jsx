import React from 'react';
import Image from 'next/image';
import WhatsAppSVG from "@/utils/WhatsApp.svg";

export default function WhatsApp() {
  const phoneNumber = '1234567890'; // replace with your phone number
  const defaultMessage = 'Hello! I\'d like to chat.'; // optional, replace with your default message
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
        <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Image className='w-16 lg:w-20' src={WhatsAppSVG} alt="WhatsApp Chat Button" />
        </a>
    </div>
  )
}
