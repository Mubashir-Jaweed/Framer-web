import Image from 'next/image'
import React from 'react'
import portfolio from '../../../assets/case.png'

const Hero = () => {
    return (
        <div className='w-full px-5  sm:px-10 pt-32 lg:p-32 text-white flex flex-col items-center gap-5 md:gap-28'>
                <div className='text-center'>
                    <span className='main-font text-[28px] leading-[20px] md:text-[30px] lg:text-[50px] font-normal lg:leading-[44px] [word-spacing:-3px] text-center text-white'>Check Our Works With <br className='hidden md:inline-block' /> Real Results</span>
                </div>
                <div className=' w-full flex flex-col gap-5'>
                    {[...Array(4)].map((_, i) => (
                        // card
                        <div key={i} className='group w-full flex flex-col xl:flex-row gap-2'>
                            <div className="relative xl:h-[400px] xl:w-[400px] overflow-hidden rounded-[35px]">
                                <Image
                                    src={portfolio}
                                    alt=""
                                    className="h-full w-full object-cover "
                                />
                            </div>
                            <div className='flex-1 bg-[#ffffff0d] rounded-[35px] p-5 flex flex-col justify-start items-start gap-2 transition-all duration-700 border border-transparent group-hover:border-[#777]'>
                                <div className='bg-[#353535] flex justify-center items-center rounded-full px-3 py-1.5'>
                                    <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Case Study</span>
                                </div>
                                <span className='capitalize text-white text-[20px] main-font '>Transforming barber buzz</span>
                                <span className=' text-start capitalize sub-font text-[16px] leading-5 font-normal text-[#b9b9b9] '>How razor sharo barber shop grow his client with Digital Marketing</span>
                                <div className='w-full h-full flex mt-20 xl:mt-0  justify-center items-end'>
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
                    )}
                </div>
        </div>
    )
}

export default Hero
