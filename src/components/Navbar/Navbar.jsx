import React from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.textBlock}>
        <div>
          <NavLink to="/profile" className={styles.Link}>
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className={styles.Link}>
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink to="/news" className={styles.Link}>
            News
          </NavLink>
        </div>
        <div>
          <NavLink to="/music" className={styles.Link}>
            Music
          </NavLink>
        </div>
        <div>
          <NavLink to="/settings" className={styles.Link}>
            Settings
          </NavLink>
        </div>
        <div>
          <NavLink to="/users" className={styles.Link}>
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
