import Image from "next/image";

const OnlinebBuy = () => {
  return (
    <div className="flex w-full flex-col justify-start pt-[50px]">
      <div className="flex gap-[4px] px-[10%]">
        <p className="text-[20px] uppercase text-black/20">худалдаа</p>
        <p className="text-[20px] uppercase text-black">→</p>
        <p className="text-[20px] uppercase text-black">барилгын материал</p>
      </div>
      <div className="">
        <Image
          src="/home/oak.png"
          alt="skibidi"
          width={500}
          height={367}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default OnlinebBuy;
