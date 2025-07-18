'use client'
import React from 'react'
import { italianno } from '../fonts'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  gsap.registerPlugin(useGSAP);
  const firstText = "FRONT-END";
  const firstTextSplit = firstText.split('')
  
  const secondText = "ENGINEER";
  const secondTextSplit = secondText.split('');

  useGSAP(() => {
    gsap
      .timeline({ ease: "power1.easeInOut" })
      .from(".nameDiv", {
        opacity: 0,
        scale: 0,
      })
      .to(".nameDiv", {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      })
      .to(".letter", {
        opacity: 1,
        stagger: 0.05,
       
      })
      .to(".letter2", {
        opacity: 1,
        stagger: 0.05,
        
      });
      
  })


  return (
    <div className="w-full h-dvh text-white flex flex-col items-center justify-center">
      <div className="  text-center  bg-gradient-to-r from-cyan-600 to-white text-transparent bg-clip-text gap-10">
        <div className="nameDiv opacity-0 scale-0 w-40 md:w-50 flex items-center justify-center p-4 m-auto border-2 border-blue-400 rounded-xl text-white mb-5">
          <h1 className=" text-[18px] md:text-2xl">Nate Cole</h1>
        </div>
     
          <h1
            className={`firstTitleWord  flex text-5xl sm:text-7xl md:text-9xl ${italianno.className} antialiased`}
          >
            {firstTextSplit.map((letter, index) => {
              return(
                <span key={index} className="letter opacity-0">{letter}</span>
              )
            })}
          </h1>
        
       
          <h1 className="secondTitleWord text-2xl sm:text-4xl">
            {secondTextSplit.map((letter, index) => {
              return(
                <span key={index} className='letter2 opacity-0'>{letter}</span>
              )
            })}
          </h1>
       
      </div>
    </div>
  );
}

export default Hero