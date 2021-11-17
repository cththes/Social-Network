import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  { id: "1", message: "hello" },
  { id: "2", message: "it's my 2nd post" },
];

let postsElements = postsData.map((posts) => (
  <Post id={posts.id} message={posts.message} />
));

const MyPosts = () => {
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
