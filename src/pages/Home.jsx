import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFiletypePdf } from "react-icons/bs";

function Home() {
  return (
    <div className="bg_color text-white flex flex-col justify-center mx-auto main_height gap-4">
        <h2 className="font-semibold mx-auto home_h2">Welcome, I'm Akram</h2>
        <h3 className="font-semibold mx-auto flex items-center flex-col home_h3 tracking-wide">
        I'M A WEB DEVELOPER CURRENTLY BASED IN BENI MELLAL , MOROCCO
        <br />
        <center>
            HIT ME UP AND LET'S CREATE SOMETHING SPECIAL ✨
        </center>
        </h3>
        <div className="flex justify-center gap-7">
          <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1">
          <LuGithub className="text-xl text-white "/> github
          </span>  
          <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1">
          <FaLinkedin className="text-xl text-white"/> linkedin
          </span>
          <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1">
          <HiOutlineMail className="text-xl text-white"/> email
        </span>
        <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1">
          <BsFiletypePdf className="text-xl text-white"/> resume
        </span>
        </div>
        <button className="border border-white mx-auto p-2 hover:bg-white trans hover:text-black font-semibold tracking-wide mt-4">VIEW PROJECTS</button>
    </div>
  )
}

export default Home