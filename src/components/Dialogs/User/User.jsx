import React from "react";
import styles from "./User.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../../Common/FormControls/FormControls";
import { Link } from "react-router-dom";
import userPhoto from "../../../assets/images/user.jpg";

const AddMessageForm = ({ sendMessage }) => {
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().max(100, "Must be 100 or less").min(3, "Must be 3 or more").required("Required"),
    }),
    onSubmit: (values) => {
      sendMessage(values.message);
      values.message = "";
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form_message}>
      {Input("message", "text", "Введите сообщение:", formik.values.message, formik.handleChange)}
      {formik.errors.message ? (
        <p className={styles.formSummaryError}>{formik.touched.message && formik.errors.message}</p>
      ) : null}
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

const User = (props) => {
  return (
    <div className={styles.item}>
      <Link to="/profile">
        <img src={props.profile.photos.large || userPhoto} alt="" className={styles.avatar} />
      </Link>
      <AddMessageForm {...props} />
    </div>
  );
};

export default User;
