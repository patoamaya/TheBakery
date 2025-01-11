import React from 'react'
import './Home.css'

const Home = ({data}) => {
    return (
        <main className='home-container'>
            <h1 className='home-title'>Productos</h1>

        <div className='all-cards-container'>
            {
                data.map((dato)=>{
                    let {nombre, imagenes, categoria, _id} = dato
                    return(
                    <div className="card-container" key={_id}>
            <div className="card-img">
                <h2>imagen</h2>
            </div>
            <div className="card-info">
                <h3>{nombre}</h3>  
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
