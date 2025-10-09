import React from 'react'

const Button = ({type1,text1}) => {
  return (
     <button
      type={type1}
      className="relative overflow-hidden bg-orange-500 text-white font-semibold py-2 px-6 border border-white shadow-md transition-all duration-300 group"
    >
      {/* Normal Text */}
      <span className="block transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
        {text1}
      </span>

      {/* Popup Text */}
      <span
        className="absolute inset-0 flex items-center justify-center bg-white text-orange-500 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 "
      >
        {text1}
      </span>
    </button>
  )
}

export default Button