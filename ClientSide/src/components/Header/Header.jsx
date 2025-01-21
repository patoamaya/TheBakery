import React from 'react'
import './Header.css'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logo.png'


const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="logo-container">
          <Link to="/">
        <img src={logo} className='logo'/>
          </Link>
        </div>
        <div className="header-links">
          <ul>
            <li><Link to="/category"><p>Todos los productos</p></Link></li>
            <li><a href="#contact"><p>Contacto</p></a></li>
            <li><a href="#howToBuy"><p>Cómo comprar</p></a></li>
          </ul>
        </div>
        </header>
      <Outlet/>
    </div>
  )
}

export default Header