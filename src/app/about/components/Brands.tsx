import AboutMarqueReverse from '@/app/components/ui/AboutMarqueeReverse'
import React from 'react'
import AboutMarque from '@/app/components/ui/AboutMarquee'

const Brands = () => {
    return (
        <div className='w-full p-32 flex flex-col justify-center items-center gap-2'>
            <div className='bg-[#232323] flex justify-center items-center rounded-full px-3 py-1.5'>
                <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Brands</span>
            </div>
            <span className='main-font text-[38px] font-normal leading-[44px] [word-spacing:-3px] text-white text-center'>Brands we have<br/> worked with</span>

            <div className='border-[0.1px] border-[#333333c1] w-full mt-5 rounded-[35px] h-[150px] flex flex-col gap-4 justify-center items-center'>
                <AboutMarqueReverse customClass='rounded-t-[15px]' />
                <AboutMarque customClass='rounded-b-[15px]'/>
            </div>
        </div>
    )
}

export default Brands
