import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import User from "./User/User";
import DialogItem from "./DialogItem/DialogItem";

let dialogsData = [
  { name: "cth", id: "1" },
  { name: "FV", id: "2" },
  { name: "Valentin Oblomov", id: "3" },
];

let messagesData = [{ message: "hello" }];

let dialogsElement = dialogsData.map((dialog) => (
  <DialogItem name={dialog.name} id={dialog.id} />
));

let messagesElement = messagesData.map((message) => (
  <Message message={message.message} />
));

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <User />
      <div className="messages">{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
