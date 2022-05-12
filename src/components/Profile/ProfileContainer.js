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
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    setTimeout(() => {
      this.props.getStatus(userId);
    }, 1000);
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
    profile: getProfile(),
    status: getStatus(),
    updateStatus: getUpdateStatus(),
    authorizedUserId: getAuthorizedUserId(),
    isAuth: getIsAuth(),
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, requestStatus, updateStatus }),
  withRouter,
  withAuthNavigate
)(ProfileContainer);
