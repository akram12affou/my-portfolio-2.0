import React from 'react'

function Footer() {
  return (
    <div className='footer_bg text-white  h-12 mx-auto text-sm'>
        <div className='flex justify-evenly pt-3'>
              <div className='Inconsolata routes_color'>
        © 2023 Akram Affou. All rights Reserved
        </div>
        <div className='flex gap-3'>
          <div>
         <span className='Inconsolata routes_color'>
         Email :
        </span>  akramaffou@gmail.com  
          </div>
          <div>
            <span className='Inconsolata routes_color'>
            Tel :
            </span>
           +212682773074
          </div>
        </div>  
        </div>
    
    </div>
  )
}

export default Footer