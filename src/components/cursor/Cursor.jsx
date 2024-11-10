import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css'; // Import the CSS file for styling

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      ref={cursorRef}
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      whileHover={{ scale: 2 }}
    />
  );
};

export default CustomCursor;