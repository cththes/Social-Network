import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../../Common/FormControls/FormControls";

const AddNewPostForm = ({ error, addPost }) => {
  const formik = useFormik({
    initialValues: {
      post: "",
    },
    validationSchema: Yup.object({
      post: Yup.string().max(100, "Must be 100 or less").min(3, "Must be 3 or more").required("Required"),
    }),
    onSubmit: (values) => {
      addPost(values.post);
      values.post = "";
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form_post}>
      {Input("post", "text", "Введите сообщение:", formik.values.post, formik.handleChange)}
      {formik.errors.post ? (
        <p className={styles.formSummaryError}>{formik.touched.post && formik.errors.post}</p>
      ) : null}
      <div>
        <button type="submit">Add Post</button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
};

const MyPosts = React.memo((props) => {
  let state = props.state;

  let postsElements = [...state.posts]
    .reverse()
    .map((p) => <Post id={p.id} message={p.message} profile={props.profile} />);
  return (
    <div>
      My Posts:
      <AddNewPostForm {...props} />
      <div></div>
      <div>{postsElements}</div>
      {/*<div>{props.profile.userId && postsElements[0]}</div>
      <div>{postsElements.slice(1)}</div>*/}
    </div>
  );
});

export default MyPosts;
