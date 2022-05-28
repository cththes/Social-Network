import React from "react";
import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? styles.activeLink : styles.Link);

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path} className={setActive}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
