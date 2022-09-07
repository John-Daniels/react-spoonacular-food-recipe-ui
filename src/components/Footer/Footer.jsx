import React, { useState } from "react"

const Footer = () => {
  const [search, setSearch] = useState("")

  return (
    <div className='h-[70px] app__flex flex-col gap-[15px]'>
      <div className='w-[80%] h-[0.1px] bg-gray-300' />
      <h3>
        Built with love by <span className='text-green-300'>Johnkoder</span>
      </h3>
    </div>
  )
}

export default Footer
