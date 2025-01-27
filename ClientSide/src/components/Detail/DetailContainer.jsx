import React, { useEffect, useState } from 'react'
import Detail from './Detail'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DetailContainer = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:2000/detail/${id}`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[id])
    return (
        <div>
            <Detail data={data}/>
        </div>
    )
}

export default DetailContainer
