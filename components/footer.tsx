import Image from "next/image";
import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
function Footer() {
  return (
    <footer
      className="
    bg-primary
    pb-8
    
  
    "
    >
      <div
        className="
      max-w-7xl
      mx-auto
      
    
      "
      >
        <div
          className="
        flex
        justify-between
         h-64
         pt-8
        "
        >
          <div
            className="
          flex
            flex-col
            justify-center
            items-start
            w-1/4
            
          
          "
          >
            <h5>Car Rental</h5>
            <p
              className="
        text-secondary
        mb-4
        mt-2
            "
            >
              Anywhere,anytime,we always provide best services!
            </p>
            <p
              className="
            flex
            "
            >
              <span
                className="
            mr-2
              "
              >
                <Image
                  src="/images/email.png"
                  width={24}
                  height={24}
                  alt="email avatar"
                />
              </span>
              <span
                className="
           text-xs
              text-secondary
              "
              >
                Youremail@.com
              </span>
            </p>
          </div>

          <div
            className="
         flex
         flex-col
     
          "
          >
            <h5
              className="
            mb-8
            "
            >
              Services
            </h5>
            <div
              className="
            flex
            flex-col
            justify-between
            h-40
            text-secondary
            "
            >
              <p>Home</p>
              <p>Download</p>
              <p>Pricing</p>
              <p>About</p>
            </div>
          </div>
          <div
            className="
         flex
         flex-col
     
          "
          >
            <h5
              className="
            mb-8
            "
            >
              Resources
            </h5>
            <div
              className="
            flex
            flex-col
            justify-between
            h-40
            text-secondary
            "
            >
              <p>Home</p>
              <p>Download</p>
              <p>Pricing</p>
              <p>About</p>
            </div>
          </div>
          <div
            className="
         flex
         flex-col
     
          "
          >
            <h5
              className="
            mb-8
            "
            >
              Support
            </h5>
            <div
              className="
            flex
            flex-col
            justify-between
            h-40
            text-secondary
            "
            >
              <p>FAQ</p>
              <p>How it Works</p>
              <p>Features</p>
              <p
                className="
              opacity-0
              "
              >
                f
              </p>
            </div>
          </div>
          <div
            className="
          flex
            flex-col
            justify-center
            items-start
            w-1/4
            
          
          "
          >
            <h5>Connect with us</h5>
            <div
              className="
            flex
            justify-between
            w-24
                mb-4
        mt-2
            "
            >
              <SlSocialFacebook
                className="text-secondary
                hover:bg-orange
                border-2
                group
                group-hover:border-orange
                border-secondary
                rounded-full
                p-1
                h-7
                w-7
                cursor-pointer
              "
              />
              <FaXTwitter
                className="text-secondary
                hover:bg-orange 
                border-2
                border-secondary
                rounded-full
                p-1
                h-7
                w-7
                cursor-pointer
              "
              />
              <CiInstagram
                className="text-secondary
                hover:bg-orange 
                border-2
                border-secondary
                rounded-full
                p-1
                h-7
                w-7
                cursor-pointer
              "
              />
            </div>
            <p className="text-secondary mb-1">Subscribe to your newsletter</p>
            <div
              className="
            bg-white
            py-2
            px-4
            rounded-md
            "
            >
              <input
                type="text"
                className="
              focus:outline-none
              text-primary
              placeholder-primary
              "
                placeholder="Enter Your email "
              />
              <button
                className="
              bg-orange
                text-secondary
                px-4
                py-2
                rounded-md
                ml-2
                
              "
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <hr
          className="
        my-8
        text-secondary
        "
        />
        <p
          className="
        text-center
        text-secondary
        "
        >
          Copyright 2023 car rental. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
