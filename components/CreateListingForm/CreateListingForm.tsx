import React, { useState } from "react";
import { auth } from "../firebase-config";
import { useMutation } from "react-query";
import axios from "axios";

type CreateListingOptions = {
  title: string;
  price: string;
  firebase_token: string;
};

export default function CreateListingForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { mutate } = useMutation((options: CreateListingOptions) => {
    return axios.post(
      "/api/create-listing",
      { title: options.title, price: options.price },
      {
        headers: { firebase_token: options.firebase_token },
      }
    );
  });

  const handleSubmit = () => {
    setError(null);

    if (title.length < 3) {
      setError("Title should be at least 3 characters long.");
      return;
    }
    if (title.length > 50) {
      setError("Title should be no more than 50 characters long.");
      return;
    }
    if (price.length === 0) {
      setError("Price should not be empty");
      return;
    }
    if (isNaN(Number(price))) {
      setError("Price should be a number value");
      return;
    }
    if (Number(price) < 0) {
      setError("Price should at least have a value of 0");
      return;
    }
    if (Number(price) > 99999) {
      setError("Price should be no more than 99999");
      return;
    }

    // Get Firebase auth token
    auth.currentUser.getIdToken(true).then((firebase_token) => {
      mutate({ title, price, firebase_token });
    });
  };

  return (
    <div>
      <p className="text-2xl mb-3 mt-3">Create Listing</p>

      <p className="font-bold mb-1">Title</p>
      <input
        type="text"
        className="block w-full border border-gray-600 p-1 mb-3"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        data-testid="titleInput"
      />

      <p className="font-bold mb-1">Price</p>
      <input
        type="text"
        className="block border border-gray-600 p-1 mb-3"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        data-testid="priceInput"
      />

      <button
        data-testid="submitBtn"
        className="bg-primaryblue text-white p-2"
        onClick={handleSubmit}
      >
        Create Listing
      </button>

      {error !== null && <p className="text-red-500 my-2">{error}</p>}
    </div>
  );
}
