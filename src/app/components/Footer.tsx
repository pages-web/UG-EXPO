import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex w-full flex-col justify-center justify-between gap-[32px] bg-[#052434] px-[64px] py-[80px] text-white">
      <div className="flex flex-col justify-between gap-[24px] lg:flex-row">
        <Image
          src="/Logo.png"
          alt="logo"
          width={120}
          height={15}
          className="h-[14px] w-[120px]"
        />
        <div className="flex flex-col justify-center gap-[32px] text-[16px] lg:flex-row">
          <p>Link One</p>
          <p>Link Two</p>
          <p>Link Three</p>
          <p>Link Four</p>
          <p>Link Five</p>
        </div>
        <div className="flex gap-[12px] text-[24px]">
          <FaFacebook />
          <FaInstagram />
          <BsTwitterX />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>
      <div className="h-[2px] w-[100%] bg-white"></div>
      <div className="text-[#A3A3A3]">
        © 2025 БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН
      </div>
    </div>
  );
}
