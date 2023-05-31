import React, { useState } from "react";
import { LoginToken } from "./LoginContext";

const LoginContextProvider = (props) => {
   const tokenFromLocalStorage =localStorage.getItem('token');
  const [Token, setToken] = useState(tokenFromLocalStorage);

  const isLoggedIn = (token) => {
    localStorage.setItem('token',token)
    setToken(token);

  };
  const LoggedOut=()=>{
    localStorage.removeItem('token');
    setToken(null)
  }
  const obj = {
    token: Token,
    isLoggedIn: isLoggedIn,
    LoggedOut:LoggedOut
   
  };
  return (
    <LoginToken.Provider value={obj}>{props.children}</LoginToken.Provider>
  );
};

export default LoginContextProvider;
