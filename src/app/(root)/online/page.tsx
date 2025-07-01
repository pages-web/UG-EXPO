"use client";

import OnlineBuy from "@/components/online/OnlineBuy";
import OnlineCars from "@/components/online/OnlineCars";
import OnlineSkibidi from "@/components/online/OnlineSkibidi";

const Online = () => {
  return (
    <div className="flex flex-col gap-[30px] py-[5%]">
      <OnlineBuy />
      <OnlineCars />
      <OnlineSkibidi />
    </div>
  );
};
export default Online;
