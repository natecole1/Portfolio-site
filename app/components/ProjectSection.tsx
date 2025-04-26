'use client'
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../constants';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import 'swiper/css/navigation';


const ProjectSection = () => {

  return (
    <div id="projects" className="w-full flex flex-col gap-10 p-4 py-15 2xl:py-30 bg-[url('/assets/glowing-hexagon-pattern.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col justify-start ">
        <div className="w-30 md:w-40 flex items-center justify-center p-4 border-2 rounded-full text-white">
          <h1 className="">Projects</h1>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <Swiper
          slidesPerView={1}
          className='w-full sm:w-[90%]' 
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {projects.map(({imageUrl, projectTitle, projectWebLink}) => {
            return(
              <SwiperSlide key={projectTitle}>
                <ProjectCard 
                  imageUrl={imageUrl}
                  projectTitle={projectTitle}
                  projectWebLink={projectWebLink}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
        
      </div>
    </div>
  );
}

export default ProjectSection