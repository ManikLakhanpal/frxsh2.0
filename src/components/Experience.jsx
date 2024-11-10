import { Canvas, useFrame } from '@react-three/fiber';
import { Text as DreiText, OrbitControls, MeshTransmissionMaterial } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

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

function TextScene() {
  return (
    <Canvas>
      <Donut />
      <DreiText position={[0, 0, 0]} fontSize={4} color="white">
        FRXSH
      </DreiText>
      <OrbitControls />
    </Canvas>
  );
}



// const pointer = new THREE.Vector2();
// let prevPointer = new THREE.Vector2();

// const onMouseMove = (event) => {
//   pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
//   pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
// };

// const Donut = React.forwardRef((props, ref) => {
//   const meshRef = useRef();

//   useEffect(() => {
//     window.addEventListener('mousemove', onMouseMove);
//     return () => window.removeEventListener('mousemove', onMouseMove);
//   }, []);

//   useFrame(() => {
//     if (meshRef.current) {
//       const deltaX = pointer.x - prevPointer.x;
//       const deltaY = pointer.y - prevPointer.y;

//       // Constant rotation
//       meshRef.current.rotation.y += 0.01;
//       meshRef.current.rotation.x += 0.005;

//       // Rotation based on cursor movement
//       meshRef.current.rotation.y += deltaX * 3;
//       meshRef.current.rotation.x += deltaY * 3;

//       prevPointer.x = pointer.x;
//       prevPointer.y = pointer.y;
//     }
//   });

//   return (
//     <mesh ref={ref || meshRef} rotation={[Math.PI / 2, 0, 0]}>
//       <torusGeometry args={[1.5, 0.6, 200, 100]} />
//       <MeshTransmissionMaterial
//         color="transparent"
//         thickness={0.5}
//         roughness={0.3}
//         transmission={1}
//         ior={1}
//         chromaticAberration={0.5}
//         clearcoat={1}
//         clearcoatRoughness={0}
//         attenuationDistance={0.3}
//         attenuationColor="#aad4e7"
//         anisotropy={1}
//         opacity={0.5}
//       />
//     </mesh>
//   );
// });


// function AnimatedTextComponent() {
//   return (
//     <DreiText
//       position={[0, 0, 2]} // Position the text
//       fontSize={2}
//       color="#ffffff" // Bright white color
//       emissive="#ffffff" // Add emissive property for brightness
//       emissiveIntensity={1} // Adjust the intensity of the emissive property
//       anchorX="center"
//       anchorY="middle"
//     >
//       FRXSH
//     </DreiText>
//   );
// }

// function InteractiveDonut() {
//   const donutRef = useRef();

//   return (
//     <>
//       <Donut ref={donutRef} />
//       <OrbitControls target={[0, 0, 0]} />
//     </>
//   );
// }

// function TextScene() {
//   return (
//     <div className="relative w-full h-full bg-[#121212]">
//       <Canvas
//         className="w-full h-full"
//         gl={{ alpha: true }}
//         style={{ background: 'transparent' }}
//       >
//         <ambientLight intensity={20} />
//         <pointLight position={[10, 10, 10]} />
//         <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
//         {/* <Environment preset="sunset" background={false} /> */}
//         <InteractiveDonut />
//         <AnimatedTextComponent />
//       </Canvas>
//     </div>
//   );
// }

// const pointer = new THREE.Vector2();
// let prevPointer = new THREE.Vector2();

// const onMouseMove = (event) => {
//   pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
//   pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
// };

// const Donut = () => {
//   const meshRef = useRef();

//   useEffect(() => {
//     window.addEventListener('mousemove', onMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', onMouseMove);
//     };
//   }, []);

//   useFrame(() => {
//     if (meshRef.current) {
//       const deltaX = pointer.x - prevPointer.x;
//       const deltaY = pointer.y - prevPointer.y;

//       meshRef.current.rotation.y += 0.01;
//       meshRef.current.rotation.x += 0.005;

//       meshRef.current.rotation.y += deltaX * 3;
//       meshRef.current.rotation.x += deltaY * 3;

//       prevPointer.x = pointer.x;
//       prevPointer.y = pointer.y;
//     }
//   });

//   return (
//     <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
//       <torusGeometry args={[1.5, 0.6, 200, 100]} />
//       <MeshTransmissionMaterial
//         color="transparent"
//         thickness={0.5}
//         roughness={0.3}
//         transmission={1}
//         ior={1}
//         chromaticAberration={0.5}
//         clearcoat={1}
//         clearcoatRoughness={0}
//         attenuationDistance={0.3}
//         attenuationColor="#aad4e7"
//         anisotropy={1}
//         opacity={0.5}
//         transparent={true}
//       />
//     </mesh>
//   );
// };

// function TextScene() {
//   return (
//     <Canvas>
//       <Donut />
//       <Text position={[0, 0, 0]} fontSize={2} color="white">
//         Hello World
//       </Text>
//       <OrbitControls />
//     </Canvas>
//   );
// }

export default TextScene;
