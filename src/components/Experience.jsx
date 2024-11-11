import { Canvas, useFrame } from '@react-three/fiber';
import { Text, MeshTransmissionMaterial } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import '../output.css';

const ResponsiveText = () => {
  const [fontSize, setFontSize] = useState(1);

  const updateSizes = () => {
    const newFontSize = Math.max(0.5, window.innerWidth / 400);
    setFontSize(newFontSize);
  };

  useEffect(() => {
    window.addEventListener('resize', updateSizes);
    updateSizes(); // Initial size calculation

    return () => {
      window.removeEventListener('resize', updateSizes);
    };
  }, []);

  return (
    <Text
      fontSize={fontSize}
      position={[0, 0.5, 0]}
      color="#ffffff"
      emissiveIntensity={5}
      emissive="#ffffff"
      anchorX="center"
      anchorY="middle"
    >
      FRXSH
    </Text>
  );
};

const Cube = ({ isMobile }) => {
  const meshRef = useRef();
  const [geometrySize, setGeometrySize] = useState(Math.max(1, window.innerWidth / 900));

  useEffect(() => {
    const handleResize = () => {
      setGeometrySize(Math.max(1, window.innerWidth / 1000));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[Math.PI / 2, 0, 0]}
      position={isMobile ? [1, -0.2, 0] : [4.5, -0.2, 0]} // Adjust position for mobile view
    >
      <boxGeometry args={[geometrySize, geometrySize, geometrySize]} />
      <MeshTransmissionMaterial
        color="white"
        thickness={0.5}
        roughness={0.3}
        transmission={1}
        ior={1}
        chromaticAberration={0.5}
        clearcoat={1}
        clearcoatRoughness={0}
        attenuationDistance={0.3}
        attenuationColor="#aad4e7"
      />
    </mesh>
  );
};

const Donut = ({ isMobile }) => {
  const meshRef = useRef();
  const [geometrySize, setGeometrySize] = useState(Math.max(1, window.innerWidth / 900));

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setGeometrySize(Math.max(1, window.innerWidth / 1000));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <mesh
      ref={meshRef}
      rotation={[Math.PI / 2, 0, 0]}
      position={isMobile ? [-1, 1.2, 0] : [-4, 1, 0]}
      scale={geometrySize / 1.5}
    >
      <torusGeometry args={[1.2, 0.5, 100, 100]} />
      <MeshTransmissionMaterial
        color="white"
        thickness={0.5}
        roughness={0.3}
        transmission={1}
        ior={1}
        chromaticAberration={0.5}
        clearcoat={1}
        clearcoatRoughness={0}
        attenuationDistance={0.3}
        attenuationColor="#aad4e7"
      />
    </mesh>
  );
};

function TextScene() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen bg-black w-full">
      <Canvas>
        <ambientLight color="#ffffff" intensity={1} />
        <Cube isMobile={isMobile} />
        <Donut isMobile={isMobile} />
        <ResponsiveText />
      </Canvas>
    </div>
  );
}

export default TextScene;
