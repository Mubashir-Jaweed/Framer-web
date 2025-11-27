import React from 'react'
import { IoIosAnalytics } from 'react-icons/io'

const Why = () => {

  const about = [
        {
            icon: <IoIosAnalytics size={'40'} className='text-[#f58327]' />,
            title: "Proven Track Record",
            txt: "We have built a reputation as a trusted and reliable partner in achieving business success."
        },
        {
            icon: <IoIosAnalytics size={'40'} className='text-[#f58327]' />,
            title: "Tailored Solutions",
            txt: "We offer personalized solutions tailored to your specific goals, audience, and industry."
        },
        {
            icon: <IoIosAnalytics size={'40'} className='text-[#f58327]' />,
            title: "Client-Centric Focus",
            txt: "Your success is our priority. We prioritize understanding your business goals."
        },
         {
            icon: <IoIosAnalytics size={'40'} className='text-[#f58327]' />,
            title: "Proven Track Record",
            txt: "We have built a reputation as a trusted and reliable partner in achieving business success."
        },
        {
            icon: <IoIosAnalytics size={'40'} className='text-[#f58327]' />,
            title: "Tailored Solutions",
            txt: "We offer personalized solutions tailored to your specific goals, audience, and industry."
        },
        {
            icon: <IoIosAnalytics size={'40'} className='text-[#f58327]' />,
            title: "Client-Centric Focus",
            txt: "Your success is our priority. We prioritize understanding your business goals."
        }
    ]

    return (
        <div className='w-full p-10 md:p-14  pb-24 flex flex-col justify-center items-center gap-2'>
            <div className='bg-[#232323] flex justify-center items-center rounded-full px-3 py-1.5'>
                <span className='sub-font uppercase text-xs font-bold text-color leading-4 '>Why Choose Us</span>
            </div>
            <span className='main-font text-[28px] leading-[20px] md:text-[30px] lg:text-[38px] font-normal md:leading-[44px] [word-spacing:-3px] text-center text-white'>Why we are your best<br className='hidden lg:inline-block'/> choice</span>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5 justify-center items-center mt-12'>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className='cursor-pointer border border-[#1f1f1f] p-4  lg:max-w-[480px]  rounded-[22px] flex flex-col gap-4 justify-center items-center'>
                        <span className='border border-[#f58327] rounded-[22px] p-2.5 m-1 glass-bg'>
                            {about[i].icon}
                        </span>
                        <span className='capitalize text-white text-[20px] main-font text-center'>{about[i].title}</span>
                        <span className=' text-center sub-font text-[16px] leading-5 font-normal text-[#9d9d9d] '>{about[i].txt}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Why
