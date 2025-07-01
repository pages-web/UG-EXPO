"use client";

import OnlineBuy from "@/components/online/OnlineBuy";
import RoverPart from "@/components/rover/RoverPart";
import RoverRange from "@/components/rover/RoverRange";
const Area = () => {
  return (
    <div className="flex flex-col gap-[30px] pt-[5%]">
      <RoverRange />
      <RoverPart />
      <OnlineBuy />
    </div>
  );
};
export default Area;
