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
  ];

  return (
    <div className="flex flex-col gap-[30px] px-[5%]">
      <div className="flex gap-[4px]">
        <p className="text-[20px] uppercase text-black/20">үйлчилгээ</p>
        <p className="text-[20px] uppercase text-black">→</p>
        <p className="text-[20px] uppercase text-black">талбай түрээс</p>
      </div>
      <div className="mb-16 grid grid-cols-4 gap-[10px]">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[11px] bg-[#F1F1F1] p-6"
          >
            <div className="mb-4">
              <span className="rounded bg-white px-3 py-1 text-[14px]">
                Best
              </span>
            </div>
            <Link href="/rover">
              <div className="mb-6 flex flex-1 items-center justify-center rounded-[11px] bg-[#F1F1F1] p-8">
                <Image
                  src={leader.image}
                  alt="ballerina cappuchina"
                  width={250}
                  height={150}
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="mb-4 flex justify-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <div className="h-2 w-2 rounded-full bg-gray-400"></div>
              <div className="h-2 w-2 rounded-full bg-gray-400"></div>
              <div className="h-2 w-2 rounded-full bg-gray-400"></div>
            </div>
            <div>
              <p className="mb-1 text-[14px]">{leader.title}</p>
              <p className="text-[14px]">{leader.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
