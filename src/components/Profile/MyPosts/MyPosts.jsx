import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  minLengthCreator,
  required,
} from "./../../../utils/validators/index";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.post_area}>
      <Field
        placeholder={"Введите сообщение: "}
        name="newPostText"
        component={Textarea}
        validate={[required, maxLengthCreator(10), minLengthCreator(1)]}
      />
      <div>
        <button onClick={props.onAddPost}>Add Post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = React.memo((props) => {
  let state = props.state;

  let postsElements = [...state.posts]
    .reverse()
    .map((p) => <Post id={p.id} message={p.message} />);
  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      My Posts:
      <AddNewPostFormRedux onSubmit={addNewPost} />
      <div className={styles.post_area}></div>
      <div>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
