import React from 'react'
import './list.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'


const List = ({data, deleteAlert}) => {
    return (
        <div className='list-container'>
            <h1 className='list-title'>{data[0]?.categoria}</h1>

        <div className='all-cards-container'>
            {
                data.length === 0 ?
                <div className="no-data">
                    <p>¡No hay nada aun!</p> 
                </div> 
                :
                data.map((dato)=>{
                    let {nombre, imagenes, categoria, _id} = dato
                    return(
                    <div className="card-container" key={_id}>
                        <Link to={`/detail/${_id}`}>
                            <div className="card-img-container">
                            <img src={imagenes[0]?.url} alt="" className='card-img' />
                            </div>
                            <div className="card-info">
                                <h3>{nombre}</h3>  
                            </div>
                        </Link>
            <div className="card-links">
                 <Button variant="contained" color="primary">  
                 <Link to={`/update/${_id}`}><p className="card-link">Editar</p></Link>
                 </Button>
                 <Button variant="contained" color="error" onClick={(e)=>deleteAlert(_id, nombre)}>
                   Eliminar
                 </Button>
            </div>
         </div>
)
})
}
        </div>
</div>
    )
}

export default List
