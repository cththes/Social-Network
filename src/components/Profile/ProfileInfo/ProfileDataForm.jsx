import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../../Common/FormControls/FormControls";

const ProfileDataForm = ({ saveProfileSubmit, contacts, error }) => {
  const formik = useFormik({
    initialValues: {
      AboutMe: "--",
      LookingForAJobDescription: "-",
      FullName: "cth",
      contacts: {
        facebook: contacts.facebook,
        vk: contacts.vk,
        twitter: contacts.twitter,
        instagram: contacts.instagram,
      },
    },
    validationSchema: Yup.object({
      facebook: Yup.string().max(25, "Must be 25 or less").min(3, "Must be 3 or more"),
    }),
    onSubmit: (values) => {
      saveProfileSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <button type="submit">save</button>
        </div>
      </div>
      {/*name, type, placeholder, value, onChange, onBlur*/}
      {/*Input("FullName", "text", "FullName", formik.values.FullName, formik.handleChange)*/}
      {Input("contacts.facebook", "text", "FaceBook", formik.values.contacts.facebook, formik.handleChange)}
      {Input("contacts.vk", "text", "VK", formik.values.contacts.vk, formik.handleChange)}
      {Input("contacts.twitter", "text", "Twitter", formik.values.contacts.twitter, formik.handleChange)}
      {Input("contacts.instagram", "text", "Instagram", formik.values.contacts.instagram, formik.handleChange)}
    </form>
  );
};

export default ProfileDataForm;
