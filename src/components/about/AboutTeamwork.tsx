import Image from "next/image";

const data = [
  {
    id: "01",
    title: "Cross-sectoral synergy",
    desc: "Improve the coordination of business units and develop mutually beneficial cooperation",
    image: "/home/fyodor.png",
  },
  {
    id: "02",
    title: "Comprehensive service solution",
    desc: "Offer valuable products and services that fully meet customer needs",
    image: "/home/fyodor.png",
  },
  {
    id: "03",
    title: "Sustainable growth",
    desc: "Implementing an environmentally friendly, socially responsible, and economically sustainable business model",
    image: "/home/fyodor.png",
  },
  {
    id: "04",
    title: "Innovation and technology",
    desc: "Increase business efficiency with new ideas and advanced solutions",
    image: "/home/fyodor.png",
  },
];

export default function AboutTeamwork() {
  return (
    <div className="px-4 py-10 md:px-16">
      <div className="">
        <p className="mb-4 text-[14px] uppercase text-[#767777]">
          Strategic direction
        </p>
        <p className="mb-6 text-[42px]">Working together adding value</p>
        <p className="mb-16 text-[16px] text-[#414545]">
          Urangan Group aims to deliver integrated growth, innovation, quality,
          and customer-centric services through diversified businesses. Our
          strategy is based on the following core principles:
        </p>
      </div>
      {data.map((item, index) => (
        <div key={item.id}>
          <div className="flex flex-col items-start justify-between gap-6 pt-6 md:flex-row">
            <div className="md:w-[50%]">
              <p className="text-[16px] text-[#767777]">{item.id}</p>
              <p className="mt-1 text-[16px]">{item.title}:</p>
              <p className="mt-2 text-[#414545]">{item.desc}</p>
            </div>
            <div className="w-full md:w-[280px]">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full rounded-[20px]"
              />
            </div>
          </div>
          {index < data.length - 1 && (
            <div className="mt-10 h-[1px] bg-black/20"></div>
          )}
        </div>
      ))}
    </div>
  );
}
