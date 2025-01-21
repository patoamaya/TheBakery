import React from 'react'
import './Home.css'
import foto1 from '../../assets/Home-assets/foto1.jpg'
import foto2 from '../../assets/Home-assets/foto2.jpg'
import foto3 from '../../assets/Home-assets/foto3.jpg'
import foto4 from '../../assets/Home-assets/foto4.jpg'
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
            <img src={foto3} alt="" className='home-card-img'/>
            <p>Tortas</p>
            </div>

          <div className="home-categories-card">
            <img src={foto2} alt="" className='home-card-img' />
            <p>Personalizados</p>
          </div>
          <div className="home-categories-card">
            <img src={foto3} alt="" className='home-card-img'/>
            <p>Budines</p>
            </div>
        </div>
            </div>
      </div>
    </main>
  )
}

export default Home