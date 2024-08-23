import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Button( {title}) {
  return (
    <div className='py-2 px-4 flex items-center justify-center gap-3 rounded-full font-semibold bg-white text-black'>
      <h4>{title}</h4><MdOutlineArrowOutward />
    </div>
  )
}

export default Button
