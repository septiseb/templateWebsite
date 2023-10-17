import React from 'react'

export default function Maps({placeId}) {
  return (
    <div id="location" className='flex justify-center m-0 lg:m-8 mx-auto max-w-7xl px-6 lg:px-8"  '>
      <iframe
        className='w-full h-screen'
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=AIzaSyDa6BIeSbuTuxkxCIa0G_2HhjxclnUdyS4`}
      ></iframe>
    </div>
  )
}
