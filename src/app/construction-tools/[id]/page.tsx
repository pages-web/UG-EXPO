"use client";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CarDetail() {
  const pathname = usePathname();
  const id = pathname?.split("/").pop();
  const data = [
    {
      images: [
        "https://images.unsplash.com/photo-1604014234395-4780c99bc063",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
      ],
      name: "Bathroom mirror with lights",
      price: 49000,
      id: 1,
      productType: "Construction tools",
      productCategory: "Bathroom Furniture",
      productShowcase: "Mirror with lights",
      productSize: "90 * 90",
      internetAddress: "Gegeenshop.mn",
      phoneNumber: 88806207,
      Address: "Urangan hudaldaanii tuv D-12 pavilion",
      moreInformation: "Have to sell quickly",
    },
    {
      images: [
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
      ],
      name: "Bathroom mirror with lights",
      price: 49000,
      id: 2,
      productType: "Construction tools",
      productCategory: "Bathroom Furniture",
      productShowcase: "Mirror with lights",
      productSize: "90 * 90",
      internetAddress: "Gegeenshop.mn",
      phoneNumber: 88806207,
      Address: "Urangan hudaldaanii tuv D-12 pavilion",
      moreInformation: "Have to sell quickly",
    },
    {
      images: [
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
      ],
      name: "Bathroom mirror with lights",
      price: 49000,
      id: 3,
      productType: "Construction tools",
      productCategory: "Bathroom Furniture",
      productShowcase: "Mirror with lights",
      productSize: "90 * 90",
      internetAddress: "Gegeenshop.mn",
      phoneNumber: 88806207,
      Address: "Urangan hudaldaanii tuv D-12 pavilion",
      moreInformation: "Have to sell quickly",
    },
  ];

  useEffect(() => {
    document.querySelectorAll("p").forEach((p) => {
      p.classList.add("my-class", "mb-[20px]");
    });
  }, []);

  const selectedProduct = data.find((car) => car.id.toString() === id);

  if (!selectedProduct) {
    return <p>Car not found.</p>;
  }

  return (
    <div>
      <div className="mt-[70px] flex w-full flex-col p-8 py-[50px] lg:flex-row">
        {/* <div className="mr-8 flex w-full flex-col xl:w-1/2">
          <Image
            src={"https://images.unsplash.com/photo-1604014234395-4780c99bc063"}
            alt="Car Image"
            width={100}
            height={100}
            className="h-[600px] w-full rounded-lg object-cover xl:w-1/2"
          />

          <div className="mt-4 flex gap-2">
            {selectedProduct?.images
              .slice(1, 4)
              .map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Car Small Image ${index + 3}`}
                  className="h-[170px] w-[33%] rounded-lg object-cover"
                />
              ))}
          </div>
        </div> */}
        <div className="ml-8 mt-[20px] flex flex-row text-lg xl:ml-16">
          <div className="flex flex-col">
            <p>Name:</p>
            <p>Price:</p>
            <p>Product Type:</p>
            <p>Product Category: </p>
            <p>Product Showcase: </p>
            <p>Product Size:</p>
            <p>Internet Address/URL:</p>
            <p>Phonenumber:</p>
            <p>Address:</p>
            <p>More Information:</p>
          </div>
          <div className="ml-[300px] flex-col">
            <p>{selectedProduct?.name}</p>
            <p>{selectedProduct?.price}</p>
            <p>{selectedProduct?.productType}</p>
            <p>{selectedProduct?.productCategory}</p>
            <p>{selectedProduct?.productShowcase}</p>
            <p>{selectedProduct?.productSize}</p>
            <p>{selectedProduct?.internetAddress}</p>
            <p>{selectedProduct?.phoneNumber}</p>
            <p>{selectedProduct?.Address}</p>
            <p>{selectedProduct?.moreInformation}</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mt-8 text-center text-2xl font-semibold">
          Recommended Products
        </h1>
        <div className="mt-4">
          <p>No recommended products yet.</p>{" "}
          {/* You can later add content here */}
        </div>
      </div>
    </div>
  );
}
