import React from 'react'
import Navbar from './Component/Navbar'
import Work from './Component/Work'
import Stripes from './Component/Stripes'
import Products from './Component/Products'
import Marquees from './Component/Marquees'
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const scroll = new LocomotiveScroll();

  return (
    <div className='min-h-screen w-full bg-black font-["satoshi"]'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
