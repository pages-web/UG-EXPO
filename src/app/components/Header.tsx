"use client";

import Image from "next/image";
import { SiInstagram } from "react-icons/si";
import { MdFacebook } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  return (
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
      <div className="flex gap-[20px] text-white">
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
      </div>
    </div>
  );
}
