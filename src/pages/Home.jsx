import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFiletypePdf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import resume from '../assets/resume-akram-1.pdf'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="bg_color">
    <motion.div
    initial={{ y: 22, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
  >
    <div className=" text-white flex flex-col justify-center mx-auto main_height gap-3 sm:gap-2">
     
        <h2 className="font-semibold mx-auto home_h2 ">Welcome, I'm Akram</h2>
        <h3 className="font-semibold mx-auto flex items-center flex-col home_h3 tracking-wider  ">
        I'M A WEB DEVELOPER CURRENTLY BASED IN BENI MELLAL , MOROCCO
        <br />
        <center>
            HIT ME UP AND LET'S CREATE SOMETHING SPECIAL ✨
        </center>
        </h3>
        <div className="flex justify-center sm:gap-6 md:gap-8 gap-4">
         <a href='https://github.com/akram12affou' target="_blank" className="text_decoration_none"><span className="cursor-pointer Inconsolata routes_color hover:underline trans hover:text-slate-400  flex items-center gap-1 span_size font-semibold" >
          <LuGithub className="text-xl text-white  span_size" /> github
          </span>  </a> 
          <a href="https://www.linkedin.com/in/akram-affou/" target="_blank" className="text_decoration_none">
          <span className="cursor-pointer Inconsolata routes_color hover:underline trans hover:text-slate-400  flex items-center gap-1 span_size font-semibold">
          <FaLinkedin className="text-xl text-white span_size"/> linkedin
          </span>
          </a>
          <a href="mailto:akramaffou@gmail.com" className="text_decoration_none">
          <span className="cursor-pointer Inconsolata routes_color hover:underline trans hover:text-slate-400  flex items-center gap-1 span_size font-semibold">
          <HiOutlineMail className="text-xl text-white span_size" /> email
        </span>
</a>
<a target='_blank' className="text_decoration" href={resume} download> 
        <span className="cursor-pointer Inconsolata routes_color hover:underline trans hover:text-slate-400  flex items-center gap-1 span_size font-semibold">
          <BsFiletypePdf className="text-xl text-white span_size"/> resume
         
        </span>
        </a>
        </div>
        <button className="flex justify-center mx-auto font-semibold tracking-wider  button-89 mt-3 "  onClick={() => navigate('/projects')}>VIEW PROJECTS</button>
    </div>
    </motion.div>
    </div>
  )
}


export default Home