"use client";

import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export default function News() {
  const GET_POST_LIST = gql`
    query PostList(
      $clientPortalId: String!
      $type: String
      $featured: Boolean
      $searchValue: String
      $status: PostStatus
      $page: Int
      $perPage: Int
      $tagIds: [String]
      $sortField: String
      $sortDirection: String
    ) {
      cmsPostList(
        clientPortalId: $clientPortalId
        featured: $featured
        type: $type
        searchValue: $searchValue
        status: $status
        page: $page
        perPage: $perPage
        tagIds: $tagIds
        sortField: $sortField
        sortDirection: $sortDirection
      ) {
        currentPage
        totalCount
        totalPages
        posts {
          _id
          createdAt
          thumbnail {
            url
          }
          title
          excerpt
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POST_LIST, {
    variables: {
      clientPortalId: "orcxrKw6wu0L2p0dy4f5T",
      page: 1,
      perPage: 20,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const posts = data?.cmsPostList?.posts || [];
  console.log(posts);


  return (
    <div className="px-4 pb-[30px] pt-[50px] sm:px-6 sm:pb-[40px] sm:pt-[60px] lg:px-[10%] lg:pt-[70px]">
      <p className="mb-3 text-[16px] font-medium text-[#1B1B1B] sm:mb-4 sm:text-[18px] lg:text-[20px]">
        МЭДЭЭ
      </p>
      <div className="mb-6 h-[1px] w-full bg-[#D1D1D1] sm:mb-8"></div>

      <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {posts.map((item: { _id: string; title: string; excerpt: string; thumbnail?: { url: string } }) => (
          <div key={item._id} className="flex flex-col">
            <div className="relative mb-3 sm:mb-4">
              <Image
                src={`https://urangan.app.erxes.io/gateway/read-file?key=${item.thumbnail?.url || "/home/fyodor.png"}`}
                alt="news image"
                width={400}
                height={300}
                className="h-[250px] w-full rounded-[15px] object-cover sm:h-[280px] sm:rounded-[20px] lg:h-[300px]"
              />
            </div>

            <div className="mb-2 flex items-center gap-2 sm:mb-3">
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF6900] sm:h-2 sm:w-2"></div>
              <span className="text-[13px] text-[#C5C5C5] sm:text-[14px] lg:text-[15px]">
                {item.title}
              </span>
            </div>

            <p className="mb-3 text-[16px] leading-relaxed text-[#4B4B4B] sm:mb-4 sm:text-[17px] lg:text-[19px]">
              {item.excerpt}
            </p>

            <button className="flex w-fit items-center gap-2 rounded-full border-[2px] border-[#FF6900] px-4 py-2 text-[11px] font-medium text-[#656565] transition-all duration-300 hover:bg-[#FF6900] hover:text-white sm:px-5 sm:py-2.5 sm:text-[12px] lg:px-6 lg:py-3 lg:text-[13px]">
              СОНИРХОХ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
