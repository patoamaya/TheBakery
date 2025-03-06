import React, { useState } from 'react'
import './List.css'
import Button from '@mui/material/Button'
import {Hearts} from 'react-loader-spinner'
import { Link } from 'react-router-dom'


const List = ({filteredData, pageData}) => {
  const {handlePageChange, loading, totalPages, currentPage} = pageData

  return(
    <div className="list-container-all">
      <div className="list-container">
       {
         loading 
         ?
        <div className="loader">
                <Hearts
                    height="240"
                    width="260"
                    color="#f3f3f3"
                    ariaLabel="hearts-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
                    <p>Cargando...</p>
                    </div>
        :
        loading === false && filteredData !=0
        ?
        filteredData.map((data)=>{
          let {nombre, tamano, imagenes, precio, _id} = data
          return(
            <Link to={`/detail/${_id}`} key={_id}>
            <div className="list-card-container" key={_id}>
              <div className="list-card-img-container">
              <img src={imagenes[0].url} alt="" className='list-card-img' />
              </div>
              <div className="list-card-info">
              <ul>
              <li><p className="list-card-title">{nombre}</p></li>
              {
                tamano &&
                <li><p>{tamano} cm.</p></li>
                
              }
              </ul>
              {
                precio
                ?
                <p className='list-card-price'>$ {precio.toLocaleString()}</p>
                :
                <p>Consultar precio</p>
              }
              </div>
            </div>
              </Link>
          )})
        :
          <p className="list-no-data">
            ¡No hay nada aun!
          </p>
        }
      </div>
      <div className={loading || filteredData.length === 0  ? "disabled" : "list-page-container"}>
        <Button variant="contained" color="secondary" onClick={()=>{handlePageChange(currentPage - 1)}}disabled={currentPage === 1}>
        anterior
        </Button>

            <h3>{currentPage} / {totalPages}</h3>
        <Button variant="contained" color="secondary" onClick={()=>{handlePageChange(currentPage + 1)}}  disabled={currentPage === totalPages || filteredData.length < 6}>
        siguiente
        </Button>
    </div>
    </div>
  )
}

export default List