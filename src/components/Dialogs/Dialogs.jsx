import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import User from "./User/User";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <User
        sendMessage={props.sendMessage}
        updateNewMessageText={props.updateNewMessageText}
        newMessageText={props.newMessageText}
      />
      <div className="messages">{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
