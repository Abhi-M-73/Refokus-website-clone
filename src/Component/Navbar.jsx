import React from 'react'
import Button from './Button'


function Navbar() {
  return (
    <div className='max-w-screen-xl justify-between mx-auto p-3 border-b-2 border-zinc-700 flex gap-24 '>
     <div className='flex items-center '>
     <img className="ml-3 h-8"   src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
     <div className="links flex gap-5 ml-16">
        {["Home", "Work", "Culture", "News"].map((elem,index)=>(
            <a  className='flex items-center text-white justify-center font-semibold gap-1 font-regular' href="#" key={index} >{index===1 && (<span style={{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block h-2 w-2 rounded-full bg-green-500'></span>) }
             {elem}</a>
        ))} 
     </div>
     </div>
     <Button title="Start Project" />
      
    </div>
  )
}

export default Navbar
