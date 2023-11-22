import { FaInstagram } from "react-icons/fa";
 
function Contact() {
  return (
    <div className=" bg_color text-white main_height flex items-center">
      <div className="w-10/12 flex justify-center flex-col mx-auto pb-4 gap-2 items-center">
        <div className="flex justify-center flex-col items-center">
             <h2 className="font-semibold text-3xl tracking-wider uppercase m-1">contact</h2>
      <span className="Inconsolata routes_color mb-3">Have a question or want to work together?</span>
        </div>
       
      <div className="flex flex-col lg:flex-row  gap-4 justify-center">

        <div className="flex flex-col gap-2 items-center">
          <div className="flex  flex-col">
           <label htmlFor="" >Name</label>
           <input type="text" placeholder="Name" className="outline-none p-2 w-96		 text-black rounded-sm	"/>
          </div>
        <div className="flex flex-col">
          <label htmlFor="" >Email</label>
          <input type="text" placeholder="Enter Email" className="outline-none p-2 w-96		 text-black rounded-sm	"/>
        </div>
        </div>
        
        
      <div className="flex   flex-col">
          <label htmlFor="" >Message</label>
          <textarea type="text" className="outline-none w-96 rounded-sm	h-36 text-black p-2" placeholder="Your Message"/>
      </div>
      </div>
     
      <button className="button-89 mt-3">Send</button>
      <div className="flex text-sm items-center justify-center mx-auto gap-2 mt-8">
        
     <span> Active on <span className="tech cursor-pointer hover:underline">Instagram 
      </span>, connect with me there if you want !</span>  
      </div>
   
      </div>
     
      </div>
    
  )
}


export default Contact