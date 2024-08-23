import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full ' >
      <div className='max-w-screen-xl mx-auto flex gap-2 py-32'>
      <Card width={"basis-1/3"} start={false} para={true} button={false} h3={"Blog"} h1={"News & Insights"} />
      <Card width={"basis-2/3"} start={true} para={false} button={true} h3={"Get in Touch"} h1={"Lets get's to it. Togather"} />
    </div>
    </div>
  )
}

export default Cards

