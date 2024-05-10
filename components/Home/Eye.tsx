"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Eye = ({ position }: { position: [number, number, number] }) => {
  const isLeft = position[0] < 0;
  const irisGroupRef = useRef<THREE.Group>(null);
  const irisMeshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!irisGroupRef.current) return;
      const iris = irisGroupRef.current;

      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      iris.position.x = Math.atan2(x, 0.5);
      iris.position.y = Math.atan2(y, 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <mesh position={position} castShadow receiveShadow scale={[1.1, 1.8, 1]}>
        <sphereGeometry args={[3.5]} />
        <meshStandardMaterial roughness={0.1} metalness={0.1} color="white" />
      </mesh>
      <group ref={irisGroupRef}>
        <mesh
          ref={irisMeshRef}
          position={[isLeft ? position[0] + 0.5 : position[0] - 0.5, 0, 3.3]}
        >
          <sphereGeometry args={[2, 64, 32]} />
          <meshStandardMaterial
            roughness={0.1}
            metalness={0.1}
            color="#3d3624"
          />
        </mesh>
      </group>
    </>
  );
};
