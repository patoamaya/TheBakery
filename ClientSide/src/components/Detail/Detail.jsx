import React from 'react'
import './Detail.css'
import UseCarousel from '../../utils/useCarousel'



const Detail = ({data}) => {
    console.log(data)
    let {nombre, descripcion, imagenes, rinde, tamano, precio} = data
  return (
    <div className='detail-container-all'>
            {data &&
        <div className="detail-container">
                <div className="detail-imgs-container">
                  {/* <img src={imagenes && imagenes[0]?.url} alt="" className='detail-img'/> */}
                  <UseCarousel imagenes={imagenes}/>
                </div>
                <div className="detail-info-container">
                  <p className="detail-info-title">{nombre}</p>
                  <p className='detail-info'><b>Rinde:</b> {rinde} porciones</p>
                  {tamano && <p className='detail-info'><b>Tamaño:</b> {tamano} cm.</p>}
                  <p className='detail-info'><b>Descripcion:</b> {descripcion}</p>
                  <p className="detail-info-price">$ {precio?.toLocaleString()}</p>

                </div>
        </div>
            }
    </div>
  )
}

export default Detail