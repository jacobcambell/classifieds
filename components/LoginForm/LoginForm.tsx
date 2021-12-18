import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";

const labelClasses = "";
const inputClasses = "border border-gray-400 w-full mb-3 p-1";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>(null);

  const { auth } = useContext(AuthContext);

  const handleSubmit = async () => {
    setError(null);

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
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

      {error !== null && <p className="text-red-500 my-3">{error}</p>}
    </div>
  );
}
