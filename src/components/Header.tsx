"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaPhone, FaBars, FaTimes } from "react-icons/fa";

const NavigationFyodor = () => {
  const [isDropdownBlaBlaBla, setIsDropdownBlaBlaBla] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Get current route
  const router = useRouter();
  const currentPath = router.pathname || window.location.pathname;
  
  // Determine which logo to use
  const logoSrc = currentPath === "/" ? "/Logo.png" : "/Lego.png";

  return (
    <div className="relative z-50">
      <div className="absolute flex h-[70px] w-full items-center justify-between bg-transparent px-[5%]">
        
        <Link href="/">
          <div>
            <Image src={logoSrc} width={80} height={40} alt="UG Logo" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block mx-auto w-fit rounded-b-[40px] bg-black px-16 text-white shadow-lg">
          <div className="relative flex justify-center gap-16 py-6 text-sm">
            <Link href="/about">
              <p className="hover:underline">Бидний тухай</p>
            </Link>
                    
            <div
              className="relative z-20"
              onMouseEnter={() => setIsDropdownBlaBlaBla(true)}
              onMouseLeave={() => setIsDropdownBlaBlaBla(false)}
            >
              <span className="cursor-pointer hover:underline">Худалдаа</span>
              {isDropdownBlaBlaBla && (
                <div className="absolute left-0 top-full z-10 w-[220px] space-y-4 rounded-b-[40px] bg-gray-600 px-10 py-6 text-center text-white">
                  <div className="flex flex-col gap-[5px]">
                  <Link href="/online">
                    <p className="hover:underline">Автомашин</p>
                  </Link>
                  <Link href="/onlinea">
                  <p className="hover:underline">Барилгын Материал</p>
                  </Link>
                  <Link href="/onlineb">
                  <p className="hover:underline">Авто Сэлбэг</p>
                  </Link>
                </div>
                </div>
              )}
            </div>

            <Link href="/service">
              <p className="hover:underline">Үйлчилгээ</p>
            </Link>
            <Link href="/new">
              <p className="hover:underline">Мэдээ</p>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black"
          >
            {isMobileMenuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
          </button>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
            <FaSearch size={14} />
          </button>
          <button className="flex w-9 h-9 items-center justify-center rounded-full bg-white text-black">
            <FaPhone size={14} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide from Left */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-black text-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="px-6 py-20 space-y-6">
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            <p className="hover:underline py-3 border-b border-gray-700">Бидний тухай</p>
          </Link>
          
          <div className="space-y-2">
            <p className="py-3 border-b border-gray-700">Худалдаа</p>
            <div className="pl-4 space-y-2">
              <Link href="/online" onClick={() => setIsMobileMenuOpen(false)}>
                <p className="hover:underline py-2 text-gray-300">Автомашин</p>
              </Link>
              <Link href="/onlinea" onClick={() => setIsMobileMenuOpen(false)}>
                <p className="hover:underline py-2 text-gray-300">Барилгын Материал</p>
              </Link>
              <Link href="/onlineb" onClick={() => setIsMobileMenuOpen(false)}>
                <p className="hover:underline py-2 text-gray-300">Авто Сэлбэг</p>
              </Link>
            </div>
          </div>
          
          <Link href="/service" onClick={() => setIsMobileMenuOpen(false)}>
            <p className="hover:underline py-3 border-b border-gray-700">Үйлчилгээ</p>
          </Link>
          
          <Link href="/new" onClick={() => setIsMobileMenuOpen(false)}>
            <p className="hover:underline py-3 border-b border-gray-700">Мэдээ</p>
          </Link>
          
          {/* Mobile Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
              <FaSearch size={14} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
              <FaPhone size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default NavigationFyodor;