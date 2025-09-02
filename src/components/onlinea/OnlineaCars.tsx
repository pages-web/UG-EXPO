const OnlineaCars = () => {
  return (
    <div className="flex flex-col justify-start px-[3%] sm:px-[4%] lg:px-[5%]">
      <div className="flex gap-[8px] sm:gap-[12px] lg:gap-[15px] flex-wrap">
        <button className="flex items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[12px] lg:text-[13px] text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white mb-2 sm:mb-0">
          Авто гоёл
        </button>
        <button className="flex items-center gap-2 rounded-full border-[2px] border-[#E2E2E2FC] px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[12px] lg:text-[13px] text-[#A4A4A4] transition-all duration-300 hover:bg-[#E2E2E2FC] hover:text-white mb-2 sm:mb-0">
          Авто тоноглол
        </button>
        <button className="flex items-center gap-2 rounded-full border-[2px] border-[#E2E2E2FC] px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[12px] lg:text-[13px] text-[#A4A4A4] transition-all duration-300 hover:bg-[#E2E2E2FC] hover:text-white mb-2 sm:mb-0">
          Багаж хэрэгсэл
        </button>
        <button className="flex items-center gap-2 rounded-full border-[2px] border-[#E2E2E2FC] px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[12px] lg:text-[13px] text-[#A4A4A4] transition-all duration-300 hover:bg-[#E2E2E2FC] hover:text-white mb-2 sm:mb-0">
          Гэрэл гэрэлтүүлэг
        </button>
        <button className="flex items-center gap-2 rounded-full border-[2px] border-[#E2E2E2FC] px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[12px] lg:text-[13px] text-[#A4A4A4] transition-all duration-300 hover:bg-[#E2E2E2FC] hover:text-white mb-2 sm:mb-0">
          Авто хөгжим
        </button>
        <button className="flex items-center gap-2 rounded-full border-[2px] border-[#E2E2E2FC] px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[12px] lg:text-[13px] text-[#A4A4A4] transition-all duration-300 hover:bg-[#E2E2E2FC] hover:text-white mb-2 sm:mb-0">
          Аккумлятор
        </button>
      </div>
    </div>
  );
};

export default OnlineaCars;