'use client'
import React, { useState } from 'react'
import Button from './Button'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {

  const route = usePathname()
  console.log(route)
  const [isOpen, setIsOpen] = useState(false)


  const data = [
    { title: "home", link: "/", isTrue: route == '/' },
    { title: "about", link: "/about", isTrue: route == '/about' },
    { title: "services", link: "/services", isTrue: route == '/services' },
    { title: "projects", link: "/case-studies", isTrue: route == '/case-studies' },
    { title: "reviews", link: "/reviews", isTrue: route == '/reviews' },
    { title: "blog", link: "/blog", isTrue: route == '/blog' },
    { title: "contact", link: "/contact-us", isTrue: route == '/contact-us' },
  ]

  return (
    <>
    <div className=' py-3 bg-[#0a0a0a] lg:bg-transparent lg:py-0 backdrop-blur w-full fixed top-0 z-50 flex justify-center items-center'>
      <div className='w-full mx-10 flex justify-between items-center p-2'>
        <div className=' main-font font-bold text-color text-[20px] w-[200px] flex justify-start items-center'>
          Apni-Company
        </div>

        <div className='hidden bg-[#0a0a0a] border border-[#434343] rounded-full p-2 xl:flex justify-center items-center'>
          {data.map((v, i) => (
            <Link key={i} href={v.link}>
              <div className={` cursor-pointer main-font text-white uppercase px-5 py-3 rounded-full text-xs duration-500 transition-all hover:scale-90 ${v.isTrue ? 'bg-[#262626] text-color' : 'bg-transparent nav-btn'}`}>
                {v.title}
              </div>
            </Link>
          ))}
        </div>

        <div className='hidden w-[200px] xl:flex justify-end items-center'>
          <Button btnText='Template' isGap={false} />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className='xl:hidden flex bg-[#212121] rounded-[10px] p-2'>
          <svg
            width={26}
            height={26}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={!isOpen ? '#fff' : '#f58327'}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              style={{
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(45deg) translate(0px, 6px)" : "rotate(0deg) translate(0,0)",
                transformOrigin: "center",
              }}
            />
            {/* <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        style={{
          transition: "all 0.3s ease",
          opacity: isOpen ? 0 : 1,
        }}
      /> */}
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              style={{
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(-45deg) translate(0px, -5.5px)" : "rotate(0deg) translate(0,0)",
                transformOrigin: "center",
              }}
            />
          </svg>
        </div>
      </div>
      
    </div>
    <div className={` ${isOpen ? 'max-h-[700px] h-[600px] min-h-[500px] opacity-100' : 'h-0 opacity-0'} xl:hidden z-40 flex flex-col justify-center items-center pt-24 pb-10 transition-all delay-300 fixed w-full borde bg-[#0a0a0a]`}>
          {data.map((v, i) => (
            <Link key={i} href={v.link} className='w-full px-8'>
              <div className={`${isOpen? 'block' : 'hidden'} cursor-pointer main-font text-white uppercase px-5 py-6 rounded-full text-center text-xs duration-500 transition-all hover:scale-90 ${v.isTrue ? ' bg-[#262626] text-color' : 'bg-transparent sidebar-btn'}`}>
                {v.title}
              </div>
            </Link>
          ))}
        </div>
    </>
  )
}

export default Navbar
