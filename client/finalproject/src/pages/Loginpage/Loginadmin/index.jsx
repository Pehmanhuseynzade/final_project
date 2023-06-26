import React from 'react'
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
// import Swal from 'sweetalert2';
import { signIN } from "../../../api/httpsrequests";
import { useUserContext } from "../../../context/Usercontext";

const Loginadmin = () => {
  const [admin, setAdmin] = useUserContext();
  const navigate = useNavigate()
  const handleSubmit = async (values, actions) => {
    const response = await signIN(values);
    // console.log(response);
    // if(response.user.isAdmin === true){
    // navigate('/admin')
    // }
    if (response.auth) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('admin', JSON.stringify(response));
      setAdmin(response);

      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'User signed in successfully!',
      //   showConfirmButton: false,
      //   timer: 1200
      // });

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
      <div style={{ height: '70vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} name="username"  type="text" label="username" variant="outlined" />
          </div>
          <div>
            <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name="password"  type="password" label="password" variant="outlined" />
          </div>
          <Button style={{ display: 'block', margin: '30px auto' }} type="submit" variant="contained" color="warning">Login</Button>
        </form>
      </div>
    </>
  )
}

export default Loginadmin