import React from "react";
import styles from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.jpg";
import { Link } from "react-router-dom";
const Post = ({ profile, message }) => {
  if (!profile) {
    return null;
  }
  return (
    <div className={styles.item}>
      <Link to="/profile">
        <img src={profile.photos.large || userPhoto} alt="" className={styles.avatar} />
      </Link>
      <span className={styles.post}>{message}</span>
    </div>
  );
};

export default Post;
