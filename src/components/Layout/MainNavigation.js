import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { LoginToken } from "../../Store/LoginContext";
import {useHistory} from 'react-router-dom'

const MainNavigation = () => {
  const history=useHistory()
  const ctxData = useContext(LoginToken);
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!!!ctxData.token && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {!!ctxData.token && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {!!ctxData.token && (
            <li>
              <button onClick={()=>{
                ctxData.LoggedOut()
                  history.replace('/auth')
              }}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
