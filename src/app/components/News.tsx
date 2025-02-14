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
      <div className="flex gap-[23px] p-[18px] px-[5%]">
        <Image
          src="/home/frame.png"
          alt="."
          width={1200}
          height={555}
          className="rounded-[12px]"
        />
        <Image
          src="/home/frame.png"
          alt="."
          width={1200}
          height={555}
          className="rounded-[12px]"
        />
      </div>
    </div>
  );
}
