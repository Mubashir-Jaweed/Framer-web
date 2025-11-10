import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({ btnText, isGap = true }: { btnText: string, isGap?: boolean }) => {
  return (
    <div
      className={`cursor-pointer border border-[#f58327] rounded-full  flex justify-between items-stretch gap-0 ${isGap ? 'hover:gap-1.5' : 'gap-0'} group transition-all duration-300 ease-in-out`}
    >
      <span className={`${!isGap ? "text-[12px] font-light leading-[15px] px-3" :"text-[13px]" } pointer-events-none main-font  leading-[19.5px] uppercase text-black bg-[#f58327] rounded-tl-full rounded-bl-full py-3.5 px-7 flex items-center`}>
        {btnText}
      </span>
      <span className="pointer-events-none bg-[#f58327] rounded-tr-full rounded-br-full flex justify-center items-center px-3">
        <IoIosArrowRoundForward className={`${!isGap ? "size-5":"size-7"} text-black  -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out`} />
      </span>
    </div>

  )
}

export default Button
