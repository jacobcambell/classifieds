import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

import SignupForm from "../components/SignupForm/SignupForm";

export default function Register() {
  return (
    <div>
      <Navbar />
      <SignupForm />
    </div>
  );
}
