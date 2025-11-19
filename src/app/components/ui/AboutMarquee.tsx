import React from 'react';
import mySvg from '@/assets/aboutBrands.png'
import Image from 'next/image';

const AboutMarque = ({customClass, text= 'I am Batman'}:{customClass?:string,text?:string}) => {
  const marqueeContent = (
    <>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 h-[55px] w-[180px] flex justify-center items-center'><Image src={mySvg} alt='' className='h-auto w-[150px]' /></span>

    </>
  );

  return (
    <div className={`flex w-full overflow-hidden text-zinc-300 ${customClass}`}>
      <div className="flex gap-2 animate-marquee whitespace-nowrap main-font text-center  text-[95px] font-medium text-white ">
        {marqueeContent}
        {marqueeContent} 
      </div>
    </div>
  );
};
export default AboutMarque;