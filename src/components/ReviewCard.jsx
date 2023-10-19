import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import GoogleLogo from '@/utils/GoogleLogo.svg'

export default function ReviewCard({ testimonial }) {
  return (
    <div className="w-auto">
      <figure
        key={testimonial.author.handle}
        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
      >
        <div className='flex items-center justify-between'>
        <div className="flex gap-x-1 text-amber-400">
          {Array.from({ length: testimonial.rating })?.map((_, index) => (
            <StarIcon key={index} className="h-5 w-5 flex-none" aria-hidden="true" />
          ))}
        </div>
        <div>
        <Image className="w-20"src={GoogleLogo} />
        </div>
        </div>
        <div className="font-semibold mb-4">{testimonial.author.name}
        </div>
        <blockquote className="text-gray-900">
          <p>{`“${testimonial.body}”`}</p>
        </blockquote>
      </figure>
    </div>
  )
}
