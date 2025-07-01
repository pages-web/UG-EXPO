import Image from "next/image";
const Shape = () => {
  return (
    <div className="px-6 py-[5%]">
      <div className="mb-6 grid grid-cols-3 gap-6">
        <div className="group cursor-pointer">
          <div className="relative">
            <div className="relative h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Талбай Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[40px] font-bold text-white">Автомашин</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-5 py-2 text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative">
            <div className="relative h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Талбай Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[40px] font-bold text-white">АвтоСэлбэг</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-5 py-2 text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative">
            <div className="relative h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Талбай Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[40px] font-bold text-white">
                Барилгын Материал
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-5 py-2 text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="group cursor-pointer">
          <div className="relative">
            <div className="relative h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Талбай Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[40px] font-bold text-white">Талбай Түрээс</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-5 py-2 text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative">
            <div className="relative h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Самбар Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[40px] font-bold text-white">Самбар Түрээс</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-5 py-2 text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shape;
