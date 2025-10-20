// components/SimpleMarquee.tsx
import React from 'react';

const Marque = ({customClass, text= 'I am Batman'}:{customClass?:string,text?:string}) => {
  const marqueeContent = (
    <>
      <span >{text}</span>
      <span >{text}</span>
      <span >{text}</span>

    </>
  );

  return (
    <div className={`flex w-full overflow-hidden text-zinc-300 ${customClass}`}>
      <div className="flex gap-14 animate-marquee whitespace-nowrap main-font text-center  text-[95px] font-medium text-white ">
        {marqueeContent}
        {marqueeContent} 
      </div>
    </div>
  );
};
export default Marque;