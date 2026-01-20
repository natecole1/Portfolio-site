'use client'
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../constants';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow }from "swiper/modules";


import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';


const ProjectSection = () => {

  return (
    <div
      id="projects"
      className="w-full flex flex-col gap-10 my-10 px-6 md:px-14"
    >
      <div className="flex flex-col">
        <div className="w-full flex justify-center text-[#EDD76B] mb-10">
          <h1 className="text-[#edd76b] text-[20px] md:text-[25px] lg:text-[40px] 2xl:text-[50px] uppercase">
            Projects
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          slidesPerView={2}
          className="max-w-full lg:max-w-[70%] 2xl:max-w-[60%] m-auto"
          navigation={false}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          loop={true}
          modules={[EffectCoverflow]}          
        >
          {projects.map(
            ({ imageUrl, imageUrlMobile, projectTitle, projectWebLink }) => {
              return (
                <SwiperSlide key={projectTitle}>
                  <ProjectCard
                    imageUrl={imageUrl}
                    imageUrlMobile={imageUrlMobile}
                    projectTitle={projectTitle}
                    projectWebLink={projectWebLink}
                  />
                </SwiperSlide>
              );
            },
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectSection