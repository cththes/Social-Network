import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage;

        let addPost = () => {
          store.dispatch(addPostAC());
        };

        let postChange = (text) => {
          store.dispatch(updateNewPostTextAC(text));
        };

        return (
          <MyPosts
            state={state}
            addPost={addPost}
            updateNewPostText={postChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
