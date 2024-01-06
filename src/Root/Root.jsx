import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const Roote = () => {
  return (
    <div>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Roote
