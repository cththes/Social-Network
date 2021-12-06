import React from "react";
import {
  sendMessageAC,
  updateNewMessageTextAC,
} from "../../../redux/dialogs-reducer";
import User from "./User";
import StoreContext from "../../../StoreContext";

const UserContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let sendMessage = () => {
          store.dispatch(sendMessageAC());
        };

        let messageChange = (text) => {
          store.dispatch(updateNewMessageTextAC(text));
        };

        return (
          <User
            newMessageText={state.newMessageText}
            updateNewMessageText={messageChange}
            sendMessage={sendMessage}
          />
        );
      }}
    </StoreContext.Consumer>

    
  );
};

export default UserContainer;
