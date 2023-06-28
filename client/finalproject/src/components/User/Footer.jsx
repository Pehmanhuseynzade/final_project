import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function Footer() {
  const formik = useFormik({
    initialValues: {
      sendemail: ''
    },
    validationSchema: Yup.object({
      sendemail: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      axios.post('http://localhost:7576/api/sendemail', values)
        .then(response => {
          console.log('Post request successful');
          console.log(response.data);
          formik.resetForm();
        })
        .catch(error => {
          console.error('Post request error:', error);
        });
    },
  });
  return (
    <>
      <footer>
        <div className='foot-div-1'>
          <p>Sosial şəbəkələrimiz</p>
          <div className='foot-icons'>
            <Link to='https://www.facebook.com/marxalresort/' className='circle'><i className="fa-brands fa-facebook"></i></Link>
            <Link to='https://www.instagram.com/marxalresortspa/' className='circle'><i className="fa-brands fa-instagram"></i></Link>
            <Link to='https://www.linkedin.com/company/marxal-resort-and-spa-hotel/?originalSubdomain=ru' className='circle'><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link to='https://www.youtube.com/channel/UC453HCc6k0_zzwhu2zd-cOg' className='circle'><i className="fa-brands fa-youtube"></i></Link>
          </div>
          <p style={{ marginTop: "30px" }}>Marxal Resort & Spa, Azərbaycan, Şəki</p>
          <Link>
            <p>Tel: +994 (12) 585 35 85</p>
          </Link>
          <Link>
            <p>Mob: +994 (55) 500 35 85</p>
          </Link>
          <Link>
            <p>E-poçt: reservation@marxalresort.az</p>
          </Link>
        </div>
        <div className='foot-div-2'>
          <div className='nav-foot'>
            <Link to='about'>
              <p>Haqqımızda</p>
            </Link>
            <Link to='rooms'>
              <p>Otaqlar</p>
            </Link>
            <Link to='restaurant'>
              <p>Restoranlar</p>
            </Link>
            <Link to='entertainment'>
              <p>Əyləncə</p>
            </Link>
            <Link to='spa'>
              <p>Sağlamlıq və Spa</p>
            </Link>
          </div>
          <p className='p-sentence'> <i> Yeni kampaniyalar və endirimlərdən xəbərdar olmaq üçün abunə olun...</i></p>
          <form onSubmit={formik.handleSubmit}>
            <input
              id="sendemail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sendemail}
              name="sendemail"
              className="email"
              placeholder=' E-poçt ünvanınızı daxil edin'  />
            <button type='submit'>Göndər</button>
          </form>
          <p className='p-sentence'>
            © 2023 Bütün hüquqlar qorunur.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer