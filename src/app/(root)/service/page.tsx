"use client";

import ServiceEnd from "@/components/service/ServiceEnd";
import ServiceCars from "@/components/service/ServiceIdk";
import ServiceStart from "@/components/service/ServiceStart";

const Service = () => {
  return (
    <div className="flex flex-col gap-[30px] py-[5%]">
      <ServiceStart />
      <ServiceEnd />
      <ServiceCars />
    </div>
  );
};
export default Service;
