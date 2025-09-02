"use client";

import Image from "next/image";
import Link from "next/link";

export default function OnlineaSkibidi() {
  const leaders = [
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/wheel.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/wheel.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/wheel.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/wheel.png",
    },
    {
      title: "2023/25 v8 engine, 2.7s, 700cv",
      phone: "+976 89899999",
      image: "/home/wheel.png",
    },
  ];

  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-[5%]">
      <div className="mb-8 sm:mb-12 lg:mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 xl:gap-[10px]">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[8px] sm:rounded-[10px] lg:rounded-[11px] bg-[#F1F1F1] p-3 sm:p-4 lg:p-5 xl:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-2 sm:mb-3 lg:mb-4">
              <span className="rounded bg-white px-2 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[12px] lg:text-[14px] font-medium">
                Best
              </span>
            </div>
            <Link href="/area">
              <div className="mb-3 sm:mb-4 lg:mb-6 flex flex-1 items-center justify-center rounded-[8px] sm:rounded-[10px] lg:rounded-[11px] bg-[#F1F1F1] p-3 sm:p-4 lg:p-6 xl:p-8 hover:bg-gray-200 transition-colors duration-200">
                <Image
                  src={leader.image}
                  alt={leader.title}
                  width={250}
                  height={150}
                  className="object-contain w-full h-auto max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[250px]"
                />
              </div>
            </Link>
            <div className="mb-2 sm:mb-3 lg:mb-4 flex justify-center space-x-1 sm:space-x-1.5 lg:space-x-2">
              <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2 rounded-full bg-black"></div>
              <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2 rounded-full bg-gray-400"></div>
              <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2 rounded-full bg-gray-400"></div>
              <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2 rounded-full bg-gray-400"></div>
            </div>
            <div className="text-center">
              <p className="mb-0.5 sm:mb-1 text-[10px] sm:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-medium text-gray-800 leading-tight">
                {leader.title}
              </p>
              <p className="text-[9px] sm:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[13px] text-gray-600">
                {leader.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}