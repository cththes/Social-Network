import React from "react";
import {
  sendMessageAC,
  updateNewMessageTextAC,
} from "../../../redux/dialogs-reducer";
import User from "./User";

const UserContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let messageChange = (text) => {
    props.store.dispatch(updateNewMessageTextAC(text));
  };

  let sendMessage = () => {
    props.store.dispatch(sendMessageAC());
  };
  return (
    <User
      state={state}
      updateNewMessageText={messageChange}
      sendMessage={sendMessage}
    />
  );
};

export default UserContainer;
