import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostAC, updateNewPostTextAC } from "../../../redux/store";
const MyPosts = (props) => {
  let newMessageElement = React.createRef();

  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} />
  ));

  let onPostChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewPostTextAC(text));
  };

  let addPost = () => {
    props.dispatch(addPostAC());
  };
  return (
    <div>
      My Posts:
      <div className={styles.post_area}>
        <textarea
          ref={newMessageElement}
          placeholder="Введите текст"
          value={props.newPostText}
          onChange={onPostChange}
        ></textarea>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
