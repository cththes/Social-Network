import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import User from "./User/User";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="cth" id="1" />
        <DialogItem name="FV" id="32" />
        <DialogItem name="Valentin Oblomov" id="3" />
      </div>
      <User />
      <div className="messages">
        <Message message="hello" />
      </div>
    </div>
  );
};

export default Dialogs;
