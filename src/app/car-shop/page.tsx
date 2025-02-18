import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
export default function CarShop() {
  const data = [
    {
      id: 1,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000₮",
    },
    {
      id: 2,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000₮",
    },
    {
      id: 3,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },
    {
      id: 4,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },

    {
      id: 5,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },
    {
      id: 6,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },
    {
      id: 7,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },
    {
      id: 8,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },
    {
      id: 9,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },
    {
      id: 10,
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      year: "2020/2025",
      price: "49'000'000₮",
    },
  ];

  return (
    <div className="flex flex-col gap-[32px] pb-[50px]">
      <div className="flex h-64 w-full items-center justify-center bg-[url('/car-shop/car.png')] bg-cover bg-center text-[48px] text-white">
        Авто худалдаа
      </div>

      <div className="flex flex-col justify-between gap-[24px] px-[5%] lg:flex-row">
        <div className="flex gap-2 lg:gap-[24px]">
          <div className="rounded-[8px] bg-[#EA5721] px-[16px] py-[8px] text-[16px] text-white">
            Төрөл
          </div>
          <div className="rounded-[8px] bg-[#EA5721] px-[16px] py-[8px] text-[16px] text-white">
            Үйлдвэрлэгч
          </div>
          <div className="rounded-[8px] bg-[#EA5721] px-[16px] py-[8px] text-[16px] text-white">
            Загвар
          </div>
          <div className="flex items-center justify-center rounded-[8px] bg-[#011C65] px-[16px] py-[8px] text-[16px] text-white">
            <FaMagnifyingGlass />
          </div>
        </div>
        <div className="flex items-center gap-2 border-b-[1px] border-black">
          <input className="text-[#3A3939]" placeholder="Бүтээгдхүүн хайх" />
          <FaMagnifyingGlass />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-4">
          <div className="grid w-[100%] grid-cols-1 items-center justify-center gap-[50px] px-[5%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((car, index) => (
              <Link href={`/car-details/${car.id}`} key={index}>
                <div key={index} className="flex w-[100%] flex-col">
                  <Image
                    src={car.img}
                    alt={car.name}
                    width={200}
                    height={150}
                    className="w-[100%] rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-lg">{car.name}</p>
                    <p className="text-gray-600">{car.year}</p>
                    <p className="text-end text-xl text-blue-900">
                      {car.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
