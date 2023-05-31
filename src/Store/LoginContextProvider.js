import React, { useState } from "react";
import { LoginToken } from "./LoginContext";

const LoginContextProvider = (props) => {
  const [Token, setToken] = useState(null);

  const isLoggedIn = (token) => {
    setToken(token);
  };
  const obj = {
    token: Token,
    isLoggedIn: isLoggedIn,
   
  };
  return (
    <LoginToken.Provider value={obj}>{props.children}</LoginToken.Provider>
  );
};

export default LoginContextProvider;
