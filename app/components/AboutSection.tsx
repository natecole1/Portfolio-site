'use client'
import React, {useEffect} from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';

import  SplitType  from 'split-type'


const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  
  useEffect(() => {
   const text = new SplitType("#quote");

    const t1 = gsap.timeline();
    t1.from(text.chars, {
      scrollTrigger: {
        trigger: text.chars,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        once: true,
        markers: false,
      },
      opacity: 0,
      scaleY: 0,
      y: -10,
      // transformOrigin: 'top',
      duration: 0.4,
      stagger: 0.2,
    })
    .from('#image', {
      scrollTrigger: {
        trigger: '#image',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        once: true,
        markers: false
      },
      opacity: 0,
      duration: 0.4,
      y: 100
    })
    
  }, [])

  return (
    <div
      id="about"
      className="w-full z-50 bg-[#09090b]/[0.9] flex flex-col  p-4 xl:py-20"
    >
      <div className="w-30 md:w-40 flex items-center justify-center p-4 border-2 rounded-full text-white">
        <h1>About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className=" w-full h-[550px] lg:w-[50%] flex justify-center items-center p-5">
          <p id="quote" className=" text-white text-2xl md:text-3xl lg:text-4xl text-wrap">
            I&apos;m a frontend engineer immersed in the JavaScript ecosystem.
            Over the past few years, I&apos;ve leveraged Next.js optimization
            features to spin up fully responsive and accessible applications,
            including a fullstack podcast app. Check it out below. I&apos;m also
            passionate about discovering quality technical and
            educational content in the tech community.
          </p>
        </div>
        <div
          id="image"
          className="w-full lg:w-[50%] mb-10 flex justify-center items-center"
        >
          <Image
            src={"/assets/javascriptCode.png"}
            alt="Javascript Code Snippet"
            width={300}
            height={500}
            className="rounded-lg w-60 h-68 md:w-[300px] md:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection