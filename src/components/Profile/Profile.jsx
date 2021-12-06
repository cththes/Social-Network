import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
