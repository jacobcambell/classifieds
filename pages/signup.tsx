import React, { useState } from "react";
import Center from "../components/Center/Center";
import Navbar from "../components/Navbar/Navbar";

import SignupForm from "../components/SignupForm/SignupForm";

export default function Register() {
  return (
    <div>
      <Navbar />

      <Center>
        <SignupForm />
      </Center>
    </div>
  );
}
