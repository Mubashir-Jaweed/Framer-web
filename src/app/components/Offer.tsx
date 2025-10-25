import React from 'react'
import Button from './ui/Button'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosAnalytics } from "react-icons/io";

const Offer = () => {

    const data = [
        {
            icon: <IoIosAnalytics size={'35'} className='text-[#f58327]' />,
            title: "Seo",
            link: "",
            txt: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
        },
        {
            icon: <IoIosAnalytics size={'35'} className='text-[#f58327]' />,
            title: "Content Marketing",
            link: "",
            txt: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
        },
        {
            icon: <IoIosAnalytics size={'35'} className='text-[#f58327]' />,
            title: "Website design",
            link: "",
            txt: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
        },
        {
            icon: <IoIosAnalytics size={'35'} className='text-[#f58327]' />,
            title: "Social media marketing",
            link: "",
            txt: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
        },
    ]

    return (
        <div className='w-full  p-32 text-white flex flex-col gap-12'>
            {/* row 1 */}
            <div className='flex justify-start items-center gap-5 '>
                <div className='bg-[#232323] w-min flex justify-center items-center rounded-full px-3 py-1.5'>
                    <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Services</span>
                </div>
                <div>
                    <span className='main-font text-[38px] font-normal leading-[44px] [word-spacing:-3px]'>What we are offering</span>
                </div>
            </div>
            {/* row 2 */}
            <div className='flex justify-end items-center gap-5 '>
                <Button btnText='view all services' isGap={true} />
            </div>
            {/* row 2 */}
            <div className='grid grid-cols-2 justify-end items-center gap-4'>
                {data.map((d, i) => (
                    <Link key={i} href={d.link}>
                        <div className='group bg-[#1f1d1d] rounded-[30px] h-[375px] p-5 flex flex-col justify-between items-start'>
                            <div className='flex flex-col gap-4'>
                                <div className='bg-[#2a2929]  rounded-[20px] h-[55px] w-[55px] flex justify-center items-center'>{d.icon}</div>
                                <span className='uppercase text-white text-[20px] main-font '>{d.title}</span>
                            </div>
                            <div className='flex flex-col items-start gap-6'>
                                <span className='w-[90%]  sub-font text-[16px] leading-5 font-normal text-[#9d9d9d] '>
                                    {d.txt}
                                </span>
                                <div className='flex justify-center items-center gap-2 '>
                                    <span className='uppercase main-font text-[12px] text-zinc-200'>
                                        Learn more
                                    </span>
                                    <div className='border border-[#434343] rounded-full bg-transparent transition-all duration-700 ease-in-out group-hover:bg-[#f58327]'>
                                        <IoIosArrowRoundForward className='transition-transform duration-300 ease-in-out -rotate-45 size-6 p-0.5 group-hover:rotate-0' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    )
}

export default Offer
