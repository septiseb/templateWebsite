import { PlusIcon } from '@heroicons/react/20/solid'

export default function GetDirections({placeId }) {
    const baseURL = "https://www.google.com/maps/place/";

  return (
    <div className="flex-shrink-0">
      <a href={`${baseURL}?q=place_id:${placeId}`} target="_blank" rel="noopener noreferrer">
        <button
          id="cta_directions"
          type="button"
          className="relative inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Dirección
        </button>
      </a>
    </div>
  )
}

