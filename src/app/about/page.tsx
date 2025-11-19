import React from 'react'
import Navbar from '../components/ui/Navbar'
import Hero from './components/Hero'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import About from './components/About'
import Brands from './components/Brands'
import Values from './components/Values'
import Gallery from './components/Gallery'

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
      <About/>
      <Brands/>
      <Values/>
      <Gallery/>
      <Faq/>
      <Contact/>

      
    </div>
  )
}

export default page
