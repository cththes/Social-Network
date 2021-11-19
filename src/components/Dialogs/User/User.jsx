import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT',newText:text})
  };

  let sendMessage = () => {
    props.dispatch({type:'SEND-MESSAGE'})
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
          value={props.newMessageText}
          onChange={onMessageChange}
        ></textarea>
        <div>
          <button onClick={sendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default User;
