import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      
      // Calculate rotation based on movement
      const deltaX = e.movementX;
      const deltaY = e.movementY;
      if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
        setRotation(Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      id="custom-cursor"
      style={{
        x,
        y,
        rotate: rotation,
      }}
      className="hidden md:block"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1" opacity="0.5" />
        <path d="M16 4L19 12H13L16 4Z" fill="white" />
        <path d="M16 28L13 20H19L16 28Z" fill="#A67C52" />
        <circle cx="16" cy="16" r="2" fill="white" />
      </svg>
    </motion.div>
  );
};
