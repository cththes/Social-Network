import React from "react";
import styles from "./Dialogs.module.scss";
import Message from "./Message/Message";
import UserContainer from "./User/UserContainer";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);
  return (
    <div className={styles.dialogs}>
      <div className={props.isDark ? styles.dialogsItems_dark : styles.dialogsItems_light}>{dialogsElements}</div>
      <div className={styles.dialog}>
        <UserContainer profile={props.profile} />
        <div className="messages">{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
