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
    <div className="flex w-full justify-between px-[10%] bg-[#111F31] text-white">
      <div className="px-6 py-[5%] md:px-20">
        <p className="mb-4 text-[32px]">
          Түгээмэл <br /> асуултууд
        </p>
      </div>
      <div className="">
        <CardGroup title="01. Уг худалдааны төвд 500 гаруй ажлын байр Улаанбаатар хотод шинээр бий болгож" />
        <div className="h-[1px] bg-[#BFBFBF]"></div>
        <CardGroup title="02. Уг худалдааны төвд 500 гаруй ажлын байр Улаанбаатар хотод шинээр бий болгож" />
        <div className="h-[1px] bg-[#BFBFBF]"></div>
        <CardGroup title="03. Уг худалдааны төвд 500 гаруй ажлын байр Улаанбаатар хотод шинээр бий болгож" />
        <div className="h-[1px] bg-[#BFBFBF]"></div>
        <CardGroup title="04. Уг худалдааны төвд 500 гаруй ажлын байр Улаанбаатар хотод шинээр бий болгож" />
        <div className="h-[1px] bg-[#BFBFBF]"></div>
        <CardGroup title="05. Уг худалдааны төвд 500 гаруй ажлын байр Улаанбаатар хотод шинээр бий болгож" />
      </div>
    </div>
  );
}
