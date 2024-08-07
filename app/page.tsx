import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Description from './components/Description'

const page = () => {
  return (
    <div>
      <Hero/>
      <Description/>
      <Slider/>
    </div>
  )
}

export default page