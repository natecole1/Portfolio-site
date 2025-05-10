'use client'
import React, {useEffect} from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';

import  SplitType  from 'split-type'

//<div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:10px_10px]"></div>
// <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>

// data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E
// bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] bg-slate-950
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
        markers: false,
      },
      opacity: 0,
      scaleY: 0,
      y: -20,
      transformOrigin: 'top',
      duration: 1,
      stagger: 0.2,
      
    })
    .from('#image', {
      scrollTrigger: {
        trigger: '#image',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: false
      },
      opacity: 0,
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
        <div className=" w-full h-[550px] lg:w-[50%] flex justify-center items-center p-10">
          <p id="quote" className=" text-white md:text-[30px] 2xl:text-[40px]">
             I&apos;m a frontend engineer immersed in the JavaScript universe. There are, of course, several great JavaScript libraries and frameworks: Svelte, Astro, Vue, just to name a few, but I am particularly fond of React. I&apos;ve built some fun things with React, including a "phenomenal" podcast app I built with Next.js. Check it out below. I&apos;m also passionate about quality technical and education content in the community. If you come across something you think I should know about, please feel free to share below. 
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