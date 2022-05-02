import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "./../../utils/validators/index";
import { connect } from "react-redux";
import { login, logout } from "./../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from "./../Common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name="email"
          validate={required}
          placeholder="email"
        />
      </div>
      <div>
        <Field
          component={Input}
          name="password"
          validate={required}
          placeholder="password"
          type="password"
        />
      </div>
      <div>
        <Field
          component={Input}
          name="rememberMe"
          type="checkbox"
          validate={required}
        />
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

let LoginFormRedux = reduxForm({ form: "LoginForm" })(LoginForm);

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
        <LoginFormRedux onSubmit={onSubmit} />
      </div>
    );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
