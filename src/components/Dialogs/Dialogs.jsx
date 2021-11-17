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

let messagesData = [{message:"hello"}]

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>
      <User />
      <div className="messages">
        <Message message={messagesData[0].message} />
      </div>
    </div>
  );
};

export default Dialogs;
