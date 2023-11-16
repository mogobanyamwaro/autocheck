import Image from "next/image";
import React from "react";

function InstallApp() {
  return (
    <div className=" relative h-screen w-full bg-white pb-0 pt-28">
      <div className="mx-auto max-w-7xl overflow-clip  px-8 ">
        <div className=" z-10  flex   items-center   justify-between rounded-lg bg-primary">
          <div className="flex flex-col items-start justify-center px-2 py-4 lg:h-96 lg:w-1/2 lg:px-0 lg:py-0 lg:pl-20 ">
            <h2 className="mb-3 text-3xl font-bold">
              Download the free RentalX app
            </h2>
            <p className="text-md mb-7 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus lacinia erat. consectetur adipiscing elit. Nulla.
            </p>
            <div className="flex">
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
      </div>
      <div className=" mb-20 mt-6 flex justify-center lg:hidden">
        <Image
          src="/images/phone.png"
          alt="Overflowing Phone"
          width={120}
          height={150}
        />
      </div>

      <div className="absolute -right-32  top-20 -mt-7 hidden w-1/2 lg:block">
        <Image
          src="/images/phone.png"
          alt="Overflowing Phone"
          className="
          w-1/2
          "
          width={120}
          height={240}
        />
      </div>
    </div>
  );
}

export default InstallApp;
