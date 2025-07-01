import Link from "next/link";

export default function Product() {
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-[42px] font-bold text-[#1B1B1B]">
        Барааны төрөлжсөн <br /> худалдаа/түрээс
      </p>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        <Link href="/about">
          <div>
            <p className="mb-4 text-[30px] text-[#ED7516]">10</p>
            <p className="w-[50%] text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
        <Link href="/about">
          <div>
            <p className="mb-4 text-[30px] text-[#ED7516]">10</p>
            <p className="w-[50%] text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
        <Link href="/about">
          <div>
            <p className="mb-4 text-[30px] text-[#ED7516]">10</p>
            <p className="w-[50%] text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
        <Link href="/about">
          <div>
            <p className="mb-4 text-[30px] text-[#ED7516]">10</p>
            <p className="w-[50%] text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
