import React from 'react'
import { Link } from 'react-router-dom'
import { motion, } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Scard = ({imageUr,title,description,index }) => {
     const [ref, inView] = useInView({ triggerOnce: true,threshold: 0.3 });
    const cardVariants = {
    hidden: { x: -100, opacity: 0 }, // slide from left/right
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 320, 
        damping: 15, 
        delay: index* 0.3 // stagger by index
      },
      
    },
  };

  return (

   <>
   <Link to={"/services"} onClick={()=>window.scrollTo(0,0)} >
    <motion.div ref={ref} variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex hover:scale-120   hover:shadow-2xl flex-col items-center text-center">
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
          </motion.div>
   </Link>
   </>
  )
}

export default Scard