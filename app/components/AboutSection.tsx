'use client'
import React from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react';

const AboutSection = () => {
  // const mySplitText = SplitType.create('.quote')
  // console.log(mySplitText);

  return (
    <div id="about" className="w-full flex flex-col bg-black p-4 xl:py-20">
      <div className="w-30 md:w-40 flex items-center justify-center p-4 border-2 rounded-full text-white">
        <h1 className=" quote2">About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className=" w-full h-[550px] lg:w-[50%] flex justify-center items-center p-10">
          <p className="quote text-white xl:text-2xl">
            {" "}
            An innovative problem-solver with a passion for building cool
            things. I enjoy discovering new technologies to see what I can build
            with them. Over the past few years, I&apos;ve been immersed in the
            JavaScript universe: working in React and taking advantage of
            Next.js&apos;s optimization features. Let&apos;s work together to
            create a captivating digital experience.
          </p>
        </div>
        <div className="w-full lg:w-[50%] mb-10 flex justify-center items-center">
          <Image
            src={"/assets/javascriptCode.png"}
            alt="Javascript Code Snippet"
            width={300}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection