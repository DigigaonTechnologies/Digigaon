import React from 'react'

const Button = ({type1,text1}) => {
  return (
     <button type={type1}
       className="relative overflow-hidden bg-orange-500  text-white font-semibold py-2 px-6 border-1 border-white shadow-md transition-all duration-300 group">
              {/* Normal Text */}
              <span className="block transition-transform duration-500 group-hover:-translate-y-[100%]">
               {text1}
              </span>
              
              {/* Hidden Text (appears on hover) */}
              <span className="block absolute py-2 px-6 left-0 top-full w-full bg-white text-orange-500 transition-transform duration-300 group-hover:translate-y-[-100%]">
                {text1}
              </span>
            </button>
  )
}

export default Button