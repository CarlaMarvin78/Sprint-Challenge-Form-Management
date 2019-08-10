import React from 'react';
import './App.css';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

function RegistrationForm({errors, touched}) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="Username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>

      <button>Submit!</button>
    </Form>
  );
}
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
