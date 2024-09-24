"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleNav = () => {
    setIsClick(!isClick);
  };

  const handleScroll = useCallback(() => { 
    const currentScrollPos = window.pageYOffset;
    setIsVisible(prevScrollPos > currentScrollPos);  
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <nav className={`bg-[#1c1b22] z-10 fixed top-0 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} font-nav`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">Logo</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/" className="text-white p-2 hover:text-[#00fdaa] relative group">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00fdaa] transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link href="/about" className="text-white p-2 hover:text-[#00fdaa] relative group">
                  About 
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00fdaa] transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link href="/services" className="text-white p-2 hover:text-[#00fdaa] relative group">
                  Services
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00fdaa] transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link href="/contact" className="text-white p-2 hover:text-[#00fdaa] relative group">
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00fdaa] transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNav}
              >
                {isClick ? (
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div> 
        <div className={`md:hidden transition-all duration-300 ${isClick ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-3 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-white block p-2 hover:text-[#00fdaa] relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00fdaa] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-white block p-2 hover:text-[#00fdaa] relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00fdaa] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="text-white block p-2 hover:text-[#00fdaa] relative group">
              Services
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00fdaa] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-white block p-2 hover:text-[#00fdaa] relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00fdaa] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
