import { sendMessage } from "../../../redux/dialogs-reducer";
import User from "./User";
import { connect } from "react-redux";
import React from "react";
import { compose } from "redux";
import { withRouter } from "../../../hoc/withRouter";
import { getAuthorizedUserId, getIsAuth } from "../../../redux/profile-selector";
import { getUserProfile } from "../../../redux/profile-reducer";
import Preloader from "../../Common/Preloader/Preloader";

class UserContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
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
    if (!this.props.profile) {
      return <Preloader />;
    }
    return (
      <div>
        <User sendMessage={this.props.sendMessage} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    authorizedUserId: getAuthorizedUserId(state), //?
    isAuth: getIsAuth(state), //?
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(sendMessage(newMessageText));
    },
    getUserProfile: (userId) => {
      dispatch(getUserProfile(userId));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(UserContainer);
