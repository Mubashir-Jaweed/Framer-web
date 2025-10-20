import Image from 'next/image'
import React from 'react'
import mic from '../../assets/hero-txt.png'
import person from '../../assets/hero-person.png'
import dummy from '../../assets/demo.png'
import Button from './ui/Button'
import Marquee from './ui/Marquee'


const Hero = () => {
    return (
        <div className="h-[130vh] pt-44 flex items-center flex-col gap-5">
            <span className='main-font text-center leading-[75px] text-[68px] font-normal [word-spacing:-10px] text-white '>
                The Best
                <span className='hero-tilt-text ml-3'>Digital</span>
                <br /> Marketing
                <span className='bg-[#f58327] rounded-full inline-flex justify-center items-end mx-2 align-top'><Image alt='mic' src={mic} className='h-[75px] w-[75px] object-contain -rotate-12' /></span>
                Agency.
            </span>
            <span className='sub-font text-center text-[17px] leading-7 font-light text-zinc-300'>
                We believe in combining innovative design, sustainable practices, and
                <br /> exceptional craftsmanship to bring your vision to life.
            </span>
            <Button btnText='Get Template' />
            <div className='hero-gradient relative flex-1 w-full flex justify-center'>
                <Image alt='person' src={person} className='z-10 image-gradient absolute bottom-4 h-[680px] w-auto  ' />
                <Marquee customClass='absolute top-[40%]' text="Best Marketing Agency"/>
                <div className='z-20 absolute left-[190px] -bottom-[7%] flex flex-col gap-2 border-[0.5px] leading-[25px] rounded-[30px] max-w-[370px] p-5'>
                    <span className='uppercase text-white text-[20px] main-font '>
                        #1 Digital Marketing Agency In Asia
                    </span>
                    <span className='border-b-[0.5px] border-zinc-800 w-full'></span>
                    <div className='border flex justify-between gap-2'>
                        <div className='flex '>
                           {[...Array(4)].map((_,i)=>(
                             <span key={i} className='rounded-full h-[50px] w-[50px] border'>
                            <Image className='rounded-full w-full h-full'  src={dummy} alt='hello'/>
                            </span>
                           ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
