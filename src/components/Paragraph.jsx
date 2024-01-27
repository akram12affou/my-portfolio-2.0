import React from 'react'
import { motion, useScroll , useTransform } from "framer-motion";
import { useRef } from "react";

function Paragraph() {
    const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['1 1','1 0.7']
  });
  const right = useTransform(scrollYProgress , [0,0.3] , [80,0])
  const opacity = useTransform(scrollYProgress , [0,0.3] , [0,1])
  return (
    <motion.div 
    ref={ref}
   
    style={{
      opacity,
      position:'relative',
      right
    }}
    >
      <span className="tracking-wide">
     
      Hey, I'm Akram, a nineteen-year-old from Morocco diving into the coding universe. Last year, I discovered the magic of programming online and decided, "Yep, that's my thing!" I set sail for web development—it's like the central hub of cool coding stuff. Bagged a <span className="tech hover:underline cursor-pointer"> 2-year web dev degree at ISTA NTIC </span> , where I learned front-end, back-end, and everything in between. No boring lectures; it was all about hands-on projects and teamwork. Now, armed with problem-solving skills, I'm ready to ride the waves of the dynamic web development world! 
      </span>
      </motion.div>
  )
}

export default Paragraph