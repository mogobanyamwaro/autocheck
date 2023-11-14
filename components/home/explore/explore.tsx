"use client";
import React, { useState } from "react";
import StoryCard from "../story-card";
import ExploreCard from "./explore-card";

function Explore() {
  const deals = [
    "Bmw",
    "Toyota",
    "Mercedes Benz",
    "Lexus",
    "Nissan",
    "Explore 20+",
  ];

  const [selectedDeal, setSelectedDeal] = useState("Bmw");

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
      <div className="mx-auto mb-10 flex max-w-lg justify-between">
        {deals.map((deal) => (
          <p
            key={deal}
            className={`rounded-md px-2 py-1 text-${
              selectedDeal === deal ? "white bg-orange" : "primary bg-white"
            }`}
            onClick={() => handleDealClick(deal)}
          >
            {deal}
          </p>
        ))}
        S
      </div>
      <div className=" grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            return <ExploreCard key={i} />;
          })}
      </div>
    </div>
  );
}

export default Explore;
