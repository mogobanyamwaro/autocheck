"use client";

import clsx from "clsx";
import { useState } from "react";

import { FaStar } from "react-icons/fa";

interface BookingFormProps {
  price: number;
  averageRating: number;
  totalReviews: number;
  className?: string;
}

const list = [
  {
    title: "Car Owner's Price",
    money: 762,
    type: "price",
  },
  {
    title: "Weekly Discount",
    money: 117,
    type: "discount",
  },
  {
    title: "Cleaning Supplies",
    money: 52,
    type: "cleanfee",
  },
  {
    title: "Service Fee",
    money: 65,
    type: "servicefee",
  },
  {
    title: "Total Cost for Buying",
    money: 702,
    type: "total",
  },
];

export default function OrderForm({
  price,
  averageRating,
  totalReviews,
  className,
}: BookingFormProps) {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <form
      noValidate
      onSubmit={() => {}}
      className={clsx(
        "border-gray-lighter shadow-card mt-5 rounded-xl border bg-white p-8",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3  ">
        <p className="text-xl font-bold text-primary xl:text-[22px]">
          {" "}
          {" " +
            new Intl.NumberFormat("en-KE", {
              style: "currency",
              currency: "KES",
            }).format(price)}{" "}
        </p>
        <p className="inline-flex flex-shrink-0 items-center gap-2">
          <FaStar className="xl:w-h-5 h-4 w-4 xl:h-5" />
          <span className="text-base font-bold text-primary">
            {averageRating}
          </span>
          <span className="flex-shrink-0 text-sm font-normal text-primary xl:text-base">
            ({" "}
            <a href="#reviews" rel="noopener noreferer" className="underline">
              {totalReviews} reviews
            </a>{" "}
            )
          </span>
        </p>
      </div>
      <div
        className={clsx(
          "border-gray-lighter relative mt-6 grid grid-cols-2 gap-3 rounded-t-lg border border-b-0",
          focus && "!border-gray-dark ring-gray-900/20 !border-b ring-[1px]",
        )}
        onBlur={() => setFocus(false)}
      ></div>

      <button
        type="submit"
        className="mt-5 w-full rounded-sm bg-orange px-3 py-2 text-xs text-white "
      >
        BUY NOW
      </button>
      <ul className="mt-3 xl:mt-5">
        {list.map((item) => (
          <li
            key={item.title}
            className="last:border-gray-lighter flex items-center justify-between py-1.5 text-base capitalize text-primary first:pt-0 last:border-t last:pb-0"
          >
            <span className="font-normal">{item.title}</span>
            {item.type === "discount" ? (
              <span className="text-red font-bold">
                -
                {new Intl.NumberFormat("en-KE", {
                  style: "currency",
                  currency: "KES",
                }).format(item.money)}
              </span>
            ) : (
              <span className="font-bold">
                {new Intl.NumberFormat("en-KE", {
                  style: "currency",
                  currency: "KES",
                }).format(item.money)}
              </span>
            )}
          </li>
        ))}
      </ul>
    </form>
  );
}
