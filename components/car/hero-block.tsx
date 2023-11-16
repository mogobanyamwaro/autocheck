"use client";

import { Menu } from "@headlessui/react";
import { HeartIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useModal } from "../common/modal";

export const ShareIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.507 16.143c-1.15 0-2.186.497-2.905 1.287l-6.467-4.006a3.906 3.906 0 0 0 0-2.848l6.467-4.006a3.92 3.92 0 0 0 2.905 1.286 3.933 3.933 0 0 0 3.929-3.928A3.933 3.933 0 0 0 18.507 0a3.933 3.933 0 0 0-3.928 3.928c0 .503.096.983.268 1.425L8.38 9.358a3.92 3.92 0 0 0-2.905-1.286A3.933 3.933 0 0 0 1.547 12a3.933 3.933 0 0 0 3.928 3.928c1.15 0 2.186-.496 2.905-1.286l6.467 4.005a3.912 3.912 0 0 0-.268 1.425A3.933 3.933 0 0 0 18.507 24a3.933 3.933 0 0 0 3.929-3.928 3.933 3.933 0 0 0-3.929-3.928ZM16.011 3.928a2.499 2.499 0 0 1 2.496-2.496 2.499 2.499 0 0 1 2.496 2.496 2.499 2.499 0 0 1-2.496 2.496 2.499 2.499 0 0 1-2.496-2.496ZM5.475 14.496A2.499 2.499 0 0 1 2.98 12a2.499 2.499 0 0 1 2.496-2.496A2.499 2.499 0 0 1 7.971 12a2.499 2.499 0 0 1-2.496 2.496Zm10.536 5.576a2.499 2.499 0 0 1 2.496-2.496 2.499 2.499 0 0 1 2.496 2.496 2.499 2.499 0 0 1-2.496 2.495 2.499 2.499 0 0 1-2.496-2.495Z"
      />
    </svg>
  );
};

// share icons
function ShareIcons() {
  const { openModal } = useModal();
  return (
    <div className="3xl:gap-6 mt-1 hidden items-center gap-3 bg-white md:flex">
      <button
        className="!bg-gray-lightest  !border-none !p-4 text-primary hover:!bg-primary hover:text-orange"
        onClick={() => openModal("SHARE")}
      >
        <ShareIcon className="h-auto w-5" />
      </button>
      <button className="!bg-gray-lightest hover:!bg-gray-dark !border-none !p-4 text-primary hover:text-white">
        <HeartIcon className="h-auto w-5" />
      </button>
    </div>
  );
}

function ShareMenu() {
  const { openModal } = useModal();
  return (
    <Menu as="div" className="relative md:hidden">
      <div>
        <Menu.Button className="h-6 w-6 rounded-full border-none outline-none hover:ring-2 hover:ring-primary">
          <EllipsisHorizontalIcon className="h-6 w-6" />
        </Menu.Button>
        <Menu.Items className="absolute right-0">
          <div className="shadow-card flex w-[150px] flex-col rounded-lg bg-white py-1">
            <Menu.Item>
              <button
                onClick={() => openModal("SHARE")}
                className="hover:bg-gray-lightest border- py-2 text-base font-medium text-primary"
              >
                Share Now
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="border-gray-primary text-gray-dark py-2 text-base font-medium hover:bg-primary">
                Add to wishlist
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
}

export default function ListingDetailsHeroBlock({ vendor }: any) {
  return (
    <div className="flex justify-between border-b border-primary pb-6 md:pb-8 2xl:pb-10">
      <div>
        <p className="text-primary">{vendor.location}</p>
        <h2 className="4xl:!text-3xl mt-2 !text-2xl uppercase !leading-7 text-primary md:!text-[26px] md:!leading-10 2xl:!text-[28px]">
          {vendor.boatName}
        </h2>
        <div className="mt-3 flex items-center gap-2 leading-4 text-primary md:mt-4">
          <p>{vendor.boatGuests} guests</p>
          <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary"></span>
          <p>{vendor.boatCabins} cabins</p>
          <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary"></span>
          <p>{vendor.boatBathrooms} bathrooms</p>
        </div>
      </div>
      <div className="relative">
        <ShareMenu />
        <ShareIcons />
      </div>
    </div>
  );
}
