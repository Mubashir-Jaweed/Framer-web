import React from 'react'
import Navbar from '../components/ui/Navbar'
import Hero from './components/Hero'
import Contact from '../components/Contact'

const page = () => {
  return (
    <div className="w-full h-auto scroll-smooth">
      {/* fixed bg */}
      <div className="fixed-bg ">
        <h1 className="text-[#333] text-5xl text-center pt-40">**********</h1>
        <h1 className="text-[#333] text-5xl text-center pt-40">----------</h1>
      </div>
      <Navbar/>
      <Hero/>
      <Contact/>
    </div>
  )
}

export default page
