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
    <div className="px-4 sm:px-6 lg:px-[10%] pb-[30px] sm:pb-[40px] pt-[50px] sm:pt-[60px] lg:pt-[70px]">
      <p className="mb-3 sm:mb-4 text-[16px] sm:text-[18px] lg:text-[20px] text-[#1B1B1B] font-medium">МЭДЭЭ</p>
      <div className="mb-6 sm:mb-8 h-[1px] w-full bg-[#D1D1D1]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="relative mb-3 sm:mb-4">
              <Image
                src={item.image}
                alt="news image"
                width={400}
                height={300}
                className="h-[250px] sm:h-[280px] lg:h-[300px] w-full rounded-[15px] sm:rounded-[20px] object-cover"
              />
            </div>

            <div className="mb-2 sm:mb-3 flex items-center gap-2">
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#FF6900]"></div>
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#C5C5C5]">{item.time}</span>
            </div>

            <p className="mb-3 sm:mb-4 text-[16px] sm:text-[17px] lg:text-[19px] leading-relaxed text-[#4B4B4B]">
              {item.title}
            </p>

            <button className="flex w-fit items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-[#656565] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}