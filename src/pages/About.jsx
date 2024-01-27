import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import resume from '../assets/resume-akram-1.pdf'
import Paragraph from "../components/Paragraph";
import Paragraph2 from "../components/Paragraph2";
import { motion, useScroll , useTransform } from "framer-motion";
import { useRef } from "react";
function About() {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['1 1','1 0.7']
  });
  const right = useTransform(scrollYProgress , [0,0.3] , [80,0])
  const opacity = useTransform(scrollYProgress , [0,0.3] , [0,1])

  return (
    <div className="bg_color text-white  main_height" id="about">
      
        <div className="w-11/12 sm:w-10/12 mx-auto pt-12 sm:leading-7 leading-6" >

        
      <h2 className="font-semibold  tracking-wider flex justify-center text-3xl">ABOUT ME</h2>
       <br />
    <motion.div 
    ref={ref}
   
    style={{
      opacity,
      position:'relative',
      right
    }}
    >
      <span className="tracking-wide">
        Hi, my name is Akram AFFOU. I'm a Full-stack web developer with decent
        knowledge in other technologies in the field as well. For an in-depth
        insight into my skills and qualifications, I invite you to check out   
        <span className="tech  cursor-pointer">
        <a target='_blank' className="text_decoration_none hover:underline" href={resume}  download> &nbsp; my Resume </a>
        </span>.
      </span>
      </motion.div>
      <br /><br />
      <Paragraph/>
      <br /><br />
 

<Paragraph2/>
      
      </div>
      <div className="flex justify-center gap-6 mt-10 pb-10">
      <a href='https://github.com/akram12affou' target="_blank" className="text_decoration_none text-white"><LuGithub className="text-4xl   span_size  trans hover:scale-110 hover:text-sky-300 cursor-pointer"/></a>
      <a href="https://www.linkedin.com/in/akram-affou/" className='text_decoration_none text-white' target="_blank"><FaLinkedin className="text-4xl   span_size trans hover:scale-110 hover:text-sky-300 cursor-pointer"/> </a>
      </div>
      
    </div>
  );
}

export default About;
