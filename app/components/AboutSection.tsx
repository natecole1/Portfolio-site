'use client'
import React, {useEffect} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import  SplitType  from 'split-type'


const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  let text: SplitType;

  useEffect(() => {
     text = new SplitType("#quote");
    console.log(text);

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
      stagger: 0.2
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
    <div id="about" className="w-full flex flex-col bg-black p-4 xl:py-20">
      <div className="w-30 md:w-40 flex items-center justify-center p-4 border-2 rounded-full text-white">
        <h1 >About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className=" w-full h-[550px] lg:w-[50%] flex justify-center items-center p-10">
          <p  id="quote" className=" text-white md:text-[30px] 2xl:text-[40px]">
            
            An innovative problem-solver with a passion for building cool
            things. I enjoy discovering new technologies to see what I can build
            with them. Over the past three years, I&apos;ve been immersed in the
            JavaScript universe: working in React and taking advantage of
            Next.js&apos;s optimization features. Let&apos;s work together to
            create a captivating digital experience.
          </p>
        </div>
        <div id="image" className="w-full lg:w-[50%] mb-10 flex justify-center items-center">
          <Image
            src={"/assets/javascriptCode.png"}
            alt="Javascript Code Snippet"
            width={300}
            height={500}
            className="rounded-lg w-60 h-72 md:w-[300px] md:h-[500px]"
            
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection