import { useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios'
import Swal from 'sweetalert2'

const HomeContainer = () => {
    const [data, setData] = useState([])
    


    useEffect(()=>{
        axios.get('http://localhost:2000/seller')
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(data)


    const deleteAlert = (id, nombre)=>{
        Swal.fire({
            icon: "warning",
            title: `Estas a punto de borrar el siguiente producto : ${nombre}`,
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#00000",
            confirmButtonText: "Borrar definitivamente",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:2000/seller/delete/${id}`)
                .then(()=>{
                    
                    setData(prevData => prevData.filter(item => item._id !== id))
                    Swal.fire({
                        title: `El producto ${nombre} ha sido eliminado`,
                        icon: "success"
                    });
                }).catch((err)=>console.log(err))
            }
          });
    }

    
    return (
        <div>
            <Home data={data} deleteAlert={deleteAlert} />
        </div>
        )
}

export default HomeContainer
