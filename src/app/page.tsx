import Info from "./components/Info";
import Products from "./components/Product";
import News from "./components/News";

export default function Home() {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url('/home/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex w-full flex-col items-center justify-center gap-[48px] bg-[#001B64]"
      >
        <div className="text-center text-[24px] font-bold text-white sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px]">
           Хайсан бүхнээ нэг <br /> дороос
        </div>
        <div className="gap-[32px] text-[14px] font-light text-white sm:flex sm:text-[17px] md:text-[23px] lg:text-[27px]">
          <div className="flex items-center justify-center gap-[12px]">
            <div className="h-[5px] w-[5px] flex-col rounded-full bg-white sm:h-[10px] sm:w-[10px] md:h-[15px] md:w-[15px] lg:h-[20px] lg:w-[20px]"></div>
            <div className="">Авто машин</div>
          </div>
          <div className="flex items-center justify-center gap-[12px]">
            <div className="h-[5px] w-[5px] rounded-full bg-white sm:h-[10px] sm:w-[10px] md:h-[15px] md:w-[15px] lg:h-[20px] lg:w-[20px]"></div>
            <div className="">Барилгын материал</div>
          </div>
          <div className="flex items-center justify-center gap-[12px]">
            <div className="h-[5px] w-[5px] rounded-full bg-white sm:h-[10px] sm:w-[10px] md:h-[15px] md:w-[15px] lg:h-[20px] lg:w-[20px]"></div>
            <div className="">Авто машины худалдаа</div>
          </div>
        </div>
        <button className="rounded-full bg-[#E9E9E9] px-[22px] py-[10px] text-[15px] text-[#54607D]">
          Талбайн түрээс харах
        </button>
      </div>
      <Info />
      <News />
      <Products />
    </div>
  );
}
