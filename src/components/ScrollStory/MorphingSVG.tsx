import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { gsap } from '../../utils/gsapConfig';
import { getShapePath } from '../../assets/svg/shapes';
import type { MorphingSVGProps, MorphingSVGRef } from '../../types';

const MorphingSVG = forwardRef<MorphingSVGRef, MorphingSVGProps>(
  ({ currentShape, className = "" }, ref) => {
    const pathRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (pathRef.current && currentShape) {
        const currentPath = getShapePath(currentShape);
        gsap.set(pathRef.current, { attr: { d: currentPath } });
      }
    }, [currentShape]);

    const morphTo = (targetShape: string): void => {
      if (pathRef.current) {
        const targetPath = getShapePath(targetShape);
        
        gsap.to(pathRef.current, {
          duration: 1.5,
          ease: 'power2.inOut',
          morphSVG: {
            shape: targetPath,
            shapeIndex: "auto"
          }
        });
      }
    };

    useImperativeHandle(ref, () => ({
      morphTo
    }));

    const containerClasses = `flex items-center justify-center opacity-95 ${className}`;

    return (
      <div 
        ref={containerRef}
        className={containerClasses}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <path
            ref={pathRef}
            className="fill-current transition-colors"
          />
        </svg>
      </div>
    );
  }
);

MorphingSVG.displayName = 'MorphingSVG';

export default MorphingSVG;