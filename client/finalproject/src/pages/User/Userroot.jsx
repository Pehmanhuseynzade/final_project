import React from 'react'
import Navbar from '../../components/User/Navbar'
import Footer from '../../components/User/Footer'
import { Outlet, useLocation } from 'react-router-dom';

function Userroot() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/registerr'; 
  const hiddeneHeaderFooter = location.pathname === '/login'; 
  return (
    <>
    {!hideHeaderFooter && !hiddeneHeaderFooter && <Navbar />}
    <Outlet/>
    {!hideHeaderFooter && !hiddeneHeaderFooter && <Footer />}
    </>
  )
}

export default Userroot