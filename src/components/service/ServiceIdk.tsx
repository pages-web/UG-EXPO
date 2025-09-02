"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceEnd() {
  const leaders = [
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/house.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/house.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/vroomvroom.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/vroomvroom.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/vroomvroom.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/vroomvroom.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/vroomvroom.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/vroomvroom.png",
    },
  ];

  return (
    <div className="flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] px-4 sm:px-6 lg:px-[10%]">
      <div className="flex flex-wrap gap-[3px] sm:gap-[4px] items-center">
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] uppercase text-black/20">үйлчилгээ</p>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] uppercase text-black">→</p>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] uppercase text-black">самбар түрээс</p>
      </div>
      <div className="mb-12 sm:mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-[10px]">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[11px] bg-[#F1F1F1] p-4 sm:p-5 lg:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-3 sm:mb-4">
              <span className="rounded bg-white px-2 sm:px-3 py-1 text-[12px] sm:text-[14px] font-medium">
                Best
              </span>
            </div>
            <Link href="/rover">
              <div className="mb-4 sm:mb-6 flex flex-1 items-center justify-center rounded-[11px] bg-[#F1F1F1] p-4 sm:p-6 lg:p-8 hover:bg-gray-200 transition-colors duration-200">
                <Image
                  src={leader.image}
                  alt="ballerina cappuchina"
                  width={250}
                  height={150}
                  className="object-contain w-full h-auto max-w-[200px] sm:max-w-[220px] lg:max-w-[250px]"
                />
              </div>
            </Link>
            <div className="mb-3 sm:mb-4 flex justify-center space-x-2">
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-black"></div>
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gray-400"></div>
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gray-400"></div>
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gray-400"></div>
            </div>
            <div className="text-center sm:text-left">
              <p className="mb-1 text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-gray-800 leading-tight">
                {leader.title}
              </p>
              <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-gray-600">
                {leader.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}