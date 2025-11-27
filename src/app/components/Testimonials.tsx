import React from 'react'
import MarqueeY from './ui/MarqueeY'
import Button from './ui/Button'

const Testimonials = () => {
    return (
        <div className='relative w-full md:my-20 pb-20'>
            <div className='absolute w-full testimonial-bg'>
                {/* Large screens */}
                <p className='hidden md:block text-center text-[11vw] main-font text-[#434343] uppercase'
                    >
                    Testimonial
                </p>


                <p className='block w-full md:hidden text-center main-font text-[#dfdfdf] uppercase text-[15vw]'>
                    Reviews
                </p>
            </div>
            <div className='relative '>
                <MarqueeY customClass='h-[800px]  z-10' />
                <div className='absolute bottom-0 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none h-[30%] w-full'>

                </div>
            </div>

            <div className='w-full flex justify-center items-center'>
                <div className='w-[93%] md:w-[90%] lg:w-[80%] mt-16 flex flex-col md:flex-row justify-center items-center gap-3'>
                    {[...Array(2)].map((_, i) => (

                        <div key={i} className='rounded-[35px] flex flex-col justify-center items-center gap-3.5 w-full bg-[#1f1f1f] p-2.5'>
                            <div className='bg-[#0c0c0c] text-white flex justify-center items-center rounded-[38px] max-h-[400px] min-h-[300px] lg:h-[370px] w-full'>
                                yt video
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1 py-2.5'>
                                <span className='main-font capitalize text-[14px] font-semibold text-[#e0e0e0] leading-4 '>Thaddeus Montgomery</span>
                                <span className='sub-font uppercase text-xs font-extrabold text-[#848484] leading-4 '>owner, goldgarden</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-center items-center mt-20'>
                <Button btnText='view all reviews' />
            </div>
        </div>
    )
}

export default Testimonials
