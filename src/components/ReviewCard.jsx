import { StarIcon } from '@heroicons/react/20/solid'

export default function ReviewCard({ testimonial }) {
  return (
    <div className="w-80">
      <figure
        key={testimonial.author.handle}
        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
      >
        <div className="flex gap-x-1 text-indigo-600">
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote className="text-gray-900">
          <p>{`“${testimonial.body}”`}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-x-4">
          <img
            className="h-10 w-10 rounded-full bg-gray-50"
            src={testimonial.author.imageUrl}
            alt=""
          />
          <div>
            <div className="font-semibold">{testimonial.author.name}</div>
            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
