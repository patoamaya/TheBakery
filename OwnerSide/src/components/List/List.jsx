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
                data.map((dato)=>{
                    let {nombre, imagenes, categoria, _id} = dato
                    return(
                    <div className="card-container" key={_id}>
                        <Link to={`/detail/${_id}`}>
                            <div className="card-img">
                                <h2>imagen</h2>
                            </div>
                            <div className="card-info">
                                <h3>{nombre}</h3>  
                            </div>
                        </Link>
            <div className="card-links">
                 <Link to={`/update/${_id}`} className="card-link"> <p >Editar</p></Link>
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
