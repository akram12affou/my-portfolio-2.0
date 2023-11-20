import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFiletypePdf } from "react-icons/bs";

function Home() {
  return (
    <div className="bg_color text-white flex flex-col justify-center mx-auto main_height gap-4">
        <h2 className="font-semibold mx-auto text-5xl">Welcome, I'm Akram</h2>
        <h3 className="font-semibold mx-auto flex items-center flex-col text-xl">
        I'M A WEB DEVELOPER CURRENTLY BASED IN BENI MELLAL , MOROCCO
        <br />
        <center>
            HIT ME UP AND LET'S CREATE SOMETHING SPECIAL ✨
        </center>
        </h3>
        <div className="flex justify-center gap-6 ">
          <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1">
          <LuGithub className="text-xl"/> github
          </span>  
          <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1">
          <FaLinkedin className="text-xl"/> linkedin
          </span>
          <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1">
          <HiOutlineMail className="text-xl"/> email
        </span>
        <span className="cursor-pointer Inconsolata routes_color hover:scale-105 trans hover:text-slate-400  flex items-center gap-1">
          <BsFiletypePdf className="text-xl"/> resume
        </span>
        </div>
        <button className="border border-white mx-auto p-2 hover:bg-white trans hover:text-black font-semibold tracking-wide">VIEW PROJECTS</button>
    </div>
  )
}

export default Home