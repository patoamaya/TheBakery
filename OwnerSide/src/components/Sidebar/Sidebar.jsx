import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Sidebar.css'
import { Button } from '@mui/material'

const Sidebar = () => {
    return (
        <div className='sidebar-container-all'>
            <div className="sidebar-container">
            <Link to="/add"><Button variant='contained' color='secondary'>Agregar</Button></Link>
            <p className='sidebar-title'>Habituales</p>
            <ul className='sidebar-ul1'>
                <li><Link to="/" className='sidebar-link'>Todo</Link></li>
                <li><Link to="/category/torta" className='sidebar-link'>Tortas</Link></li>
                <li><Link to="/category/budin" className='sidebar-link'>Budines</Link></li>
            </ul>
            <p className='sidebar-title'>Especiales</p>
            <ul className="sidebar-ul2">
                <li><Link to="/category/navidad" className='sidebar-link'>Navidad</Link> </li>
                <li><Link to="/category/sanValentin" className='sidebar-link'>San Valentin</Link> </li>
                <li><Link to="/category/pascua" className='sidebar-link'>Pascua</Link> </li>
                <li><Link to="/category/diaPadre" className='sidebar-link'>Dia del padre</Link> </li>
                <li><Link to="/category/diaNino" className='sidebar-link'>Dia del niño</Link> </li>
                <li><Link to="/category/halloween" className='sidebar-link'>Halloween</Link> </li>
                <li><Link to="/category/diaMadre" className='sidebar-link'>Dia de la madre</Link> </li>
                <li><Link to="/category/fechasPatrias" className='sidebar-link'>Fechas patrias</Link> </li>
                <li><Link to="/category/especial" className='sidebar-link'>Especiales</Link> </li>
                <li><Link to="/category/catering" className='sidebar-link'>Catering</Link> </li>
                <li><Link to="/category/salado" className='sidebar-link'>Salados</Link> </li>

            </ul>
 
            </div>
            <Outlet/>
        </div>
    )
}

export default Sidebar
