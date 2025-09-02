"use client";

import OnlineaCars from "@/components/onlinea/OnlineaCars";
import OnlineaSkibidi from "@/components/onlinea/OnlineaSkibidi";
import OnlinebBuy from "@/components/onlineb/OnlinebBuy";

const Online = () => {
  return (
    <div className="flex flex-col gap-[30px] py-[5%]">
     <OnlinebBuy />
     <div className="px-[10%]">
     <OnlineaCars />
     <OnlineaSkibidi />
     </div>
    </div>
  );
};
export default Online;
