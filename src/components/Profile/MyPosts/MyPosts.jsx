import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post id={posts.id} message={posts.message} />
  ));
  return (
    <div>
      My Posts:
      <div className={styles.post_area}>
        <textarea placeholder="Введите текст"></textarea>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
