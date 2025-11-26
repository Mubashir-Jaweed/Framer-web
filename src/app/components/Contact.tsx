import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import { link } from 'fs';
import Link from 'next/link';

const Contact = () => {


    const menu = [
        {
            name: "home",
            link: '/',
        },
        {
            name: "about",
            link: '/',
        },
        {
            name: "services",
            link: '/',
        },
        {
            name: "projects",
            link: '/',
        },
        {
            name: "blog",
            link: '/',
        },
        {
            name: "review",
            link: '/',
        },
        {
            name: "contact",
            link: '/',
        },
    ]

    const services = [
        {
            name: "SEO",
            link: '/',
        },
        {
            name: "Content Marketing",
            link: '/',
        },
        {
            name: "Website Design",
            link: '/',
        },
        {
            name: "Social Media Marketing",
            link: '/',
        },
    ]

    const social = [
        {
            icon:<FaFacebook className=''/>,
            link:"/"
        },
        {
            icon:<FaTwitter className=''/>,
            link:"/"
        },
        {
            icon:<FaLinkedin className=''/>,
            link:"/"
        },
        {
            icon:<AiFillInstagram className=''/>,
            link:"/"
        },
    ]


    return (
        <div className='w-full px-5  sm:px-10 pt-32 lg:p-32 text-white flex flex-col items-center gap-5 md:gap-14'>
            {/* 1 */}
            <div className=' w-full flex flex-col gap-12 xl:flex-row xl:gap-5 justify-between items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='main-font text-white text-[120px] sm:text-[200px] md:text-[250px] lg:text-[350px] xl:text-[150px] leading-[90px] sm:leading-[150px] md:leading-[180px] lg:leading-[260px] xl:leading-[105px]'>Let's</div>
                    <div className='main-font text-color text-[120px] sm:text-[200px] md:text-[250px] lg:text-[350px] xl:text-[150px] leading-[90px] sm:leading-[150px] md:leading-[180px] lg:leading-[260px] xl:leading-[105px]'>Talk!</div>
                </div>
                <div className='bg-[#33333346] rounded-[30px] p-8 flex flex-col justify-center items-center gap-6'>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <span className='text-sm text-[#ababab]'>Name</span>
                        <input type='text' placeholder='Jane Ansari' className='text-[16px] w-[80vw] md:w-[650px] bg-[#56565646] px-4 py-5 rounded-[25px] placeholder:text-[#ababab] focus:outline-none focus:ring-1 focus:ring-[#f58327] text-[#d7d7d7]' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <span className='text-sm text-[#ababab]'>Email</span>
                        <input type='email' placeholder='jane.ansari@gmail.com' className='text-[16px] w-[80vw] md:w-[650px] bg-[#56565646] px-4 py-5 rounded-[25px] placeholder:text-[#ababab] focus:outline-none focus:ring-1 focus:ring-[#f58327] text-[#d7d7d7]' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <span className='text-sm text-[#ababab]'>Message</span>
                        <textarea rows={5} placeholder='Write your message' className='text-[16px] w-[80vw] md:w-[650px] bg-[#56565646] px-4 py-5 rounded-[25px] placeholder:text-[#ababab] focus:outline-none focus:ring-1 focus:ring-[#f58327] text-[#d7d7d7]' />
                    </div>
                    <div className='bg-[#f58327] w-full main-font rounded-[12px] cursor-pointer transition-all duration-300 hover:bg-[#fff] text-black text-[18px] flex justify-center items-center py-2'>
                        Submit
                    </div>
                </div>
            </div>
            {/* 2 */}
             <div className='flex flex-col gap-3 w-full'>
                {/*  */}
                <div className=' w-full flex flex-col md:flex-row gap-10 mad:gap-0 justify-between md:items-start bg-[#33333346] rounded-[30px] p-5'>
                    {/* 2.1 */}
                    <div className='flex flex-col justify-center items-center gap-3  w-full md:w-auto'>
                        {/* * */}
                        <div className='w-full md:w-[650px] bg-[#33333346] rounded-[32px] py-5 px-7 flex flex-col justify-center items-start gap-3'>
                            <AiOutlineMail className='text-color size-7' />
                            <span className='sub-font text-white'>agencee@email.com</span>
                        </div>
                        {/* * */}
                        <div className='w-full md:w-[650px] bg-[#33333346] rounded-[32px] py-5 px-7 flex flex-col justify-center items-start gap-3'>
                            <LuPhone className='text-color size-7' />
                            <span className='sub-font text-white'>+ 54 2541 22 55 66</span>
                        </div>
                        {/* * */}
                        <div className='w-full md:w-[650px] bg-[#33333346] rounded-[32px] py-5 px-7 flex flex-col justify-center items-start gap-3'>
                            <GrLocation className='text-color size-7' />
                            <span className='sub-font text-white'>123 Main Street Anytown, USA, 2141</span>
                        </div>
                    </div>

                    {/* 2.2 */}
                    <div className='flex flex-col items-center justify-start md:flex-row gap-14'>
                        <div className='flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
                            <span className='main-font text-color'>
                                Menu
                            </span>
                            {menu.map((v, i) => (
                                <Link key={i} href={v.link}>
                                    <span className='sub-font capitalize hover:underline text-[#d7d7d7]'>
                                        {v.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <div className='flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
                            <span className='main-font text-color'>
                                Services
                            </span>
                            {services.map((v, i) => (
                                <Link key={i} href={v.link}>
                                    <span className='sub-font capitalize hover:underline text-[#d7d7d7]'>
                                        {v.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
                <div className='w-full bg-[#33333346] rounded-[30px] mb-10 py-10 flex flex-col justify-center items-center gap-4'>
                    <span className='text-color main-font'>Follow us:</span>
                    <div className='flex justify-center items-center gap-3'>
                        {social.map((v,i)=>(
                            <Link key={i} href={v.link} className='group'>
                                <div className='relative rounded-[15px] h-[45px] w-[45px] border-[0.5px] border-[#565656]  flex justify-center items-center'>
                                    {React.cloneElement(v.icon, { className: 'z-10 size-6 text-white transition-all duration-300 group-hover:text-black group-hover:size-7' })}
                                    <div className='absolute bg-[#f58327] transition-all duration-700 group-hover:w-full group-hover:h-full  w-0 h-0 rounded-[15px]'>

                                    </div>
                                </div>
                                
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
           

        </div>
    )
}

export default Contact
