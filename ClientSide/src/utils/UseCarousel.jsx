import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'


const UseCarousel = ({imagenes}) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
            {
                imagenes && imagenes.map((imagen)=>(
                    <Carousel.Item key={imagen.public_id}>
                        <img src={imagen.url} alt="" className='detail-img'/>
                    </Carousel.Item>
                ))
            }
        </Carousel>
)
}

export default UseCarousel