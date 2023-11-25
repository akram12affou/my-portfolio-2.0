import React from 'react'

function Footer() {
  return (
    <div className='footer_bg text-white  h-12 mx-auto text-sm'>
        <div className='flex justify-evenly pt-3 '>
              <div className='Inconsolata routes_color text-xs sm:text-sm md:text-sm hidden md:flex'>
        © 2023 Akram Affou. All rights Reserved
        </div>
        <div className='flex sm:gap-3 gap-2'>
          <div>
         <span className='Inconsolata routes_color text-xs sm:text-sm md:text-sm'>
         Email:
        </span> 
        <span className='text-xs sm:text-sm md:text-sm tracking-wide'>akramaffou@gmail.com  
          </span> 
          </div>
          <div>
            <span className='Inconsolata routes_color text-xs sm:text-sm md:text-sm'>
            Tel: 
            </span>
           <span className='text-xs sm:text-sm md:text-sm tracking-wide'>+212682773074
            </span>  
          </div>
        </div>  
        </div>
    
    </div>
  )
}

export default Footer