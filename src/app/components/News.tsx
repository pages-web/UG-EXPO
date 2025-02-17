import Image from "next/image";

export default function News() {
  return (
    <div className="">
      <Image
        src="/home/news.png"
        alt="."
        width={2500}
        height={630}
        className="rounded-[12px] px-[5%] pb-[40px]"
      />
      <div className="flex flex-col p-[18px] px-[5%] md:flex-row md:justify-between">
        <Image
          src="/home/frame.png"
          alt="."
          width={800}
          height={400}
          className="mb-[20px] w-[100%] rounded-[12px] md:w-[49%]"
        />
        <Image
          src="/home/frame.png"
          alt="."
          width={800}
          height={400}
          className="mb-[20px] w-[100%] rounded-[12px] md:w-[49%]"
        />
      </div>
    </div>
  );
}
