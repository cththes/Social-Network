import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div>
      <span>
        <div>{user.name}</div>
        <div className={styles.status}>{user.status}</div>
        <NavLink to={"/profile/" + user.id}>
          <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={styles.userPhoto} />
        </NavLink>
      </span>
      <span>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </span>
    </div>
  );
};

export default User;
