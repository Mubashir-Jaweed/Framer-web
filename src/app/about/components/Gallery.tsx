'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import gallery1 from '@/assets/about.png'
import gallery2 from '@/assets/aboutPage.png'

const Gallery = () => {

 const [isRow1, setIsRow1] = useState(false)
 const [isRow2, setIsRow2] = useState(true)
 const [isRow3, setIsRow3] = useState(false)

  return (
    <div className='w-full p-2 md:p-10 lg:p-32 text-white flex flex-col items-center gap-12'>
            {/* row 1 */}
            <div className='flex justify-start items-center md:items-start flex-col lg:flex-row lg:items-center lg:gap-5 gap-0 '>
                <div className='bg-[#232323] flex justify-center items-center rounded-full px-3 py-1.5'>
                    <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Gallery</span>
                </div>
                <div>
                    <span className='main-font text-[28px] md:text-[30px] lg:text-[38px] font-normal leading-[44px] [word-spacing:-3px] text-white'>Our Agency Snaps</span>
                </div>
            </div>
            {/* row 2 */}
            <div className='flex justify-center md:justify-end items-center gap-5'>
                <p className='w-[90%] text-center md:text-start lg:w-[35%] md:text-[18px]  font-normal text-[#b9b9b9] break-words whitespace-pre-line'>
From team outings and office shenanigans to special events and celebrations, these photos capture the essence of our vibrant culture and the bonds that unite us.                </p>
            </div>
            {/* row 3 */}
            <div className='w-full flex flex-wrap  gap-3'>
                <Image alt='' src={gallery1} onMouseEnter={()=>{isRow1 && setIsRow1(false) }} className={`object-cover rounded-[30px] h-[450px] transition-all duration-500 ${isRow1 ? 'w-full 2xl:w-[33%] grayscale' : 'w-full 2xl:w-[66%]'}`}/>
                <Image alt='' src={gallery2} onMouseEnter={()=>{!isRow1 && setIsRow1(true) }} className={`object-cover rounded-[30px] h-[450px] transition-all duration-500 ${isRow1 ? 'w-full 2xl:w-[66%]' : 'w-full 2xl:w-[33%] grayscale'}`}/>
                <Image alt='' src={gallery2} onMouseEnter={()=>{isRow2 && setIsRow2(false) }} className={`object-cover rounded-[30px] h-[450px] transition-all duration-500 ${isRow2 ? 'w-full 2xl:w-[33%] grayscale' : 'w-full 2xl:w-[66%]'}`}/>
                <Image alt='' src={gallery1} onMouseEnter={()=>{!isRow2 && setIsRow2(true) }} className={`object-cover rounded-[30px] h-[450px] transition-all duration-500 ${isRow2 ? 'w-full 2xl:w-[66%]' : 'w-full 2xl:w-[33%] grayscale'}`}/>
                <Image alt='' src={gallery1} onMouseEnter={()=>{isRow3 && setIsRow3(false) }} className={`object-cover rounded-[30px] h-[450px] transition-all duration-500 ${isRow3 ? 'w-full 2xl:w-[33%] grayscale' : 'w-full 2xl:w-[66%]'}`}/>
                <Image alt='' src={gallery2} onMouseEnter={()=>{!isRow3 && setIsRow3(true) }} className={`object-cover rounded-[30px] h-[450px] transition-all duration-500 ${isRow3 ? 'w-full 2xl:w-[66%]' : 'w-full 2xl:w-[33%] grayscale'}`}/>
            </div>
    </div>
  )
}

export default Gallery
