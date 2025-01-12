import React, { useEffect, useState } from 'react'
import Update from './Update'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const UpdateContainer = () => {
const [data, setData] = useState({})
const {_id} = useParams()

useEffect(()=>{
    axios.get(`http://localhost:2000/detail/${_id}`)
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
},[_id])
    return (
        <div>
            <Update data={data}/>
        </div>
    )
}

export default UpdateContainer
