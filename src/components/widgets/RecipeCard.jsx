import React from "react"
import { FcLike } from "react-icons/fc"

import img from "../../assets/images/ice-cream-plate.png"

const RecipeCard = ({ recipe }) => {
  const { title, id, readyInMinutes, image, dishTypes, summary } = recipe

  return (
    <div className='max-w-[15rem] md:max-w-[19rem] rounded overflow-hidden shadow-lg'>
      <picture>
        <source
          media='media screen and (min-width: 900)'
          sizes='300x300'
          src={image}
        />
        <source
          media='media screen and (max-width: 900)'
          sizes='400x400'
          src={image}
        />
        <img
          className='w-full object-cover grayscale'
          src={img}
          alt='Sunset in the mountains'
        />
      </picture>

      <div className='px-6 py-4'>
        <div className='flex justify-between items-center mb-2'>
          <div className='font-bold text-xl truncate hover:text-clip'>
            {title}
          </div>
          <div className='cursor-pointer'>
            <FcLike
              className={`w-[1.3rem] h-[1.4rem] text-gray-700 fill-current`}
            />
          </div>
        </div>
        <p className='text-gray-700 text-base break-words truncate hover:text-clip'>
          {summary}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2 flex justify-start items-center flex-wrap'>
        {dishTypes.map((dishType, index) => (
          <span
            key={index}
            className='bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
          >
            #{dishType}
          </span>
        ))}
      </div>
    </div>
  )
}

export default RecipeCard
