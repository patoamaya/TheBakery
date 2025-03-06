import React from 'react'
import './Login.css'
import Button from '@mui/material/Button'

const Login = ({handleSubmit, handleChangeUsername ,handleChangePassword}) => {
  return (
    <div className='login-container'>
      <div className="login-form-container">
      <form action="" onSubmit={handleSubmit} className='login-form'>
        <label htmlFor="username">Usuario</label>
        <input  type="text" name='username' onChange={(e)=>{handleChangeUsername(e)}} className='login-form-input'/>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name='password' onChange={(e)=>{handleChangePassword(e)}} className='login-form-input'/>
        <button variant="standard" className='login-form-btn'>
          Ingresar
        </button>
      </form>
      </div>
    </div>
  )
}

export default Login