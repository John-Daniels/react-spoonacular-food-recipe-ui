import React from "react"
import { FcLike } from "react-icons/fc"

import img from "../../assets/images/ice-cream-plate.png"

const RecipeCard = ({ recipe }) => {
  const { title, id, readyInMinutes, image, dishTypes, summary } = recipe

  return (
    <div className='max-w-[15rem] h-[360px] md:max-w-[17rem] rounded overflow-hidden shadow-lg pb-[3px]'>
      <picture>
        <source
          media='(min-width:650px)'
          srcSet={image}
          className='object-cover'
        />
        <source
          media='(min-width:465px)'
          srcSet={image}
          className='object-cover'
        />
        <img src={img} alt='img' className='grayscale' />
      </picture>

      <div className='px-6 py-2'>
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
        {dishTypes.map(
          (dishType, index) =>
            index < 4 && (
              <span
                key={index}
                className='bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
              >
                #{dishType}
              </span>
            )
        )}
      </div>
    </div>
  )
}

export default RecipeCard
