import React from 'react'
import { Link } from 'react-router-dom'

const Scard = ({imageUr,title,description}) => {
  return (

   <>
   <Link to={"/services"} onClick={()=>window.scrollTo(0,0)} >
    <div className="flex hover:scale-120 transition-transform duration-300 ease-in-out hover:shadow-2xl flex-col items-center text-center">
           <div className='w-24 h-24 rounded-full flex items-center justify-center border-4 border-gray-300 shadow-md mb-4'>
             <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-300 overflow-hidden ">
              <img
                src={`${imageUr}`}
                alt="UI/UX Design"
                className="w-full h-full object-cover"
                
              />
            </div>
           </div>
            <h4 className="text-[1.5em] leading-7 font-semibold text-black mb-2">{`${title}`}</h4>
            <p className="text-gray-600 text-sm">
             {`${description}`}
            </p>
          </div>
   </Link>
   </>
  )
}

export default Scard