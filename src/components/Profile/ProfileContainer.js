import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  requestStatus,
  updateStatus,
  savePhoto,
} from "../../redux/profile-reducer";
import { useParams, useNavigate } from "react-router-dom";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";
import {
  getAuthorizedUserId,
  getIsAuth,
  getProfile,
  getStatus,
} from "../../redux/profile-selector";

export function withRouter(Component) {
  function ComponentWithRouter(props) {
    return (
      <Component {...props} params={useParams()} navigate={useNavigate()} />
    );
  }
  return ComponentWithRouter;
}
const refreshProfile = async (props) =>  {
  let userId = props.params.userId;
  if (!userId) {
    userId = props.authorizedUserId;
    if (!userId) {
      props.navigate("/login");
    }
  }
  props.getUserProfile(userId);
  props.requestStatus(userId);
}

let ProfileContainer = (props) => {
  useEffect(() => {
    refreshProfile(props);
  });
  debugger
  return (
    <div>
      <Profile
        isOwner={!props.params.userId}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    requestStatus,
    updateStatus,
    savePhoto,
  }),
  withRouter,
  withAuthNavigate
)(ProfileContainer);