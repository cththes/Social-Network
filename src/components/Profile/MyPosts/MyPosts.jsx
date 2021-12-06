import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let state = props.state

  let newMessageElement = React.createRef();

  let postsElements = state.posts.map((p) => (
    <Post id={p.id} message={p.message} />
  ));

  let onPostChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewPostText(text)
  };

  let onAddPost = () => {
    props.addPost()
  };
  return (
    <div>
      My Posts:
      <div className={styles.post_area}>
        <textarea
          ref={newMessageElement}
          placeholder="Введите текст"
          value={state.newPostText}
          onChange={onPostChange}
        ></textarea>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
