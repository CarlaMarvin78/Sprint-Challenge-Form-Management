import React from 'react';
import '../App.css';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import RegistrationForm from './RegistrationForm';

const FormikRegistrationForm = withFormik({

  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
//======VALIDATION SCHEMA==========
validationSchema: Yup.object().shape({
  username: Yup.string()
    .min(4)
    .required(),
  password: Yup.string()
    .min(8)
    .required()
}),
//======END VALIDATION SCHEMA==========

  handleSubmit(values) {
  console.log(values);
  //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(RegistrationForm);




export default FormikRegistrationForm
