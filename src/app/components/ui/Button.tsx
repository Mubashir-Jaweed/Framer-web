import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({ btnText,isGap = true }: { btnText: string,isGap?:boolean }) => {
    return (
        <div className={`border border-[#f58327] rounded-full flex justify-between items-center gap-0 ${isGap ? 'hover:gap-1.5' : 'gap-0'} group transition-all duration-300 ease-in-out`}>
            <span className='main-font text-[13px] leading-[19.5px] uppercase text-black bg-[#f58327] rounded-tl-full rounded-bl-full py-3.5 px-7'>
                {btnText}
            </span>
            <span className='bg-[#f58327] rounded-tr-full rounded-br-full h-full flex justify-center items-center px-3'>
                <IoIosArrowRoundForward className='text-black size-7 -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out' />
            </span>
        </div>
    )
}

export default Button
