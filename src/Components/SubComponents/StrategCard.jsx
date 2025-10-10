import React, { useEffect } from 'react'
import { motion, useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StrategCard = ({image,title,description,accent}) => {
 const [ref,inView]=useInView({triggerOnce:true,threshold:0.3,})
 
 const imgy=useMotionValue(-100);
 const imgOpacity=useMotionValue(0);
 const imageScale=useMotionValue(0.8);
 const imgYSpring=useSpring(imgy,{ stiffness: 200, damping: 10 })
 const imgOpacitySpring=useSpring(imgOpacity,{stiffness:200,damping:20});
 const imgScaleSpring = useSpring(imageScale, { stiffness: 250, damping: 12 });

 useEffect(()=>{
  if(inView){
 imgy.set(0);
 imgOpacity.set(1);
 imageScale.set(1);
  }
 },[inView,imgy,imgOpacity,imageScale]);
 

  return (
      <div className="flex flex-col items-center">
                <motion.div
                ref={ref}
                   style={{ y: imgYSpring, opacity: imgOpacitySpring, scale: imgScaleSpring }}
                 className={`bg-white  rounded-full border-solid border-2 ${accent} w-20 h-20 flex justify-center items-center mb-4`}>
                  <img className='p-2' src={image} alt="" />
                </motion.div>
                <h4 className={`font-semibold ${accent} text-lg mb-2`}>{title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{description}
                </p>
              </div>
  )
}

export default StrategCard