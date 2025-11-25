'use client'
import React, { useState } from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false)
    const data = [
        {
            best: false,
            type: "Starter Plan",
            month: "83",
            year: "999",
            desc: [
                'Basic SEO Optimization',
                'Social Media Management (2 Platforms)',
                'Monthly Performance Reports',
                'Email Support'
            ]
        },
        {
            best: true,
            type: "Growth Plan",
            month: "208",
            year: "2499",
            desc: [
                'Comprehensive SEO Strategy',
                'Social Media Management (3 Platforms)',
                'Content Creation (2 Blog Posts/Month)',
                'Monthly Analytics Review',
                'Priority Email and Phone Support'
            ]
        },
        {
            best: false,
            type: "Pro Plan",
            month: "420",
            year: "4999",
            desc: [
                'Advanced SEO Optimization and Strategy',
                'Social Media Management (4 Platforms)',
                'Content Creation (4 Blog Posts per Month)',
                'Customized Marketing Campaigns',
                'Quarterly Strategy Sessions',
                'Dedicated Account Manager',
                '24/7 Priority Support'
            ]
        },
    ]

    return (
        <div className='w-full flex flex-col justify-center gap-12 items-center p-10 py-20 '>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='bg-[#232323] flex justify-center items-center rounded-full px-3 py-1.5'>
                    <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Pricing</span>
                </div>
                <span className='main-font text-[28px] md:text-[30px] lg:text-[38px] font-normal leading-[44px] [word-spacing:-3px] text-center text-white'>Profitable Pricing <br className='hidden md:inline' /> Plans</span>
            </div>

            <div className='flex flex-col justify-center items-center gap-2'>
                <div onClick={() => setIsYearly(!isYearly)} className='group relative cursor-pointer flex justify-center items-center gap-10 border-[0.1px] border-zinc-600/80 bg-white/5 rounded-full py-1.5 px-4 transition-all duration-300'>
                    <span className={`transition-all duration-300 font-light z-40 ${!isYearly ? 'text-black' : 'text-white'}`}>Monthly</span>
                    <span className={`transition-all duration-300 font-light z-40 ${isYearly ? 'text-black' : 'text-white'}`}>Yearly</span>
                    <div className={`transition-all duration-700 absolute top-[1px] bottom-[1px] h-[96%] bg-[#f58327] rounded-full p-0  ${!isYearly ? 'left-[1px] right-[90px] w-[50%] group-hover:w-[58%]' : 'right-[1px] left-[95px] w-[42%] group-hover:w-[50%] group-hover:left-[82px]'}`} ></div>
                </div>
                <p className='sub-font font-light text-[20px] text-white'>
                    Save <span className='text-color'>20%</span> on yearly subscription
                </p>
            </div>

            <div className='w-[100%] lg:w-[90%] flex lg:flex-row flex-col justify-center items-stretch gap-2'>
                {data.map((v, i) => (
                    <div key={i} className='w-full relative bg-[#292929de] rounded-[25px] p-5 py-7 flex flex-col justify-between items-start '>
                        <div className='flex flex-col justify-start items-start'>
                            <div className='bg-[#414141de] border-[0.1px] border-zinc-600/80 flex justify-center items-center rounded-full px-3 py-1.5'>
                                <span className='sub-font capitalize text-sm font-medium text-white leading-4 '>{v.type}</span>
                            </div>
                            <p className='text-white sub-font font-light flex justify-center items-center gap-0.5'>$  <span className='text-color main-font font-semibold text-[50px]'>{isYearly ? v.year : v.month}</span> /{isYearly ? 'year' : 'month'}</p>
                            <div className='py-2'>
                                {v.desc.map((d, j) => (
                                    <div key={i + j} className='flex justify-start items-center gap-1 py-1'>
                                        <IoIosCheckmarkCircleOutline className='text-color' />
                                        <p className='text-white sub-font font-light flex justify-center items-center'>
                                            {d}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`uppercase cursor-pointer w-full rounded-full border-[0.1px] border-zinc-200/40 text-center main-font text-[12px] py-3 transition-all duration-300 ${v.best ? 'bg-[#f58327] text-black' : 'bg-transparent text-white'}  hover:bg-[#f58327] hover:text-black`}>
                            get started
                        </div>

                        {v.best ? <div className='main-font text-black text-[10px] p-0.5 px-2 bg-[#f58327] absolute -top-2 right-10'>
                            Best Value
                        </div> : ''}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
