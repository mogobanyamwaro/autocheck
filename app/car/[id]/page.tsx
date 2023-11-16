import ListingDetailsHeroBlock from "@/components/car/hero-block";
import OrderForm from "@/components/car/order-form";
import SpecificationBlock from "@/components/car/specification";
import GallaryBlock from "@/components/common/gallery";
import Footer from "@/components/footer";
import React from "react";
const vendor = {
  name: "Safiya Cleaning Services",
  img: "https://randomuser.me/api/portraits/women/12.jpg",
  coverImage: "/images/cleaner-details/cover-image.png",
  memberSince: "Jan 2016",
  languages: ["English", "Swahili"],
  responseRate: 90,
  responseTime: "Within 30 minutes",
  location: "Nairobi, Kenya",
  cleanerName: "Professional Home Cleaner — Expert in Sparkling Clean Homes",
  cleanerExperience: "5+ years of cleaning expertise",
  cleanerServices:
    "Specializing in deep cleaning, organizing, and child-friendly cleaning solutions.",
  username: "@safiyacleaners",
  instagramUsername: "safiyacleaners",
  twitterUsername: "@safiyacleaners",
};
const images = ["/images/audi1.jpg", "/images/audi2.jpg", "/images/audi3.jpg"];
const specifications = [
  { name: "Car Name", details: "Honda Accord" },
  { name: "state", details: "CA" },
  { name: "sellingCondition", details: "Used" },
  { name: "hasWarranty", details: "Yes" },
  { name: "marketplacePrice", details: "20000" },
  { name: "marketplaceOldPrice", details: "22000" },

  // { name: "mileageUnit", details: "miles" },
  // { name: "installment", details: "400" },
  // { name: "depositReceived", details: "Yes" },
  // { name: "loanValue", details: "18000" },

  // { name: "bodyTypeId", details: "2" },
  // { name: "sold", details: "No" },
  // { name: "hasThreeDImage", details: "No" },
  { name: "transmission", details: "Automatic" },
  { name: "fuelType", details: "Gasoline" },
  { name: "marketplaceVisibleDate", details: "2023-02-01" },
  { name: "ccMeasurement", details: "1800" },
];

function Car() {
  return (
    <div>
      <div className="container-fluid 3xl:!px-12 w-full">
        <GallaryBlock images={images} />
        <div className="mx-auto flex max-w-7xl flex-col px-8 lg:flex-row lg:justify-between lg:px-0">
          <div className="w-full">
            <ListingDetailsHeroBlock vendor={vendor} />
            <SpecificationBlock specifications={specifications} />
          </div>
          <div className="mb-8 w-full lg:ml-6">
            <OrderForm price={23223} averageRating={4.5} totalReviews={35} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Car;
