import './index.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Projects from './pages/Projects'
function App() {


  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/projects' element={<Projects/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
