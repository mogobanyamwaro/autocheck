import React from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className="mx-auto flex max-w-7xl justify-between px-8 pt-3">
      <div>
        <h1 className="cursor-pointer text-orange">Automobile</h1>
      </div>
      <ul className="hidden w-6/12 justify-between text-secondary lg:flex  ">
        <li className="cursor-pointer hover:text-orange">Home</li>
        <li className="cursor-pointer hover:text-orange">About</li>
        <li className="cursor-pointer hover:text-orange">Cars</li>
        <li className="cursor-pointer hover:text-orange">Pricing</li>
        <li className="cursor-pointer hover:text-orange">Contact</li>
      </ul>
      <div className="flex items-center">
        <CiSearch className="mr-1 h-6 w-5 cursor-pointer rounded-sm bg-white py-1 font-bold text-primary" />
        <button className="rounded-sm bg-orange px-3 py-1 text-xs text-white">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Header;
