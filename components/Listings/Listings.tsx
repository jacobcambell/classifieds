import React from "react";
import Listing from "../Listing/Listing";

type ListingType = {
  id: number;
  title: string;
  price: string;
};

export default function Listings({ listings }: { listings: ListingType[] }) {
  return (
    <div className="w-1/2 m-auto">
      {listings &&
        listings.map((listing) => (
          <Listing
            key={listing.id}
            title={listing.title}
            price={listing.price}
          ></Listing>
        ))}
    </div>
  );
}
