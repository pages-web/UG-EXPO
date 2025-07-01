import Image from "next/image";

export default function News() {
  const newsItems = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    title:
      "UG Expo-ийн вебсайт нь барилгын материалын төрөлжсөн худалдаа, авто машины худалдаа, сэлбэгийн",
    time: "10мин өмнө",
    image: "/home/fyodor.png",
  }));

  return (
    <div className="px-[5%] pb-[20px] pt-[70px]">
      <p className="mb-4 text-[20px] text-[#1B1B1B]">МЭДЭЭ</p>
      <div className="mb-8 h-[1px] w-full bg-[#D1D1D1]"></div>

      <div className="grid grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="relative mb-4">
              <Image
                src={item.image}
                alt="news image"
                width={400}
                height={300}
                className="h-[300px] w-full rounded-[20px] object-cover"
              />
            </div>

            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#FF6900]"></div>
              <span className="text-[15px] text-[#C5C5C5]">{item.time}</span>
            </div>

            <p className="mb-4 text-[19px] leading-relaxed text-[#4B4B4B]">
              {item.title}
            </p>

            <button className="flex w-fit items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-6 py-3 text-[13px] font-medium text-[#656565] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
