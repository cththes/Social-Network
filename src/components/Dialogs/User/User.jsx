import React from "react";
import styles from "./User.module.css";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name={"newMessageText"}
        placeholder={"Введите сообщение: "}
      />
      <div>
        <button onClick={props.onSendMessage}>Отправить</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

const User = (props) => {
  let newMessageElement = React.createRef();

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/94492515?v=4"
      />
      <AddMessageReduxForm onSubmit={addNewMessage} />
      <div className={styles.message_area}></div>
    </div>
  );
};

export default User;
