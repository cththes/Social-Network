import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/94492515?v=4"
       alt=''/>
      <span className={styles.post}>{props.message}</span>
    </div>
  );
};

export default Post;
