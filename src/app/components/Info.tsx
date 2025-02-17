import Image from "next/image";

export default function Info() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[48px] py-[90px]">
      <div className="flex flex-col gap-[20px] text-center">
        <p className="text-[36px] text-[#273E74]">
          Уранган <span className="text-black">экспо</span>
        </p>
        <p className="text-[16px] text-[#919191]">
          Хотын төвийн А бүсэд байрлалтай, гадна орчны тохижилт маш сайн
          гүйцэтгэгдсэн, дотоод зохион байгуулалт сайтай, <br />
          нэгдсэн камержуулсан системтэй зэрэг нь хэрэглэгчдэд ээлтэй худалдааны
          төв юм.
        </p>
      </div>

      <div className="flex flex-col gap-[36px] lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-[20px] rounded-[12px] border-[1px] border-[#AEA6A6] px-[48px] py-[20px]">
          <Image
            src="/home/carwheel.png"
            alt="carwheel"
            width={32}
            height={43}
          />
          <p className="text-[18px] text-[#1D3061]">Авто машин худалдаа</p>
          <p className="text-center text-[14px] text-[#AEA6A6]">
            Lorem ipsum is simply dummy text <br />
            the printing and industry.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[20px] rounded-[12px] border-[1px] border-[#AEA6A6] px-[48px] py-[20px]">
          <Image src="/home/car.png" alt="car" width={32} height={43} />
          <p className="text-[18px] text-[#1D3061]">Авто машины сэлбэг</p>
          <p className="text-center text-[14px] text-[#AEA6A6]">
            Lorem ipsum is simply dummy text <br />
            the printing and industry.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[20px] rounded-[12px] border-[1px] border-[#AEA6A6] px-[48px] py-[20px]">
          <Image src="/home/brushbroom.png" alt="car" width={32} height={43} />
          <p className="text-[18px] text-[#1D3061]">Барилгын материал</p>
          <p className="text-center text-[14px] text-[#AEA6A6]">
            Lorem ipsum is simply dummy text <br />
            the printing and industry.
          </p>
        </div>
      </div>
    </div>
  );
}
