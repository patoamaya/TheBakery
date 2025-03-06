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
        <Carousel activeIndex={index} onSelect={handleSelect} interval={10000}>
            {
                imagenes && imagenes.map((imagen, index)=>(
                    <Carousel.Item key={index}>
                        <img src={imagen.url} alt="" className='detail-img' key={imagen.public_id}/>
                    </Carousel.Item>
                ))
            }
        </Carousel>
)
}

export default UseCarousel