import React, { useState, createContext, useEffect } from "react";
import { loginRequest, createUser } from "./authentication.service";
import { auth } from "./firebase.service";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        //console.log(e.message);
        setError(e.message);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setIsLoading(false);
      setError("Password and repeated password did not match");
      return;
    }
    setIsLoading(true);

    createUser(email, password)
      .then((userCredential) => {
        setIsLoading(false);
        setError("");
        setUser(userCredential.user);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setIsLoading(true);
      setError("");

      if (u) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(u);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, [user]);

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  /*const onLogout = () => {
    signOut(auth);
  };*/

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
