import Image from "next/image";

const RoverService = () => {
  return (
    <div className="flex w-full items-center pt-[40px]">
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
  );
};

export default RoverService;
