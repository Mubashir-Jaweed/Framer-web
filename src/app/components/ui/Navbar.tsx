import React from 'react'
import Button from './Button'

const Navbar = () => {


  const data = [
    {title:"home",link:"/", isTrue: true},
    {title:"about",link:"/"},
    {title:"services",link:"/"},
    {title:"projects",link:"/"},
    {title:"reviews",link:"/"},
    {title:"blog",link:"/"},
    {title:"contact",link:"/"},
  ]

  return (
    <div className='bg-transparent backdrop-blur w-full fixed top-0 z-50 flex justify-center items-center'>
      <div className='w-full mx-10 flex justify-between items-center p-2'>
        <div className=' main-font font-bold text-color text-[20px] w-[200px] flex justify-start items-center'>
Apni-Company
        </div>

        <div className='bg-[#0a0a0a] border border-[#434343] rounded-full p-2 flex justify-center items-center'>
          {data.map((v,i)=>(
            <div key={i} className={` cursor-pointer main-font text-white uppercase px-5 py-3 rounded-full text-xs duration-500 transition-all hover:scale-90 ${v.isTrue ? 'bg-[#262626] text-color' : 'bg-transparent nav-btn'}`}>
              {v.title}
            </div>
          ))}
        </div>

        <div className=' w-[200px] flex justify-end items-center'>
          <Button btnText='Template' isGap={false}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
