import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition2, setCursorPosition2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition2({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <motion.div
      className="custom-cursor"
      ref={cursorRef}
      animate={{ x: cursorPosition.x, y: cursorPosition.y }}
      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      whileHover={{ scale: 2 }}
      onClick={{}}
    />
    <motion.div
      className="custom-cursor2"
      ref={cursorRef}
      animate={{ x: cursorPosition2.x, y: cursorPosition2.y }}
      transition={{ type: 'spring', stiffness: 500, damping:60 }}
      whileHover={{ scale: 2 }}
      onClick={{}}
    />
    </>
  );
};

export default CustomCursor;