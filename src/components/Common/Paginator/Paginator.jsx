import React from "react";
import styles from "./Paginator.module.css";
import { NavLink } from "react-router-dom";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount && i <= 256; i++) {
    pages.push(i);
  }

  const setActive = ({ isActive }) =>
    isActive ? styles.activeLink : styles.Link;
    debugger
  return (
    <div className={styles.usersNav}>
      {pages.map((page) => {
        return (
          <NavLink to={"/users/" + page} className={setActive}>
            <span
              className={currentPage === page && styles.selectedPage}
              onClick={() => {
                onPageChanged(page);
              }}
            >
              {page}{" "}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Paginator;
