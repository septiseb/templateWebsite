import React from 'react'

export default function Galery({ images }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
      <div className="mx-auto mb-4 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Galería
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images?.map((img, idx) => (
          <div key={idx}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img.src}
              alt={img.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
