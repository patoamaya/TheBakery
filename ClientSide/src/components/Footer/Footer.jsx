import React from 'react'
import './Footer.css'
import { Outlet } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <Outlet/>
      <div className="footer-container-all">
        <div className="footer-contact">
        <p>Creado por Patricio Amaya</p>
        </div>
      </div>
      </div>
  )
}

export default Footer