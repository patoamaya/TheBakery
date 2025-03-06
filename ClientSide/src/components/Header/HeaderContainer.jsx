import Header from './Header'
import { useLocation, useNavigate } from 'react-router-dom'

const HeaderContainer = () => {
  const location = useLocation()
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
    <div><Header handleSelectChange={handleSelectChange} location={location}/></div>
  )
}

export default HeaderContainer