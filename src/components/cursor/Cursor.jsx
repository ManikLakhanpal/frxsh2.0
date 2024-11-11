import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX - 10, y: event.clientY -80 });
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
      onClick={{}}
    />
  );
};

export default CustomCursor;