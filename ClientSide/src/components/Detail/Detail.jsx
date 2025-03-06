import React from 'react'
import './Detail.css'
import {Hearts} from 'react-loader-spinner'
import UseCarousel from '../../utils/UseCarousel'



const Detail = ({data, loading}) => {
    let {nombre, descripcion, imagenes, rinde, tamano, precio} = data
  return (
    

      <div className='detail-container-all'>
        <div className="detail-container">
            {
              loading
               && 
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
                  
            }
              <div className="detail-imgs-container">
                  <UseCarousel imagenes={imagenes}/>
                </div>
                <div className="detail-info-container">
                <p className="detail-info-title">{nombre}</p>
                  {rinde && rinde != 0 ? <p className='detail-info'><b>Rinde:</b> {rinde} porciones</p> : ""}
                  {tamano && <p className='detail-info'><b>Tamaño:</b> {tamano} cm.</p>}
                  {descripcion && <p className='detail-info'><b>Descripcion:</b> {descripcion}</p>}
                  {
                    precio ?
                    <p className="detail-info-price">$ {precio?.toLocaleString()}</p>
                    :
                    <p className='no-price'>Consultar precio</p>
                  }
                  </div>
                
        </div>
        
        </div>
  )
}

export default Detail