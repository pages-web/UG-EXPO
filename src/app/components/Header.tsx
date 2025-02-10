import Image from "next/image";
import { SiInstagram } from "react-icons/si";
import { MdFacebook } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex h-[70px] w-full items-center justify-between bg-[#001B64] px-[5%]">
      <Image
        src="/Logo.png"
        alt="logo"
        width={130}
        height={20}
        className="h-[20px] w-[130px]"
      />
      <div className="flex gap-[20px] text-white">
        <p>Бидний тухай</p>
        <p>Үйлчилгээ</p>
        <p>Барилгын материал</p>
        <p>Авто худалдаа</p>
        <p>Aвто сэлбэг</p>
        <p>Талбай түрээс</p>
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
