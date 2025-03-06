import React, { useEffect, useState } from 'react'
import Detail from './Detail'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const DetailContainer = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://thebakery.onrender.com/detail/${id}`)
        .then((res)=>{
            setData(res.data)
            setLoading(false)
        })
        .catch((err)=>console.log(err))
    },[id])
    return (
        <div>
            <Detail data={data} loading={loading}/>
        </div>
    )
}

export default DetailContainer
