import Image from "next/image";

const OnlineBuy = () => {
  return (
    <div className="flex w-full flex-col justify-start px-[5%]">
      <div className="flex gap-[4px]">
        <p className="text-[20px] uppercase text-black/20">худалдаа</p>
        <p className="text-[20px] uppercase text-black">→</p>
        <p className="text-[20px] uppercase text-black">авто машин</p>
      </div>
      <div className="">
        <Image
          src="/home/online.png"
          alt="skibidi"
          width={500}
          height={367}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};

export default OnlineBuy;
