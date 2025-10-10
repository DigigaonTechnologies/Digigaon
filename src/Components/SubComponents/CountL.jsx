import React from 'react'

const CountL = ({id,title,accent}) => {
    const isEven = id % 2 === 0;
  return (
    <div className={`flex relative justify-center items-center ${isEven?"flex-row-reverse":"flex-row"} `}>
        <h1 className={`text-[18vw] font-bold tracking-[-2px] md:tracking-[-15px] ${accent}`} >{id}</h1>
        <h3 className={` relative text-[5vw]  ${isEven?"left-[3vw] top-5":" left-[-6vw] top-5 "}  font-semibold tracking-normal`} >
            {title}
        </h3>
    </div>
  )
}

export default CountL