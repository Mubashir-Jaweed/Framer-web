'use client'
import React from 'react'
import Button from './Button'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {

  const route = usePathname()
  console.log(route)


  const data = [
    {title:"home",link:"/", isTrue: route == '/'},
    {title:"about",link:"/about", isTrue: route == '/about'},
    {title:"services",link:"/services", isTrue: route == '/services'},
    {title:"projects",link:"/case-studies", isTrue: route == '/case-studies'},
    {title:"reviews",link:"/reviews", isTrue: route == '/reviews'},
    {title:"blog",link:"/blog", isTrue: route == '/blog'},
    {title:"contact",link:"/contact-us", isTrue: route == '/contact-us'},
  ]

  return (
    <div className='bg-transparent backdrop-blur w-full fixed top-0 z-50 flex justify-center items-center'>
      <div className='w-full mx-10 flex justify-between items-center p-2'>
        <div className=' main-font font-bold text-color text-[20px] w-[200px] flex justify-start items-center'>
Apni-Company
        </div>

        <div className='bg-[#0a0a0a] border border-[#434343] rounded-full p-2 flex justify-center items-center'>
          {data.map((v,i)=>(
           <Link key={i} href={v.link}>
            <div className={` cursor-pointer main-font text-white uppercase px-5 py-3 rounded-full text-xs duration-500 transition-all hover:scale-90 ${v.isTrue ? 'bg-[#262626] text-color' : 'bg-transparent nav-btn'}`}>
              {v.title}
            </div>
           </Link>
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
