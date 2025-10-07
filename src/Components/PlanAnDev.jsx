import React from 'react'

const PlanAnDev = ({id,title, description,accent, image}) => {
   
   const isEven = id % 2 === 0;

  return (
    <div
      className={`flex relative bg-[#c4c4c43d] ${isEven?"rounded-r-4xl border-l-0":"rounded-l-4xl border-r-0"} px-[2vw] py-[3vw] top-2 items-center gap-8 max-w-5xl mx-auto ${
        isEven ? "flex-row-reverse" : "flex-row"
      } ${accent} border shadow-[0_8px_12px_rgba(0,0,0,0.5)] my-10`}>
      {/* Image */}
      <div className="w-[10vw] h-[10vw] hover:scale-120 transition-transform duration-250 ease-in-out rounded-full overflow-hidden shadow-lg border-2   flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className=" p-6  w-[50%] flex-1">
        <p className="text-gray-300 text-start text-[1.4vw] w-[110%]">{description}</p>
      </div>
    </div>
  );
}

export default PlanAnDev