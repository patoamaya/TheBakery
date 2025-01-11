import React, { useEffect, useState } from 'react'
import List from './List'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ListContainer = () => {
    let [data, setData] = useState([])
    let {categoria} = useParams()

    useEffect(()=>{

        axios.get(`http://localhost:2000/seller/q?categoria=${categoria}`)
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err))
    }
,[categoria])
    return (
        <div>
            <List data={data}/>
        </div>
    )
}

export default ListContainer
