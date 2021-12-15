import React from "react";
import Image from "next/image";

export default function Listing({ title, price }) {
  return (
    <div className="border border-gray-300 w-1/4 inline-block mx-3 my-3">
      <p className="font-bold">{title}</p>
      <p className="text-primaryblue">${price}</p>
    </div>
  );
}
