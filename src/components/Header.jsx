'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-10 py-8 md:py-14">
      <div className="max-w-[1728px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/plant-logo.png"
            alt="FloraVision Logo"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg"
          />
          <span className="text-white font-inter font-black text-xl md:text-[28px] leading-tight">
            FloraVision.
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-16">
          <a href="#home" className="font-indie text-white text-lg xl:text-2xl hover:opacity-80 transition-opacity">
            Home
          </a>
          <div className="flex items-center gap-3 cursor-pointer group">
            <span className="font-indie text-white text-lg xl:text-2xl group-hover:opacity-80 transition-opacity">
              Plants Type
            </span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="mt-1 group-hover:translate-y-0.5 transition-transform">
              <path d="M6 7L0 0H12L6 7Z" fill="white" />
            </svg>
          </div>
          <a href="#more" className="font-indie text-white text-lg xl:text-2xl hover:opacity-80 transition-opacity">
            More
          </a>
          <a href="#contact" className="font-indie text-white text-lg xl:text-2xl hover:opacity-80 transition-opacity">
            Contact
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-10">
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <Image src="/assets/search-icon.png" alt="Search" width={26} height={26} />
          </button>
          <button aria-label="Cart" className="hover:opacity-70 transition-opacity">
            <Image src="/assets/bag-icon.png" alt="Shopping Bag" width={26} height={26} />
          </button>
          <div className="flex flex-col gap-[5px] cursor-pointer group">
            <span className="w-[31px] h-[2px] bg-white rounded group-hover:w-[23px] transition-all"></span>
            <span className="w-[23px] h-[2px] bg-white rounded ml-auto group-hover:w-[31px] transition-all"></span>
          </div>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white rounded ml-auto transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        <div className={`lg:hidden fixed inset-0 bg-[#1B2316]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <a href="#home" onClick={() => setMobileOpen(false)} className="font-indie text-white text-3xl hover:opacity-80 transition-opacity">Home</a>
          <a href="#plants" onClick={() => setMobileOpen(false)} className="font-indie text-white text-3xl hover:opacity-80 transition-opacity">Plants Type</a>
          <a href="#more" onClick={() => setMobileOpen(false)} className="font-indie text-white text-3xl hover:opacity-80 transition-opacity">More</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="font-indie text-white text-3xl hover:opacity-80 transition-opacity">Contact</a>
          <div className="flex items-center gap-8 mt-4">
            <button aria-label="Search">
              <Image src="/assets/search-icon.png" alt="Search" width={26} height={26} />
            </button>
            <button aria-label="Cart">
              <Image src="/assets/bag-icon.png" alt="Shopping Bag" width={26} height={26} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
