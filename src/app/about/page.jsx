import About from '@/components/about'
import Testimonials from '@/components/Testimonials'
import React from 'react'

function page() {
  return (
    <div className=' bg-gradient-to-b from-green-50 to-white'>
      <About/>
      <Testimonials/>
    </div>
  )
}

export default page
