import Image from "next/image";

export default function Products() {
  const data = [
    {
      img: "/home/black-car.png",
      name: "Toyota Aqua",
      year: "2020/2025",
      price: "4,900,000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Toyota Aqua",
      year: "2020/2025",
      price: "4,900,000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Toyota Aqua",
      year: "2020/2025",
      price: "4,900,000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Toyota Aqua",
      year: "2020/2025",
      price: "4,900,000₮",
    },
  ];

  const stuff = [
    {
      img: "/home/black-car.png",
      name: "Өвлийн дугуй",
      price: "239,000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Өвлийн дугуй",
      price: "239,000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Өвлийн дугуй",
      price: "239,000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Өвлийн дугуй",
      price: "239,000₮",
    },
  ];

  const something = [
    {
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      price: "49,000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      price: "49,000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      price: "49,000₮",
    },
    {
      img: "/home/black-car.png",
      name: "Дээврийн материал",
      price: "49,000₮",
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center gap-10 px-5 pb-[50px]">
      <div className="flex flex-col gap-4">
        <p className="px-[5%] text-2xl">Бүтээгдхүүний танилцуулгууд</p>
        <div className="xl grid w-[100%] grid-cols-1 items-center justify-center gap-[50px] px-[5%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((car, index) => (
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
                <p className="text-end text-xl text-blue-900">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="xl grid w-[100%] grid-cols-1 items-center justify-center gap-[50px] px-[5%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stuff.map((car, index) => (
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
              <p className="text-end text-xl text-blue-900">{car.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="xl grid w-[100%] grid-cols-1 items-center justify-center gap-[50px] px-[5%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {something.map((car, index) => (
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
              <p className="text-end text-xl text-blue-900">{car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
