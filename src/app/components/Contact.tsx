import React from 'react'

const Contact = () => {
    return (
        <div className='p-32 w-full flex flex-col justify-center items-center'>
            <div className='border w-full flex justify-between items-center'>
                <div>
                    <div className='main-font text-white text-[150px] leading-[105px]'>Let's</div>
                    <div className='main-font text-color text-[150px] leading-[105px]'>Talk!</div>
                </div>
                <div className='bg-[#33333346] rounded-[30px] p-8 flex flex-col justify-center items-center gap-6'>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <span className='text-sm text-[#ababab]'>Name</span>
                        <input type='text' placeholder='Jane Ansari' className='text-[16px] w-[650px] bg-[#56565646] px-4 py-5 rounded-[25px] placeholder:text-[#ababab] focus:outline-none focus:ring-1 focus:ring-[#f58327] text-[#d7d7d7]' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <span className='text-sm text-[#ababab]'>Email</span>
                        <input type='email' placeholder='jane.ansari@gmail.com' className='text-[16px] w-[650px] bg-[#56565646] px-4 py-5 rounded-[25px] placeholder:text-[#ababab] focus:outline-none focus:ring-1 focus:ring-[#f58327] text-[#d7d7d7]' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <span className='text-sm text-[#ababab]'>Message</span>
                        <textarea rows={5} placeholder='Write your message' className='text-[16px] w-[650px] bg-[#56565646] px-4 py-5 rounded-[25px] placeholder:text-[#ababab] focus:outline-none focus:ring-1 focus:ring-[#f58327] text-[#d7d7d7]' />
                    </div>
                    <div className='bg-[#f58327] w-full main-font rounded-[12px] cursor-pointer transition-all duration-300 hover:bg-[#fff] text-black text-[18px] flex justify-center items-center py-2'>
                        Submit
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
