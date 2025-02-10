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
                <option value="torta">Tortas</option>
                <option value="budin">Budines</option>
                <option value="box">Box de tortas</option>
                <option value="miniPasteleria">Mini pasteleria</option>
                <option value="navidad">Navidad</option>
                <option value="sanValentin">San Valentin</option>
                <option value="pascua">Pascua</option>
                <option value="diaPadre">Dia del padre</option>
                <option value="diaMadre">Dia de la madre</option>
                <option value="fechasPatrias">Fechas patrias</option>
                <option value="cumpleanos">Cumpleaños</option>
                <option value="catering">Catering</option>
                <option value="salado">Salados</option>
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
                <option value="torta">Tortas</option>
                <option value="budin">Budines</option>
                <option value="box">Box de tortas</option>
                <option value="miniPasteleria">Mini pasteleria</option>
                <option value="navidad">Navidad</option>
                <option value="sanValentin">San Valentin</option>
                <option value="pascua">Pascua</option>
                <option value="diaPadre">Dia del padre</option>
                <option value="diaMadre">Dia de la madre</option>
                <option value="fechasPatrias">Fechas patrias</option>
                <option value="cumpleanos">Cumpleaños</option>
                <option value="catering">Catering</option>
                <option value="salado">Salados</option>
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