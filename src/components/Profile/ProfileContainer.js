import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, requestStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";
import { getAuthorizedUserId, getIsAuth, getStatus } from "../../redux/profile-selector";
import { withRouter } from "../../hoc/withRouter";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.navigate("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.requestStatus(userId);
    console.log(getUserProfile(userId));
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile
          isOwner={!this.props.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    status: getStatus(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, requestStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthNavigate
)(ProfileContainer);
