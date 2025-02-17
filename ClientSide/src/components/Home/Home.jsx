import './Home.css'
import foto1 from '../../assets/Home-assets/foto1.jpg'
import foto2 from '../../assets/Home-assets/foto2.jpg'
import foto3 from '../../assets/Home-assets/foto3.jpg'
import foto4 from '../../assets/Home-assets/foto4.jpg'
import foto5 from '../../assets/Home-assets/foto5.jpg'
import foto6 from '../../assets/Home-assets/foto6.jpg'
import foto7 from '../../assets/Home-assets/foto7.jpg'
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
              <p>Categorias destacadas </p>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={8000}>
                    <Carousel.Item >
                        <Link to="/category/torta"><img src={foto3} alt="" className='carousel-img'/></Link>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Link to="/category/cumpleanos"><img src={foto8} alt="" className='carousel-img'/></Link>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Link to="/category/budin"><img src={foto7} alt="" className='carousel-img'/></Link>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Link to="/category/box"><img src={foto5} alt="" className='carousel-img'/></Link>
                    </Carousel.Item>
                </Carousel>
            </div>
      <div className="best-categories">
            <h4>Categorias destacadas</h4>
          <div className="home-categories-card-container">
            <div className="home-categories-card">
              <Link to="/category/torta">
            <img src={foto3} alt="" className='home-card-img'/>
              </Link>
            <p>Tortas</p>
            </div>


          <div className="home-categories-card">
            <Link to="/category/cumpleanos">
            <img src={foto8} alt="cumpleaños" className='home-card-img' />
            </Link>
            <p>Cumpleaños</p>
          </div>

          <div className="home-categories-card">
            <Link to="/category/budin">
            <img src={foto7} alt="budines" className='home-card-img'/>
            </Link>
            <p>Budines</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat laborum dolorum veniam laboriosam quod unde officiis! In natus maiores iusto, saepe sit asperiores, alias, odio iste debitis quos delectus.
          Nesciunt nostrum laudantium culpa! Nesciunt quas porro quam deserunt quia ut consequatur omnis! Est, debitis deleniti veniam, animi amet velit, modi blanditiis officiis repudiandae perspiciatis quisquam dignissimos dolorem vel totam!
          Quia labore distinctio amet eveniet molestiae eaque! Voluptas praesentium pariatur, beatae rerum numquam quo sit consectetur qui nihil, temporibus, provident atque quae distinctio quaerat dicta veniam ratione aut illum cum.
          Molestias nesciunt ipsum vel fugiat dolorum ex ipsam facilis autem asperiores quidem quia veritatis tenetur doloremque dolorem optio eum, sed voluptatum minima eligendi perspiciatis dignissimos quaerat repellendus. Aspernatur, natus error.
          Minus perspiciatis animi quo error assumenda aperiam. Perferendis cumque asperiores consequuntur ex eum totam eos, laborum vero, autem cupiditate explicabo odio accusamus velit culpa iste omnis? Eius magnam sequi sit?</p>
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
           <Link to="https://www.instagram.com/joaquina.dulce/" target='blank'><li><img src={ig} alt="" className='home-logos-logo'/> <p>@joaquina.dulce</p></li></Link>
            <Link to="https://www.facebook.com/joaquina.dulce.3" target='blank'><li><img src={fb} alt="" className='home-logos-logo'/><p>Joaquina Dulce</p></li></Link>
            <Link to="https://wa.me/1130627969" target='blank'><li><img src={wpp} alt="" className='home-logos-logo'/> <p>+54 9 1130627969</p></li></Link>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Home