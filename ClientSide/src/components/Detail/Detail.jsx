import React from 'react'
import './Detail.css'

const Detail = ({data}) => {
    console.log(data)
  return (
    <div className='detail-container-all'>
        <div className="detail-container">
            {
                <p> {data.nombre}</p>
            }
        </div>
    </div>
  )
}

export default Detail