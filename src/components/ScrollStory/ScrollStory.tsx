import React, { useRef, useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import { STORY_SECTIONS } from '../../utils/constants';
import MorphingSVG from './MorphingSVG';
import Section from './Section';
import type { MorphingSVGRef} from '../../types'; 

const ScrollStory = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

   const morphingSVGRef = useRef<MorphingSVGRef | null>(null);
  const fixedSVGRef = useRef(null);

  useEffect(() => {
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSectionEnter = (index:number) => {
    setCurrentSectionIndex(index);
    
    // SVG Morphing
    if (morphingSVGRef.current && morphingSVGRef.current.morphTo) {
      const section = STORY_SECTIONS[index];
      if (section) {
        morphingSVGRef.current.morphTo(section.toShape);
      }
    }
  };

  return (
<div className="relative">
      {/* Fixed SVG */}
      <div 
        ref={fixedSVGRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 pointer-events-none"
      >
        <MorphingSVG
          ref={morphingSVGRef}
          currentShape={STORY_SECTIONS[currentSectionIndex]?.fromShape}
          nextShape={STORY_SECTIONS[currentSectionIndex]?.toShape}
          className={`animate-pulse-slow ${STORY_SECTIONS[currentSectionIndex]?.textColor}`}
        />
      </div>

      {/* Story Sections */}
      {STORY_SECTIONS.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          bgColor={section.bgColor}
          textColor={section.textColor}
          onEnter={() => handleSectionEnter(index)}
          bgImage={section.bgImage}   // <-- add this
        >
          <h2 className="text-5xl md:text-8xl mb-8 md:mb-12 text-white">
            {section.title}
          </h2>
          <div className="flex flex-row gap-6 text-white w-fit mx-auto">
            <div className="w-2 shrink-0 fill-brand-pink pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 8.928 19.332">
                <path id="colon" d="M2.376-4.14A4.435,4.435,0,0,0,6.912.216,4.4,4.4,0,0,0,11.3-4.14,4.457,4.457,0,0,0,6.912-8.532,4.488,4.488,0,0,0,2.376-4.14Zm0-10.584a4.435,4.435,0,0,0,4.536,4.356A4.4,4.4,0,0,0,11.3-14.724a4.457,4.457,0,0,0-4.392-4.392A4.488,4.488,0,0,0,2.376-14.724Z" transform="translate(-2.376 19.116)"></path>
              </svg>
            </div>
            <p className="text-white text-lg md:text-xl font-bold">{section.subtitle}</p>
          </div>
          
          {index === 0 && (
            <div className="mt-12 md:mt-20 flex items-center justify-center">
              <a href="#innovation" className="text-center flex h-14 flex-row items-center gap-2 rounded-full bg-brand-blue py-3 px-8 font-normal text-white shadow-md transition ease-in-out active:scale-95 md:hover:bg-brand-darkblue">
                Start the Journey
              </a>
            </div>
          )}
        </Section>
      ))}
    </div>
  );
};

export default ScrollStory;