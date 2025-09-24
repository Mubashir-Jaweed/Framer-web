import Image from 'next/image'
import React from 'react'
import mic from '../../assets/hero-txt.png'

const Hero = () => {
    return (
        <div className="hero-gradient  h-[120vh] py-44 flex items-center flex-col gap-5">
            <span className='main-font text-center leading-20 text-[68px] font-normal [word-spacing:-10px] '>
                The Best
                <span className='hero-tilt-text ml-3'>Digital</span>
                <br/> Maketing 
                <span className='bg-[#f58327] rounded-full inline-flex justify-center items-end mx-2 align-top'><Image alt='mic' src={mic} className='h-[75px] w-[75px] object-contain -rotate-12'/></span> 
                Agency.
                </span>
                <div className='text-center text-[18px] font-thin text-zinc-300'>
                    We believe in combining innovative design, sustainable practices, and 
                    <br/> exceptional craftsmanship to bring your vision to life.
                </div>
        </div>
    )
}

export default Hero
