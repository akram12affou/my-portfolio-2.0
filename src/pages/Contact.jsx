import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";
function Contact() {
  const [email , setEmail] = useState('')
  const [name , setName] = useState('')
  const [message , setMessage] = useState('')
  emailjs.init('7jwmKLwsz4iJzNMW7');
  const sendEmail = () => {
    emailjs.send("service_8i7u6tf","template_21j7aix",{
      from_name: name,
      email_id: email,
      message,
      reply_to: "hh",
      })
      .then(
        (result) => {
          alert('thank you ! 💙');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" bg_color">
    <motion.div
    initial={{ y: 22, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
  >
    <div className=" text-white main_height flex items-center">
         
      <div className=" flex justify-center flex-col mx-auto pb-4 gap-2 items-center">
        <div className="flex justify-center flex-col items-center">
             <h2 className="font-semibold lg:text-3xl text-2xl tracking-wider uppercase m-1">contact</h2>
             <span className="Inconsolata routes_color lg:mb-3 text-xs sm:text-sm lg:text-base ">Have a question or want to work together 🤝 ?</span>
       </div>
       <div className="flex flex-col lg:flex-row lg:gap-4 gap-2 justify-center">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex  flex-col">
           <label htmlFor="">Name</label>
           <input type="text" placeholder="Name" className="outline-none p-2 sm:w-96 w-64 mx-auto		 text-black rounded-sm	" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
        <div className="flex flex-col">
          <label htmlFor="" >Email</label>
          <input type="text" placeholder="Enter Email" className="outline-none p-2  sm:w-96 w-64 mx-auto		 text-black rounded-sm	" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        </div>
        
        
      <div className="flex flex-col ">
          <label htmlFor="" >Message</label>
          <textarea type="text" className="outline-none sm:w-96 w-full mx-auto rounded-sm	h-36 text-black p-2" placeholder="Your Message"  value={message} onChange={(e) => setMessage(e.target.value)}/>
      </div>
      </div>
     
      <button className="button-89 mt-3  font-semibold tracking-wider" onClick={sendEmail}>Send</button>
      <div className="flex text-sm items-center justify-center mx-auto gap-2 mt-8 w-11/12">
        
     <span className="scale-90 sm:scale-100 tracking-wide"> the most common ways to  contact me would be via <a className="text_decoration_none" target="_blank"  href="https://www.instagram.com/akraaam_9/"><span className="tech cursor-pointer hover:underline" >Instagram</span></a>, <a href="mailto:akramaffou@gmail.com" target="_blank"  className="text_decoration_none"><span className="tech cursor-pointer hover:underline"> 
     email </span ></a> or <a className="text_decoration_none" target="_blank"  href="https://www.linkedin.com/in/akram-affou/"><span className="tech cursor-pointer hover:underline"> LinkedIn </span></a>.</span> 
      </div>
   
      </div>
      
      </div>
      </motion.div>
      </div>
    
  )
}


export default Contact