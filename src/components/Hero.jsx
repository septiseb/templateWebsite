import { splitTextAtDot } from '@/services/helper'

export default function Hero({ children, business }) {
  const [firstPart, secondPart] = splitTextAtDot(business.description)

  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base text-lg font-semibold leading-7 text-gray-600">
                Empresa
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {business.title}
              </h1>
              <div className="max-w-xl">
                <p className="mt-2 text-lg">{firstPart}</p>
                <p className="mt-4 text-lg">{secondPart}</p>
              </div>
            </div>
          </div>
          <div className="lg:pr-4">
            <div className="review-container grid grid-cols-1 place-items-center gap-x-4 gap-y-8 lg:grid-cols-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
