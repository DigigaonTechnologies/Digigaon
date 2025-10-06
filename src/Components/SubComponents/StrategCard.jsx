import React from 'react'

const StrategCard = ({image,title,description,accent}) => {
  return (
      <div className="flex flex-col items-center">
                <div className={`bg-white  rounded-full border-solid border-2 border-${accent} w-20 h-20 flex justify-center items-center mb-4`}>
                  <img className='p-2' src={image} alt="" />
                </div>
                <h4 className={`font-semibold text-${accent} text-lg mb-2`}>{title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{description}
                </p>
              </div>
  )
}

export default StrategCard