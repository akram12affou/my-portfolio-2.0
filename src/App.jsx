import './index.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef , useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useInView , motion ,useAnimation } from 'framer-motion'

function App() {
  const mainControls = useAnimation()
  const ref = useRef(null);
  const isinView =  useInView(ref , {once:true});
  useEffect(() => {
    if(isinView){
      mainControls.start("visible");
    }
    console.log(isinView);
  } , [isinView]);
  return (
    <BrowserRouter>
    <motion.div
    variants={{
      hidden : {opacity:0 , y:75},
      visible : {opacity:1 , y:0},
    }}
    animate={mainControls}
    >
      
    <NavBar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </motion.div>
    </BrowserRouter>
   
  )
}

export default App
