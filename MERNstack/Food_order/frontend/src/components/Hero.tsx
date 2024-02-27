import React from 'react'
import pizza from '../assets/pizza.jpg'

function Hero() {
  return (
    <div>
        <img src={pizza} className='w-full max-h-[600px] object-cover'/>
    </div>
  )
}

export default Hero