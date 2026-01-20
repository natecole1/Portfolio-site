
import React from 'react';
import Typewriter from 'typewriter-effect';


const AboutSection = () => {
 
    
  return (
    <div className="w-full grid grid-cols-1 my-4">
      <div className=" w-full md:w-4/5 xl:w-3/5 h-[150lvh] md:h-lvh lg:h-[150lvh] 2xl:h-[110lvh] text-white px-8 m-auto overflow-auto">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3000)
              .typeString(" <h1>A Bit About Me</h1>")
              .typeString(
                ' <p className="mb-4">I am an endlessly curious developer with a knack for creative application of new technologies to web development. My journey in tech began with a curiosity for how the web worked, leading me to explore JavaScript and some of its frameworks.</p>',
              )
              .typeString(
                '<p className="mb-4">Over the years, I&apos;ve honed my skills in front-end development, and kept abreast of the latest technologies. I thrive in a collaborative environment where I can contribute to innovative projects and solve complex problems.</p>',
              )
              .typeString(
                " <p>When I&apos;m not coding, you can find me listening to podcasts of various genres, or indulging in my love for cooking and sports.</p>",
              )
              .typeString("<h1>Expertise</h1>")
              .typeString(
                "<ul> \n \
                      <li>\n \
                        Proficiency in TypeScript, Next.js, and Tailwind \n \
                      </li>\n \
                      <li> \n \
                        Experience with AI/ML integration using Langchain and Langgraph frameworks \n \
                      </li> \n \
                      <li> \n \
                        Skilled at prototyping and iteration of AI agentic workflows \n \
                      </li> \n \
                      <li> \n \
                        Deep knowledge of responsive web design and UI/UX principles \n \
                      </li>\n \
                      <li>\n \
                        Familiarity with backend technologies and databases \n \
                      </li>\n \
                      <li>\n \
                        Strong technical problem-solving and analytical skills \n \
                      </li>\n \
                      <li>\n \
                        Ability to communicate complex technical materials to both technical and non-technical audience\n \
                      </li>\n \
                    </ul> \n \
                  ",
              )
              .start();
          }}
          options={{
            wrapperClassName: "typewriter-text",
            cursorClassName: "typewriter-cursor",
            delay: 5,
          }}
        />
      </div>
    </div>
  );
}

export default AboutSection