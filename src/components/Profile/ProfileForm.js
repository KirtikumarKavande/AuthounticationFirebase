import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import { LoginToken } from "../../Store/LoginContext";

const ProfileForm = () => {
  const ctxData = useContext(LoginToken);
  const passwordRef = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();
    const passChangeObj = {
      idToken: ctxData.token,
      password: passwordRef.current.value,
      returnSecureToken: true,
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDnMuNg7zDVo3zomci3-trrky63QTafcMg",
      {
        method: "POST",
        body: JSON.stringify(passChangeObj),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
