'use client'
import React, { useRef } from 'react'
import { italianno } from '../fonts'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  gsap.registerPlugin(useGSAP);
  const containerRef = useRef(null);
  

  useGSAP(() => {
    gsap.fromTo(containerRef.current, 
      {
        y:10,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        duration: 1.5,
        ease: 'power1.in'
      }
    )
  },)

  return (
    <div className="w-full h-dvh text-white flex flex-col items-center justify-center">
      <div
        ref={containerRef}
        className="opacity-0 text-center bg-gradient-to-r from-cyan-600 to-white text-transparent bg-clip-text gap-10"
      >
        <div className="w-40 md:w-50 flex items-center justify-center p-4 m-auto border-2 border-blue-400 rounded-xl text-white">
          <h1 className=" text-[18px] md:text-2xl">Nate Cole</h1>
        </div>
        <div>
          <h1
            className={` flex text-5xl sm:text-7xl md:text-9xl ${italianno.className} antialiased`}
          >
            FRONT-END
          </h1>
        </div>
        <div>
          <h1 className="text-2xl sm:text-4xl">ENGINEER</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero