import React from 'react'
import { motion, useScroll , useTransform } from "framer-motion";
import { useRef } from "react";

function Paragraph2() {
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
Dove into learning using diverse resources like freeCodeCamp, MDN, and YouTube channels (Traversy Media, Web Dev Simplified, Fireship). Tackled algorithmic challenges on <a href="https://www.hackerrank.com/profile/akramaffou" target="_blank" className="text_decoration"><span className="tech hover:underline cursor-pointer" >HackerRank</span></a> , built numerous projects—devoting all my time and effort. The journey was tough, filled with bugs and challenges, but I never gave up. After months of constant battle, here I am! ❤️
</span>
      </motion.div>
  )
}

export default Paragraph2