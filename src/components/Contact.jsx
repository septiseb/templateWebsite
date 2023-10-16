import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Contact({ email, phoneNumber }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();

    const compiledMessage = `Hola, soy ${name}. ${message}`;
    const whatsAppURL = `https://wa.me/521${phoneNumber}?text=${encodeURIComponent(compiledMessage)}`;

    window.location.href = whatsAppURL;
  };

  return (
    <div id="contact" className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Mándanos un Mensaje:
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Ponte en contacto con nosotros para más información, será un placer poderte ayudar:
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Teléfono</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+52 {phoneNumber}</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Correo</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{email}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form
              onSubmit={handleWhatsAppRedirect}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Nombre Completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Escribir mensaje"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
