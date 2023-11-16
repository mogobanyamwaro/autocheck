/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import StoryCard from "../story-card";
import ExploreCard from "./explore-card";
import { useQuery } from "@tanstack/react-query";
import ExploreCars from "./cars";

export interface ICarMake {
  id: number;
  name: string;
  imageUrl: string;
}
export interface ImakeList {
  makeList: ICarMake[];
}

async function getCarMakes() {
  return (await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/make?popular=true`,
  ).then((res) => res.json())) as ImakeList;
}

function Explore() {
  const [selectedDeal, setSelectedDeal] = useState("BMW");
  const { data, isLoading } = useQuery({
    queryKey: ["car-makes"],
    queryFn: () => getCarMakes(),
    staleTime: 1000 * 60 * 5,
  });

  const carMakes = data?.makeList.map((make) => make.name).slice(0, 5);
  carMakes?.push("Explore 20+");

  const handleDealClick = (deal: string) => {
    setSelectedDeal(deal);
  };

  return (
    <div className="bg-gray pb-20 pt-4">
      <p className="mb-3 text-center text-sm font-thin text-primary">
        Best Services
      </p>
      <h1 className="text-center text-xl font-semibold text-primary">
        Explore our Top Deals
      </h1>
      <h1 className="mb-20 text-center text-xl font-semibold text-primary">
        From Top Rated Dealers
      </h1>
      <div className="mx-auto mb-10 flex max-w-3xl justify-between">
        {!isLoading &&
          carMakes?.map((deal) => {
            const car = data?.makeList.find((make) => make.name === deal);
            return (
              <div key={deal} className="flex items-center justify-center">
                {car?.imageUrl && (
                  <img
                    src={car?.imageUrl}
                    alt={car?.name}
                    className="h-5 w-5 rounded-md object-cover"
                  />
                )}
                <p
                  className={`ml-2 rounded-md px-2 py-1 text-${
                    selectedDeal === deal
                      ? "white bg-orange"
                      : "primary bg-white"
                  }`}
                  onClick={() => handleDealClick(deal)}
                >
                  {deal}
                </p>
              </div>
            );
          })}
      </div>
      <ExploreCars />
    </div>
  );
}

export default Explore;
