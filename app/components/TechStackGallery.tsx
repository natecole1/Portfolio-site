'use client'
import React from 'react';
import Image from 'next/image'
import { techStackIcons } from '../constants';




const TechStackGallery = () => {
    


  return (
    <div className="bg-[#09090b]/[0.9] w-full gap-6 p-4 hidden md:flex flex-col">
      <div className="w-30 md:w-40 flex items-center justify-center p-4 border-2 rounded-full text-white">
        <h1 className=" ">Tech Stack</h1>
      </div>
      <div className="w-full md:w-[90%] flex items-center m-auto my-36 xl:my-58 justify-center gap-10 overflow-hidden">
        {techStackIcons.map((icon, index) => {
          return (
            <div key={index}>
              <Image
                src={icon.imageUrl}
                alt="Tech Icons"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStackGallery