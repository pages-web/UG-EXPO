"use client";

import OnlineaBuy from "@/components/onlinea/OnlineaBuy";
import OnlineaCars from "@/components/onlinea/OnlineaCars";
import OnlineaSkibidi from "@/components/onlinea/OnlineaSkibidi";

const Online = () => {
  return (
    <div className="flex flex-col gap-[30px] py-[5%]">
     <OnlineaBuy />
     <div className="px-[10%]">
     <OnlineaCars />
     <OnlineaSkibidi />
     </div>
    </div>
  );
};
export default Online;
