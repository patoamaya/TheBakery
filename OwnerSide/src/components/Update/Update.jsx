import React from 'react'

const Update = ({data}) => {
    const {nombre} = data
    return (
        <div>
            <h2>{nombre}</h2>
        </div>
    )
}

export default Update
