import React from "react";
import { Form, Formik } from "formik";
//import { reduxForm } from "redux-form";
import { Input, сreateField } from "../Common/FormsControls/FormsControls";
import { required } from "./../../utils/validators/index";
import { connect } from "react-redux";
import { login, logout } from "./../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from "./../Common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <Formik initialValues={{ email: "", password: "" }}>
      {({ isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          {сreateField("Email", "email", [required], Input)}
          {сreateField("Password", "password", [required], Input, {
            type: "password",
          })}
          {сreateField(
            null,
            "rememberMe",
            [required],
            Input,
            { type: "checkbox" },
            "rememeber me"
          )}
          {error && <div className={styles.formSummaryError}>{error}</div>}
          <div>
            <button>Login</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  } else
    return (
      <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={onSubmit} />
      </div>
    );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
