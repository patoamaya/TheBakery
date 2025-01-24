import React, { useEffect, useState } from 'react'
import List from './List'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const ListContainer = () => {
  const {categoria} = useParams()
  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  
  useEffect(()=>{

    // Si esto es mucho quilombo, hacer un get al endpoint gral y filtrar mediante frontend
    categoria ?
    // axios.get(`http://localhost:2000/q?categoria=${categoria}`)
    axios.get(`http://localhost:2000/q?categoria=${categoria}`)
    .then((res)=>setFilteredData(res.data))
    .catch((err)=>console.log(err))
    :
    axios.get('http://localhost:2000')
    .then((res)=>setAllData(res.data))
    .catch((err)=>console.log(err))
  },[categoria])


  return (
    <div><List allData={allData} filteredData={filteredData}/></div>
  )
}

export default ListContainer