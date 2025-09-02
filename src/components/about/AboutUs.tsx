import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex px-[10%] flex-col justify-center gap-[15px] sm:gap-[20px] pt-[30px]">
      <p className="items-start text-[16px] sm:text-[18px] lg:text-[20px] uppercase text-[#1B1B1B] font-medium">
        бидний тухай
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-[15px] sm:gap-[20px] px-0 sm:px-[1%] py-[20px] sm:py-[30px]">
        <div className="w-full sm:flex-1">
          <Image
            src="/home/fyodor.png"
            alt="skibidi"
            width={3000}
            height={367}
            className="rounded-[15px] sm:rounded-[20px] w-full h-auto"
          />
        </div>
        <div className="w-full sm:flex-1">
          <Image
            src="/home/fyodor.png"
            alt="skibidi"
            width={3000}
            height={367}
            className="rounded-[15px] sm:rounded-[20px] w-full h-auto"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-[18px] sm:gap-[24px] text-[14px] sm:text-[15px] lg:text-[16px] text-[#1B1B1B] leading-relaxed">
        <p className="">
          Уранган ХХК нь 1996 онд гагнуур токарь нимгэн төмөр үйлдвэрлэл бүх
          төрлийн цахилгаан хөдөлгүүрийн ороолт засвар зэрэг үйлдвэрлэл
          засварын чиглэлд үйл ажиллагаагаа эхэлж байсан ба 28 жилийн хугацаанд
          Монгол Улсынхаа хөгжил цэцэглэлт бүтээн байгуулалтуудад гар бие
          оролцон шинэ салбаруудад хүч түрэн орсоор байна.
        </p>
        <p>
          Уранган ХХК нь 2021 оноос групп компани болон өргөжиж нийт 9 салбарт
          үйл ажиллагаагаа өргөжүүлэн ажиллаж байна. 
        </p>
      </div>
    </div>
  );
};

export default AboutUs;