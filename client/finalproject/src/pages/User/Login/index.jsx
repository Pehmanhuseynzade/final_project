import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { signIN } from "../../../api/httpsrequests";
import { useMarxalContext } from "../../../context/usercontextsite";
import "./login.scss"
const Login = () => {
  const [user, setUser] = useMarxalContext();
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    const response = await signIN(values);
    console.log(response);
    if (response.auth) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      setUser(response.user);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'user signed in successfully!',
        showConfirmButton: false,
        timer: 1200
      })
      navigate('/spa');
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
        <body className="body">
      <div className="form-login-div" style={{ height: '70vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form className="form-login" onSubmit={formik.handleSubmit}>
          <p>Login Page</p>
          <div>
            <input placeholder="Username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} name="username" id="outlined-basic" type="text" label="username" variant="outlined" />
          </div>
          <div>
            <input placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name="password" id="outlined-basic" type="password" label="password" variant="outlined" />
          </div>
          <Button style={{ display: 'block', margin: '30px auto' }} type="submit" variant="contained" color="primary">Login</Button>
        </form>
      </div>
    </body>
    </>
  )
}

export default Login