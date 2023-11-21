import React from 'react'
import akram from '../assets/akram-logo.png'
import { LuGithub } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
function Projects() {

  return (
    <div className='bg_color'>
        <div className='flex justify-center flex-col text-white pt-10 mx-auto '>
          <h2 className='flex justify-center text-3xl font-semibold'>PORTFOLIO</h2>
          <span className='flex justify-center Inconsolata routes_color text-sm font-semibold'>these are my favorite projects I've worked on for the past year. Have a look around and make sure to hit me up! 👋</span>
        </div>
    <div className=''>
    <div className="flex text-white w-10/12 mx-auto items-center">
      <div className="w-7/12">
        <div className="flex items-center gap-3">
          <h3 className="font-semibold tracking-wider text-xl ">APEX</h3>
          
        </div>
        <div className="flex flex-col gap-3">
         <span className="">APEX is built with <span className='tech'>React</span> , <span className='tech'>TypeScript</span> , <span className='tech'>Redux</span> , <span className='tech'>Sass</span>, <span className='tech'>Material Ui</span>   brings you up-to-date information on every coin through an API, complete with detailed charts using <span className='tech'>Chart.js</span> . You can also track your favorite coins through authentication to make informed investment decisions with <span className='tech'> Firebase </span>.</span> 
          <div className="flex flex-col">
            <div href="https://github.com/akram12affou/coingecko-app" className="flex items-center gap-2 Inconsolata routes_color  font-semibold cursor-pointer hover:text-sky-300 hover:tracking-wide trans w-fit">
             <LuGithub className="text-white cursor-pointer text-lg" /> Github 
            </div>
            <div href="https://deft-gumption-340eb5.netlify.app/" className="flex items-center gap-2 Inconsolata routes_color  font-semibold cursor-pointer  hover:tracking-wide hover:text-sky-300 w-fit">
            <FaEye className="text-white cursor-pointer text-lg" /> Preview 
            </div>
          </div>
          
          </div>
      </div>
      <div>
       
   <img src={akram} alt="" />
      </div>


    </div>
      

    </div>
    </div>
  )
}

export default Projects