import { Canvas, useFrame } from '@react-three/fiber';
import { Text as DreiText, OrbitControls, MeshTransmissionMaterial } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import '../output.css';

const pointer = new THREE.Vector2();
let prevPointer = new THREE.Vector2();

const onMouseMove = (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
};

const Donut = () => {
  const meshRef = useRef();

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Animation: Rotate the donut based on cursor movement and constant rotation
  useFrame(() => {
    if (meshRef.current) {
      const deltaX = pointer.x - prevPointer.x;
      const deltaY = pointer.y - prevPointer.y;

      // Constant rotation
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;

      // // Rotation based on cursor movement
      // meshRef.current.rotation.y += deltaX * 3; // Adjust the multiplier for sensitivity
      // meshRef.current.rotation.x += deltaY * 3; // Adjust the multiplier for sensitivity

      // prevPointer.x = pointer.x;
      // prevPointer.y = pointer.y;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
      <boxGeometry args={[2,2,2]} />
      <MeshTransmissionMaterial
        color="transparent"
        thickness={0.5}
        roughness={0.3}
        transmission={1}
        ior={1}
        chromaticAberration={0.5}
        clearcoat={1}
        clearcoatRoughness={0}
        attenuationDistance={0.3}
        attenuationColor="#aad4e7"
        anisotropy={1}
        opacity={0.5}
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
    <div className='h-screen'>
    <Canvas color='#181C14'>
      <Donut />
      <CursorLight/>
      <DreiText position={[0, 0, 0]} fontSize={4} color="white">
        FRXSH
      </DreiText>
      <OrbitControls />
      <directionalLight/>
    </Canvas>
    </div>
  );
}


export default TextScene;
