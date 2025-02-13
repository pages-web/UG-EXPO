import Info from "./components/Info";
import Products from "./components/Product";

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
        <div className="text-center text-[72px] font-bold text-white">
           Хайсан бүхнээ нэг <br /> дороос
        </div>
        <div className="flex gap-[32px] text-[20px] font-light text-white">
          <div className="flex items-center justify-center gap-[12px]">
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="">Авто машин</div>
          </div>
          <div className="flex items-center justify-center gap-[12px]">
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="">Барилгын материал</div>
          </div>
          <div className="flex items-center justify-center gap-[12px]">
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="">Авто машины худалдаа</div>
          </div>
        </div>
        <button className="h-[45px] rounded-full bg-[#E9E9E9] px-[22px] py-[10px] text-[#54607D]">
          Талбайн түрээс харах
        </button>
      </div>
      <Info />
      <Products />
    </div>
  );
}
