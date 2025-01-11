import { useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios'
const HomeContainer = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:2000/seller')
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])
    
    return (
        <div>
            <Home data={data} />
        </div>
        )
}

export default HomeContainer
