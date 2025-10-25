import React from 'react'
import Marque from './ui/Marquee'

const Brands = () => {
    return (
        <div className='w-full p-20 pb-24 flex flex-col justify-center items-center gap-2'>
            <div className='bg-[#232323] flex justify-center items-center rounded-full px-3 py-1.5'>
                <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Brands Collaboration</span>
            </div>
            <span className='main-font text-[38px] font-normal leading-[44px] [word-spacing:-3px] text-white'>Brands that trust us </span>

            <div className='border-[0.1px] border-[#333333c1] w-[84%] mt-5 rounded-[35px] h-[100px] flex justify-center items-center'>
                <Marque customClass='rounded-[50px]' />
            </div>
        </div>
    )
}

export default Brands
