import React from 'react'
import aboutPage from '@/assets/aboutPage.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='py-24 px-12 felx justify-center items-center'>
      <div className='relative rounded-[30px] w-full h-[600px] overflow-hidden'>
        <Image src={aboutPage} alt='' className=' h-full w-full object-cover'/>
        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000ce] flex justify-center items-end p-5'>
          <div>
            <span className='main-font text-[50px] font-normal leading-[55px] [word-spacing:-3px] [letter-spacing:-2px] text-center flex justify-center items-center text-white'>Hey There! Welcome to</span>
            <span className='main-font text-[50px] font-normal leading-[55px] [word-spacing:-3px] [letter-spacing:-2px] text-center flex justify-center items-center text-color'>Celestial Solutions!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
