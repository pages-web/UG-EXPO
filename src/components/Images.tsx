import Image from "next/image";

export default function Images() {
  return (
    <div className="flex w-full justify-between px-[5%]">
      <div className="flex h-[290px] w-[30%] flex-col justify-between rounded-[20px] bg-[#111F31] p-[20px]">
        <div className="relative h-[60px] w-[60px]">
          <Image
            src="/home/vector.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3 text-white">
          <p>Mbank</p>
          <p>
            Спорт, энтертайнмент салбарт хамтран ажиллаж, Монголын анхны
            нэршлийн спорт арена болох “M Bank Arena”-г хөгжүүлж байна.
          </p>
        </div>
      </div>
      <div className="flex h-[290px] w-[30%] flex-col justify-between rounded-[20px] bg-[#111F31] p-[20px]">
        <div className="relative h-[60px] w-[60px]">
          <Image
            src="/home/vector.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-3 text-white">
          <p>Associations and organizations</p>
          <p>
            Бид салбар бүрт холбогдох мэргэжлийн холбоодтой идэвхтэй хамтран
            ажиллаж, чанар, үйлчилгээний жишгийг шинэ түвшинд хүргэхийг
            эрмэлздэг.
          </p>
        </div>
      </div>
      <div className="flex h-[290px] w-[30%] flex-col justify-between rounded-[20px] bg-[#111F31] p-[20px]">
        <div className="relative h-[60px] w-[60px]">
          <Image
            src="/home/vector.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-3 text-white">
          <p>Foreign suppliers and brands</p>
          <p>
            Олон улсын стандарт бүхий бүтээгдэхүүн, үйлчилгээ нэвтрүүлж,
            Монголын хэрэглэгчдэд шинэ сонголтыг хүргэх чиглэлээр хамтран
            ажиллаж байна.
          </p>
        </div>
      </div>
    </div>
  );
}
