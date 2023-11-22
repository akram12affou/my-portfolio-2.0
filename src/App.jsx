import './index.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/projects' element={<Projects/>}/> 
     <Route path='/contact' element={<Contact/>}/> 
     <Route path='/about' element={<About/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
