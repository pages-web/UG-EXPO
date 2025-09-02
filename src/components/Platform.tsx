import Image from "next/image";

const Platform = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="mb-8">
          <p className="mb-6 font-bold text-[#1B1B1B] text-[16px] sm:text-[18px] lg:text-[20px]">
            ПАВИЛЬОН ЗУРАГ
          </p>
           
          <div className="mb-6 flex flex-wrap gap-[15px]">
            <button className="flex items-center gap-2 rounded-full border-[1px] border-[#ED7516] px-4 sm:px-6 py-2 sm:py-3 text-[#ED7516] text-sm sm:text-base">
              Гэр Ахуй
            </button>
            {[...Array(7)].map((_, i) => (
              <button
                key={i}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-[1px] border-[#E6E6E6] bg-white"
              ></button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1">
            <Image
              src="/home/platform.png"
              alt="UG 2x2 Logo"
              width={1200}
              height={1000}
              className="mt-2 h-auto w-full"
            />
          </div>
           
          <div className="w-full lg:w-[400px]">
            <div className="rounded-lg bg-[#111F31] p-4 sm:p-6 text-white">
              <h2 className="mb-4 text-[14px] sm:text-[15px] font-bold">Талбай түрээс</h2>
              <p className="mb-6 text-[13px] sm:text-[15px] leading-relaxed">
                Уранган XXK-руу ирэх урсгал эдертээ давхардсан тоогоор
                5,000-6,000 иргэн байнгын орж гарч үйлчилгээ авдаг.
              </p>
              <button className="rounded-full bg-[#ED7516] px-4 sm:px-6 py-2 text-sm sm:text-base text-white font-medium">
                Холбогдох
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;