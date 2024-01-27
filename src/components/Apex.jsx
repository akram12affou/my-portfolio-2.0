import React , {useRef} from 'react'
import { LuGithub } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import { motion, useScroll , useTransform } from "framer-motion";
import coinP1 from '../assets/project1_1.png'
import coinP2 from '../assets/project1_2.png'
import coinP3 from '../assets/project1_3.png'
import coinP4 from '../assets/project1_4.png'
function Apex() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
      target:ref,
      offset:['start end','end end']
    });
    const scale = useTransform(scrollYProgress , [0,0.75] , [0.6,1])
    const opacity = useTransform(scrollYProgress , [0,0.75] , [0.6,1])
  return (
    <motion.div
    style={{scale , opacity}}
    className="flex flex-col lg:flex-row justify-center  text-white w-10/12 mx-auto items-start gap-2 mt-5 mb-6">
      <div className="lg:w-7/12">
        <div className="flex items-center gap-3 ">
        <a href="https://deft-gumption-340eb5.netlify.app/" target="_blank" className='text_decoration text-white'><h3 className="font-semibold tracking-wider text-2xl hover:underline cursor-pointer">APEX</h3></a>  
          <div className='flex  items-center gap-3 mb-2 sm:hidden'>
          <a href="https://github.com/akram12affou/coingecko-app" className='text-white' target="_blank"> <LuGithub className=" cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" /></a> 
          <a href="https://deft-gumption-340eb5.netlify.app/" className='text-white' target="_blank"><FaEye className=" cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" /></a>  

          </div>
          
        </div>
        <div className="flex flex-col gap-3">
         <span className="text-base tracking-wide leading-7">APEX is built with <span className='tech '>React</span> , <span className='tech'>TypeScript</span> , <span className='tech'>Redux</span> , <span className='tech'>Sass</span>, <span className='tech'>Material Ui</span>   brings you up-to-date information on every coin through an API, complete with detailed charts using <span className='tech'>Chart.js</span> . You can also track your favorite coins through authentication to make informed investment decisions with <span className='tech'> Firebase </span>.</span> 
          <div className="hidden sm:flex  justify-evenly">
            <a href="https://github.com/akram12affou/coingecko-app" target="_blank" className="flex items-center gap-1 Inconsolata routes_color  font-semibold cursor-pointer hover:text-sky-300 hover:tracking-wide trans w-fit text_decoration_none">
             <LuGithub className="text-white cursor-pointer text-lg " /> Github 
            </a>
            <a href="https://deft-gumption-340eb5.netlify.app/" target="_blank" className="flex trans items-center gap-1 Inconsolata routes_color  font-semibold cursor-pointer  hover:tracking-wide hover:text-sky-300 w-fit text_decoration_none">
            <FaEye className="text-white cursor-pointer text-lg" /> Preview 
            </a>

          </div>
          </div>
      </div>
      <div className=' my_shadow  content_carousel'>
      <Carousel className='img_dimentions'>
                  <Carousel.Item>
                    <img  className='rounded-lg w-full  bg-slate-500 object-cover	img' src={coinP1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img   className='rounded-lg w-full  bg-slate-500 object-cover	img' src={coinP2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='rounded-lg w-full  bg-slate-500 object-cover	img' src={coinP3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img  src={coinP4} alt="" className='rounded-lg w-full  bg-slate-500 object-cover	img'/>
                  </Carousel.Item>          
      </Carousel>
      </div>
    </motion.div>
  )
}

export default Apex