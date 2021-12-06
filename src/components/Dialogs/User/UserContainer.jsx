import {
  sendMessageAC,
  updateNewMessageTextAC,
} from "../../../redux/dialogs-reducer";
import User from "./User";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC());
    },

    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextAC(text));
    },
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
