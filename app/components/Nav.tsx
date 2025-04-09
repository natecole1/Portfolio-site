'use client'
import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { NavLinks } from '../constants'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Nav = () => {
  gsap.registerPlugin(useGSAP);

  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current, 
      {
        opacity:0,
        y:-100,
      },
      
      {
      opacity:1,
      y:0,
      duration:1.5,
      ease:'back.in'
    })
  })

  return (
    <div ref={containerRef} className='w-full flex p-4 opacity-0  justify-end items-center'>
      
      <div>
        <div className='flex md:hidden text-white cursor-pointer'>
          <RiMenu3Fill size={34}/>
        </div>
        <div className='hidden md:flex items-center justify-center gap-5 text-white'>
          {
            NavLinks.map((navLink) => {
              return (
                <div
                  key={navLink.label}
                  className="text-[25px] md:text-[35px] cursor-pointer"
                >
                  <h2>{navLink.label}</h2>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Nav