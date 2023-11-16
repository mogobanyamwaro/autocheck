import ListingDetailsHeroBlock from "@/components/car/hero-block";
import OrderForm from "@/components/car/order-form";
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

function Car() {
  return (
    <div>
      <div className="container-fluid 3xl:!px-12 w-full">
        <GallaryBlock images={images} />
        <div className="4xl:gap-16 mx-auto flex max-w-7xl justify-between gap-5 lg:gap-8 xl:gap-12">
          <div className="w-full">
            <ListingDetailsHeroBlock vendor={vendor} />
          </div>
          <div className="3xl:max-w-lg hidden w-full max-w-sm pb-11 lg:block xl:max-w-md">
            <div className="4xl:top-40 sticky top-32">
              <OrderForm price={23223} averageRating={4.5} totalReviews={35} />
            </div>
          </div>
          G
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Car;
