import { motion } from "framer-motion";
import React from "react";

const AnimatedText = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}  // start slightly below + invisible
      animate={{ opacity: 1, y: 0 }}   // move to normal position + fully visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedText;