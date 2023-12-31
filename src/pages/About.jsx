import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import resume from '../assets/resume-akram-1.pdf'

function About() {
  return (
    <div className="bg_color text-white  main_height">
        <motion.div
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
        <div className="w-11/12 sm:w-10/12 mx-auto pt-12 sm:leading-7 leading-6" >

        
      <h2 className="font-semibold text-xl tracking-wider">About me </h2>
<br />
      <span className="tracking-wide">
        Hi, my name is Akram AFFOU. I'm a Full-stack web developer with decent
        knowledge in other technologies in the field as well. For an in-depth
        insight into my skills and qualifications, I invite you to check out   
        <span className="tech  cursor-pointer">
        <a target='_blank' className="text_decoration_none hover:underline" href={resume}  download> &nbsp; my Resume </a>
        </span>.
      </span>
      <br /><br />
      <span className="tracking-wide">

      Hey, I'm Akram, a nineteen-year-old from Morocco diving into the coding universe. Last year, I discovered the magic of programming online and decided, "Yep, that's my thing!" I set sail for web development—it's like the central hub of cool coding stuff. Bagged a <span className="tech hover:underline cursor-pointer"> 2-year web dev degree at ISTA NTIC </span> , where I learned front-end, back-end, and everything in between. No boring lectures; it was all about hands-on projects and teamwork. Now, armed with problem-solving skills, I'm ready to ride the waves of the dynamic web development world! 
      </span>
      <br /><br />
      <span className="tracking-wide">
      Dove into learning using diverse resources like freeCodeCamp, MDN, and YouTube channels (Traversy Media, Web Dev Simplified, Fireship). Tackled algorithmic challenges on <a href="https://www.hackerrank.com/profile/akramaffou" target="_blank" className="text_decoration"><span className="tech hover:underline cursor-pointer" >HackerRank</span></a> , built numerous projects—devoting all my time and effort. The journey was tough, filled with bugs and challenges, but I never gave up. After months of constant battle, here I am! ❤️
      </span>
      </div>
      <div className="flex justify-center gap-6 mt-10 pb-10">
      <a href='https://github.com/akram12affou' target="_blank" className="text_decoration_none text-white"><LuGithub className="text-4xl   span_size  trans hover:scale-110 hover:text-sky-300 cursor-pointer"/></a>
      <a href="https://www.linkedin.com/in/akram-affou/" className='text_decoration_none text-white' target="_blank"><FaLinkedin className="text-4xl   span_size trans hover:scale-110 hover:text-sky-300 cursor-pointer"/> </a>
      </div>
      </motion.div>
    </div>
  );
}

export default About;
