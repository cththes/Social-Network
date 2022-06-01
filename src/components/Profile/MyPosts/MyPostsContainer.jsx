import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let MyPostsContainer = (props) => {
  return (
    <div>
      <MyPosts {...props} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    state: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPost(newPostText));
    },
  };
};

MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
