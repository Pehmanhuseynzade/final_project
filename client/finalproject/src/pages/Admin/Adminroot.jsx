import React from 'react'
import Navbar from '../../components/Admin/Navbar'
import Footer from '../../components/Admin/Footer'
import { Outlet } from 'react-router-dom'

function Adminroot() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Adminroot