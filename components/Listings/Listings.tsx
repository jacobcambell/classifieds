import React from "react";
import Listing from "../Listing/Listing";

type ListingType = {
  id: number;
  image: string;
  title: string;
  price: string;
};

export default function Listings({ listings }: { listings: ListingType[] }) {
  return (
    <div className="flex flex-wrap justify-between">
      {listings &&
        listings.map((listing) => (
          <Listing
            image={`https://via.placeholder.com/250`}
            key={listing.id}
            title={listing.title}
            price={listing.price}
          ></Listing>
        ))}
    </div>
  );
}
