import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "./../../utils/validators/index";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name="login" validate={required} />
      </div>
      <div>
        <Field component={Input} name="password" validate={required} />
      </div>
      <div>
        <Field
          component={Input}
          name="rememberMe"
          type="checkbox"
          validate={required}
        />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

let LoginFormRedux = reduxForm({ form: "LoginForm" })(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginFormRedux onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
