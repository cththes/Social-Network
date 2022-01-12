import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount && i <= 256; i++) {
    pages.push(i);
  }

  const setActive = ({ isActive }) =>
    isActive ? styles.activeLink : styles.Link;
  return (
    <div>
      <div className={styles.usersNav}>
        {pages.map((page) => {
          return (
            <NavLink to={"/users/" + page} className={setActive}>
              <span
                className={props.currentPage === page && styles.selectedPage}
                onClick={() => {
                  props.onPageChange(page);
                }}
              >
                {page}{" "}
              </span>
            </NavLink>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div className={styles.user}>
            <div>
              <span>
                <div>{user.name}</div>
                <div className={styles.status}>{user.status}</div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt=""
                    className={styles.userPhoto}
                  />
                </NavLink>
              </span>
            </div>
            <span>
              {user.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "224a41d9-a6ce-4be0-8a9b-f5a325737a34",
                          },
                        }
                      )
                      .then((response) => {
                        debugger
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "224a41d9-a6ce-4be0-8a9b-f5a325737a34",
                          },
                        }
                      )
                      .then((response) => {
                        debugger
                        if (response.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
