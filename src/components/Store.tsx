"use client";

export default function Store() {
  return (
    <div className="relative h-[500px] w-full rounded-[40px] bg-[#111F31]">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <p className="text-bold text-[40px]">
          Хүссэн Самбар аа <br /> тавиулмаар байна уу
        </p>
        <p className="mt-4 text-[15px]">
          Талбай түрээс мөн самбар түрээсийн үйлчилгээ явуулж байна
        </p>
        <button className="mt-6 rounded-full bg-[#FF6900] px-6 py-3 text-white">
          ХОЛБОГДОХ
        </button>
      </div>
    </div>
  );
}
