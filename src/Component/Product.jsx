import React from 'react'
import Button from './Button'

function Product({ val, count, mover }) {
  return (
    <div className='w-full flex items-center justify-between h-[23rem] text-white '>
      <div onMouseEnter={()=> mover(count)} className='max-w-screen-xl mx-auto text-white flex items-center  gap-[40vw] '>
        <h1 className='text-5xl'>{val.title}</h1>
        <div className='flex flex-col'>
          <p className='w-[30vw] '>
            {val.description}
          </p>

          <div className='flex gap-5 mt-2 '>
            {val.Live && (<Button title="Get Started" />)}
            {val.Case && (<Button title="Case Study" />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
