import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout, loginTest } from "../../redux/auth-reducer";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../utils/validators";
import styles from "./Login.module.css";

const LoginForm = ({ error, login }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(25, "Must be 25 or less")
        .min(3, "Must be 3 or more")
        .required("Required")
        .email("Invalid email adress"),
      password: Yup.string()
        .max(25, "Must be 25 or less")
        .min(3, "Must be 3 or more")
        .required("Required"),
      rememberMe: Yup.bool().oneOf([true], "Field must be checked"),
    }),
    onSubmit: (values) => {
      login(values.email, values.password, values.rememberMe);
    },
  });

  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="email"
          name="email"
          type="text"
          placeholder={"Email"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <p className={styles.formSummaryError}>
            {formik.touched.email && formik.errors.email}
          </p>
        ) : null}
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder={"Password"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className={styles.formSummaryError}>{formik.errors.password}</p>
        ) : null}
      </div>{" "}
      <div>
        <input
          id="checkbox"
          name="rememberMe"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.rememberMe}
        />
        <label htmlFor="checkbox">Remember Me</label>
        {formik.errors.rememberMe ? (
          <p className={styles.formSummaryError}>{formik.errors.rememberMe}</p>
        ) : null}
      </div>
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
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
        <LoginForm {...props} />
      </div>
    );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
