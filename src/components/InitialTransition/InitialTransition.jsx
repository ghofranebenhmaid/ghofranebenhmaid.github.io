import React from 'react'
import { motion } from "framer-motion";


const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
    return (
        <motion.div
//   className="absolute z-50 flex items-center justify-center w-full bg-black"
  initial="initial"
  animate="animate"
  variants={blackBox}
  onAnimationStart={() => document.body.classList.add("overflow-hidden")}
  onAnimationComplete={() =>
    document.body.classList.remove("overflow-hidden")
  }
> 
</motion.div>
    )
}

export default InitialTransition
