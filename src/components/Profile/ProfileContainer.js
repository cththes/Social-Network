import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  requestStatus,
  updateStatus,
} from "./../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthNavigate } from "./../../hoc/withAuthNavigate";
import { compose } from "redux";
import {
  getAuthorizedUserId,
  getIsAuth,
  getProfile,
  getUpdateStatus,
  getStatus,
} from "../../redux/profile-selector";

export const withRouter = (WrappedComponent) => (props) => {
  let params = useParams();
  return <WrappedComponent {...props} params={params} />;
};
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    status: getStatus(state),
    updateStatus: getUpdateStatus(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, requestStatus, updateStatus }),
  withRouter,
  withAuthNavigate
)(ProfileContainer);
