import React from 'react'
import './Home.css'
import foto1 from '../../assets/Home-assets/foto1.jpg'
import foto2 from '../../assets/Home-assets/foto2.jpg'
import foto3 from '../../assets/Home-assets/foto3.jpg'
import foto4 from '../../assets/Home-assets/foto4.jpg'
import foto5 from '../../assets/Home-assets/foto5.jpg'
import foto7 from '../../assets/Home-assets/foto7.jpg'
import foto8 from '../../assets/Home-assets/foto8.jpg'
import fb from '../../assets/logos/fb-logo.png'
import ig from '../../assets/logos/ig-logo.png'
import wpp from '../../assets/logos/wpp-logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='home-container-all'>
      <div className="home-container">
        <div className="home-imgs-container">
          <img src={foto1} alt="" className="home-img" />
          <img src={foto2} alt="" className="home-img" />
          <img src={foto3} alt="" className="home-img" />
          <img src={foto4} alt="" className="home-img" />
        </div>

        <div id="howToBuy">
          <h3>Cómo realizar tu pedido</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat laborum dolorum veniam laboriosam quod unde officiis! In natus maiores iusto, saepe sit asperiores, alias, odio iste debitis quos delectus.
          Nesciunt nostrum laudantium culpa! Nesciunt quas porro quam deserunt quia ut consequatur omnis! Est, debitis deleniti veniam, animi amet velit, modi blanditiis officiis repudiandae perspiciatis quisquam dignissimos dolorem vel totam!
          Quia labore distinctio amet eveniet molestiae eaque! Voluptas praesentium pariatur, beatae rerum numquam quo sit consectetur qui nihil, temporibus, provident atque quae distinctio quaerat dicta veniam ratione aut illum cum.
          Molestias nesciunt ipsum vel fugiat dolorum ex ipsam facilis autem asperiores quidem quia veritatis tenetur doloremque dolorem optio eum, sed voluptatum minima eligendi perspiciatis dignissimos quaerat repellendus. Aspernatur, natus error.
          Minus perspiciatis animi quo error assumenda aperiam. Perferendis cumque asperiores consequuntur ex eum totam eos, laborum vero, autem cupiditate explicabo odio accusamus velit culpa iste omnis? Eius magnam sequi sit?</p>
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
        <div id="contact">
          <p className="home-contact-title">
            Contacto
          </p>

          <ul className='home-logos'>
           <Link to="https://www.instagram.com/joaquina.dulce/" target='blank'><li><img src={ig} alt="" className='home-logos-logo'/> <p>@joaquina.dulce</p></li></Link>
            <Link to="https://www.facebook.com/joaquina.dulce.3" target='blank'><li><img src={fb} alt="" className='home-logos-logo'/><p>Joaquina Dulce</p></li></Link>
            <Link to="https://w.app/joaquinadulce" target='blank'><li><img src={wpp} alt="" className='home-logos-logo'/> <p>+54 9 1130627969</p></li></Link>
          </ul>
        </div>
        
      </div>
    </main>
  )
}

export default Home