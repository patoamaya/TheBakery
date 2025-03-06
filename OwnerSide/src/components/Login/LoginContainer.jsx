import React from 'react'
import Login from './Login'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const LoginContainer = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()

let user = import.meta.env.VITE_USER_USER;
let pass = import.meta.env.VITE_USER_PASS;

const handleChangeUsername = (e)=>{
  setUsername(e.target.value)  
}

const handleChangePassword = (e)=>{
  setPassword(e.target.value)
}

const handleSubmit = (e)=>{
  e.preventDefault()
  
  if(username === user && password === pass){
    sessionStorage.setItem('user', username)
    navigate("/home") 
  }else{ Swal.fire({title: "Error de inicio",
    icon: "error"
  })};
  
  
}



  return (
    <div><Login handleChangeUsername={handleChangeUsername} handleChangePassword={handleChangePassword} handleSubmit = {handleSubmit}/></div>
  )
}

export default LoginContainer