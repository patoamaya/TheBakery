import { useState } from 'react'
import Home from './Home'

const HomeContainer = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex)=>{
    setIndex(selectedIndex)
  }
  return (
    <div><Home handleSelect={handleSelect} index={index}/></div>
  )
}

export default HomeContainer