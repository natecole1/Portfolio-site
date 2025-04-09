import React from 'react';
import ProjectCard from './ProjectCard';


const ProjectSection = () => {
  return (
    <div className="w-full flex flex-col gap-10 p-4 py-15 2xl:py-30 bg-[url('/assets/glowing-hexagon-pattern.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col justify-start ">
        <div className="w-30 md:w-40 flex items-center justify-center p-4 border-2 rounded-full text-white">
          <h1 className="">Projects</h1>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <ProjectCard 
          imageUrl={"/assets/podcastingApp.png"} 
          projectTitle={"PODCASTING"} 
          projectWebLink='https:podcastingai.vercel.app'
        />
      </div>
    </div>
  );
}

export default ProjectSection