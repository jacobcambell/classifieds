import React from "react";
import Listing from "../Listing/Listing";

export default function Listings() {
  return (
    <div className="w-1/2 m-auto">
      <Listing title={"Cool listing"} price={24.99} />
      <Listing title={"Bad listing"} price={4.99} />
      <Listing title={"Bad listing"} price={4.99} />
      <Listing title={"Cool listing"} price={24.99} />
      <Listing title={"Bad listing"} price={4.99} />
      <Listing title={"Bad listing"} price={4.99} />
      <Listing title={"Cool listing"} price={24.99} />
      <Listing title={"Bad listing"} price={4.99} />
      <Listing title={"Bad listing"} price={4.99} />
    </div>
  );
}
