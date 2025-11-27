import Link from 'next/link'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
    const social = [
        {
            icon: <FaFacebook className='' />,
            link: "/"
        },
        {
            icon: <FaTwitter className='' />,
            link: "/"
        },
        {
            icon: <FaLinkedin className='' />,
            link: "/"
        },
        {
            icon: <AiFillInstagram className='' />,
            link: "/"
        },
    ]

    return (
        <div className='w-full px-5  lg:px-10 pt-32 xl:p-32 text-white flex flex-col items-center gap-5 md:gap-28'>
            <div>
                <span className='main-font text-[28px] leading-[20px] md:text-[30px] lg:text-[50px] font-normal lg:leading-[44px] [word-spacing:-3px] text-center text-white'>Let’s Work Together</span>
            </div>
            <div className='w-[95%] xl:w-[85%] h-min rounded-[30px] bg-[#33333346] p-5 grid gap-2.5 grid-cols-4 lg:grid-cols-3  '>
                {/* 1.1 */}
                <div className='  h-auto lg:h-[220px] flex flex-col justify-start items-start gap-5 rounded-[20px] bg-[#45454546]  px-5 py-7 col-span-4 md:col-span-2 lg:col-span-1'>
                    <span className='main-font text-white text-[16px] font-thin'>
                        Hotline:
                    </span>
                    <span className='main-font text-white uppercase text-[16px] lg:text-[20px] font-normal cursor-pointer  hover:underline hover:text-[#f58327]'>
                        (555) 123-4567
                    </span>
                </div>
                {/* 1.2 */}
                <div className='  h-auto lg:h-[220px] flex flex-col justify-start items-start gap-5 rounded-[20px] bg-[#45454546]  px-5 py-7 col-span-4 md:col-span-2 lg:col-span-1'>
                    <span className='main-font text-white text-[16px] font-thin'>
                        Address:
                    </span>
                    <span className='main-font text-white uppercase text-[16px] lg:text-[20px] font-normal cursor-pointer  hover:underline hover:text-[#f58327]'>
                        123 Main Street, Cityville, Stateburg, 98765
                    </span>
                </div>
                {/* 1.3 */}
                <div className='  h-auto lg:h-[220px] flex flex-col justify-start items-start gap-5 rounded-[20px] bg-[#45454546]  px-5 py-7 col-span-4 md:col-span-2 lg:col-span-1'>
                    <span className='main-font text-white text-[16px] font-thin'>
                        Email:
                    </span>
                    <span className='main-font text-white uppercase text-[16px] lg:text-[20px] font-normal cursor-pointer  hover:underline hover:text-[#f58327]'>
                        agencee@email.com
                    </span>
                </div>

                {/* 2.1 */}
                <div className=' h-auto lg:h-[220px] flex flex-col justify-start items-start gap-5 rounded-[20px] bg-[#45454546]  px-5 py-7 col-span-4 md:col-span-2'>
                    <span className='main-font text-white text-[16px] font-thin'>
                        Opening Hours:
                    </span>
                    <span className='main-font text-white uppercase text-[16px] lg:text-[20px] font-normal cursor-pointer '>
                        Mon to Fri: 9.00am - 8.30pm
                    </span>
                    <span className='main-font text-white uppercase text-[16px] lg:text-[20px] font-normal cursor-pointer '>
                        Sat: 10.00am - 6.30pm
                    </span>
                    <span className='main-font text-white uppercase text-[16px] lg:text-[20px] font-normal cursor-pointer '>
                        Sun: Closed
                    </span>
                </div>
                {/* 2.2 */}
                <div className='rounded-[20px] bg-[#45454546] px-5 py-7  h-auto lg:h-[220px] flex flex-col justify-center lg:justify-start items-center lg:items-start col-span-4 lg:col-span-1 gap-5'>
                    <span className='text-white main-font '>Follow us:</span>
                    <div className='flex justify-center items-center gap-3'>
                        {social.map((v, i) => (
                            <Link key={i} href={v.link} className='group'>
                                <div className='relative rounded-[15px] h-[45px] w-[45px] border-[0.5px] border-[#565656]  flex justify-center items-center'>
                                    {React.cloneElement(v.icon, { className: 'z-10 size-6 text-[#f58327] transition-all duration-300 group-hover:text-black group-hover:size-7' })}
                                    <div className='absolute bg-[#f58327] transition-all duration-400 group-hover:w-full group-hover:h-full  w-0 h-0 rounded-[15px]'>

                                    </div>
                                </div>

                            </Link>
                        ))}
                    </div>
                </div>

                {/* 3.1 */}
                <div className='h-[460px] flex flex-col justify-start items-start gap-5 rounded-[20px] bg-[#45454546] overflow-hidden col-span-4 '>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115834.57239450194!2d55.17128!3d25.065697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434c7c7a3f6b%3A0xe5bdfb2b9a95ff12!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000"
                        width="100%"
                        height="100%"
                        allowFullScreen={true}
                        loading="lazy"
                        className=" border-none h-full w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
