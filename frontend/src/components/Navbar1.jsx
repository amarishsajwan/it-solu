import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";


export default function Navbar() {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return <div className=' flex justify-between py-8 px-8 md:px-20 items-center h-24 container mx-auto'>
    <a className="logo w-36" href="/">
      <img
        src="https://itsulu-react.netlify.app/_next/static/media/logo-dark.c2f49099.png"
        alt=""
      />
    </a>
    <ul className='hidden text-base font-sans font-semibold md:flex gap-8 cursor-default '>
      <li className=" hover:text-orange-600 transition duration-200">Home</li>
      <li className="hover:text-orange-600 transition duration-200 ">
        <Link to="services" smooth={true} duration={500}>
          Services
        </Link></li>
      <li className="hover:text-orange-600 transition duration-200">Resources</li>
      <li className="hover:text-orange-600 transition duration-200">About</li>
      <li className="hover:text-orange-600 transition duration-200"> <Link to="contact" smooth={true} duration={500}>
        Contact Us
      </Link></li>
    </ul>
    <div onClick={handleNav} className='block md:hidden transition hover:bg-slate-300'>
      <AiOutlineMenu size={20} />
    </div>
    <div className={!nav ? 'md:hidden pt-10 fixed left-0 top-0 w-full z-50 border-r border-r-gray-900 h-full bg-gray-300 translation ease-in-out duration-500' : 'md:hidden pt-10 z-50 w-full fixed left-[-100%]  translation  ease-in-out duration-500'} >
      <div className='transition absolute right-8 top-9 hover:bg-slate-100' onClick={handleNav}>
        <AiOutlineClose color='black' size={21} />
      </div>
      <a className="flex ms-4 logo w-36" href="/">
        <img
          src="https://itsulu-react.netlify.app/_next/static/media/logo-dark.c2f49099.png"
          alt=""
        />
      </a>
      <ul className='pt-4 uppercase'>
        <li className="p-4 border-gray-300 cursor-default">Home</li>
        <li className="p-4 border-gray-300 cursor-default">Company</li>
        <li className="p-4 border-gray-300 cursor-default">Resources</li>
        <li className="p-4 border-gray-300 cursor-default">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>

  </div>
}