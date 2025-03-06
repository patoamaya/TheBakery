import React from 'react'
import './Header.css'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logos/page-logo.png'

const Header = ({ handleSelectChange, location}) => {
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
            <li>
              <select name="" id="" className='header-select' 
                onChange={handleSelectChange} value={location.pathname === "/" && ""}>
                <option value="">Categorias</option>
                <option value="all">Todo</option>
                <option value="tortaClasica">Tortas clasicas</option>
                <option value="tortaPersonalizada">Tortas personalizadas</option>
                <option value="variada">Pasteleria variada</option>
                <option value="box">Box</option>
                <option value="miniPasteleria">Mini pasteleria</option>
                <option value="fechaEspecial">Fechas especiales</option>
                <option value="cateringSalado">Catering salado</option>
                <option value="cateringDulce">Catering dulce</option>
              </select>
            </li>
            <li><a href="/#howToBuy"><p>Cómo comprar</p></a></li>
            <li><a href="/#gallery"><p>Galeria</p></a></li>
            <li><a href="/#contact"><p>Contacto</p></a></li>
          </ul>
        </div>
        </header>
        <div className="header-mobile">
        <select name="" id="" className='mobile-header-category-select' 
                onChange={handleSelectChange} value={location.pathname === "/" && ""}>
                <option value="">Categorias</option>
                <option value="all">Todo</option>
                <option value="tortaClasica">Tortas clasicas</option>
                <option value="tortaPersonalizada">Tortas personalizadas</option>
                <option value="variada">Pasteleria variada</option>
                <option value="box">Box</option>
                <option value="miniPasteleria">Mini pasteleria</option>
                <option value="fechaEspecial">Fechas especiales</option>
                <option value="cateringSalado">Catering salado</option>
                <option value="cateringDulce">Catering dulce</option>
              </select>
          <Link to="/">
          <img src={logo} className='mobile-logo'/>
          </Link>
        </div>
      <Outlet/>
    </div>
  )
}

export default Header