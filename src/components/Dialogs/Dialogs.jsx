import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import UserContainer from "./User/UserContainer";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);
  if (!props.isAuth) {
    return <Navigate to="/login"/>
  }
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <UserContainer/>
      <div className="messages">{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
