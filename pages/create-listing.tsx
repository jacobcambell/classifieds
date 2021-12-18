import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Center from "../components/Center/Center";
import CreateListingForm from "../components/CreateListingForm/CreateListingForm";

export default function CreateListing() {
  return (
    <div>
      <Navbar />

      <Center>
        <CreateListingForm />
      </Center>
    </div>
  );
}
