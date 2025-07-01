import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-[20px] px-[4%] pt-[40px]">
      <p className="items-start text-[20px] uppercase text-[#1B1B1B]">
        бидний тухай
      </p>
      <div className="flex items-center gap-[20px] px-[1%] py-[30px]">
        <Image
          src="/home/fyodor.png"
          alt="skibidi"
          width={3000}
          height={367}
          className="rounded-[20px]"
        />
        <Image
          src="/home/fyodor.png"
          alt="skibidi"
          width={3000}
          height={367}
          className="rounded-[20px]"
        />
      </div>
      <div className="flex flex-col gap-[24px] text-[16px] text-[#1B1B1B]">
        <p className="">
          Уранган ХХК нь 1996 онд гагнуур, токарь, нимгэн төмөр үйлдвэрлэл, бүх
          төрлийн цахилгаан хөдөлгүүрийн ороолт засвар зэрэг үйлдвэрлэл,
          засварын чиглэлд үйл ажиллагаагаа эхэлж байсан ба 28 жилийн хугацаанд
          Монгол Улсынхаа хөгжил цэцэглэлт, бүтээн байгуулалтуудад гар бие
          оролцон, шинэ салбаруудад хүч түрэн орсоор байна.
        </p>
        <p>
          “Уранган” ХХК нь 2021 оноос групп компани болон өргөжиж нийт 9 салбарт
          үйл ажиллагаагаа өргөжүүлэн ажиллаж байна. 
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
