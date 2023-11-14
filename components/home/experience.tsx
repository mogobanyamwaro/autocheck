/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaClock } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";

function Experience() {
  return (
    <div className="bg-white px-8 pt-10">
      {" "}
      <div className=" mx-auto max-w-7xl">
        <p className="mb-3 text-center text-sm font-thin text-primary">
          Why Choose Us
        </p>
        <h1 className="text-center text-xl font-semibold text-primary">
          We Offer best experience
        </h1>
        <h1 className="mb-20 text-center text-xl font-semibold text-primary">
          with our rental deals
        </h1>
        <div
          style={{
            height: "60vh",
          }}
          className="flex  flex-col-reverse items-center justify-between md:flex-row"
        >
          <div
            style={{
              height: "60vh",
            }}
            className="mt-8 flex w-8/12 pb-24   md:mt-0"
          >
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              className="h-full w-full rounded-md object-cover"
            />
          </div>

          <div
            style={{
              height: "60vh",
            }}
            className="flex w-4/12 flex-col  text-white"
          >
            <div className="ml-5 flex items-center">
              <GoPersonFill
                className="mr-5 h-12 w-12  rounded-md border-2 bg-orange p-1 text-white "
                alt=""
              />
              <div>
                <h1 className=" text-primary">Experience Driver</h1>
                <p className="text-xs font-thin text-primary ">
                  Dont have a driver? Dont worry we have many experienced
                  drivers for you
                </p>
              </div>
            </div>
            <div className="ml-5 mt-12 flex items-center">
              <FaDollarSign
                className="mr-5 h-10 w-10  rounded-md border-2 bg-orange p-1 text-white "
                alt=""
              />
              <div>
                <h1 className=" text-primary">Best price guaranteed</h1>
                <p className="text-xs font-thin text-primary ">
                  Find a lower price? We will refund you 100% the difference
                </p>
              </div>
            </div>
            <div className="ml-5 mt-12 flex items-center">
              <FaClock
                className="mr-5 h-10 w-10  rounded-md border-2 bg-orange p-1 text-white "
                alt=""
              />
              <div>
                <h1 className=" text-primary">24-hour car delivery</h1>
                <p className="text-xs font-thin text-primary ">
                  Book your car anytime and we will deliver it directly to you
                </p>
              </div>
            </div>
            <div className="ml-5 mt-12 flex items-center">
              <IoChatbubblesSharp
                className="mr-5 h-10 w-10  rounded-md border-2 bg-orange p-1 text-white "
                alt=""
              />
              <div>
                <h1 className=" text-primary">24/7 technical support</h1>
                <p className="text-xs font-thin text-primary ">
                  Have a question? Contact our support anytime you need
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
