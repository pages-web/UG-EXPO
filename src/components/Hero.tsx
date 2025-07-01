export default function Home() {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url('/home/wrapping.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex w-full items-end justify-start pb-[80px] pl-[5%] text-white"
      >
        <div className="w-[600px]">
          <p className="w-[60%] text-[48px]">Хайсан Бүхнээ Нэг Дороос</p>
          <p className="mt-4 text-[20px]">Барааны Төрөлжсөн Худалдаа/Түрээс</p>
        </div>
      </div>
    </div>
  );
}
