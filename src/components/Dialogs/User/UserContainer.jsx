import {
  sendMessage,
  updateNewMessageText,
} from "../../../redux/dialogs-reducer";
import User from "./User";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const UserContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageText,
})(User);

export default UserContainer;
