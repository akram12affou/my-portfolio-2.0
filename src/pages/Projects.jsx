import React , {useRef} from 'react'
import { LuGithub } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import Cinemagic from '../components/Cinemagic';

import TRENDIFY1 from '../assets/project2_1.png'
import TRENDIFY2 from '../assets/project2_2.png'
import TRENDIFY3 from '../assets/project2_3.png'
import TRENDIFY4 from '../assets/project2_4.png'
import { motion, useScroll , useTransform } from "framer-motion";
import Apex from '../components/Apex';

function Projects() {
 
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['start end','end end']
  });
  const scale = useTransform(scrollYProgress , [0,0.75] , [0.7,1])
  const opacity = useTransform(scrollYProgress , [0,0.75] , [0.7,1])


  return (
    <div className='bg_color'>
           <div
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
        <div className='flex justify-center flex-col text-white pt-10 mx-auto'>
          <h2 className='flex justify-center text-3xl font-semibold' id='projects'>PORTFOLIO</h2>
          <span className='flex justify-center mx-auto Inconsolata routes_color sm:text-sm text-xs font-semibold w-10/12'>these are my favorite projects I've worked on for the past year. Have a look around and make sure to hit me up! 👋</span>
        </div>
    <div 
    
    className='flex flex-col gap-2'>
    <motion.div
     style={{
      scale,
      opacity,
        }} 
        ref={ref}
        transition={{ bounce: 10 }}
     className="flex flex-col lg:flex-row justify-center  text-white w-10/12 mx-auto items-start gap-2 mt-5">
      <div
   
      
       
      className="lg:w-7/12">
        <div className="flex items-center gap-3 ">
        <a href="https://guileless-stroopwafel-dd9539.netlify.app/" className='text_decoration text-white' target="_blank"><h3 className="font-semibold tracking-wider text-2xl hover:underline cursor-pointer">TRENDIFY</h3></a>
          <div className='flex  items-center gap-3 mb-2 sm:hidden'>
          <a  href="https://github.com/akram12affou/Trendify" className='text-white' target="_blank"> <LuGithub className="  cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" /></a>
          <a href="https://guileless-stroopwafel-dd9539.netlify.app/" target="_blank" className='text-white'><FaEye className="text_decoration cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" /></a> 
          <a href="https://www.youtube.com/watch?v=7KM01IhGLvY" target="_blank" className='text-white'><FaYoutube className=" cursor-pointer text-md hover:text-sky-300 trans hover:scale-105"/></a>
          </div>
          
        </div>
        <div className="flex flex-col gap-3">
         <span className=" tracking-wide sm:leading-7 leading-6 sm:text-base text-sm">
            Tredify, a cutting-edge <span className="tech">MERN stack </span>  e-commerce web app powered by <span className="tech">Next.js</span>  e-commerce web app, boasts a streamlined shopping cart and personalized comments for each product. Utilizing , <span className='tech '>Type Script</span> , <span className='tech '>Material-UI</span> ,<span className='tech '>React Icons</span>  ,<span className="tech">Tailwind CSS</span> , and <span className="tech">Toastify</span> , it ensures a seamless user experience. </span> 
          <div className="hidden sm:flex  justify-evenly">
            <a href="https://github.com/akram12affou/Trendify" target="_blank" className="flex items-center gap-1 Inconsolata routes_color  font-semibold cursor-pointer hover:text-sky-300 hover:tracking-wide trans w-fit text_decoration_none">
             <LuGithub className="text-white cursor-pointer text-lg " /> Github
            </a>
            <a href="https://guileless-stroopwafel-dd9539.netlify.app/" target="_blank" className="flex trans items-center gap-1 Inconsolata routes_color  font-semibold cursor-pointer  hover:tracking-wide hover:text-sky-300 w-fit text_decoration_none object-cover	">
            <FaEye className="text-white cursor-pointer text-lg" /> Preview
            </a>
            <div className="flex items-center gap-1 trans Inconsolata routes_color  font-semibold cursor-pointer  hover:tracking-wide hover:text-sky-300 w-fit">
            <a href="https://www.youtube.com/watch?v=7KM01IhGLvY" target="_blank" className="flex trans items-center gap-1 Inconsolata routes_color  font-semibold cursor-pointer  hover:tracking-wide hover:text-sky-300 w-fit text_decoration_none object-cover	">
               <FaYoutube className="text-white cursor-pointer text-lg object-cover	" target="_blank"/> Video
             </a>
            </div>
          </div>
          </div>
      </div>
      <div className=' my_shadow lg:w-[45vw]
    lg:h-[20vw]'>
      <Carousel variant='dark' className='img_dimentions'>
                  <Carousel.Item>
                    <img   className='rounded-lg w-full  bg-slate-500 object-cover img	' src={TRENDIFY2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='rounded-lg w-full  bg-slate-500 object-cover img	' src={TRENDIFY1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img  src={TRENDIFY3} alt="" className='rounded-lg w-full  bg-slate-500 object-cover img	'/>
                  </Carousel.Item>          
                  <Carousel.Item>
                    <img  src={TRENDIFY4} alt="" className='rounded-lg w-full  bg-slate-500 object-cover img	'/>
                  </Carousel.Item>                   
      </Carousel>
      </div>
  
    </motion.div>
    <Cinemagic/>  
    <Apex/>
    </div>
  
   
    </div>
   
    </div>
   
  )
}

export default Projects