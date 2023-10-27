export default function FAQS({faqs}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-8 sm:py-16 lg:px-8 lg:py-12">
        <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">Preguntas Frecuentes</h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs?.map((faq, idx) => (
            <div key={idx} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base text-xl font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 text-lg lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
