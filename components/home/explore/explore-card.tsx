"use client";
import Image from "next/image";
import React from "react";

import { FaStar } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { GoPersonFill } from "react-icons/go";
import { ICar } from "./cars";
import { useRouter } from "next/navigation";

function ExploreCard({ car }: { car: ICar }) {
  const router = useRouter();
  return (
    <div className="max-w-xs rounded-md bg-white p-3">
      <div className="rounded-md bg-gray p-3">
        <Image src={car?.imageUrl} width={400} height={400} alt="" />
      </div>
      <p className="my-3 flex  items-center text-xs text-primary">
        <FaStar className="mr-2 text-orange" />
        4.7 (50+ Review)
      </p>
      <h1 className="-mt-0 pb-3 text-sm text-primary">{car?.title}</h1>
      <div className="mb-2 flex justify-between">
        <p className="flex items-center text-sm font-thin text-primary">
          <span>
            <GoPersonFill className="mr-2" />
          </span>
          <span>3 Passangers</span>
        </p>
        <p className="flex items-center text-sm font-thin text-primary">
          <span>
            <FaDoorClosed className="mr-2" />
          </span>
          <span>2 doors</span>
        </p>
      </div>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center text-sm font-thin text-primary">
          <span>
            <MdAir className="mr-2" />
          </span>
          <span>Air conditioning</span>
        </p>
        <p className="flex items-center text-sm font-thin text-primary">
          <span>
            <TbManualGearbox className="mr-2 " />
          </span>
          <span> Manual</span>
        </p>
      </div>
      <div className="mb-1 flex justify-between">
        <p className="flex items-center text-sm  text-primary">
          {/* <FaDollarSign /> */}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(car?.marketplaceOldPrice)}
          /day
        </p>
        <button
          onClick={() => router.push(`/car/${car.id}`)}
          className="rounded-sm bg-orange px-3 py-1 text-xs text-white"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default ExploreCard;
