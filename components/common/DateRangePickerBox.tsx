"use client";

import clsx from "clsx";
import { useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
interface DatePickerInputType extends ReactDatePickerProps {
  label: string;

  containerClass?: string;
}

export default function DatePickerInput({
  label,
  containerClass,
  ...props
}: DatePickerInputType) {
  const [state, setState] = useState(false);

  return (
    <div className={clsx("relative", containerClass)}>
      <div className="pointer-events-none absolute inset-y-6 left-3 top-4 z-20 flex items-center pl-4 sm:pl-6">
        <FaCalendarAlt className="h-6 w-6 text-primary" />
      </div>
      <DatePicker
        className={clsx(
          "px-4 py-1 text-primary placeholder:px-14 placeholder:text-primary focus:outline-none",
          props.className,
          state && "!border-gray-1000 !ring-gray-900/20 !ring-[1px]",
        )}
        placeholderText={label}
        onFocus={(e) => e.target.blur()}
        onCalendarOpen={() => setState(true)}
        onCalendarClose={() => setState(false)}
        {...props}
      />
    </div>
  );
}
