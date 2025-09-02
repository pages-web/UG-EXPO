import Image from "next/image";

const OnlineaBuy = () => {
  return (
    <div className="flex w-full flex-col justify-start pt-[30px] sm:pt-[40px] lg:pt-[50px]">
      <div className="flex gap-[4px] px-[5%] sm:px-[8%] lg:px-[10%]">
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] uppercase text-black/20">худалдаа</p>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] uppercase text-black">→</p>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] uppercase text-black">авто сэлбэг</p>
      </div>
      <div className="mt-2 sm:mt-3 lg:mt-4">
        <Image
          src="/home/carss.png"
          alt="skibidi"
          width={500}
          height={367}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default OnlineaBuy;