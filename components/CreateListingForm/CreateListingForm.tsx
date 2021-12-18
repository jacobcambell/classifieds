import React from "react";

export default function CreateListingForm() {
  return (
    <div>
      <p className="text-2xl mb-3 mt-3">Create Listing</p>

      <p className="font-bold mb-1">Title</p>
      <input
        type="text"
        className="block w-full border border-gray-600 p-1 mb-3"
      />

      <p className="font-bold mb-1">Price</p>
      <input type="text" className="block border border-gray-600 p-1 mb-3" />

      <button className="bg-primaryblue text-white p-2">Create Listing</button>
    </div>
  );
}
