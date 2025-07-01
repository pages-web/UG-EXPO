import Image from "next/image";

const ServiceStart = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-[20px] pt-[40px]">
      <p className="items-start px-[4%] text-[20px] uppercase text-[#1B1B1B]">
        үилчилгээ
      </p>
      <div className="flex w-full items-center py-[30px]">
        <div className="relative flex-1">
          <Image
            src="/home/board.png"
            alt="talbayn turgas"
            width={500}
            height={367}
            className="h-auto w-full"
          />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-[28px] text-white">Талбайн түрээс</h3>
          </div>
        </div>

        <div className="relative flex-1">
          <Image
            src="/home/rent.png"
            alt="surtalchilgaany sambar turgas"
            width={800}
            height={367}
            className="h-auto w-full"
          />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-[28px] text-white">
              Сурталчилгааны самбар түрээс
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStart;
