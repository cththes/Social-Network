import React from "react";
import styles from "./User.module.css";
import { Field, Form, Formik } from "formik";
import { Textarea } from "../../Common/FormsControls/FormsControls";

/*import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "./../../../utils/validators/index";*/

const AddMessageForm = (props) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      /*validate={[required, maxLengthCreator(10), minLengthCreator(1)]}*/
    >
      {({ isSubmitting }) => (
        <Form onSubmit={props.handleSubmit} className={styles.message_area}>
          <Field
            name="newMessageText"
            component={Textarea}
            placeholder={"Введите сообщение: "}
            /*validate={[required, maxLengthCreator(10), minLengthCreator(1)]}*/
          />

          <div>
            <button onClick={props.onSendMessage}>Отправить</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const User = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/94492515?v=4"
        alt=""
      />
      <AddMessageForm onSubmit={addNewMessage} />
      <div className={styles.message_area}></div>
    </div>
  );
};

export default User;
