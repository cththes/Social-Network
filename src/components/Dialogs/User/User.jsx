import React from "react";
import styles from "./User.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../../Common/FormControls/FormControls";

const AddMessageForm = ({ error, sendMessage }) => {
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().max(100, "Must be 100 or less").min(3, "Must be 3 or more"),
    }),
    onSubmit: (values) => {
      sendMessage(values.message);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form_message}>
      {Input("message", "text", "Введите сообщение:", formik.values.message, formik.handleChange)}
      <div>
        <button type="submit">Send</button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
};

const User = (props) => {
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/94492515?v=4" alt="" />
      <AddMessageForm {...props} />
      <div></div>
    </div>
  );
};

export default User;
