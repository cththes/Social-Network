import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Navigate} from 'react-router-dom'

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  if (!props.isAuth) {
    return <Navigate to="/login"/>
  }
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
