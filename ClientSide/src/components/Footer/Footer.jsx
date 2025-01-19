import React from 'react'
import './Footer.css'
import { Outlet } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <Outlet/>
      <h2>footer</h2>
      </div>
  )
}

export default Footer