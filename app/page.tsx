'use client'
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";

import VideoBackground from "./components/VideoBackground";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {

  return (
    <>
      <div className="relative">
        <VideoBackground />  
        <Hero/>
      </div>
      <div>
        <AboutSection />
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
