import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.content}>
      <MyPosts />
    </div>
  );
};

export default Profile;
