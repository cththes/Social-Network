import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <MyPosts state={props.state}/>
    </div>
  );
};

export default Profile;
