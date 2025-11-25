import React from 'react'
import { IoIosAnalytics } from 'react-icons/io'
import { DiReact } from "react-icons/di";

const About = () => {


    const stats = [
        {
            title: "15+",
            txt: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
        },
        {
            title: "200+",
            txt: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
        },
        {
            title: "150+",
            txt: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
        },
        {
            title: "160",
            txt: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
        },
    ]

    const about = [
        {
            icon: <IoIosAnalytics size={'40'} className='text-[#f58327]' />,
            title: "Proven Track Record",
            txt: "We have built a reputation as a trusted and reliable partner in achieving business success."
        },
        {
            icon: <IoIosAnalytics size={'40'} className='text-[#f58327]' />,
            title: "Tailored Solutions",
            txt: "We offer personalized solutions tailored to your specific goals, audience, and industry."
        },
        {
            icon: <IoIosAnalytics size={'40'} className='text-[#f58327]' />,
            title: "Client-Centric Focus",
            txt: "Your success is our priority. We prioritize understanding your business goals."
        }
    ]

    const points = [
        "Continuous Innovation",
        "Dedicated Support",
        "Positive Client Experiences",
        "Commitment to Excellence",
    ]
    return (
        <div className='relative bg-black  md:h-[120vh] h-auto isolate'>
            <div className='absolute inset-0 about-bg h-full w-full'></div>
            <div className='relative z-10 w-full flex justify-between items-center flex-col h-full p-14'>
                <div className='grid grid-cols-2 md:flex justify-center items-center'>
                    {stats.map((v, i) => (
                        <div key={i} className={` ${i % 2 == 1 ? 'about-stats-animate' : ''}`}>
                            <div className='cursor-pointer h-[190px] w-[190px] bg-white/10 backdrop-blur-sm rounded-full -ml-3 flex flex-col justify-center items-center'>
                                <span className='main-font text-[40px] font-medium leading-[38px] [word-spacing:-3px] text-white'>{v.title}</span>
                                <span className='sub-font text-[16px] font-light text-white leading-4'>Successful Projects</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' w-full text-white mt-8 flex flex-col gap-6 justify-center items-center'>
                    <div className='w-full flex flex-col md:flex-row gap-2.5 justify-center items-center'>
                        {about.map((v, i) => (
                            <div key={i} className='cursor-pointer border border-[#1f1f1f] p-4 w-full md:w-[480px] glass-bg rounded-[22px] flex flex-col gap-4 justify-center items-center'>
                                <span className='border border-[#f58327] rounded-[22px] p-2.5 m-1 text-center'>
                                    {v.icon}
                                </span>
                                <span className='capitalize text-center text-white text-[20px] main-font '>{v.title}</span>
                                <span className=' text-center sub-font text-[16px] leading-5 font-normal text-[#9d9d9d] '>{v.txt}</span>
                            </div>
                        ))}
                    </div>
                    <div className='w-full flex flex-wrap justify-center items-center gap-4'>
                        {points.map((v, i) => (
                            <div key={i} className='cursor-pointer bg-[#232323] flex justify-center items-center gap-2 rounded-[25px] p-3 px-5 '>
                                <DiReact className='text-[#f58327] size-6'/>
                                <span className='sub-font capitalize text-center text-[16px] font-light text-white leading-4'>{v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
