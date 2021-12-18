import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Buttons() {
  const { auth, loggedin, signOut } = useContext(AuthContext);

  if (loggedin) {
    return (
      <div className="flex items-center">
        <button
          onClick={() => {
            signOut(auth);
          }}
          className="bg-red-600 text-white py-1 px-2 rounded-lg"
        >
          Log Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <Link href="/login">
          <a className="mr-3">Log In</a>
        </Link>
        <Link href="/signup">
          <a className="bg-primaryblue text-white py-1 px-2 rounded-lg">
            Sign Up
          </a>
        </Link>
      </div>
    );
  }
}
