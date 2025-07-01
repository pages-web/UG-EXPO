"use client";

import RoverPart from "@/components/rover/RoverPart";
import RoverRange from "@/components/rover/RoverRange";
import RoverService from "@/components/rover/RoverService";

const Rover = () => {
  return (
    <div className="flex flex-col gap-[30px] pt-[5%]">
      <RoverRange />
      <RoverPart />
      <RoverService />
    </div>
  );
};
export default Rover;
