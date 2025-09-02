"use client";

import Image from "next/image";

export default function RoverRange() {
  return (
    <div className="flex w-full flex-col justify-start py-[20px] px-[10%]">
      <div className="flex gap-[4px]">
        <p className="text-[20px] uppercase text-[#5C5C5C]">←</p>
        <p className="text-[20px] uppercase text-black">RANGE ROVER SUS LWB</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex w-full gap-[64px] py-[40px]">
          <div className="">
            <Image
              src="/home/stealerdude.png"
              alt="Car Image"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>

          <div className="flex w-[300px] flex-col gap-4">
            <p className="text-[12px] text-[#5A5A5A]">Cars /</p>
            <p className="text-[18px] text-black">RANGE ROVER SUS LWB</p>
            <p className="text-[15px] text-[#333]">2021/2025</p>
            <p className="text-[12px] leading-relaxed text-[#666]">
              Jaguar Land Rover would like to use cookies to store information
              on your computer to improve our website and to
            </p>

            <div className="h-[1px] bg-[#D1D1D1]" />

            <button className="flex items-center justify-center gap-2 rounded bg-black py-2 text-[13px] text-white">
              89595999
            </button>

            <div className="mt-4 flex flex-col gap-2 text-[13px]">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-[14px] w-[3px] bg-[#ED7516]" />
                  <p className="text-[#777777]">
                    Дотор өнгө
                    <span className="text-[#545454]">Шаргал</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image
          src="/home/stealerdude.png"
          alt=""
          width={800}
          height={367}
          className=""
        />
        <Image
          src="/home/stealerdude.png"
          alt=""
          width={800}
          height={367}
          className=""
        />
      </div>
    </div>
  );
}
