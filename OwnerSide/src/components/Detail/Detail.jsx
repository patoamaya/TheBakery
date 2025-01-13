import React from 'react'
import './Detail.css'
const Detail = ({data}) => {
    const {nombre, _id} = data  
    return (

        // Cuando ponga el precio, especificar que si está en 0, tiene que poner "Consultar precio"
        <div>
            <h2>{nombre}</h2>
        </div>
    )
}

export default Detail
