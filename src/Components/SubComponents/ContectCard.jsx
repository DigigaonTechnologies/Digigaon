import React from 'react'

const ContectCard = ({id,text1,text2,paths}) => {
  return (
     <div className=" relative bg-[#1c2430] text-white rounded-lg p-8 w-full text-center shadow-md">
            <div className=" flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={paths}
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{text1}</h3>
            <p className="text-[3vw] md:text-[1.2vw] text-center  w-full">{id==2?( <a 
  href="mailto:digigaontechnologies@gmail.com?subject=Hello&body=This is a test email" 
  target="_blank" 
  rel="noopener noreferrer"
>
 {text2} </a>):text2}</p>
            {/* <p className="text-sm"></p> */}
          </div>
  )
}

export default ContectCard