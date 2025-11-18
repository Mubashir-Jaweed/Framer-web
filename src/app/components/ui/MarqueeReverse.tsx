import React from 'react';
import mySvg from '@/assets/logo.svg'
import Image from 'next/image';

const MarqueReverse = ({customClass, text= 'I am Batman'}:{customClass?:string,text?:string}) => {
  const marqueeContent = (
    <>
      <span  className='bg-[#56565646] rounded-[20px] p-3 w-min'><Image src={mySvg} alt='' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 w-min'><Image src={mySvg} alt='' /></span>
      <span  className='bg-[#56565646] rounded-[20px] p-3 w-min'><Image src={mySvg} alt='' /></span>

    </>
  );

  return (
    <div className={`flex w-full overflow-hidden text-zinc-300 ${customClass}`}>
      <div className="flex gap-14 animate-marqueeReverse whitespace-nowrap main-font text-center  text-[95px] font-medium text-white ">
        {marqueeContent}
        {marqueeContent} 
      </div>
    </div>
  );
};
export default MarqueReverse;