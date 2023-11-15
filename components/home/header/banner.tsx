import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import Image from "next/image";

function Banner() {
  return (
    <div className="mx-auto mt-10  max-w-7xl  px-8 pt-3">
      <div className="flex">
        <div className="w-3/12">
          <div className="mb-4 mt-2 flex h-32 w-24 flex-col justify-between">
            <SlSocialFacebook className="group h-7 w-7 cursor-pointer rounded-full border-2 border-secondary p-1 text-secondary hover:bg-orange group-hover:border-orange" />
            <FaXTwitter className="h-7 w-7 cursor-pointer rounded-full border-2 border-secondary p-1 text-secondary hover:bg-orange" />
            <CiInstagram className="h-7 w-7 cursor-pointer rounded-full border-2 border-secondary p-1 text-secondary hover:bg-orange" />
          </div>
        </div>
        <div className="flex w-9/12 flex-col items-center">
          <h1 className="whitespace-nowrap text-7xl">
            Fast And Easy Way To Rent
          </h1>
          <h1 className="mb-5 mt-2 text-7xl">
            <span className="text-orange">A Branded </span>
            Car
          </h1>
          <p className="text-xs text-secondary">
            Discover RentalX car rental options in USA with rent a car
          </p>
          <p className="text-xs text-secondary">
            Select from a arange of car options and local specials
          </p>
          <div className="mt-4 flex">
            <Image
              className="mr-5 cursor-pointer"
              src="/images/apple.png"
              width={120}
              height={40}
              alt=""
            />
            <Image
              className="cursor-pointer"
              src="/images/playstore.png"
              width={120}
              height={40}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex">
        {" "}
        <div className="h-64 w-7/12">
          <img
            className="h-full w-full"
            src="https://images.pexels.com/photos/10292239/pexels-photo-10292239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="ml-4 flex h-64 w-4/12 items-center justify-between">
          <div className="">
            <img src="/images/km.svg" alt="" />
          </div>
          <div className="">
            <img src="/images/km1.svg" alt="" />
          </div>
          <div className="">
            <img src="/images/km2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
