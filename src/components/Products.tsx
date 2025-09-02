import Link from "next/link";

export default function Product() {
  return (
    <div className="flex flex-col gap-[30px] px-4 sm:px-6 lg:px-8">
      <p className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[#1B1B1B] leading-tight">
        Барааны төрөлжсөн <br /> худалдаа/түрээс
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 lg:gap-10">
        <Link href="/about">
          <div className="hover:scale-105 transition-transform duration-200">
            <p className="mb-4 text-[24px] sm:text-[28px] lg:text-[30px] text-[#ED7516]">10</p>
            <p className="w-full sm:w-[80%] lg:w-[50%] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
        <Link href="/about">
          <div className="hover:scale-105 transition-transform duration-200">
            <p className="mb-4 text-[24px] sm:text-[28px] lg:text-[30px] text-[#ED7516]">10</p>
            <p className="w-full sm:w-[80%] lg:w-[50%] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
        <Link href="/about">
          <div className="hover:scale-105 transition-transform duration-200">
            <p className="mb-4 text-[24px] sm:text-[28px] lg:text-[30px] text-[#ED7516]">10</p>
            <p className="w-full sm:w-[80%] lg:w-[50%] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
        <Link href="/about">
          <div className="hover:scale-105 transition-transform duration-200">
            <p className="mb-4 text-[24px] sm:text-[28px] lg:text-[30px] text-[#ED7516]">10</p>
            <p className="w-full sm:w-[80%] lg:w-[50%] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}