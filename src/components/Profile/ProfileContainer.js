import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "./../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthNavigate } from "./../hoc/withAuthNavigate";

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
    this.props.getUserProfile(userId);
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

let AuthNavigateContainer = withAuthNavigate(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthNavigateContainer);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
