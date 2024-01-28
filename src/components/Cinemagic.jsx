
import { motion, useScroll , useTransform } from "framer-motion";
import CINEMAGIC2 from '../assets/project3_2.png'
import CINEMAGIC3 from '../assets/project3_3.png'
import CINEMAGIC4 from '../assets/project3_4.png'
import CINEMAGIC5 from '../assets/project3_5.png'
import CINEMAGIC6 from '../assets/project3_6.png'
import CINEMAGIC8 from '../assets/project3_8.png'
import React , {useRef} from 'react'
import { LuGithub } from "react-icons/lu";
import { FaEye } from "react-icons/fa";

import Carousel from "react-bootstrap/Carousel";

function Cinemagic() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
      target:ref,
      offset:['start end','end end']
    });
    const scale = useTransform(scrollYProgress , [0,0.75] , [0.7,1])
  const opacity = useTransform(scrollYProgress , [0,0.75] , [0.7,1])
  return (
    <motion.div 
    style={{
        scale, 
        opacity
    }}
    className="flex flex-col lg:flex-row justify-center  text-white w-10/12 mx-auto items-start gap-2 mt-5 ">
     <div className="lg:w-7/12">
       <div className="flex items-center gap-3 ">
       <a href="https://cinemagic-client.vercel.app" className='text_decoration text-white' target="_blank"><h3 className="font-semibold tracking-wider text-2xl hover:underline cursor-pointer">CINEMAGIC</h3></a> 
         <div className='flex  items-center gap-3 mb-2 sm:hidden'>
         <a href="https://github.com/akram12affou/cinemagic" className='text-white' target="_blank"> <LuGithub className=" cursor-pointer  text-md hover:text-red-300 trans hover:scale-105" href="https://github.com/akram12affou/cinemagic"/></a>
         <a href="https://cinemagic-client.vercel.app" className='text-white ' target="_blank"><FaEye className=" cursor-pointer  text-md hover:text-red-300 trans hover:scale-105" /></a>
 
         </div>
       </div>
       <div className="flex flex-col gap-3">
        <span className="text-base tracking-wide leading-7">
         Cinemagic, my movie app, is a cool creation using the <span className="tech">MERN stack</span>  , <span className="tech">Tailwind</span> ,<span className="tech">TypeScript</span> , and tools like <span className="tech">Toastify</span> . It's designed for quick movie and actor details informations ,you can also search for films , with user authentication for personalized features like storing watched lists .</span> 
         <div className="hidden sm:flex  justify-evenly">
           <a href="https://github.com/akram12affou/cinemagic" target="_blank" className="flex items-center gap-1 Inconsolata routes_color  font-semibold cursor-pointer hover:text-red-300 hover:tracking-wide trans w-fit text_decoration_none">
            <LuGithub className="text-white cursor-pointer text-lg " /> Github 
           </a>
           <a href="https://cinemagic-client.vercel.app" target="_blank" className="flex trans items-center gap-1 Inconsolata routes_color  font-semibold cursor-pointer  hover:tracking-wide hover:text-red-300 w-fit text_decoration_none">
           <FaEye className="text-white cursor-pointer text-lg" /> Preview 
           </a>
         </div>
         </div>
     </div>
     <div className=' my_shadow lg:w-[45vw]
    lg:h-[20vw]'>
     <Carousel className='img_dimentions '>
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
</motion.div>
  )
}

export default Cinemagic