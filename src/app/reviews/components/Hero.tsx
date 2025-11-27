import React from 'react'
import image from "@/assets/demo.png"
import { div } from 'framer-motion/client'
import Image from 'next/image'
const Hero = () => {

    const data = [
        {
            text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
            name: "David Reynolds",
            company: "Tech Innovations Ltd.",
            image: image,
            logo: ""
        },
        {
            text: "As a law firm, establishing a strong online presence is essential, and Bright Horizon Marketing has been instrumental in helping us achieve that goal. Their team's expertise in SEO and online marketing has significantly increased our website traffic and client inquiries. From keyword research to content optimization, their strategic approach has delivered tangible results.",
            name: "David Reynolds",
            company: "Tech Innovations Ltd.",
            image: image,
            logo: ""
        },
        {
            text: "Bright Horizon Marketing has been an invaluable asset to our tech company. Their deep understanding of SEO and digital marketing has helped us reach our target audience and drive conversions. Their team's proactive approach and attention to detail have made a significant impact on our online visibility and brand awareness. Thanks to Bright Horizon Marketing, our company has experienced steady growth, and I would highly recommend their services to anyone looking to expand their online presence.",
            name: "David Reynolds",
            company: "Tech Innovations Ltd.",
            image: image,
            logo: ""
        },
        {
            text: "I can't speak highly enough of Bright Horizon Marketing. Their strategic approach to SEO and digital marketing has been instrumental in our company's success. They took the time to understand our unique needs and crafted a tailored strategy that has consistently driven results. Thanks to their efforts, we've seen a substantial increase in leads and conversions. Bright Horizon Marketing is the real deal, and I wouldn't hesitate to recommend them to anyone in need of digital marketing expertise",
            name: "David Reynolds",
            company: "Tech Innovations Ltd.",
            image: image,
            logo: ""
        },
        {
            text: "I can't speak highly enough of Bright Horizon Marketing. Their strategic approach to SEO and digital marketing has been instrumental in our company's success. They took the time to understand our unique needs and crafted a tailored strategy that has consistently driven results.",
            name: "David Reynolds",
            company: "Tech Innovations Ltd.",
            image: image,
            logo: ""
        },
        {
            text: "As a law firm, establishing a strong online presence is essential, and Bright Horizon Marketing has been instrumental in helping us achieve that goal. Their team's expertise in SEO and online marketing has significantly increased our website traffic and client inquiries. From keyword research to content optimization, their strategic approach has delivered tangible results. Bright Horizon Marketing is a trusted partner, and I highly recommend their services to any business looking to grow online.",
            name: "David Reynolds",
            company: "Tech Innovations Ltd.",
            image: image,
            logo: ""
        },
    ]

    return (
        <div className='w-full px-5  sm:px-10 pt-32 lg:p-32 text-white flex flex-col items-center gap-5 md:gap-14'>
            <div className='text-center'>
                <span className='main-font text-[28px] leading-[20px] md:text-[30px] lg:text-[50px] font-normal lg:leading-[44px] [word-spacing:-3px] text-center text-white'>Check Our Works With <br  className='hidden lg:inline-block'/> Real Results</span>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-start gap-2  w-full'>
                {/*  */}
                <div className='flex flex-col justify-center items-center gap-2  w-full'>
                    {data.map((v, i) => {
                        return i % 2 == 0 ? null : (
                            <div className='w-full flex flex-col justify-center items-start gap-5 rounded-[25px] bg-[#33333346] px-5 py-8'>
                                {/* row 1 */}
                                <div className=' w-full'>
                                    <div className='flex gap-1'>
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className='text-[12px]'>⭐</span>
                                        ))}
                                    </div>
                                </div>
                                <span className='sub-font text-[17px]  text-white leading-[25px]'>{v.text}</span>

                                {/* row 3 */}
                                <div className='flex gap-2'>
                                    <Image src={v.image} alt='' className='rounded-[15px] h-[40px] w-[40px]'/>
                                    <div className=' flex flex-col gap-1'>
                                        <span className='main-font font-semibold text-[14px]'>{v.name}</span>
                                        <span className='main-font uppercase font-semibold text-[11px] text-zinc-300'>{v.company}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/*  */}
                <div className='flex flex-col justify-center items-center gap-2  w-full'>
                    {data.map((v, i) => {
                        return i % 2 == 1 ? null : (
                            <div className='w-full flex flex-col justify-center items-start gap-5 rounded-[25px] bg-[#33333346] px-5 py-8'>
                                {/* row 1 */}
                                <div className=' w-full'>
                                    <div className='flex gap-1'>
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className='text-[12px]'>⭐</span>
                                        ))}
                                    </div>
                                </div>
                                <span className='sub-font text-[17px]  text-white leading-[25px]'>{v.text}</span>

                                {/* row 3 */}
                                <div className='flex gap-2'>
                                    <Image src={v.image} alt='' className='rounded-[15px] h-[40px] w-[40px]'/>
                                    <div className=' flex flex-col gap-1'>
                                        <span className='main-font font-semibold text-[14px]'>{v.name}</span>
                                        <span className='main-font uppercase font-semibold text-[11px] text-zinc-300'>{v.company}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hero
