/*import React from "react";
import styles from "./FormsControls.module.css";
import { Field, Formik } from "formik";

const FormControl = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const сreateField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    {" "}
    <Formik>
      <Field
        component={component}
        name={name}
        validate={validators}
        placeholder={placeholder}
        {...props}
      />
    </Formik>
    {text}
  </div>
);*/
