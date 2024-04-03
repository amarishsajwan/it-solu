import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About Us", href: "#" },
];

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <div className="flex w-full h-24 px-2.5 bg-white">
        <div className=" container mx-auto flex justify-between items-center ">
          <a className="logo w-36" href="/">
            <img
              src="https://itsulu-react.netlify.app/_next/static/media/logo-dark.c2f49099.png"
              alt=""
            />
          </a>
          <div className="menu font-sans font-normal">
            <nav className="flex gap-x-10">
              <ul className="flex gap-x-20 font-medium text-stone-950 cursor-default ">
                <li>
                  <Link to="services" smooth={true} duration={500}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
