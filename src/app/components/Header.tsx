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
        className={`fixed left-0 top-0 h-full w-[250px] transform bg-white text-black shadow-xl transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } xl:hidden`}
      >
        <div className="flex justify-end p-4">
          <p
            className="cursor-pointer text-2xl text-black"
            onClick={closeSidebar}
          >
            X
          </p>
        </div>
        <div className="flex flex-col gap-6 p-4">
          <Link href="/about">
            <p onClick={closeSidebar}>Бидний тухай</p>
          </Link>
          <p onClick={closeSidebar}>Үйлчилгээ</p>
          <Link href="/car-tools">
            <p onClick={closeSidebar}>Барилгын материал</p>
          </Link>
          <Link href="/car-shop">
            <p onClick={closeSidebar}>Авто худалдаа</p>
          </Link>
          <Link href="/car-shop-tools">
            <p onClick={closeSidebar}>Авто сэлбэг</p>
          </Link>
          <Link href="/things">
            <p onClick={closeSidebar}>Талбай түрээс</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
