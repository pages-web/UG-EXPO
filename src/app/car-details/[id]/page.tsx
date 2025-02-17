"use client";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CarDetail() {
  const pathname = usePathname();
  const id = pathname?.split("/").pop();
  const data = [
    {
      name: "Lanborgini",
      id: 1,
      images: [
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
      ],
      madeYear: 2024,
      enterdYear: 2024,
      salonColor: "shargal",
      OutColor: "black",
      lenght: 12312,
      motorTypes: "gasoline",
      Motor: "3956",
      speedHairag: "automatic",
      drivingSpeed: "left",
      fuelType: "gasoline",
      sellerPhoneNumber: 89898989,
      publishedDay: "2025/10/12",
      moreInformation: "Urangan",
    },
    {
      name: "Bugatti",
      id: 2,
      images: [
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
      ],
      madeYear: 2024,
      enterdYear: 2024,
      salonColor: "shargal",
      OutColor: "black",
      lenght: 12312,
      motorTypes: "gasoline",
      Motor: "3956",
      speedHairag: "automatic",
      drivingSpeed: "left",
      fuelType: "gasoline",
      sellerPhoneNumber: 89898989,
      publishedDay: "2025/10/12",
      moreInformation: "Urangan",
    },
    {
      name: "Benz",
      id: 3,
      images: [
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
        "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
      ],
      madeYear: 2024,
      enterdYear: 2024,
      salonColor: "shargal",
      OutColor: "black",
      lenght: 12312,
      motorTypes: "gasoline",
      Motor: "3956",
      speedHairag: "automatic",
      drivingSpeed: "left",
      fuelType: "gasoline",
      sellerPhoneNumber: 89898989,
      publishedDay: "2025/10/12",
      moreInformation: "Urangan",
    },
  ];

  useEffect(() => {
    document.querySelectorAll("p").forEach((p) => {
      p.classList.add("my-class", "mb-[20px]");
    });
  }, []);

  const selectedCar = data.find((car) => car.id.toString() === id);

  if (!selectedCar) {
    return <p>Car not found.</p>; // Handle case where no car is found
  }

  return (
    <div>
      <div className="mt-[70px] flex w-full flex-col p-8 py-[50px] lg:flex-row">
        <div className="mr-8 flex w-full flex-col xl:w-1/2">
          <Image
            src={selectedCar?.images?.[0]}
            alt="Car Image"
            width={100}
            height={100}
            className="h-[600px] w-full rounded-lg object-cover xl:w-1/2"
          />

          <div className="mt-4 flex gap-2">
            {selectedCar?.images
              .slice(1, 4)
              .map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Car Small Image ${index + 4}`}
                  className="h-[170px] w-[33%] rounded-lg object-cover"
                />
              ))}
          </div>
        </div>
        <div className="ml-8 mt-[20px] flex flex-col text-lg xl:ml-16">
          <div className="flex flex-col gap-2">
            <p>Car Name:</p>
            <p>Made Year:</p>
            <p>Entered Year:</p>
            <p>Salon Color:</p>
            <p>Out Color:</p>
            <p>Length:</p>
            <p>Motor Types:</p>
            <p>Motor</p>
            <p>Speed Hairag:</p>
            <p>Driving Speed:</p>
            <p>Fuel Type:</p>
            <p>Seller Phone Number:</p>
            <p>Published Day:</p>
            <p>More Information:</p>
          </div>
          <div className="ml-8">
            <p>{selectedCar?.name}</p>
            <p>{selectedCar?.madeYear}</p>
            <p>{selectedCar?.enterdYear}</p>
            <p>{selectedCar?.salonColor}</p>
            <p>{selectedCar?.OutColor}</p>
            <p>{selectedCar?.lenght}</p>
            <p>{selectedCar?.motorTypes}</p>
            <p>{selectedCar?.Motor}</p>
            <p>{selectedCar?.speedHairag}</p>
            <p>{selectedCar?.drivingSpeed}</p>
            <p>{selectedCar?.fuelType}</p>
            <p>{selectedCar?.sellerPhoneNumber}</p>
            <p>{selectedCar?.publishedDay}</p>
            <p>{selectedCar?.moreInformation}</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mt-8 text-2xl font-semibold">Recommended Products</h1>
        <div className="mt-4">
          <p>No recommended products yet.</p>{" "}
          {/* You can later add content here */}
        </div>
      </div>
    </div>
  );
}
