import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostAC());
  };

  let postChange = (text) => {
    props.store.dispatch(updateNewPostTextAC(text));
  };

  return (
    <MyPosts state={state} addPost={addPost} updateNewPostText={postChange} />
  );
};

export default MyPostsContainer;
