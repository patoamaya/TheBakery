import React from 'react'
import './Detail.css'
const Detail = ({data}) => {
    const {nombre, categoria, imagenes, descripcion, rinde, precio, tamano } = data  
    return (
        <div className='detail-container-all'>
            <div className="detail-container">
                {
                    imagenes ?
                    <div className="detail-container-inside">
                    <div className="detail-img-info-container">
                        <div className="detail-img-info1">
                            <img src={imagenes[0].url} alt="" className='detail-img' />
                            <div className="detail-info1">

                            <p>Categoria: {categoria}</p>
                            <p>Rinde: {rinde} personas.</p>
                            </div>
                        </div>
                        <div className="detail-img-info2">
                            <div className="detail-info2">

                            <p>Tamaño: {tamano} cm.</p>
                            <p>Descripcion: {descripcion}</p>
                            </div>
                            <img src={imagenes[1].url} alt="" className='detail-img' />
                        </div>
                </div>
                    <div className="detail-title-price-container">
                        <p>{nombre}</p>
                        <p>$ {precio}</p>
                    </div>
                    </div>
                    :
                    <h3>holis</h3>
                }
            </div>
          </div>
    )
}

export default Detail


// <div className="detail-title">
//                 <p className="detail-title">
//                     {nombre}
//                 </p>
//                     </div>
//                     <div className="img-info-container-all">

//                 <div className="img-info-container1">
//                     <img src={imagenes[0]?.url} alt="" className='img-info' />
//                     <div className="detail-info1">
//                         <p>Categoria: {categoria}</p>
//                         <p>Tamaño: {tamano} cm.</p>
//                     </div>
//                 </div>
//                 <div className="img-info-container2">
//                     <div className="detail-info2">
//                         <p>Descripcion: {descripcion}</p>
//                         <p>Rinde para {rinde} personas. </p>
//                     </div>
//                 <img src={imagenes[1]?.url} alt="" className='img-info' />
//                 </div>
                
//             </div>