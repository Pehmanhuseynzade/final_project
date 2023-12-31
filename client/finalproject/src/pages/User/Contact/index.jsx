import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./contact.scss";
import { Helmet } from "react-helmet";

function Contact() {

  const formik = useFormik({
    initialValues: {
      formusername: '',
      surname: '',
      formemail: '',
      phonenum: '',
      messages: ''
    },
    validationSchema: Yup.object({
      formusername: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      surname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      formemail: Yup.string().email('Invalid email address').required('Required'),
      phonenum: Yup.number().required('Phone number is required'),
      messages: Yup.string().required('Required')
    }),
    onSubmit: values => {
      axios.post('http://localhost:7576/api/contactus', values)
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
      <Helmet>
        <title>Contact</title>
        <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div className="main-sec-contact">
        <img
          className="contact-main-image"
          src=""
          alt="restaurant"
        />
        <form onSubmit={formik.handleSubmit}>
          <div className="name-sur">
            <label htmlFor="formusername">Adınız:</label>
            <input
              id="formusername"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.formusername}
              placeholder="First Name "
              name="formusername"
              className="name"
            />

            <label htmlFor="surname">Soyad:</label>
            <input
              id="surname"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
              placeholder="Last Name"
              name="surname"
              className="sur"
            />
          </div>

          <div className="mail-num">
            <label htmlFor="formemail">E-mail:</label>
            <input
              id="formemail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.formemail}
              placeholder="Email"
              name="formemail"
              className="email"
            />

            <label htmlFor="phonenum">Mobil:</label>
            <input
              id="phonenum"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phonenum}
              placeholder="Phone Number"
              name="phonenum"
              className="phone"
            />
          </div>

          <div className="text-mes">
            <label htmlFor="messages">Mesaj:</label>
            <textarea
              id="messages"
              name="messages"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.messages}
              placeholder="Message"
              className="message"
            />
          </div>
          <div className='submit-body'>
            <button type="submit" className="form-btn">
              Göndər
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
