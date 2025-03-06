import './Home.css'
import foto1 from '../../assets/Home-assets/foto1.jpg'
import foto2 from '../../assets/Home-assets/foto2.jpg'
import foto3cat from '../../assets/Home-assets/foto3cat.jpg'
import foto3 from '../../assets/Home-assets/foto3.jpg'
import foto4 from '../../assets/Home-assets/foto4.jpg'
import foto5cat from '../../assets/Home-assets/foto5cat.jpg'
import foto5 from '../../assets/Home-assets/foto5.jpeg'
import foto6 from '../../assets/Home-assets/foto6.jpg'
import foto7cat from '../../assets/Home-assets/foto7cat.jpg'
import foto7 from '../../assets/Home-assets/foto7.jpg'
import foto8cat from '../../assets/Home-assets/foto8cat.jpg'
import foto8 from '../../assets/Home-assets/foto8.jpg'
import foto9 from '../../assets/Home-assets/foto9.jpg'
import foto10 from '../../assets/Home-assets/foto10.jpg'
import foto11 from '../../assets/Home-assets/foto11.jpg'
import foto12 from '../../assets/Home-assets/foto12.jpg'
import fb from '../../assets/logos/fb-logo.png'
import ig from '../../assets/logos/ig-logo.png'
import wpp from '../../assets/logos/wpp-logo.png'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = ({handleSelect, index}) => {

  return (
    <main className='home-container-all'>
      <div className="home-container">
            <div className="best-categories-carousel">
              <p className='best-categories-title'>Categorias destacadas </p>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={10000}>
                    <Carousel.Item >
                        <Link to="/category/tortaClasica"><img src={foto3cat} alt="" className='carousel-img'/></Link>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Link to="/category/tortaPersonalizada"><img src={foto8cat} alt="" className='carousel-img'/></Link>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Link to="/category/variada"><img src={foto7cat} alt="" className='carousel-img'/></Link>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Link to="/category/box"><img src={foto5cat} alt="" className='carousel-img'/></Link>
                    </Carousel.Item>
                </Carousel>
            </div>
      <div className="best-categories">
            <h4>Categorias destacadas</h4>
          <div className="home-categories-card-container">
            <div className="home-categories-card">
              <Link to="/category/tortaClasica">
            <img src={foto3} alt="clasicas" className='home-card-img'/>
              </Link>
            <p>Tortas clásicas</p>
            </div>


          <div className="home-categories-card">
            <Link to="/category/tortaPersonalizada">
            <img src={foto8} alt="personalizadas" className='home-card-img' />
            </Link>
            <p>Tortas personalizadas</p>
          </div>

          <div className="home-categories-card">
            <Link to="/category/variada">
            <img src={foto7} alt="variadas" className='home-card-img'/>
            </Link>
            <p>Pasteleria variada</p>
            </div>
          <div className="home-categories-card">
            <Link to="/category/box">
            <img src={foto5} alt="box" className='home-card-img'/>
            </Link>
            <p>Box</p>
          </div>
        </div>
      </div>

        <div id="howToBuy">
          <h3>Cómo realizar tu pedido</h3>
          <p>Presupuestos</p>
          <ul>
            <li>
              Trabajamos de manera personalizada.
              Para darte un presupuesto necesitamos:
            </li>
            <li>
              Establecer fecha de entrega.
            </li>
            <li>
              Conocer la temática elegida.
             <br/>(Podes enviarnos imágenes de referencia)
            </li>
            <li>
              Con estos datos podremos enviarle el presupuesto.
              <br /> El valor de éste tendra 7 días de validez . 
            </li>
          </ul>
          <p>Pedidos</p>
          <ul>
            <li>
              Los pedidos se realizan por <Link to="https://wa.me/+541130627969">Whatsapp</Link>
            </li>
            <li>
              Tortas clásicas o personalizadas con 5 / 7 dias de anticipación, por disponibilidad, podría ser menos.
            </li>
            <li>
              Tartas con 24 / 48 hs. de anticipación.
            </li>
            <li>
              Se realizan envíos y su costo varía según la zona.
            </li>
            <li>
              Se puede retirar personalmente por Rafael Calzada o Temperley, GBA Sur.
            </li>
          </ul>
        </div>

    
        
        <div className="gallery-mobile">
        <p className="gallery-title">Galeria de productos</p>

        <Carousel interval={4000}>
            <Carousel.Item >
                <img src={foto2} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto12} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto3} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto11} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto1} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto9} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto4} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto5} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto7} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto6} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto8} alt="" className='carousel-img'/>
            </Carousel.Item>
            <Carousel.Item >
                <img src={foto10} alt="" className='carousel-img'/>
            </Carousel.Item>
        </Carousel>
        </div>

        <div id="gallery">
          <p className="gallery-title">Galeria de productos</p>
            <div className="gallery-img-container">
              <img src={foto2} alt="" className='gallery-img'/>
              <img src={foto12} alt="" className='gallery-img'/>
              <img src={foto3} alt="" className='gallery-img'/>
              <img src={foto11} alt="" className='gallery-img'/>
              <img src={foto1} alt="" className='gallery-img'/>
              <img src={foto9} alt="" className='gallery-img'/>
              <img src={foto4} alt="" className='gallery-img'/>
              <img src={foto5} alt="" className='gallery-img'/>
              <img src={foto7} alt="" className='gallery-img'/>
              <img src={foto6} alt="" className='gallery-img'/>
              <img src={foto8} alt="" className='gallery-img'/>
              <img src={foto10} alt="" className='gallery-img'/>
            </div>
        </div>
        <div id="contact">
          <p className="home-contact-title">
            Contacto
          </p>

          <ul className='home-logos'>
           <Link to="https://www.instagram.com/joaquinapasteleriaa/" target='blank'><li><img src={ig} alt="" className='home-logos-logo'/> <p>@joaquinapasteleriaa</p></li></Link>
            <Link to="https://www.facebook.com/joaquina.dulce.3" target='blank'><li><img src={fb} alt="" className='home-logos-logo'/><p>Joaquina Dulce</p></li></Link>
            <Link to="https://wa.me/+541130627969" target='blank'><li><img src={wpp} alt="" className='home-logos-logo'/> <p>+541130627969</p></li></Link>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Home