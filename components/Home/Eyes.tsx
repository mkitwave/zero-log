"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Eye = ({ position }: { position: [number, number, number] }) => {
  const { viewport } = useThree();
  const eyeRef = useRef<THREE.Group>(null);

  useFrame(({ mouse }) => {
    if (!eyeRef.current) return;

    const eye = eyeRef.current;

    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    const angleX = Math.atan2(x, 10);
    const angleY = Math.atan2(y, 10);

    eye.position.y = angleY;
    eye.position.x = angleX;
  });

  return (
    <>
      <mesh position={position} castShadow receiveShadow>
        <capsuleGeometry args={[3, 2, 30, 64]} />
        <meshLambertMaterial color="white" />
      </mesh>
      <group ref={eyeRef}>
        <mesh position={[position[0], 0, 3.3]}>
          <sphereGeometry args={[1.4, 64, 32]} />
          <meshLambertMaterial color="black" />
        </mesh>
      </group>
    </>
  );
};

export const Eyes = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 75 }}>
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} />
      <Eye position={[-4, 0, 1]} />
      <Eye position={[4, 0, 1]} />
    </Canvas>
  );
};
