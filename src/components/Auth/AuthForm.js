import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  function handleSubmit(e) {
    setIsLoading(true);

    if (isLogin) {
    } else {
      e.preventDefault();
      const signUpdata = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken: true,
      };
      console.log("1");

      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDnMuNg7zDVo3zomci3-trrky63QTafcMg",
        {
          method: "POST",
          body: JSON.stringify(signUpdata),
          headers: {
            "content-type": "application/json",
          },
        }
      ).then((res) => {
        console.log("2");

        if (res.ok) {
        } else {
          console.log(
            "res not ok",
            res.json().then((data) => {
              // let errorMessege = "authountication Faild !!!";
              if (data && data.error && data.error.message) {
                alert("plz add all coorect information");
              }
            })
          );
        }
      });
      setIsLoading(false);

      console.log("3");
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        {isLoading && <p style={{ color: "white" }}>Loading....</p>}
        <button type="submit" className={classes.toggle}>
          {isLogin ? "signin" : "Signup"}
        </button>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
