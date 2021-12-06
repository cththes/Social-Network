import React from "react";
import styles from "./User.module.css";

const User = (props) => {

  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  let onSendMessage = () => {
    props.sendMessage();
  };
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/94492515?v=4"
      />
      <div className={styles.message_area}>
        <textarea
          ref={newMessageElement}
          placeholder="Введите сообщение: "
          value={props.newMessageText}
          onChange={onMessageChange}
        ></textarea>
        <div>
          <button onClick={onSendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default User;
