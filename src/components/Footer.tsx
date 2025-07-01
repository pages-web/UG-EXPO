import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full rounded-tl-[20px] rounded-tr-[20px] bg-[#0A1A2B] px-[64px] py-[80px] text-white">
      <div className="flex flex-col justify-between gap-[64px] lg:flex-row">
        <div className="flex max-w-[300px] flex-col gap-6">
          <div>
            <h2 className="text-[16px]">Хаяг</h2>
            <p className="mt-2 text-[16px] text-[#B0B0B0]">
              Urangan LLC on the bank of the Dund River, 3rd khoroo, BGD
            </p>
          </div>
          <Image
            src="/Logo.png"
            alt="UG 2x2 Logo"
            width={160}
            height={40}
            className="mt-2 h-auto w-[120px]"
          />
        </div>

        <div className="flex flex-col gap-6 text-[16px]">
          <div>
            <p className="text-[#B0B0B0]">Санал хүсэлт</p>
            <p className="text-white">URANGAn@gmail.com</p>
          </div>
          <div>
            <p className="text-[#B0B0B0]">Холбогдох</p>
            <p className="text-white">URANGAn@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-[64px]">
          <div className="flex flex-col gap-3 text-[16px]">
            <h2 className="">Ангиллууд</h2>
            <p className="text-[#B0B0B0]">Автомашин</p>
            <p className="text-[#B0B0B0]">Авто сэлбэг</p>
            <p className="text-[#B0B0B0]">Барилгын материал</p>
          </div>
          <div className="flex flex-col gap-3 text-[16px]">
            <h2 className="">Ангиллууд</h2>
            <p className="text-[#B0B0B0]">Автомашин</p>
            <p className="text-[#B0B0B0]">Авто сэлбэг</p>
            <p className="text-[#B0B0B0]">Барилгын материал</p>
          </div>
        </div>
      </div>
    </div>
  );
}
