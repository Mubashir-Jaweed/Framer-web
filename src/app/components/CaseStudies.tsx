import portfolio from '../../assets/case.png'
import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'
const CaseStudies = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-8 w-full py-20'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='bg-[#232323] flex justify-center items-center rounded-full px-3 py-1.5'>
                    <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Works</span>
                </div>
                <span className='main-font text-[28px] md:text-[30px] lg:text-[38px] font-normal leading-[44px] [word-spacing:-3px] text-white'>Case Studies</span>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-8 w-[93%] md:w-[90%] lg:w-[85%] '>
                {/* column 1 */}
                <div className=' w-full flex flex-col gap-10'>
                    {[...Array(4)].map((_, i) => {
                        return i % 2 == 1 ? null :
                            (
                                // card
                                <div key={i} className='case-animate1 group w-full flex flex-col gap-3'>
                                    <div className="relative md:h-[350px]  lg:h-[700px] w-full overflow-hidden rounded-[35px]">
                                        <Image
                                            src={portfolio}
                                            alt=""
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className='bg-[#ffffff0d] rounded-[35px] p-5 flex flex-col justify-start items-start gap-2 transition-all duration-700 border border-transparent group-hover:border-[#777]'>
                                        <div className='bg-[#353535] flex justify-center items-center rounded-full px-3 py-1.5'>
                                            <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Case Study</span>
                                        </div>
                                        <span className='capitalize text-white text-[20px] main-font '>Transforming barber buzz</span>
                                        <span className='capitalize sub-font text-[16px] leading-5 font-normal text-[#b9b9b9] '>How razor sharo barber shop grow his client with Digital Marketing</span>
                                        <div className='w-full mt-14 flex flex-col gap-12 lg:flex-row justify-center items-center'>
                                            <div className='w-full flex justify-center gap-2 flex-col items-start'>
                                                <span className='main-font text-[50px] font-semibold leading-[38px] [word-spacing:-3px] text-[#f58327]'>30%</span>
                                                <span className=' text-center capitalize sub-font text-[16px] leading-5 font-normal text-[#b9b9b9] '>New Client booking</span>
                                            </div>
                                            <div className='w-full flex justify-center gap-2 flex-col items-start'>
                                                <span className='main-font text-[50px] font-semibold leading-[38px] [word-spacing:-3px] text-[#f58327]'>50%</span>
                                                <span className=' text-center capitalize sub-font text-[16px] leading-5 font-normal text-[#b9b9b9] '>Local search</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    })}
                </div>
                {/* column 2 */}
                <div className='w-full flex flex-col gap-10'>
                    {[...Array(4)].map((_, i) => {
                        return i % 2 == 0 ? null :
                            (
                                // card
                               <div key={i} className='case-animate2 group w-full flex flex-col gap-3'>
                                    <div className="relative md:h-[350px]  lg:h-[700px] w-full overflow-hidden rounded-[35px]">
                                        <Image
                                            src={portfolio}
                                            alt=""
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className='bg-[#ffffff0d] rounded-[35px] p-5 flex flex-col justify-start items-start gap-2 transition-all duration-700 border border-transparent group-hover:border-[#777]'>
                                        <div className='bg-[#353535] flex justify-center items-center rounded-full px-3 py-1.5'>
                                            <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Case Study</span>
                                        </div>
                                        <span className='capitalize text-white text-[20px] main-font '>Transforming barber buzz</span>
                                        <span className='capitalize sub-font text-[16px] leading-5 font-normal text-[#b9b9b9] '>How razor sharo barber shop grow his client with Digital Marketing</span>
                                        <div className='w-full mt-14 flex flex-col gap-12 lg:flex-row justify-center items-center'>
                                            <div className='w-full flex justify-center gap-2 flex-col items-start'>
                                                <span className='main-font text-[50px] font-semibold leading-[38px] [word-spacing:-3px] text-[#f58327]'>30%</span>
                                                <span className=' text-center capitalize sub-font text-[16px] leading-5 font-normal text-[#b9b9b9] '>New Client booking</span>
                                            </div>
                                            <div className='w-full flex justify-center gap-2 flex-col items-start'>
                                                <span className='main-font text-[50px] font-semibold leading-[38px] [word-spacing:-3px] text-[#f58327]'>50%</span>
                                                <span className=' text-center capitalize sub-font text-[16px] leading-5 font-normal text-[#b9b9b9] '>Local search</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    })}
                </div>
            </div>

           <div className='w-full flex justify-center items-center mt-10'>
             <Button btnText='View all projects' />
           </div>
        </div>
    )
}

export default CaseStudies
