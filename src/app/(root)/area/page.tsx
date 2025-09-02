"use client";

import OnlineBuy from "@/components/online/OnlineBuy";
import RoverPart from "@/components/rover/RoverPart";
import RoverRange from "@/components/rover/RoverRange";
const Area = () => {
  return (
    <div className="flex flex-col gap-[30px] pt-[5%] px-[10%] py-16">
      <RoverRange />
      <RoverPart />
      <OnlineBuy />
    </div>
  );
};
export default Area;
