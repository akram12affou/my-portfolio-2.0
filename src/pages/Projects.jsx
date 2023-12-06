import React from 'react'
import { LuGithub } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

import coinP1 from '../assets/project1_1.png'
import coinP2 from '../assets/project1_2.png'
import coinP3 from '../assets/project1_3.png'
import coinP4 from '../assets/project1_4.png'
import TRENDIFY1 from '../assets/project2_1.png'
import TRENDIFY2 from '../assets/project2_2.png'
import TRENDIFY3 from '../assets/project2_3.png'
import TRENDIFY4 from '../assets/project2_4.png'
import CINEMAGIC2 from '../assets/project3_2.png'
import CINEMAGIC3 from '../assets/project3_3.png'
import CINEMAGIC4 from '../assets/project3_4.png'
import CINEMAGIC5 from '../assets/project3_5.png'
import CINEMAGIC6 from '../assets/project3_6.png'

import CINEMAGIC8 from '../assets/project3_8.png'
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className='bg_color'>
           <motion.div
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
        <div className='flex justify-center flex-col text-white pt-10 mx-auto'>
          <h2 className='flex justify-center text-3xl font-semibold'>PORTFOLIO</h2>
          <span className='flex justify-center mx-auto Inconsolata routes_color sm:text-sm text-xs font-semibold w-10/12'>these are my favorite projects I've worked on for the past year. Have a look around and make sure to hit me up! 👋</span>
        </div>
    <div className='flex flex-col gap-2'>
    <div className="flex flex-col lg:flex-row justify-center  text-white w-10/12 mx-auto items-start gap-2 mt-5">
      <div className="lg:w-7/12">
        <div className="flex items-center gap-3 ">
        <a href="https://guileless-stroopwafel-dd9539.netlify.app/" className='text_decoration text-white' target="_blank"><h3 className="font-semibold tracking-wider text-2xl hover:underline cursor-pointer">TRENDIFY</h3></a>
          <div className='flex  items-center gap-3 mb-2 sm:hidden'>
          <a  href="https://github.com/akram12affou/Trendify" className='text-white' target="_blank"> <LuGithub className="  cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" /></a>
          <a href="https://guileless-stroopwafel-dd9539.netlify.app/" target="_blank" className='text-white'><FaEye className="text_decoration cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" /></a> 
          <FaYoutube className=" cursor-pointer text-md hover:text-sky-300 trans hover:scale-105"/> 
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
            <FaYoutube className="text-white cursor-pointer text-lg object-cover	" target="_blank"/> Video
            </div>
          </div>
          </div>
      </div>
      <div className=' my_shadow '>
      <Carousel variant='dark' className='img_dimentions'>
                  <Carousel.Item>
                    <img   className='rounded-lg w-full  bg-slate-500 object-cover img	' src={TRENDIFY1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='rounded-lg w-full  bg-slate-500 object-cover img	' src={TRENDIFY2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img  src={TRENDIFY3} alt="" className='rounded-lg w-full  bg-slate-500 object-cover img	'/>
                  </Carousel.Item>          
                  <Carousel.Item>
                    <img  src={TRENDIFY4} alt="" className='rounded-lg w-full  bg-slate-500 object-cover img	'/>
                  </Carousel.Item>                   
      </Carousel>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-center  text-white w-10/12 mx-auto items-start gap-2 mt-5 ">
      <div className="lg:w-7/12">
        <div className="flex items-center gap-3 ">
        <a href="https://cinemagic-client.vercel.app" className='text_decoration text-white' target="_blank"><h3 className="font-semibold tracking-wider text-2xl hover:underline cursor-pointer">CINEMAGIC</h3></a> 
          <div className='flex  items-center gap-3 mb-2 sm:hidden'>
          <a href="https://github.com/akram12affou/cinemagic" className='text-white' target="_blank"> <LuGithub className=" cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" href="https://github.com/akram12affou/cinemagic"/></a>
          <a href="https://cinemagic-client.vercel.app" className='text-white ' target="_blank"><FaEye className=" cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" /></a>
          <FaYoutube className=" cursor-pointer text-md hover:text-sky-300 trans hover:scale-105"/> 
          </div>
        </div>
        <div className="flex flex-col gap-3">
         <span className="text-base tracking-wide leading-7">
          Cinemagic, my movie app, is a cool creation using the <span className="tech">MERN stack</span>  , <span className="tech">Tailwind</span> ,<span className="tech">TypeScript</span> , and tools like <span className="tech">Toastify</span> . It's designed for quick movie and actor details informations ,you can also search for films , with user authentication for personalized features like storing watched lists .</span> 
          <div className="hidden sm:flex  justify-evenly">
            <a href="https://github.com/akram12affou/cinemagic" target="_blank" className="flex items-center gap-1 Inconsolata routes_color  font-semibold cursor-pointer hover:text-sky-300 hover:tracking-wide trans w-fit text_decoration_none">
             <LuGithub className="text-white cursor-pointer text-lg " /> Github 
            </a>
            <a href="https://cinemagic-client.vercel.app" target="_blank" className="flex trans items-center gap-1 Inconsolata routes_color  font-semibold cursor-pointer  hover:tracking-wide hover:text-sky-300 w-fit text_decoration_none">
            <FaEye className="text-white cursor-pointer text-lg" /> Preview 
            </a>
            <div className="flex items-center gap-1 trans Inconsolata routes_color  font-semibold cursor-pointer  hover:tracking-wide hover:text-sky-300 w-fit">
            <FaYoutube className="text-white cursor-pointer text-lg" target="_blank"/> Video
            </div>
          </div>
          </div>
      </div>
      <div className=' my_shadow '>
      <Carousel className='img_dimentions'>
                  <Carousel.Item>
                    <img className='rounded-lg w-full  bg-slate-500 object-cover	img' src={CINEMAGIC2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className='rounded-lg w-full  bg-slate-500 object-cover	img' src={CINEMAGIC3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img  src={CINEMAGIC4} alt="" className='rounded-lg w-full  bg-slate-500 object-cover	 img'/>
                  </Carousel.Item>          
                  <Carousel.Item>
                    <img  src={CINEMAGIC5} alt="" className='rounded-lg w-full  bg-slate-500 object-cover	 img'/>
                  </Carousel.Item>          
                  <Carousel.Item>
                    <img  src={CINEMAGIC6} alt="" className='rounded-lg w-full  bg-slate-500 object-cover	 img'/>
                  </Carousel.Item>          
                  <Carousel.Item>
                    <img  src={CINEMAGIC8} alt="" className='rounded-lg w-full  bg-slate-500 object-cover	img'/>
                  </Carousel.Item>          
      </Carousel>
      </div>

    </div>
    <div className="flex flex-col lg:flex-row justify-center  text-white w-10/12 mx-auto items-start gap-2 mt-5 mb-6">
      <div className="lg:w-7/12">
        <div className="flex items-center gap-3 ">
        <a href="https://deft-gumption-340eb5.netlify.app/" target="_blank" className='text_decoration text-white'><h3 className="font-semibold tracking-wider text-2xl hover:underline cursor-pointer">APEX</h3></a>  
          <div className='flex  items-center gap-3 mb-2 sm:hidden'>
          <a href="https://github.com/akram12affou/coingecko-app" className='text-white' target="_blank"> <LuGithub className=" cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" /></a> 
          <a href="https://deft-gumption-340eb5.netlify.app/" className='text-white' target="_blank"><FaEye className=" cursor-pointer  text-md hover:text-sky-300 trans hover:scale-105" /></a>  
          <FaYoutube className=" cursor-pointer text-md hover:text-sky-300 trans hover:scale-105"/> 
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
            <div className="flex items-center gap-1 trans Inconsolata routes_color  font-semibold cursor-pointer  hover:tracking-wide hover:text-sky-300 w-fit">
            <FaYoutube className="text-white cursor-pointer text-lg" target="_blank"/> Video
            </div>
          </div>
          </div>
      </div>
      <div className=' my_shadow '>
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
    </div>
    </div>
    </motion.div>
    </div>
  )
}

export default Projects