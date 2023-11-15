/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function Reviews() {
  return (
    <div className=" bg-primary">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div
          style={{
            height: "70vh",
          }}
          className="flex  flex-col-reverse items-center justify-between md:flex-row"
        >
          {/* Text Content */}
          <div
            style={{
              height: "70vh",
            }}
            className="flex w-5/12 flex-col justify-evenly text-white"
          >
            <small className="text-xs text-secondary">Testimonials</small>
            <h1 className="text-xl">Our Client`s Reviews & Testimonials</h1>
            <p className="text-sm text-secondary">
              The majority of our users tell us that readable content distracts
              readers. The majority of our users tell us that readable content.
            </p>
            <p className="text-sm text-secondary">
              &ldquo;There are amazing people working here who are down-to-earth
              and willing to work with anyone! Their priority is to take care of
              their own and make sure you&apos;re satisfied! They take care of
              their own and make sure you&apos;re satisfied!&rdquo;
            </p>
            <p className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar className="mr-2 text-orange" key={i} />
              ))}
              5.0
            </p>
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="mr-5 h-10 w-10 rounded-full object-cover"
                alt=""
              />
              <div>
                <h1>Wade Warren</h1>
                <p>Owner co-working space</p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div
            style={{
              height: "60vh",
            }}
            className="mt-8 w-7/12 md:mt-0"
          >
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
