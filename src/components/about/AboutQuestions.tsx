"use client";
import { useState } from "react";

const CardGroup = ({ title }: { title: string }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="mb-8 rounded-[12px] p-6 transition-all duration-500">
      <div className="flex items-center justify-between gap-6">
        <p className="text-[24px]">{title}</p>
        <button onClick={() => setShow((prev) => !prev)} className="text-white">
          {show ? "-" : "+"}
        </button>
      </div>
    </div>
  );
};

export default function AboutQuestions() {
  return (
    <div className="flex w-full justify-between bg-[#111F31] px-[5%] py-[20px] text-white">
      <div className="px-6 py-16 md:px-20">
        <p className="mb-4 py-[5%] text-[32px]">
          Түгээмэл <br /> асуултууд
        </p>
      </div>
      <div className="">
        <CardGroup title="01. Basic and additional salary" />
        <div className="h-[1px] bg-[#BFBFBF]"></div>
        <CardGroup title="02. Insurance benefits" />
        <div className="h-[1px] bg-[#BFBFBF]"></div>
        <CardGroup title="03. Performance bonuses" />
        <div className="h-[1px] bg-[#BFBFBF]"></div>
        <CardGroup title="04. Retirement support" />
        <div className="h-[1px] bg-[#BFBFBF]"></div>
        <CardGroup title="05. Vacation and leaves" />
      </div>
    </div>
  );
}
