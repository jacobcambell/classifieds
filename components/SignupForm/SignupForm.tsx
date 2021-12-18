import React, { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";

const labelClasses = "";
const inputClasses = "border border-gray-400 w-full mb-3 p-1";

export default function SignupForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>();

  const { auth } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (password !== confirmPass) {
      alert("Please ensure your passwords match");
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div>
      <p className="text-2xl mb-3">Sign Up</p>
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

      <p className={labelClasses}>Confirm Password</p>
      <input
        type="password"
        onChange={(e) => {
          setConfirmPass(e.target.value);
        }}
        className={inputClasses}
      />

      <button
        className="bg-primaryblue text-white block w-full py-2"
        onClick={handleSubmit}
      >
        Sign Up
      </button>

      {errorMessage && <p className="text-red-500 my-3">{errorMessage}</p>}
    </div>
  );
}
