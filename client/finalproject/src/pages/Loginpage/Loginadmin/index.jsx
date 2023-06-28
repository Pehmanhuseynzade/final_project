import React from 'react'
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
// import Swal from 'sweetalert2';
import { signIN } from "../../../api/httpsrequests";
import { useUserContext } from "../../../context/Usercontext";
import "./loginadmin.scss"
const Loginadmin = () => {
  const [admin, setAdmin] = useUserContext();
  const navigate = useNavigate()
  const handleSubmit = async (values, actions) => {
    const response = await signIN(values);

    if (response.auth) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('admin', JSON.stringify(response));
      setAdmin(response);

      if (response.user.isAdmin === true) {
        navigate('/admin')
      }
    }

    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: handleSubmit
  })
  return (
    <>
      <div className="form-login-div" style={{ height: '70vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form className="form-login"  onSubmit={formik.handleSubmit}>
        <p>Admin Login</p>
          <div>
            <input placeholder='Admin' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} name="username"  type="text" label="username" variant="outlined" />
          </div>
          <div>
            <input placeholder='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name="password"  type="password" label="password" variant="outlined" />
          </div>
          <Button style={{ display: 'block', margin: '30px auto' }} type="submit" variant="contained" color="primary">Login</Button>
        </form>
      </div>
    </>
  )
}

export default Loginadmin