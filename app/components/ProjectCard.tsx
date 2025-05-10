import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  imageUrl: string,
  projectTitle: string
  projectWebLink: string
}

const ProjectCard = ({imageUrl, projectTitle, projectWebLink}: ProjectCardProps) => {
  return (
    <div className="w-[300px] h-[500px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] m-auto rounded-lg">
      <Link href={projectWebLink}>
        <div className="w-full h-full flex flex-col justify-center items-center relative ">
          <Image
            src={imageUrl}
            alt="project card image"
            width={300}
            height={500}
            className="object-cover object-center w-full h-full rounded-xl "
          />
          <div className="w-full h-full flex flex-col items-center justify-center absolute inset-o bg-black/[0.8] opacity-0 hover:opacity-100 transition-all duration-400 cursor-pointer rounded-xl">
            <h2 className="text-yellow-400 text-3xl font-bold">
              {projectTitle}
            </h2>
            <p className="text-white text-[18px]">website</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard