"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavigationFyodor = () => {
  const [isDropdownBlaBlaBla, setIsDropdownBlaBlaBla] = useState(false);

  return (
    <div className="relative">
      <div className="absolute flex h-[70px] w-full items-center justify-between bg-transparent px-[5%]">
        <Link href="/">
          <div className="">
            <Image src="/Logo.png" width={100} height={100} alt="sf" />
          </div>
        </Link>
        <div className="mx-auto w-fit rounded-b-[40px] bg-black px-16 text-white">
          <div className="relative flex justify-center gap-16 py-6">
            <Link href="/about">
              <p className="text-[14px]">Бидний тухай</p>
            </Link>

            <div
              className="relative z-20"
              onMouseEnter={() => setIsDropdownBlaBlaBla(true)}
              onMouseLeave={() => setIsDropdownBlaBlaBla(false)}
            >
              <span className="text-[14px]">Худалдаа</span>
              {isDropdownBlaBlaBla && (
                <div className="absolute left-0 top-full z-10 w-[220px] space-y-4 rounded-b-[40px] bg-gray-600 px-10 py-6 text-center">
                  <Link href="/online">
                    <p className="text-[14px]">Автомашин</p>
                  </Link>
                  <p className="text-[14px]">Барилгын Материал</p>
                  <p className="text-[14px]">Авто Сэлбэг</p>
                </div>
              )}
            </div>
            <Link href="/service">
              <p className="text-[14px]">Үйлчилгээ</p>
            </Link>
            <Link href="/new">
              <p className="text-[14px]">Мэдээ</p>s
            </Link>
          </div>
        </div>
        <div className="">*something</div>
      </div>
    </div>
  );
};

export default NavigationFyodor;
