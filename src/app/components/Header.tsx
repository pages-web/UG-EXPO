"use client";

import { useState } from "react";
import Image from "next/image";
import { SiInstagram } from "react-icons/si";
import { MdFacebook } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="relative">
      <div className="absolute flex h-[70px] w-full items-center justify-between bg-transparent px-[5%]">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="logo"
            width={130}
            height={20}
            className="h-[20px] w-[130px]"
          />
        </Link>
        <div className="hidden gap-[20px] text-white xl:flex">
          <Link href="/about">
            <p>Бидний тухай</p>
          </Link>
          <p>Үйлчилгээ</p>
          <Link href="/car-tools">
            <p>Барилгын материал</p>
          </Link>
          <Link href="/car-shop">
            <p>Авто худалдаа</p>
          </Link>
          <Link href="/car-shop-tools">
            <p>Aвтo сэлбэг</p>
          </Link>
          <Link href="/things">
            <p>Талбай түрээс</p>
          </Link>
        </div>
        <div className="flex gap-[12px]">
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white">
            <MdFacebook className="text-[20px]" />
          </div>
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white">
            <SiInstagram />
          </div>

          <button
            className="text-2xl text-white xl:hidden"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </div>

      <div
        className={`shadow-4xl fixed left-0 top-0 h-full w-[250px] transform bg-gradient-to-b from-gray-700 to-neutral-900 text-white transition-all duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } xl:hidden`}
      >
        <div className="flex justify-end p-4">
          <p
            className="cursor-pointer text-3xl font-semibold text-white transition-colors duration-300 hover:text-yellow-400"
            onClick={closeSidebar}
          >
            X
          </p>
        </div>
        <div className="flex flex-col gap-6 p-6">
          <Link href="/about">
            <p
              className="text-lg font-medium transition-colors duration-300 hover:text-yellow-300"
              onClick={closeSidebar}
            >
              Бидний тухай
            </p>
          </Link>
          <p
            className="text-lg font-medium transition-colors duration-300 hover:text-yellow-300"
            onClick={closeSidebar}
          >
            Үйлчилгээ
          </p>
          <Link href="/car-tools">
            <p
              className="text-lg font-medium transition-colors duration-300 hover:text-yellow-300"
              onClick={closeSidebar}
            >
              Барилгын материал
            </p>
          </Link>
          <Link href="/car-shop">
            <p
              className="text-lg font-medium transition-colors duration-300 hover:text-yellow-300"
              onClick={closeSidebar}
            >
              Авто худалдаа
            </p>
          </Link>
          <Link href="/car-shop-tools">
            <p
              className="text-lg font-medium transition-colors duration-300 hover:text-yellow-300"
              onClick={closeSidebar}
            >
              Авто сэлбэг
            </p>
          </Link>
          <Link href="/things">
            <p
              className="text-lg font-medium transition-colors duration-300 hover:text-yellow-300"
              onClick={closeSidebar}
            >
              Талбай түрээс
            </p>
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform">
          <div className="flex justify-center gap-4">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
              <MdFacebook className="text-[20px]" />
            </div>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-pink-500 transition-colors duration-300 hover:bg-pink-500 hover:text-white">
              <SiInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
