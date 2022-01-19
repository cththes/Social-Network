import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, getProfile } from "./../../redux/profile-reducer";
import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  let params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getProfile })(
  WithUrlDataContainerComponent
);
