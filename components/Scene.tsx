"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HumanModel from "./HumanModel";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.4, 3.2], fov: 35 }}>
      
      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <HumanModel />

      <OrbitControls />

    </Canvas>
  );
}