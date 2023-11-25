import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFiletypePdf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  return (
    <div className="bg_color text-white flex flex-col justify-center mx-auto main_height gap-3 sm:gap-2">
        <h2 className="font-semibold mx-auto home_h2 ">Welcome, I'm Akram</h2>
        <h3 className="font-semibold mx-auto flex items-center flex-col home_h3 tracking-wider  ">
        I'M A WEB DEVELOPER CURRENTLY BASED IN BENI MELLAL , MOROCCO
        <br />
        <center>
            HIT ME UP AND LET'S CREATE SOMETHING SPECIAL ✨
        </center>
        </h3>
        <div className="flex justify-center sm:gap-6 md:gap-8 gap-4">
         <a href='https://github.com/akram12affou' className="text_decoration_none"><span className="cursor-pointer Inconsolata routes_color hover:underline trans hover:text-slate-400  flex items-center gap-1 span_size font-semibold" >
          <LuGithub className="text-xl text-white  span_size" /> github
          </span>  </a> 
          <a href="https://www.linkedin.com/in/akram-affou/" className="text_decoration_none">
          <span className="cursor-pointer Inconsolata routes_color hover:underline trans hover:text-slate-400  flex items-center gap-1 span_size font-semibold">
          <FaLinkedin className="text-xl text-white span_size"/> linkedin
          </span>
          </a>
          <a href="mailto:akramaffou@gmail.com" className="text_decoration_none">
          <span className="cursor-pointer Inconsolata routes_color hover:underline trans hover:text-slate-400  flex items-center gap-1 span_size font-semibold">
          <HiOutlineMail className="text-xl text-white span_size" /> email
        </span>
</a>
          
        <span className="cursor-pointer Inconsolata routes_color hover:underline trans hover:text-slate-400  flex items-center gap-1 span_size font-semibold">
          <BsFiletypePdf className="text-xl text-white span_size"/> resume
        </span>
        </div>
        <button className="flex justify-center mx-auto font-semibold hover:tracking-wide button-89 mt-3 "  onClick={() => navigate('/projects')}>VIEW PROJECTS</button>
    </div>
  )
}


export default Home