'use client'
import React from 'react'
import { useEffect, useState } from 'react';

const Footer = () => {
  const year = new Date().getFullYear()
  const [ currentYear, setCurrentYear ] = useState(year);

  useEffect(() => {
    setCurrentYear(year)
  }, [year]);

  return (
    <div className="w-full h-15 xl:h-20 flex justify-center items-end p-4 bg-[#09090b]/[0.9]">
      <p className="text-white text-xs text-center">
        Copyright © {currentYear}. All rights reserved. Inspired by{" "}
        <a href="https://agustinburgos.com/" className="hover:text-yellow-200">
          Agustin Burgos
        </a>
        .
      </p>
    </div>
  );
}

export default Footer