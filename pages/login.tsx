import React, { useState } from "react";
import { auth } from "../components/firebase-config";
import Navbar from "../components/Navbar/Navbar";
import { signInWithEmailAndPassword } from "firebase/auth";

const labelClasses = "";
const inputClasses = "border border-gray-400 w-full mb-3 p-1";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="w-1/3 m-auto my-3">
        <p className="text-2xl mb-3">Log In</p>
        <p className={labelClasses}>Email</p>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={inputClasses}
        />

        <p className={labelClasses}>Password</p>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={inputClasses}
        />

        <button
          className="bg-primaryblue text-white block w-full py-2"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
