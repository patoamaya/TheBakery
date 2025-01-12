import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Delete from './Delete'
import axios from 'axios'

const DeleteContainer = () => {
const [data, setData] = useState({})
const {_id} = useParams()

useEffect(()=>{
    axios.get(`http://localhost:2000/detail/${_id}`)
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
},[_id])
    return (
        <div>
            <Delete data={data}/>
        </div>
    )
}

export default DeleteContainer
