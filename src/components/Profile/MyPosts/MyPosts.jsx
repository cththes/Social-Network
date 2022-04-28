import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {" "}
      <Field
        component={"textarea"}
        name={"newPostText"}
        placeholder={"Введите текст"}
      />
      <div>
        <button onClick={props.onAddPost}>Add Post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({
  form: "post",
})(AddNewPostForm);

const MyPosts = (props) => {
  let state = props.state;

  let postsElements = state.posts.map((p) => (
    <Post id={p.id} message={p.message} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      My Posts:
      <AddNewPostReduxForm onSubmit={addNewPost} />
      <div className={styles.post_area}></div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
