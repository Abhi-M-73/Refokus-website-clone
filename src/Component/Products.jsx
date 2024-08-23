import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

  var data = [
    { title: "Arqitel", description: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.", Live: true, Case: true },
    { title: "BCG Platinion", description: "We created a robust website that blends top notch design and facilitates dynamic content to the requirements of 74 locations, all powered by Webflow’s modern CMS, giving the BCG Platinion marketing team a completely new experience for content management.", Live: true, Case: false },
    { title: "Sevdesk", description: "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 View Case Study", Live: true, Case: false },
    { title: "Layout Land", description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", Live: true, Case: false },
    { title: "Singularity", description: "We leveraged the momentum created by Singularity's rebrand, made by their design team, to push forward with a new site. We restructured the information architecture and enabled a CMS for sustainable growth, while taking the UI to new heights with a range of animated assets and interactions.", Live: true, Case: false },
  ]

  const [pos, setPos] = useState(0)

  const mover = (val) => {
    setPos(val * 23)
  }

  return (
    <div className='mt-20 relative'>
      {data.map((elem, index) => <Product mover={mover} count={index} key={index} val={elem} />)}
      <div className='h-full w-full absolute top-0 pointer-events-none'>
        <motion.div initial={{ y: pos }} animate={{ y: pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} className='absolute w-96 h-[23rem] overflow-hidden bg-white left-[30%] '>
          <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} className='h-full w-full bg-violet-500'></motion.div >
          <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} className='h-full w-full bg-teal-800'></motion.div >
          <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} className='h-full w-full bg-orange-500'></motion.div>
          <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} className='h-full w-full bg-gray-600'></motion.div >
          <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} className='h-full w-full bg-sky-500'></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
