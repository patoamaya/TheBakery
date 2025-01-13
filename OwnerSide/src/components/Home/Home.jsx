import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
const Home = ({data, deleteAlert}) => {
    return (
        <main className='home-container'>
            <h1 className='home-title'>Todos los productos</h1>

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
                 {/* <Link to={`/delete/${_id}`} className="card-link"> <p>Eliminar</p></Link> */}
                 <Button variant="contained" color="error" onClick={(e)=>deleteAlert(_id, nombre)}>
                   Eliminar
                 </Button>
            </div>
         </div>
)
})
}
        </div>
</main>
    )
}

export default Home
