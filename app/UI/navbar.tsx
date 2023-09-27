
'use client';

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./navItem.tsx";
import '../styles/navbar.css';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/pages/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <h1 className="logo ml-4 mr-4 text-lime-600 hover:text-lime-400 ">CodeWithMarish</h1>
        </Link>
        
        <div className={`dropdown dropdown-hover `}>
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-80">
          {MENU_LIST.map((menu, idx) => (
            <li className="text-orange-600"
              onClick={() => {
                console.log('navActive', navActive);
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </li>
          ))}
            
          </ul>
        </div>


      </nav>
    </header>
  );
};

export default Navbar;