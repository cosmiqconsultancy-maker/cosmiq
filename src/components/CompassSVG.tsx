import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const CompassSVG: React.FC<{ className?: string }> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div style={{ rotate }} className={className}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer Rings */}
        <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
        
        {/* Cardinal Directions */}
        <text x="100" y="25" textAnchor="middle" fill="currentColor" className="text-[14px] font-display font-bold">N</text>
        <text x="100" y="190" textAnchor="middle" fill="currentColor" className="text-[14px] font-display font-bold">S</text>
        <text x="185" y="105" textAnchor="middle" fill="currentColor" className="text-[14px] font-display font-bold">E</text>
        <text x="15" y="105" textAnchor="middle" fill="currentColor" className="text-[14px] font-display font-bold">W</text>

        {/* Vastu Elements (Pancha Bhoota) */}
        <text x="155" y="55" textAnchor="middle" fill="currentColor" className="text-[8px] font-display uppercase tracking-wider opacity-60">Water</text>
        <text x="155" y="155" textAnchor="middle" fill="currentColor" className="text-[8px] font-display uppercase tracking-wider opacity-60">Fire</text>
        <text x="45" y="155" textAnchor="middle" fill="currentColor" className="text-[8px] font-display uppercase tracking-wider opacity-60">Earth</text>
        <text x="45" y="55" textAnchor="middle" fill="currentColor" className="text-[8px] font-display uppercase tracking-wider opacity-60">Air</text>
        <text x="100" y="115" textAnchor="middle" fill="currentColor" className="text-[8px] font-display uppercase tracking-wider opacity-40">Space</text>

        {/* Decorative Ancient Lines */}
        <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
        <line x1="36" y1="36" x2="164" y2="164" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
        <line x1="164" y1="36" x2="36" y2="164" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />

        {/* Needle */}
        <path d="M100 35L112 100L100 165L88 100L100 35Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="0.5" />
        <path d="M100 35L108 100H92L100 35Z" fill="currentColor" />
        <path d="M100 165L92 100H108L100 165Z" fill="currentColor" fillOpacity="0.2" />
        
        <circle cx="100" cy="100" r="3" fill="currentColor" />
        <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </motion.div>
  );
};
