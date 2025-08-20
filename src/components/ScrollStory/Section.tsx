import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import type { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  bgColor, 
  textColor,
  onEnter,
  onLeave,
  className = "",
  bgImage
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (section && content && content.children) {
      // Text Animation
      gsap.fromTo(content.children, 
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section Enter/Leave Callbacks
      if (onEnter || onLeave) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: onEnter,
          onLeave: onLeave,
          onEnterBack: onEnter,
          onLeaveBack: onLeave
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [onEnter, onLeave]);

  const sectionClasses = `min-h-screen flex items-center justify-center relative overflow-hidden snap-mandatory bg-radial ${bgColor} ${className}`;
  const contentClasses = `max-w-4xl mx-auto px-6 text-center z-10 snap-center mb-24 md:mb-72 ${textColor}`;

  return (
    <section
      ref={sectionRef}
      id={id}
      className={sectionClasses}
      style={
      bgImage
        ? {
            backgroundImage: `radial-gradient(rgba(1,41,63,0.6), rgba(1,41,63,0.9)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : {}
}
    >
      <div 
        ref={contentRef}
        className={contentClasses}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;