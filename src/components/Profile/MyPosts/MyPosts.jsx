import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} />
  ));

  let newMessageElement = React.createRef();

  let addPost = () => {
    let text = newMessageElement.current.value;
    props.addPost(text)
    newMessageElement.current.value = ''
  };
  return (
    <div>
      My Posts:
      <div className={styles.post_area}>
        <textarea
          ref={newMessageElement}
          placeholder="Введите текст"
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
