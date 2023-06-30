import React from 'react'
import "./register.scss"
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { signUP } from "../../../api/httpsrequests";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    const user = {
      username: values.username,
      password: values.password,
      email: values.email
    }
    const response = await signUP(user);
    console.log(response.data);
    if (response.data.auth) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'user signed up successfully!',
        showConfirmButton: false,
        timer: 1200
      })
      navigate('/login');
    }

    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: ''
    },
    onSubmit: handleSubmit
  })
  return (
    <>
    <body className='body-register'>
    <div className='div'>
      <div className='form-register-div' >
        <form className='form-register' onSubmit={formik.handleSubmit}>
        <p>Register Page</p>
         <div><input placeholder='Username' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} name="username"  type="text" label="username" variant="outlined" /></div>
          <div><input placeholder='Email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name="email"  type="email" label="email" variant="outlined" /></div>
          <div><input placeholder='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name="password"  type="password" label="password" variant="outlined" /></div>
          <div><input placeholder='Comfirm Password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} name="confirmPassword"  type="password" label="confirm password" variant="outlined" /></div>
          <Button style={{ display: 'block', margin: '30px auto' }} type="submit" variant="contained" color="primary">Register</Button>
          <Link style={{ display: 'block', textAlign: 'center' }} to='/login'>already have an account?</Link>
        </form>
      </div>
      </div>
    </body>
    </>
  );
};

export default Register;