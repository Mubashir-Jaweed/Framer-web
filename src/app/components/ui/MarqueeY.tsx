import Image from 'next/image';
import React from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";
import image1 from '../../../assets/demo.png'

const MarqueeY = ({ customClass, text = 'I am Batman' }: { customClass?: string, text?: string }) => {

    const data = [
        {
            img: image1,
            name: 'Mark chen',
            title: 'Bluesky ventures',
            desc: 'Celestial Solutions has been instrumental in transforming our online presence. Their expertise across various digital marketing channels, coupled with their data-driven approach, has significantly boosted our visibility and engagement.',
        },
        {
            img: image1,
            name: 'Mark chen',
            title: 'Bluesky ventures',
            desc: 'Celestial Solutions has been instrumental in transforming our online presence. Their expertise across various digital marketing channels, coupled with their data-driven approach, has significantly boosted our visibility and engagement.',
        },
        {
            img: image1,
            name: 'Mark chen',
            title: 'Bluesky ventures',
            desc: 'Celestial Solutions has been instrumental in transforming our online presence. Their expertise across various digital marketing channels, coupled with their data-driven approach, has significantly boosted our visibility and engagement.',
        },
        {
            img: image1,
            name: 'Mark chen',
            title: 'Bluesky ventures',
            desc: 'Celestial Solutions has been instrumental in transforming our online presence. Their expertise across various digital marketing channels, coupled with their data-driven approach, has significantly boosted our visibility and engagement.',
        },
        {
            img: image1,
            name: 'Mark chen',
            title: 'Bluesky ventures',
            desc: 'Celestial Solutions has been instrumental in transforming our online presence. Their expertise across various digital marketing channels, coupled with their data-driven approach, has significantly boosted our visibility and engagement.',
        },
    ]
    
    const marqueeContent = (
        <>
            {data.map((v, i) => (
                <div key={i} className='border border-[#777] glass-bg w-full md:w-[600px] rounded-[20px] p-4'>
                    <div className='border-b  border-[#363636] pb-4 flex flex-col justify-center items-start gap-2'>
                        <div className='flex gap-0.5'>
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className='text-[10px]'>⭐</span>
                            ))}
                        </div>
                        <BiSolidQuoteLeft className='-ml-2 size-12 text-[#f584274b]' />
                        <p className='-mt-8  w-full text-[18px] font-normal text-[#b9b9b9] break-words whitespace-pre-line'>
                            {v.desc}
                        </p>
                    </div>
                    <div className='pt-4 flex justify-start items-center gap-4'>
                        <Image src={v.img} alt='' width={45} height={45} className='rounded-[16px]' />
                        <div className='flex flex-col justify-center items-start gap-1'>
                            <span className='sub-font capitalize text-[16px] font-semibold text-[#e0e0e0] leading-4 '>{v.name}</span>
                            <span className='sub-font uppercase text-xs font-extrabold text-[#848484] leading-4 '>{v.title}</span>
                        </div>
                    </div>

                </div>
            ))}

        </>
    );

    return (
        <div className={`flex justify-center w-full overflow-hidden text-zinc-300 ${customClass}`}>
            <div className="flex flex-col  gap-3 animate-marqueeY whitespace-nowrap text-white ">
                {marqueeContent}
                {marqueeContent}
            </div>
        </div>
    );
};
export default MarqueeY;