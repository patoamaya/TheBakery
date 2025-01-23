import Header from './Header'
import { useNavigate } from 'react-router-dom'

const HeaderContainer = () => {
  
  const navigate = useNavigate()

  const handleSelectChange = (e)=>{
    let selectedValue = e.target.value
 
    selectedValue === "" ? navigate("/")
    :
    selectedValue === 'all' ? navigate('/category') 
    :
    navigate(`/category/${selectedValue}`)
}



return (
    <div><Header handleSelectChange={handleSelectChange}/></div>
  )
}

export default HeaderContainer