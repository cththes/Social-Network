import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  let state = props.state;

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
        src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/85/858258a36b14983df2fcab7dd840dcc2bb13aa2e_full.jpg"
      />
      <div className={styles.message_area}>
        <textarea
          ref={newMessageElement}
          placeholder="Введите сообщение: "
          value={state.newMessageText}
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
