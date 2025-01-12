import React from 'react'
import './Detail.css'
const Detail = ({data}) => {
    const {nombre, _id} = data  
    return (
        <div>
            <h2>{nombre}</h2>
        </div>
    )
}

export default Detail
