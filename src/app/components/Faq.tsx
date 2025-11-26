'use client'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
    const [isOpen, setIsOpen] = useState([])


    const data = [
        {
            title:"What is SEO and why is it important?",
            desc:"SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions."
        },
        {
            title:"How long does it take to see results from SEO?",
            desc:"SEO is a long-term strategy, and the timeline for seeing results can vary depending on factors such as the competitiveness of the industry, the current state of the website, and the effectiveness of the SEO efforts. Generally, noticeable improvements can be seen within a few months, but significant results may take six months to a year or more."
        },
        {
            title:"What is SEO and why is it important?",
            desc:"SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions."
        },
        {
            title:"How long does it take to see results from SEO?",
            desc:"SEO is a long-term strategy, and the timeline for seeing results can vary depending on factors such as the competitiveness of the industry, the current state of the website, and the effectiveness of the SEO efforts. Generally, noticeable improvements can be seen within a few months, but significant results may take six months to a year or more."
        },
        {
            title:"What is SEO and why is it important?",
            desc:"SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions."
        },
        {
            title:"How long does it take to see results from SEO?",
            desc:"SEO is a long-term strategy, and the timeline for seeing results can vary depending on factors such as the competitiveness of the industry, the current state of the website, and the effectiveness of the SEO efforts. Generally, noticeable improvements can be seen within a few months, but significant results may take six months to a year or more."
        },
        {
            title:"What is SEO and why is it important?",
            desc:"SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions."
        },
        {
            title:"How long does it take to see results from SEO?",
            desc:"SEO is a long-term strategy, and the timeline for seeing results can vary depending on factors such as the competitiveness of the industry, the current state of the website, and the effectiveness of the SEO efforts. Generally, noticeable improvements can be seen within a few months, but significant results may take six months to a year or more."
        },
    ]


    const handleToggle = (i: Number) => {
        setIsOpen((prev) => {
            return prev.includes(i) ? prev.filter((v) => v != i) : [...prev, i]
        })
    }


    return (
        <div className='w-full px-5  sm:px-10 pt-32 lg:p-32 text-white flex flex-col items-center gap-5 md:gap-14'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='bg-[#232323] flex justify-center items-center rounded-full px-3 py-1.5'>
                    <span className='sub-font uppercase text-xs font-bold text-color leading-4 text-center'>frequently asked questions</span>
                </div>
                <span className='main-font text-[28px] md:text-[30px] lg:text-[38px] font-normal leading-[44px] [word-spacing:-3px] text-center text-white'>Got Questions? <br className='hidden md:inline-block'/> We've Got Answers!</span>
            </div>

            <div className='flex flex-col justify-center items-center w-full md:w-[70%] gap-5'>
                {
                    data.map((v,i)=>(
                        <div key={i} onClick={()=>handleToggle(i)} className={`group bg-[#33333346] hover:bg-[#56565646] transition-all duration-300 backdrop-blur rounded-[30px] px-5 py-6 text-white flex flex-col justify-center items-center ${!isOpen.includes(i) ? 'gap-0' : 'gap-8' }`}>
                            <div className='w-full flex justify-between items-center'>
                                <span className={`${!isOpen.includes(i)?'group-hover:translate-x-5':'group-hover:translate-x-0'} transition-all duration-300 main-font text-[16px] font-light`}>{v.title}</span>
                                <span className='rounded-[10px] p-2 bg-[#f58327] text-black flex justify-center items-center transition-all duration-300'>
                                    <IoIosArrowDown className={`transition-all duration-300 ${isOpen.includes(i) ? 'rotate-180':'rotate-0'}`}/>
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
    )
}

export default Faq
