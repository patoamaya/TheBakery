import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate()
  const user = sessionStorage.getItem('user')


useEffect(()=>{
  if(!user){
     navigate("/")
    }

},[user, navigate])

      return children 
    
}

export default ProtectedRoute