import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";


export default function Navbar() {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return <div className='flex justify-between items-center h-24 container mx-auto px-4'>
    <a className="logo w-36" href="/">
      <img
        src="https://itsulu-react.netlify.app/_next/static/media/logo-dark.c2f49099.png"
        alt=""
      />
    </a>
    <ul className='hidden md:flex cursor-default '>
      <li className="p-4 hover:font-semibold">Home</li>
      <li className="p-4 hover:font-semibold">
        <Link to="services" smooth={true} duration={500}>
          Services
        </Link></li>
      <li className="p-4 hover:font-semibold">Resources</li>
      <li className="p-4 hover:font-semibold">About</li>
      <li className="p-4"> <Link to="contact" smooth={true} duration={500}>
        Contact Us
      </Link></li>
    </ul>
    <div onClick={handleNav} className='block md:hidden  hover:bg-slate-300'>
      <AiOutlineMenu size={20} />
    </div>
    <div className={!nav ? 'md:hidden pt-10 fixed left-0 top-0 w-[1000%] z-50 border-r border-r-gray-900 h-full bg-gray-300 translation ease-in-out duration-500' : 'md:hidden pt-10 z-50 fixed left-[-100%]  translation  ease-in-out duration-500'} >
      <div className='absolute right-1 top-1' onClick={handleNav}>
        <AiOutlineClose color='black' size={20} />
      </div>
      <a className="flex ms-4 logo w-36" href="/">
        <img
          src="https://itsulu-react.netlify.app/_next/static/media/logo-dark.c2f49099.png"
          alt=""
        />
      </a>
      <ul className='pt-4 uppercase '>
        <li className="p-4 border-gray-300">Home</li>
        <li className="p-4 border-gray-300">Company</li>
        <li className="p-4 border-gray-300">Resources</li>
        <li className="p-4 border-gray-300">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>

  </div>
}