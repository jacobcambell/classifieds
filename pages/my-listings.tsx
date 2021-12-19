import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Center from "../components/Center/Center";
import Listings from "../components/Listings/Listings";
import { useQuery } from "react-query";
import axios from "axios";
import { auth } from "../components/firebase-config";

export default function MyListings({ listings }) {
  const { isLoading, data } = useQuery("my-listings", async () => {
    const firebase_token = await auth.currentUser.getIdToken(true);

    return axios.get("/api/get-my-listings", {
      headers: {
        firebase_token,
      },
    });
  });

  return (
    <div>
      <Navbar />

      <Center>
        <h1>My listings</h1>
        {!isLoading && <Listings listings={data.data}></Listings>}
      </Center>
    </div>
  );
}
