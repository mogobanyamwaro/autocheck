"use client";
import Image from "next/image";
import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-primary px-8 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-full flex-wrap justify-between pt-8 lg:h-64 lg:flex-nowrap ">
          <div className="mb-10 flex flex-col items-start  justify-center md:mb-0 lg:w-1/4">
            <h5>Car Rental</h5>
            <p className="mb-4 mt-2 text-secondary">
              Anywhere, anytime, we always provide the best services!
            </p>
            <p className="flex">
              <span className="mr-2">
                <Image
                  src="/images/email.png"
                  width={24}
                  height={24}
                  alt="email avatar"
                />
              </span>
              <span className="text-xs text-secondary">Youremail@.com</span>
            </p>
          </div>

          <div className="flex flex-col">
            <h5 className="mb-8">Services</h5>
            <div className="flex h-40 flex-col justify-between text-secondary">
              <p
                className="cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </p>
              <p>Download</p>
              <p>Pricing</p>
              <p>About</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="mb-8">Resources</h5>
            <div className="flex h-40 flex-col justify-between text-secondary">
              <p
                className="cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </p>
              <p>Download</p>
              <p>Pricing</p>
              <p>About</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="mb-8">Support</h5>
            <div className="flex h-40 flex-col justify-between text-secondary">
              <p>FAQ</p>
              <p>How it Works</p>
              <p>Features</p>
              <p className="opacity-0">f</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-center md:mt-0 lg:w-1/4">
            <h5>Connect with us</h5>
            <div className="mb-4 mt-2 flex w-24 justify-between">
              <SlSocialFacebook className="group h-7 w-7 cursor-pointer rounded-full border-2 border-secondary p-1 text-secondary hover:bg-orange group-hover:border-orange" />
              <FaXTwitter className="h-7 w-7 cursor-pointer rounded-full border-2 border-secondary p-1 text-secondary hover:bg-orange" />
              <CiInstagram className="h-7 w-7 cursor-pointer rounded-full border-2 border-secondary p-1 text-secondary hover:bg-orange" />
            </div>
            <p className="mb-1 text-secondary">Subscribe to your newsletter</p>
            <div className="flex rounded-md bg-white px-4 py-2 lg:flex-none">
              <input
                type="text"
                className="text-primary placeholder-primary focus:outline-none"
                placeholder="Enter Your email"
              />
              <button className="ml-2 rounded-md bg-orange px-4 py-2 text-secondary">
                Send
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 text-secondary" />

        <p className="text-center text-secondary">
          Copyright 2023 car rental. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
