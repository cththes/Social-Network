import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from "./../../api/api";

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
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.toggleInProgress(true, user.id);
                    usersAPI.unfollow(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                      props.toggleInProgress(false, user.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.toggleInProgress(true, user.id);
                    usersAPI.follow(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(user.id);
                      }
                      props.toggleInProgress(false, user.id);
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
