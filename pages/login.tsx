import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import LoginForm from "../components/LoginForm/LoginForm";
import Center from "../components/Center/Center";

export default function Login() {
  return (
    <div>
      <Navbar />

      <Center>
        <LoginForm></LoginForm>
      </Center>
      <div></div>
    </div>
  );
}
