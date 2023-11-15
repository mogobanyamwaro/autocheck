"use client";

import { forwardRef } from "react";
import clsx from "clsx";
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

interface LocationInputType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: "text" | "email" | "url" | "search" | "password" | "number";
  label: string;
  className?: string;
}

const LocationInput = forwardRef<HTMLInputElement, LocationInputType>(
  ({ label, className = "", ...inputProps }, ref) => {
    return (
      <div className={clsx("relative", className)}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 sm:pl-6">
          <FaLocationDot className="h-6 w-6 text-primary" />
        </div>
        <input
          ref={ref}
          type="text"
          className="px-4 py-1 text-primary placeholder:px-14 placeholder:text-primary focus:outline-none "
          placeholder="Location"
          {...inputProps}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-6">
          <FaCaretDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    );
  },
);

LocationInput.displayName = "LocationInput";
export default LocationInput;
