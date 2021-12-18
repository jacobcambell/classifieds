import React, { useState, createContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [loggedin, setLoggedIn] = useState<boolean>(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <AuthContext.Provider value={{ auth, loggedin, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
