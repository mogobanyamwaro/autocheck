"use client";
import React from "react";
import ExploreCard from "./explore-card";
import { useQuery } from "@tanstack/react-query";
import BlockLoader from "@/components/common/block-loader";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import {
  SwiperOptions,
  Swiper,
  Navigation,
  SwiperSlide,
} from "@/components/common/slider";

export interface ICarStats {
  webViewCount: number;

  webViewerCount: number;

  interestCount: number;

  testDriveCount: number;

  appViewCount: number;

  appViewerCount: number;

  processedLoanCount: number;
}

export interface ICar {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  city: string;
  state: string;
  sellingCondition: string;
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: string;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  stats: ICarStats;
  bodyTypeId: number;
  sold: boolean;
  hasThreeDImage: boolean;
  transmission: string;
  fuelType: string;
  marketplaceVisibleDate: string;
  ccMeasurement: number;
}

async function getCars() {
  return (
    await fetch(
      `https://api-prod.autochek.africa/v1/inventory/car/search`,
    ).then((res) => res.json())
  ).result as ICar[];
}

function ExploreCars() {
  const { data, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars(),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <BlockLoader />;
  }
  return (
    <div className="group/section relative">
      <Swiper
        loop={false}
        modules={[Navigation]}
        autoplay={false}
        slidesPerView={4}
        // TODO: Change Navigation buttons to custom buttons

        spaceBetween={12}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.6,
          },
          580: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          840: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {data?.map((car) => (
          <SwiperSlide key={car.id}>
            <ExploreCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ExploreCars;
