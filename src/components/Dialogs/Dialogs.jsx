import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import User from "./User/User";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog}>cth</div>
        <div className={styles.dialog}>fv</div>
        <div className={styles.dialog}>Valentin Oblomov</div>
      </div>
      <User />
      <div className="messages">
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Dialogs;
