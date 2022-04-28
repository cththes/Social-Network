import {
  sendMessage,
} from "../../../redux/dialogs-reducer";
import User from "./User";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    sendMessage: (newMessageText) => {
      dispatch(sendMessage(newMessageText));
    },
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
