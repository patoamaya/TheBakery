import React from 'react'
import './Header.css'
import { Outlet } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="header-container">
        <h2>Header</h2>
        </div>
      <Outlet/>
    </div>
  )
}

export default Header