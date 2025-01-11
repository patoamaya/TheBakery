import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar-container-all'>
            <div className="sidebar">
             <Link to="/category/torta">name</Link>
             <Link to="/category/budin">name</Link>
            <h2>sidebar</h2>
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
