import React from 'react'
import Button from './ui/Button'
import image1 from '@/assets/blog.png'
import Image from 'next/image'
import { SlCalender } from "react-icons/sl";
import { CiViewList } from "react-icons/ci";

const Blogs = () => {

    const data = [
        {
            img: image1,
            date: "mar 1,2024",
            type: "news",
            desc: "Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools"
        },
        {
            img: image1,
            date: "mar 1,2024",
            type: "news",
            desc: "Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools"
        },
        {
            img: image1,
            date: "mar 1,2024",
            type: "news",
            desc: "Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools"
        },
    ]


    return (
        <div className='w-full px-5  sm:px-10 pt-32 lg:p-32 text-white flex flex-col gap-5 md:gap-12'>
            {/* row 1 */}
            <div className='flex justify-start items-center md:items-start flex-col lg:flex-row lg:items-center lg:gap-5 gap-0 '>
                <div className='bg-[#232323] w-min flex justify-center items-center rounded-full px-3 py-1.5'>
                    <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Blogs</span>
                </div>
                <div className='md:w-[35%] w-full text-center sm:text-start'>
                    <span className='main-font text-[28px] md:text-[30px] lg:text-[38px] font-normal leading-[44px] [word-spacing:-3px] text-white'>Dive into our collection of engaging blog posts</span>
                </div>
            </div>
            {/* row 2 */}
            <div className='flex justify-center md:justify-end items-center gap-5'>
                <Button btnText='Read blogs' isGap={true} />
            </div>
            {/* row 3 */}

            <div className='w-full flex flex-wrap lg:flex-nowrap justify-center items-center gap-2'>
                {data.map((v, i) => (
                    <div key={i} className="group hover:-translate-y-4 transition-all duration-500 relative w-full h-[400px] sm:min-w-[350px] rounded-[20px] overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 z-0">
                            <Image src={v.img} alt="" className=" transition-all duration-500 group-hover:grayscale object-cover w-full h-full" />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-[150px] bg-[linear-gradient(to_bottom,_#0a0a0a15,_#0a0a0a,_#131313)] z-10"></div>

                        <div className="absolute inset-x-3 bottom-3  z-20 flex flex-col justify-center items-start gap-2 text-white">

                            <div className='flex justify-center items-center'>
                                <div className='bg-[#272727de] border-[0.1px] border-zinc-600/80 flex justify-center items-center gap-2 rounded-full px-3 py-1.5 mr-1'>
                                    <SlCalender className='text-color size-3'/> <span className='sub-font capitalize text-xs font-medium text-white leading-4 '>{v.date}</span>
                                </div>
                                <div className='bg-[#272727de] border-[0.1px] border-zinc-600/80 flex justify-center items-center gap-1 rounded-full px-3 py-1.5'>
                                   <CiViewList className='text-color size-3'/> <span className='sub-font capitalize text-xs font-medium text-white leading-4 '>{v.type}</span>
                                </div>
                            </div>
                            <div className='w-full rounded-[8px] p-2 bg-[#232323db] '>
                               <p className='main-font font-normal text-[15px] text-white'>
                                 Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools
                               </p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Blogs
