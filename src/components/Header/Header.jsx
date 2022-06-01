import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <div className={styles.headerMiddle}>
        <div className={styles.loginBlock}>
          {props.isAuth ? (
            <div>
              {props.login}
              <button onClick={props.logout} className={styles.logoutBtn}>
                Log Out
              </button>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
        <div className={styles.headerlogout}></div>
      </div>
    </header>
  );
};

export default Header;

/* <button onClick={props.switchTheme}>{props.darkTheme ? "Light Theme" : "Dark Theme"}</button>*/
