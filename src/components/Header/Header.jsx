import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <div className={styles.headerLeft}>
        <img src="https://freepngimg.com/download/planescape_torment/28170-4-planescape-torment-logo-free-download.png" />
      </div>
      <div className={styles.headerMiddle}>
        {" "}
        <div className={styles.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </div>
      <div className={styles.headerRight}></div>
    </header>
  );
};

export default Header;
