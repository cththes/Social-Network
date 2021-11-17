import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import User from "./User/User";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? styles.activeLink : styles.Link;

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div>
          <NavLink to="/dialogs/1" className={setActive}>
            cth
          </NavLink>
        </div>

        <div>
          <NavLink to="/dialogs/2" className={setActive}>
            fv
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs/3" className={setActive}>
            Valentin Oblomov
          </NavLink>
        </div>
      </div>
      <User />
      <div className="messages">
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Dialogs;
