import React from 'react';
import Link from 'next/link';

import { Picture, Source, Img } from 'next-image-plus'

type ProjectCardProps = {
  imageUrl: string,
  imageUrlMobile: string,
  projectTitle: string
  projectWebLink: string
}

const ProjectCard = ({imageUrl, imageUrlMobile, projectTitle, projectWebLink}: ProjectCardProps) => {
  return (
    <div className="w-[200px] h-[350px] md:w-[400px] md:h-[300px] m-auto rounded-lg">
      <Link href={projectWebLink}>
        <div className="w-full h-full flex flex-col justify-center items-center relative ">
          <Picture className="object-fit object-center w-full h-full rounded-xl ">
            <Source 
              src={imageUrl}
              media="(min-width: 32rem)"
              width={400}
              height={300}
            />
            
            <Img 
              src={imageUrlMobile}
              alt="project card image"
              width={200}
              height={350}
            />
          </Picture>
          <div className="w-full h-full flex flex-col items-center justify-center absolute inset-o bg-black/[0.8] opacity-0 hover:opacity-100 transition-all duration-400 cursor-pointer rounded-xl">
            <h2 className="text-[#edd76b] md:text-[30px] font-bold uppercase">
              {projectTitle}
            </h2>
            <p className="text-white text-[18px] md:text-[25px]">website</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard