import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeContainer from "./components/Home/HomeContainer"
import DetailContainer from "./components/Detail/DetailContainer"
import AddContainer from './components/Add/AddContainer'
import UpdateContainer from './components/Update/UpdateContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import ListContainer from './components/List/ListContainer'
import LoginContainer from './components/Login/LoginContainer'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


function App() {

  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginContainer/>} />
      <Route element={
        <ProtectedRoute>
        <SidebarContainer/>
        </ProtectedRoute >
      }>
      <Route path='/home' element={
        <ProtectedRoute>
        <HomeContainer/>
        </ProtectedRoute>}/>
      <Route path="/category/:categoria?" element={
        <ProtectedRoute>
        <ListContainer/>
        </ProtectedRoute>
        } />
      </Route>
      <Route path="/update/:_id?" element={
        <ProtectedRoute>
        <UpdateContainer/>
        </ProtectedRoute>
        } />
      <Route path="/detail/:_id" element={
        <ProtectedRoute>
        <DetailContainer/>
        </ProtectedRoute>
        }/>
      <Route path="/add" element={
        <ProtectedRoute>
        <AddContainer />
        </ProtectedRoute>
        }/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
