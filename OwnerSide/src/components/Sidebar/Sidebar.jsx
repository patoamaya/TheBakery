import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar-container-all'>
            <div className="sidebar-container">
            <h2>Categorias</h2>
            <Link to="/add"><h3>Agregar</h3></Link>
            <ul className='sidebar-ul'>
                <li><Link to="/" className='sidebar-link'>Todo</Link></li>
                <li><Link to="/category/torta" className='sidebar-link'>Tortas</Link></li>
                <li><Link to="/category/budin" className='sidebar-link'>Budines</Link></li>
            </ul>
            <h2>sidebar</h2>
            <h2>sidebar</h2>
            <h2>sidebar</h2>
            <h2>sidebar</h2>
            <h2>sidebar</h2>
            <h2>sidebar</h2>
            <h2>sidebar</h2>
            </div>
            <Outlet/>
        </div>
    )
}

export default Sidebar
