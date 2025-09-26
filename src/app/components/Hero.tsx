import Image from 'next/image'
import React from 'react'
import mic from '../../assets/hero-txt.png'
import person from '../../assets/hero-person.png'
import Button from './ui/Button'

const Hero = () => {
    return (
        <div className="  h-[130vh] pt-44 flex items-center flex-col gap-5">
            <span className='main-font text-center leading-20 text-[68px] font-normal [word-spacing:-10px] '>
                The Best
                <span className='hero-tilt-text ml-3'>Digital</span>
                <br/> Marketing 
                <span className='bg-[#f58327] rounded-full inline-flex justify-center items-end mx-2 align-top'><Image alt='mic' src={mic} className='h-[75px] w-[75px] object-contain -rotate-12'/></span> 
                Agency.
                </span>
                <span className='sub-font text-center text-[18px] font-light text-zinc-300'>
                    We believe in combining innovative design, sustainable practices, and 
                    <br/> exceptional craftsmanship to bring your vision to life.
                </span>
                <Button btnText='Get Template'/>
                <div className='hero-gradient flex-1 w-full flex justify-center'>
                    <Image alt='person' src={person} className='image-gradient h-[680px] w-auto  object-cover [mask-image:linear-gradient(to_top,white,black)] [mask-repeat:no-repeat] [mask-size:100%]' />
                </div>
        </div>
    )
}

export default Hero
