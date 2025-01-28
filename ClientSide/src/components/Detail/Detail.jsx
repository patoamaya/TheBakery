import React from 'react'
import './Detail.css'


const Detail = ({data}) => {
    console.log(data)
    let {nombre, descripcion, imagenes, rinde, tamano, precio} = data
  return (
    <div className='detail-container-all'>
            {data &&
        <div className="detail-container">
                <div className="detail-imgs-container">
                  <img src={imagenes && imagenes[0]?.url} alt="" className='detail-img'/>
                </div>
                <div className="detail-info-container">
                  <p className="detail-info-title">{nombre}</p>
                  <p className='detail-info'>Rinde: {rinde} porciones</p>
                  <p className='detail-info'>Tamaño: {tamano} cm.</p>
                  <p className='detail-info'>Descripcion: {descripcion}</p>
                  <p className="detail-info-price">$ {precio?.toLocaleString()}</p>

                </div>
        </div>
            }
    </div>
  )
}

export default Detail