import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts:
      <div>
        <textarea></textarea>
        <div><button>Add Post</button></div>
      </div>
      <div>
        <Post message="hello"/>
        <Post message="it's my 2nd post"/>
      </div>
    </div>
  );
};

export default MyPosts;
