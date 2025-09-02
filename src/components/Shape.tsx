import Image from "next/image";

const Shape = () => {
  return (
    <div className="px-4 sm:px-6 py-[5%]">
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="group cursor-pointer">
          <div className="relative">
            <div className="relative h-[220px] sm:h-[250px] lg:h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Талбай Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-white text-center px-2">Автомашин</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[12px] sm:text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative">
            <div className="relative h-[220px] sm:h-[250px] lg:h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Талбай Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-white text-center px-2">АвтоСэлбэг</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[12px] sm:text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>

        <div className="group cursor-pointer md:col-span-2 lg:col-span-1">
          <div className="relative">
            <div className="relative h-[220px] sm:h-[250px] lg:h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Талбай Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[20px] sm:text-[28px] lg:text-[40px] font-bold text-white text-center px-2">
                Барилгын Материал
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[12px] sm:text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="group cursor-pointer">
          <div className="relative">
            <div className="relative h-[220px] sm:h-[250px] lg:h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Талбай Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-white text-center px-2">Талбай Түрээс</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[12px] sm:text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative">
            <div className="relative h-[220px] sm:h-[250px] lg:h-[270px] w-full">
              <Image
                src="/home/frame.png"
                alt="Самбар Түрээс"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-30">
              <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-white text-center px-2">Самбар Түрээс</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 text-[12px] sm:text-[13px] text-[#656565]">
              Олон Төрлийн Автомашин Худалдаа
            </p>
            <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
              СОНИРХОХ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shape;