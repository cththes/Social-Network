import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import styles from "./Login.module.css";
import { Input } from "../Common/FormControls/FormControls";

const LoginForm = ({ login, captchaUrl }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: "",
      captcha: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(35, "Must be 35 or less")
        .min(3, "Must be 3 or more")
        .required("Required")
        .email("Invalid email adress"),
      password: Yup.string().max(25, "Must be 25 or less").min(3, "Must be 3 or more").required("Required"),
      rememberMe: Yup.bool().oneOf([true], "Field must be checked"),
    }),
    onSubmit: (values) => {
      login(values.email, values.password, values.rememberMe, values.captcha);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {Input("email", "text", "Email", formik.values.email, formik.handleChange, formik.handleBlur)}
      {formik.errors.email ? (
        <p className={styles.formSummaryError}>{formik.touched.email && formik.errors.email}</p>
      ) : null}
      {Input("password", "password", "Password", formik.values.password, formik.handleChange, formik.handleBlur)}
      {formik.touched.password && formik.errors.password ? (
        <p className={styles.formSummaryError}>{formik.errors.password}</p>
      ) : null}
      {Input("rememberMe", "checkbox", [], formik.values.rememberMe, formik.handleChange)}
      <label htmlFor="checkbox">Remember Me</label>
      {formik.errors.rememberMe ? <p className={styles.formSummaryError}>{formik.errors.rememberMe}</p> : null}

      {captchaUrl && <img src={captchaUrl} alt="" />}
      {captchaUrl && Input("captcha", "text", "captcha", formik.values.captcha, formik.handleChange)}

      <button type="submit">Login</button>
    </form>
  );
};

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  } else
    return (
      <div>
        <h2>LOGIN</h2>
        <div>Email: boxcth@mail.ru</div>
        <div>Password: test</div>
        <LoginForm {...props} captchaUrl={props.captchaUrl} />
      </div>
    );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
