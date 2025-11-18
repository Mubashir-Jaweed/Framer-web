'use client'
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";

const About = () => {
    const [isOpen, setIsOpen] = useState([])

    const data =[
         {
            title:"01. our history",
            desc:"SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions."
        },
        {
            title:"02. our vision",
            desc:"SEO is a long-term strategy, and the timeline for seeing results can vary depending on factors such as the competitiveness of the industry, the current state of the website, and the effectiveness of the SEO efforts. Generally, noticeable improvements can be seen within a few months, but significant results may take six months to a year or more."
        },
        {
            title:"03. our mission",
            desc:"SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions."
        },
    ]

     const handleToggle = (i: Number) => {
        setIsOpen((prev) => {
            return prev.includes(i) ? prev.filter((v) => v != i) : [...prev, i]
        })
    }

  return (
     <div className='w-full  p-32 text-white flex flex-col gap-20'>
            {/* row 1 */}
            <div className='flex justify-start items-center gap-5 '>
                <div className='bg-[#232323]  flex justify-center items-center rounded-full px-3 py-1.5'>
                    <span className='sub-font uppercase text-xs font-bold text-color leading-4'>Who we are</span>
                </div>
                <div>
                    <span className='main-font text-[38px] font-normal leading-[44px] [word-spacing:-3px]'>About our Company</span>
                </div>
            </div>
            {/* row 2 */}
            <div className='flex justify-center items-start gap-10'>
                <div className='w-full '>
                    <span className='sub-font text-[27px] font-normal text-[#838383]'>
                        Let's get acquainted! We're not your average digital marketing agency - we're a team of passionate individuals who eat, sleep, and <span className='text-white'>breathe creativity, innovation, and all things digital.</span> At <span className='text-white'>Celestial Solutions,</span> we're on a mission to make your online <span className='text-color'>dreams come true,</span> one pixel at a time! We're a bunch of <span className='text-white'>tech-savvy wizards, design enthusiasts,</span> and <span className='text-white'>social media mavens</span> who believe that digital marketing should be fun, exciting, and downright awesome.
                    </span>
                </div>
                 <div className='flex flex-col w-full gap-5'>
                                {
                                    data.map((v,i)=>(
                                        <div key={i} onClick={()=>handleToggle(i)} className={`group bg-[#56565646]  border-light  transition-all duration-300 backdrop-blur rounded-[35px] px-5 py-6 text-white flex flex-col justify-center items-center ${!isOpen.includes(i) ? 'gap-0' : 'gap-8' }`}>
                                            <div className='w-full flex justify-between items-center'>
                                                <span className={`${!isOpen.includes(i)?'group-hover:translate-x-5':'group-hover:translate-x-0'} capitalize transition-all duration-300 main-font text-[16px] font-light`}>{v.title}</span>
                                                <span className='rounded-[10px] p-2 group-hover:bg-[#f58327]  bg-[#7c7c7c46] text-white flex justify-center items-center transition-all duration-300'>
                                                    <IoMdAdd className={`transition-all duration-300 ${isOpen.includes(i) ? 'rotate-180':'rotate-0'}`}/>
                                                </span>
                                            </div>
                                            <div className={`${!isOpen.includes(i)? 'opacity-0 h-0' : 'opacity-100'} w-[80%] text-[#ababab] transition-all duration-200 `}>
                                                {v.desc}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
            </div>
    </div>
  )
}

export default About
