import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFiletypePdf } from "react-icons/bs";

function Home() {
  return (
    <div className="bg_color text-white flex flex-col justify-center mx-auto main_height gap-3 sm:gap-2">
        <h2 className="font-semibold mx-auto home_h2 ">Welcome, I'm Akram</h2>
        <h3 className="font-semibold mx-auto flex items-center flex-col home_h3 tracking-wider">
        I'M A WEB DEVELOPER CURRENTLY BASED IN BENI MELLAL , MOROCCO
        <br />
        <center>
            HIT ME UP AND LET'S CREATE SOMETHING SPECIAL ✨
        </center>
        </h3>
        <div className="flex justify-center sm:gap-6 md:gap-8 gap-3">
          <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1 span_size">
          <LuGithub className="text-xl text-white  span_size"/> github
          </span>  
          <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1 span_size">
          <FaLinkedin className="text-xl text-white span_size"/> linkedin
          </span>
          <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1 span_size">
          <HiOutlineMail className="text-xl text-white span_size"/> email
        </span>
        <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1 span_size">
          <BsFiletypePdf className="text-xl text-white span_size"/> resume
        </span>
        </div>
        <button className="flex justify-center mx-auto font-semibold hover:tracking-wide button-89 mt-3 ">VIEW PROJECTS</button>
    </div>
  )
}


export default Home