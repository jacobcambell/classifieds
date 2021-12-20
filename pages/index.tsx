import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Listings from "../components/Listings/Listings";
import { pg } from "../config/knex";
import Center from "../components/Center/Center";

export default function Index({ listings }) {
  return (
    <div>
      <Navbar></Navbar>
      <Center>
        <Listings listings={listings} />
      </Center>
    </div>
  );
}

export async function getServerSideProps() {
  const listings = await pg("listings").select("id", "title", "price");

  return {
    props: {
      listings,
    },
  };
}
