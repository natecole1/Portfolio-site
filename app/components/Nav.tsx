'use client'
import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { navLinks } from '../constants'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  gsap.registerPlugin(useGSAP);

  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current, 
      {
        opacity:0,
        y:-50,
      },
      
      {
      opacity:1,
      y:0,
      duration:1,
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
            navLinks.map((navLink) => {
              return (
                <Link
                  to={navLink.label.toLowerCase()}
                  duration={700}
                  smooth={true}
                  key={navLink.label}
                  className="text-[25px] md:text-[35px] cursor-pointer"
                >
                  <h2>{navLink.label}</h2>
                </Link>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Nav