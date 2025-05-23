'use client'
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";

import VideoBackground from "./components/VideoBackground";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechStackGallery from "./components/TechStackGallery";
import Nav from "./components/Nav";


export default function Home() {

  return (
    <>
      <div className="relative">
        <VideoBackground />  
        <Nav />
        <Hero/>
      </div>
      <div>
        <AboutSection />
        <ProjectSection />
        <TechStackGallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
