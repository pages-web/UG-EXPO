"use client";


export default function News() {
  // Example static data
  const posts = [
    {
      _id: "1",
      title: "M Bank Arena нээлтээ хийлээ",
      createdAt: "2025-08-01T10:00:00Z",
      thumbnail: {
        url: "home/fyodor.png",
      },
    },
    {
      _id: "2",
      title: "Шинэ спортын цогцолбор ашиглалтад орлоо",
      createdAt: "2025-07-28T09:30:00Z",
      thumbnail: {
        url: "home/fyodor.png",
      },
    },
    {
      _id: "3",
      title: "Олон улсын тэмцээн Монголд зохион байгуулагдана",
      createdAt: "2025-07-15T15:00:00Z",
      thumbnail: {
        url: "home/fyodor.png",
      },
    },
  ];

  return (
    <div className="pt-[70px]">
      <p className="mb-4 text-[20px] text-[#1B1B1B]">МЭДЭЭ</p>
      <div className="mb-8 h-[1px] w-full bg-[#D1D1D1]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col">
            <div className="relative mb-4">
              <img
                src={post.thumbnail?.url || "/default-image.jpg"}
                alt={post.title}
                width={400}
                height={300}
                className="h-[300px] w-full rounded-[20px] object-cover"
              />
            </div>

            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#FF6900]"></div>
              <span className="text-[15px] text-[#C5C5C5]">
                {new Date(post.createdAt).toLocaleDateString("mn-MN")}
              </span>
            </div>

            <p className="mb-4 text-[19px] leading-relaxed text-[#4B4B4B]">
              {post.title}
            </p>

              <button className="flex w-fit items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-6 py-3 text-[13px] font-medium text-[#FF6900] transition-all duration-300 hover:bg-[#FF6900] hover:text-white">
                СОНИРХОХ
              </button>
          </div>
        ))}
      </div>
    </div>
  );
}
