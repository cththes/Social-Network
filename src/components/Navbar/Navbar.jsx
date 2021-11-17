import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? styles.activeLink : styles.Link;

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="./profile" className={setActive}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="./dialogs" className={setActive}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="./news" className={setActive}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="./music" className={setActive}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="./settings" className={setActive}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
