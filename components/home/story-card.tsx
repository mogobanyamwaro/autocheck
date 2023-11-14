import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

function StoryCard() {
  return (
    <div className="rounded-md bg-white p-3">
      <div className="rounded-md bg-gray p-3">
        <Image
          src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800"
          width={400}
          height={400}
          alt=""
        />
      </div>
      <p className="my-2 w-fit rounded-sm bg-orange px-3 py-1 text-xs text-white">
        Tags
      </p>
      <h1 className="pb-3 pt-2 text-primary">Start a blog to reach you</h1>
      <p className="text-xs font-thin text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint
        veritatis officiis, ex atque voluptatum odio fugiat corrupti aliquid
        iste beatae eius provident?
      </p>
      <p className="mt-2 flex cursor-pointer">
        <span className="text-xs text-primary">Find Out More</span>
        <span className="ml-2">
          <FaAngleRight className="text-primary" />
        </span>
      </p>
    </div>
  );
}

export default StoryCard;
