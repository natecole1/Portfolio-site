'use client'
import React, {useRef} from 'react';
import Image from 'next/image'
import { techStackIcons } from '../constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';



const TechStackGallery = () => {
    const movingContainerRef = useRef(null);

    useGSAP(() => {
        const infiniteTimeline = () => {
            

            gsap.set(movingContainerRef.current, {
                xPercent: 100
            })
            gsap.timeline({
                defaults: { ease: 'none', repeat: -1}
            })
            .to(movingContainerRef.current, {
                xPercent: -100,
                duration: 10,
            })
            .set(movingContainerRef, {x:0})
        }
        infiniteTimeline();
    })



  return (
    <div className="bg-black w-full gap-6 p-4 hidden md:flex flex-col">
      <div className="w-30 md:w-40 flex items-center justify-center p-4 border-2 rounded-full text-white">
        <h1 className=" ">Tech Stack</h1>
      </div>
      <div  className="w-full md:w-[90%] flex items-center m-auto my-36 xl:my-58 justify-center gap-10 overflow-hidden">
        {
             techStackIcons.map((icon, index) => {
          return (
            <div key={index}>
              <Image
                src={icon.imageUrl}
                alt="Tech Icons"
                width={60}
                height={60}
                className='object-contain'
              />
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default TechStackGallery