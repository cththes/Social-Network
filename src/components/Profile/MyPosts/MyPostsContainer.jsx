import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    state: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextAC(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
