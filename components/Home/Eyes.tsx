"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { isMobile } from "../../lib/isMobile";

const Eye = ({ position }: { position: [number, number, number] }) => {
  const isLeft = position[0] < 0;
  const irisGroupRef = useRef<THREE.Group>(null);
  const irisMeshRef = useRef<THREE.Mesh>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (!irisGroupRef.current) return;
    const iris = irisGroupRef.current;

    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;

    iris.position.x = Math.atan2(x, 0.5);
    iris.position.y = Math.atan2(y, 0.5);
  };

  useEffect(() => {
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

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}

export const Eyes = () => {
  const [orientation, setOrientation] = useState<string>("undefined");

  const deviceOrientationEvent =
    window.DeviceOrientationEvent as unknown as DeviceOrientationEventiOS;

  const requestPermissionSafari = () => {
    if (
      deviceOrientationEvent !== undefined &&
      typeof deviceOrientationEvent.requestPermission === "function"
    ) {
      deviceOrientationEvent.requestPermission().then((state) => {
        if (state === "granted") {
          window.addEventListener("deviceorientation", (event) => {
            setOrientation(
              `${event.absolute}, ${event.alpha}, ${event.beta}, ${event.gamma}`,
            );
          });
        } else if (state === "denied") {
          alert("denied");
        }
      });
    } else {
      window.addEventListener("deviceorientation", (event) => {
        setOrientation(
          `${event.absolute}, ${event.alpha}, ${event.beta}, ${event.gamma}`,
        );
      });
    }
  };

  useEffect(() => {
    if (!isMobile) return;

    requestPermissionSafari();
  });

  return (
    <div>
      <Canvas shadows camera={{ position: [0, 0, 24], fov: 40 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} />
        <Eye position={[-4.5, 0, 1]} />
        <Eye position={[4.5, 0, 1]} />
      </Canvas>
      <span className="text-black">{orientation}</span>
    </div>
  );
};
