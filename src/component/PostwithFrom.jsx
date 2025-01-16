import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/";

export function PostwithFrom() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data! ", error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.firstName) {
        errors.firstName = "Please Enter the first name";
      }
      if (!values.lastName) {
        errors.lastName = "Please Enter the last name";
      }
      return errors;
    },
    onSubmit: (values) => {
      axios.post(baseURL, {
        firstName: values.firstName,
        lastName: values.lastName,
      }).then((response) => {
        setPost(response.data);
        alert("Employee Added Successfully!!");
      }).catch(error => {
        console.error("There was an error posting the data! ", error);
      });
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name </label>
      <input
        type="text"
        id="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <br />
      <div>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <br />
      <div>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
      <br /><br />

      {post && (
        <h3>Added Employee {post.firstName} {post.lastName}</h3>
      )}
    </form>
  );
}
