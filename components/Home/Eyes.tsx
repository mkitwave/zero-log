"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { checkIsMobile } from "../../lib/isMobile";
import { Eye } from "./Eye";

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}

export const Eyes = () => {
  const [orientation, setOrientation] = useState<string>("undefined");

  useEffect(() => {
    if (!checkIsMobile()) return;

    const deviceOrientationEvent =
      window.DeviceOrientationEvent as unknown as DeviceOrientationEventiOS;

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
  }, []);

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
