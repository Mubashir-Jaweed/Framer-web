import React from 'react'
const Why = () => {
    return (
        <div className='w-full  md:p-10 lg:p-32 text-white flex flex-col items-center gap-12'>
            {/* row 1 */}
            <div className='flex justify-start items-center md:items-start flex-col lg:flex-row lg:items-center lg:gap-5 gap-0 '>
                <div className='bg-[#232323] flex justify-center items-center rounded-full px-3 py-1.5'>
                    <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>why us</span>
                </div>
                <div>
                    <span className='main-font text-[28px] md:text-[30px] lg:text-[38px] font-normal leading-[44px] [word-spacing:-3px] text-white'>Our Specialities</span>
                </div>
            </div>
            {/* row 2 */}
            <div className='flex justify-center md:justify-end items-center gap-5'>
                <p className='w-[90%] text-center md:text-start lg:w-[35%] md:text-[18px]  font-normal text-[#b9b9b9] break-words whitespace-pre-line'>
                    Our top-notch digital marketing agency not only delivers impressive results but also dazzles our clients with remarkable statistics. We pride ourselves on our ability to amaze customers with tangible outcomes and eye-catching figures.
                </p>
            </div>
            {/* row 3 */}
            <div className="grid md:grid-cols-12 grid-col-1 gap-3 sm:w-full w-[97%]">
                {/* 1 */}
                <div className="md:col-span-8 why-bg1 rounded-[30px] p-8 h-[450px] flex justify-center items-end">
                    <div className='w-full flex flex-col gap-5 justify-start items-start'>
                        <div className='flex flex-col'>
                            <span className='main-font text-[50px] md:text-[70px] xl:text-[100px] leading-[95px]'>150%</span>
                            <span className='uppercase main-font text-[15px] md:text-[20px]'>average traffic increase</span>
                        </div>
                        <p className='text-[16px] font-normal text-[#fff] break-words whitespace-pre-line'>
                            Clients choose to stay with us over the long run due to the exceptional results we deliver and the strong relationships we build.
                        </p>
                    </div>
                </div>
                {/* 2 */}
                <div className="md:col-span-4 bg-[#1f1d1d] rounded-[30px] p-8 h-[450px] flex flex-col justify-between items-start">
                    <div className='flex flex-col'>
                        <span className='main-font text-[50px] md:text-[70px] xl:text-[100px] leading-[95px]'>$74M</span>
                        <span className='uppercase main-font text-[15px] md:text-[20px]'>Revenue Generated</span>
                    </div>
                    <p className='text-[16px] font-normal text-[#fff] break-words whitespace-pre-line'>
                        We help generated $74M revenue for our clients around the globe                    </p>
                </div>
                {/* 3 */}
                <div className="md:col-span-6 why-bg rounded-[30px] p-8 h-[450px] flex justify-center items-center">
                    <div className='glass-bg border-[0.1px] border-zinc-200/40 rounded-full h-[350px] w-[350px]'>

                    </div>
                </div>
                {/* 4 */}
                <div className="md:col-span-6 bg-[#f58327] text-black rounded-[30px] p-8 h-[450px] flex flex-col justify-between items-start">
                    <div className='w-full flex flex-col-reverse items-end '>
                        <span className='main-font text-[50px] md:text-[70px] xl:text-[100px] leading-[95px]'>80%</span>
                        <span className='uppercase main-font text-[15px] md:text-[20px]'>Enhanced Brand Visibility</span>
                    </div>
                    <p className='text-[16px] font-normal break-words whitespace-pre-line'>
                        Our agency developed a content marketing plan for a client, resulting in a significant increase in brand visibility and recognition. As a result, the client experienced a 80% increase in website traffic within six months.                    </p>
                </div>
            </div>

        </div>
    )
}

export default Why
