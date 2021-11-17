import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  { id: '1', message: "hello" },
  { id: '2', message: "it's my 2nd post" },
];

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
      <div>
        <Post id={postsData[0].id} message={postsData[0].message} />
        <Post id={postsData[1].id} message={postsData[1].message} />
      </div>
    </div>
  );
};

export default MyPosts;
