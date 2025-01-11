import React from 'react'
import './list.css'
const List = ({data}) => {
    return (
        <div>
            {data.map((dato)=>{
                let {nombre, _id} = dato
                return(
                    <div key={_id}>
                        
                    <h2>{nombre}</h2>
                    </div>
                )
            })

            }
        </div>
    )
}

export default List
