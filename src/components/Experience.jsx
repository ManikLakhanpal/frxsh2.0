import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, MeshTransmissionMaterial } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import '../output.css';
import { motion } from 'framer-motion-3d';


const ResponsiveText = () => {
  const [fontSize, setFontSize] = useState(1);
  const [geometrySize, setGeometrySize] = useState(1);

  const updateSizes = () => {
    // Calculate sizes based on window dimensions
    const newFontSize = Math.max(0.5, window.innerWidth / 400);

    setFontSize(newFontSize);
  };
  useEffect(() => {
    // Update sizes on window resize
    window.addEventListener('resize', updateSizes);
    updateSizes(); // Initial size calculation

    return () => {
      window.removeEventListener('resize', updateSizes);
    };
  }, []);
  return (
    <>
      <Text
        fontSize={fontSize}
        position={[0, 0, 0]}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        FRXSH
      </Text>
      <mesh position={[0, -2, 0]}>
    
      </mesh>
    </>
  );
}

const onMouseMove = (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
};

const Cube = () => {
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
    <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]} position={[4,-1,0]}>
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

const Donut = () => {
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
    <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]} position={[-4,1,0]} scale={geometrySize/1.5}>
      <torusGeometry args={[1.5,0.5,100,100]} />
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


const CursorLight = () => {
  const lightRef = useRef();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.set(pointer.x * 10, pointer.y * 10, 10);
      lightRef.current.target.position.set(0, 0, 0);
      lightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <directionalLight ref={lightRef} intensity={1} />
  );
};

function TextScene() {
  return (
    <div className='h-screen bg-black w-full'>
    <Canvas>
      <ambientLight color='#fffff' intensity={100}/>
      <Cube />
      <Donut />
      <ResponsiveText/>
    </Canvas>
    </div>
  );
}


export default TextScene;
