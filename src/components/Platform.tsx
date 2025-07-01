import Image from "next/image";

const Platform = () => {
  return (
    <div className="">
      <div className="">
        <div className="mb-8">
          <p className="mb-6 font-bold text-[#1B1B1B] text-[20x]">
            ПАВИЛЬОН ЗУРАГ
          </p>

          <div className="mb-6 flex gap-[15px]">
            <button className="flex items-center gap-2 rounded-full border-[1px] border-[#ED7516] px-6 py-3 text-[#ED7516]">
              Гэр Ахуй
            </button>
            {[...Array(7)].map((_, i) => (
              <button
                key={i}
                className="h-12 w-12 rounded-full border-[1px] border-[#E6E6E6] bg-white"
              ></button>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <Image
              src="/home/platform.png"
              alt="UG 2x2 Logo"
              width={1200}
              height={1000}
              className="mt-2 h-auto"
            />
          </div>

          <div className="w-[400px]">
            <div className="rounded-lg bg-[#111F31] p-6 text-white">
              <h2 className="mb-4 text-[15px] font-bold">Талбай түрээс</h2>
              <p className="mb-6 text-[15px]">
                Уранган XXK-руу ирэх урсгал эдертээ давхардсан тоогоор
                5,000-6,000 иргэн байнгын орж гарч үйлчилгээ авдаг.
              </p>
              <button className="rounded-full bg-[#ED7516] px-6 py-2">
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
