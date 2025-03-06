import React, { useEffect, useState } from 'react'
import List from './List'
import axios from 'axios'
import {useParams} from 'react-router-dom'

  const ListContainer = () => {
  const {categoria} = useParams()
  const [filteredData, setFilteredData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const productsPerPage = 6;

   
  useEffect(()=>{
    setLoading(true)
    categoria
    ?
    axios.get(`https://thebakery.onrender.com/q?categoria=${categoria}`, {
      params:{
        page: currentPage,
        limit: productsPerPage
      }
    })
    .then((res)=>{
      setFilteredData(res.data.filteredCategory)
      setTotalPages(res.data.totalPages)
      setLoading(false)}
  )
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
    :
    axios.get('https://thebakery.onrender.com/', {
      params:{
        page: currentPage,
        limit: productsPerPage
      }
    })
    .then((res)=>{
      setFilteredData(res.data.searchAll)
      setTotalPages(res.data.totalPages)
      setLoading(false)
    })
    .catch((err)=>console.log(err))
  },[categoria, currentPage])

  const handlePageChange = (newPage)=>{
    if(newPage < 1 || newPage > totalPages) 
        return
    setCurrentPage(newPage)
}

  const pageData = {
    loading, handlePageChange, totalPages, currentPage
  }


  return (
    <div>
      <List filteredData={filteredData} pageData={pageData}/>
    
    </div>
  )
}

export default ListContainer