import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg";

const Users = (props) => {

  let getUsers = () => {
    axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      if (props.users.length === 0) {
        props.setUsers(response.data.items);
      }
    });
  }

  return (

    <div>
          <button onClick = {getUsers}>GET USERS</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={styles.user}>
            <div>
              <span>
                <div>{u.name}</div>
                <div className={styles.status}>{u.status}</div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={styles.userPhoto}
                />
              </span>
            </div>
            <span>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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
