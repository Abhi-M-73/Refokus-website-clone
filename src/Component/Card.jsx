import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

function Card({width, start, para, button, h3, h1}) {
    return (
        <div className={`w-1/2 p-5 bg-gray-800 rounded-xl hover:px-6 hover:transition-all hover:bg-white hover:text-black text-white ${width} bg-purple-800 font-sans h-[30vw] flex flex-col items-start justify-between`}>
            <div className='flex w-full flex-col '>
                <div className='flex  items-center justify-between font-semibold'>
                    <h3>{h3}</h3>
                    <MdArrowRightAlt />
                </div>
                <div className='text-3xl mt-2'>
                    <h1>{h1}</h1>
                </div>
            </div>
            <div>
                {start && (<h1 className='text-6xl font-semibold'>Start A Project</h1>)}
                {button && (<button className='px-4 py-2 rounded-full border-2 mt-3  font-semibold'>Contact Us</button>)}
                {para && (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>)}
            </div>
        </div>




    )
}

export default Card
