"use client";

import Home from "@/components/Hero";
import Images from "@/components/Images";
import News from "@/components/News";
import Platform from "@/components/Platform";
import Product from "@/components/Products";
import Shape from "@/components/Shape";
import Store from "@/components/Store";

const HomePage = () => {
  return (
    <div>
      <Home />
      <div className="flex flex-col gap-[30px] px-[10%] py-[5%]">
        <Product />
        <Images />
        <Platform />
        <Shape />
        <Store />
        <News />
      </div>
    </div>
  );
};
export default HomePage;
