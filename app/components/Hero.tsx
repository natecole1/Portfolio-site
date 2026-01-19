
import React from 'react';
import { motion } from 'motion/react'

const Hero = () => {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.h1 
       initial= {{ scale: 0}}
       animate= {{ scale: 1}}
       transition= {{ duration: 1, ease: "easeIn", delay: 0.5}}
       className=" text-white font-bold text-4xl xl:text-6xl">
        NATE COLE
      </motion.h1>
      <motion.div 
       initial={{ width: "0%" }}
       animate={{ width: "70%" }}
       transition={{ duration: 1, ease: "easeIn", delay: 1 }}
       className="bg-[#edd76b] h-1 my-6 z-500 animate-scale-two" 
      />
      <motion.h1 
       initial= {{ scale: 0}}
       animate= {{ scale: 1}}
       transition= {{ duration: 1, ease: "easeIn", delay: 1.5}}
       className="text-white text-3xl text-center  animate-scale-three">
        Frontend Engineer
      </motion.h1>
    </div>
  );
}

export default Hero;
