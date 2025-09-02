import Image from "next/image";

export default function Images() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap w-full gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Card 1 */}
      <div className="h-[280px] sm:h-[300px] md:h-[320px] lg:h-[290px] rounded-[16px] sm:rounded-[20px] bg-[#111F31] p-4 sm:p-5 lg:p-[20px] flex flex-col justify-between w-full sm:w-[calc(50%-10px)] lg:w-[calc(50%-12px)] xl:flex-1 hover:bg-[#1a2a3f] transition-colors duration-300">
        <div className="relative h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] lg:h-[60px] lg:w-[60px]">
          <Image
            src="/home/vector.png"
            alt="Mbank logo"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <div className="text-white">
          <p className="font-semibold mb-2 text-base sm:text-lg lg:text-xl">Mbank</p>
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
            Спорт энтертайнмент салбарт хамтран ажиллаж Монголын анхны нэршлийн
            спорт арена болох M Bank Arena-г хөгжүүлж байна.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="h-[280px] sm:h-[300px] md:h-[320px] lg:h-[290px] rounded-[16px] sm:rounded-[20px] bg-[#111F31] p-4 sm:p-5 lg:p-[20px] flex flex-col justify-between w-full sm:w-[calc(50%-10px)] lg:w-[calc(50%-12px)] xl:flex-1 hover:bg-[#1a2a3f] transition-colors duration-300">
        <div className="relative h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] lg:h-[60px] lg:w-[60px]">
          <Image
            src="/home/vector.png"
            alt="Organizations icon"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <div className="text-white">
          <p className="font-semibold mb-2 text-base sm:text-lg lg:text-xl">
            Associations and organizations
          </p>
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
            Бид салбар бүрт холбогдох мэргэжлийн холбоодтой идэвхтэй хамтран
            ажиллаж, чанар үйлчилгээний жишгийг шинэ түвшинд хүргэхийг
            эрмэлздэг.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="h-[280px] sm:h-[300px] md:h-[320px] lg:h-[290px] rounded-[16px] sm:rounded-[20px] bg-[#111F31] p-4 sm:p-5 lg:p-[20px] flex flex-col justify-between w-full sm:w-full lg:w-full xl:flex-1 hover:bg-[#1a2a3f] transition-colors duration-300">
        <div className="relative h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] lg:h-[60px] lg:w-[60px]">
          <Image
            src="/home/vector.png"
            alt="Foreign suppliers icon"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <div className="text-white">
          <p className="font-semibold mb-2 text-base sm:text-lg lg:text-xl">
            Foreign suppliers and brands
          </p>
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
            Олон улсын стандарт бүхий бүтээгдэхүүн үйлчилгээ нэвтрүүлж
            Монголын хэрэглэгчдэд шинэ сонголтыг хүргэх чиглэлээр хамтран ажиллаж
            байна.
          </p>
        </div>
      </div>
    </div>
  );
}