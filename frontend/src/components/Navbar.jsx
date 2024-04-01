import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return <div className='flex justify-between items-center h-24 max-w-1240px mx-auto px-4'>
    <a className="logo w-36" href="/">
      <img
        src="https://itsulu-react.netlify.app/_next/static/media/logo-dark.c2f49099.png"
        alt=""
      />
    </a>
    <ul className='hidden sm:flex'>
      <li className="p-4">Home</li>
      <li className="p-4">Company</li>
      <li className="p-4">Resources</li>
      <li className="p-4">About</li>
      <li className="p-4">Contact</li>
    </ul>
    <div onClick={handleNav} className='block md:hidden '>
      <AiOutlineMenu size={20} />
    </div>
    <div className={!nav ? 'sm:hidden pt-10 fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-gray-300 translation ease-in-out duration-500' : ' pt-10 fixed left-[-100%]  translation ease-in-out duration-500'} >
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