import HeaderContainer from './components/Header/HeaderContainer'
import HomeContainer from './components/Home/HomeContainer'
import DetailContainer from './components/Detail/DetailContainer'
import ListContainer from './components/List/ListContainer'
import FooterContainer from './components/Footer/FooterContainer'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route element={<FooterContainer/>}>
        <Route element={<HeaderContainer/>}>
        <Route path="/"element={<HomeContainer/>}/>
        <Route path="/detail/:id?" element={<DetailContainer/>}/>
        <Route path="/category/:categoria?" element={<ListContainer/>}/>
        </Route>
        </Route>
      </Routes>
      
      </BrowserRouter>
   </div>
  )
}

export default App
