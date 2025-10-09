import React from 'react'
import { useEffect } from 'react';
import { motion,useAnimation, useSpring, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PlanAnDev = ({id,title, description,accent, image}) => {
 const isEven = id % 2 === 0;
    const [ref, inView] = useInView({ triggerOnce: true,
  threshold: 0.3, });

  // Parent card motion
  const cardX = useMotionValue(isEven ? -120 : 120);
  const cardOpacity = useMotionValue(0);
  const cardXSpring = useSpring(cardX, { stiffness: 90, damping: 20 });
  const cardOpacitySpring = useSpring(cardOpacity, { stiffness: 120, damping: 20 });

  // Image motion
  const imgX = useMotionValue(isEven ? -300 : 300);
  const imgOpacity = useMotionValue(0);
  const imgScale = useMotionValue(0.8);
  const imgXSpring = useSpring(imgX, { stiffness: 100, damping: 10 });
  const imgOpacitySpring = useSpring(imgOpacity, { stiffness: 200, damping: 20 });
  const imgScaleSpring = useSpring(imgScale, { stiffness: 250, damping: 12 });

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      cardX.set(0);
      cardOpacity.set(1);

      imgX.set(0);
      imgOpacity.set(1);
      imgScale.set(1);
    }
  }, [inView, cardX, cardOpacity, imgX, imgOpacity, imgScale]);


  return (
   <motion.div
      ref={ref}
      style={{ x: cardXSpring, opacity: cardOpacitySpring, }}
      className={`flex relative bg-[#c4c4c43d] ${
        isEven ? "rounded-r-4xl border-l-0" : "rounded-l-4xl border-r-0"
      } px-[2vw] py-[3vw] top-2 items-center gap-8 max-w-5xl mx-auto ${
        isEven ? "flex-row-reverse" : "flex-row"
      } ${accent} border shadow-[0_8px_12px_rgba(0,0,0,0.5)] my-10`}
    >
      {/* Image with spring bounce */}
      <motion.div
        style={{ x: imgXSpring, opacity: imgOpacitySpring, scale: imgScaleSpring }}
        className="w-[10vw] h-[10vw] rounded-full overflow-hidden shadow-lg border-2 flex-shrink-0"
      >
        <img src={image} alt={title} className="w-full hover:scale-110 transition-all h-full object-cover" />
      </motion.div>

      {/* Text sliding in with spring */}
      <motion.div
        initial={{ x: isEven ?-100 : 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 }}
        className="p-6 w-[50%] flex-1"
      >
        <p className="text-gray-300 text-start text-[1.4vw] w-[110%]">{description}</p>
      </motion.div>
    </motion.div>
  );
}

export default PlanAnDev